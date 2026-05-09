/**
 * Community cloud data layer.
 * - Uses Supabase when configured.
 * - Falls back gracefully when config is missing.
 * - Keeps page-level interaction code simple by exposing post/activity/report helpers.
 */
(function () {
  "use strict";

  var TABLES = {
    posts: "community_posts",
    activity: "community_activity",
    reports: "community_reports"
  };

  var cachedClient = null;

  function getConfig() {
    var config = window.CLWSupabaseConfig || null;
    if (!config || typeof config !== "object") return null;
    return {
      url: String(config.url || "").trim(),
      anonKey: String(config.anonKey || "").trim(),
      schema: String(config.schema || "public").trim() || "public"
    };
  }

  function isConfigured() {
    var config = getConfig();
    return !!(config && config.url && config.anonKey && window.supabase && typeof window.supabase.createClient === "function");
  }

  function getClient() {
    if (cachedClient) return cachedClient;
    if (!isConfigured()) return null;
    var config = getConfig();
    cachedClient = window.supabase.createClient(config.url, config.anonKey, {
      db: { schema: config.schema || "public" },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      },
      global: {
        headers: { "x-clw-app": "community" }
      }
    });
    return cachedClient;
  }

  function cloneJson(value, fallback) {
    if (value == null) return fallback;
    if (Array.isArray(value)) return value.slice();
    if (typeof value === "object") return Object.assign({}, value);
    return fallback;
  }

  function mapPostRow(row) {
    if (!row || typeof row !== "object") return null;
    return {
      id: String(row.id || ""),
      author: String(row.author || "Guest"),
      content: String(row.content || ""),
      tag: String(row.tag || "#Accessibility"),
      colorHex: String(row.color_hex || "#2b78e4"),
      paletteHexes: Array.isArray(row.palette_hexes) ? row.palette_hexes.slice() : [],
      includePalette: row.include_palette !== false,
      includeImage: !!row.include_image,
      imageDataUrl: String(row.image_data_url || ""),
      likes: Math.max(0, Number(row.likes || 0)),
      likedBy: Array.isArray(row.liked_by) ? row.liked_by.slice() : [],
      pointsAwarded: Math.max(0, Number(row.points_awarded || 0)),
      createdAt: row.created_at ? String(row.created_at) : new Date().toISOString(),
      origin: String(row.origin || "community"),
      originMeta: cloneJson(row.origin_meta, {}),
      featured: !!row.featured
    };
  }

  function toPostRow(post) {
    return {
      id: String(post.id || ""),
      author: String(post.author || "Guest"),
      content: String(post.content || ""),
      tag: String(post.tag || "#Accessibility"),
      color_hex: String(post.colorHex || "#2b78e4"),
      palette_hexes: Array.isArray(post.paletteHexes) ? post.paletteHexes.slice() : [],
      include_palette: post.includePalette !== false,
      include_image: !!post.includeImage,
      image_data_url: String(post.imageDataUrl || ""),
      likes: Math.max(0, Number(post.likes || 0)),
      liked_by: Array.isArray(post.likedBy) ? post.likedBy.slice() : [],
      points_awarded: Math.max(0, Number(post.pointsAwarded || 0)),
      created_at: post.createdAt ? String(post.createdAt) : new Date().toISOString(),
      origin: String(post.origin || "community"),
      origin_meta: cloneJson(post.originMeta, {}),
      featured: !!post.featured
    };
  }

  function mapActivityRow(row) {
    if (!row || typeof row !== "object") return null;
    return {
      id: row.id ? String(row.id) : "",
      source: String(row.source || "community"),
      username: String(row.username || ""),
      pointsDelta: Number(row.points_delta || 0),
      type: String(row.type || "post"),
      refId: String(row.ref_id || ""),
      createdAt: row.created_at ? String(row.created_at) : new Date().toISOString()
    };
  }

  function toActivityRow(entry) {
    return {
      source: String(entry && entry.source ? entry.source : "community"),
      username: String(entry && entry.username ? entry.username : ""),
      points_delta: Number(entry && entry.pointsDelta ? entry.pointsDelta : 0),
      type: String(entry && entry.type ? entry.type : "post"),
      ref_id: String(entry && entry.refId ? entry.refId : ""),
      created_at: entry && entry.createdAt ? String(entry.createdAt) : new Date().toISOString()
    };
  }

  function toReportRow(entry) {
    return {
      post_id: String(entry && entry.postId ? entry.postId : ""),
      reporter: String(entry && entry.reporter ? entry.reporter : ""),
      created_at: entry && entry.createdAt ? String(entry.createdAt) : new Date().toISOString()
    };
  }

  function buildSkippedResult(fallback) {
    return Promise.resolve({ data: fallback, error: null, skipped: true });
  }

  async function listPosts() {
    var client = getClient();
    if (!client) return buildSkippedResult([]);
    var result = await client.from(TABLES.posts).select("*").order("created_at", { ascending: false });
    return {
      data: Array.isArray(result.data) ? result.data.map(mapPostRow).filter(Boolean) : [],
      error: result.error || null
    };
  }

  async function ensureSeedPosts(seedPosts) {
    var client = getClient();
    if (!client) return buildSkippedResult([]);
    var existing = await client.from(TABLES.posts).select("id").limit(1);
    if (existing.error) return { data: [], error: existing.error };
    if (Array.isArray(existing.data) && existing.data.length) return { data: existing.data, error: null };
    var rows = Array.isArray(seedPosts) ? seedPosts.map(toPostRow) : [];
    if (!rows.length) return { data: [], error: null };
    var inserted = await client.from(TABLES.posts).upsert(rows, { onConflict: "id" }).select("*");
    return {
      data: Array.isArray(inserted.data) ? inserted.data.map(mapPostRow).filter(Boolean) : [],
      error: inserted.error || null
    };
  }

  async function savePost(post) {
    var client = getClient();
    if (!client) return buildSkippedResult(mapPostRow(toPostRow(post)));
    var result = await client.from(TABLES.posts).upsert(toPostRow(post), { onConflict: "id" }).select("*").limit(1);
    var postRow = Array.isArray(result.data) ? result.data[0] : result.data;
    return {
      data: postRow ? mapPostRow(postRow) : null,
      error: result.error || null
    };
  }

  async function deletePost(postId) {
    var client = getClient();
    if (!client) return buildSkippedResult(true);
    var result = await client.from(TABLES.posts).delete().eq("id", String(postId || ""));
    return { data: !result.error, error: result.error || null };
  }

  async function listActivity(limit) {
    var client = getClient();
    if (!client) return buildSkippedResult([]);
    var query = client.from(TABLES.activity).select("*").order("created_at", { ascending: false });
    if (typeof limit === "number" && limit > 0) query = query.limit(limit);
    var result = await query;
    return {
      data: Array.isArray(result.data) ? result.data.map(mapActivityRow).filter(Boolean) : [],
      error: result.error || null
    };
  }

  async function insertActivity(entry) {
    var client = getClient();
    if (!client) return buildSkippedResult(mapActivityRow(toActivityRow(entry)));
    var result = await client.from(TABLES.activity).insert(toActivityRow(entry)).select("*").limit(1);
    var row = Array.isArray(result.data) ? result.data[0] : result.data;
    return {
      data: row ? mapActivityRow(row) : null,
      error: result.error || null
    };
  }

  async function listReports(limit) {
    var client = getClient();
    if (!client) return buildSkippedResult([]);
    var query = client.from(TABLES.reports).select("*").order("created_at", { ascending: false });
    if (typeof limit === "number" && limit > 0) query = query.limit(limit);
    var result = await query;
    return {
      data: Array.isArray(result.data) ? result.data.map(function (row) {
        return {
          id: row.id ? String(row.id) : "",
          postId: String(row.post_id || ""),
          reporter: String(row.reporter || ""),
          createdAt: row.created_at ? String(row.created_at) : new Date().toISOString()
        };
      }) : [],
      error: result.error || null
    };
  }

  async function hasReport(postId, reporter) {
    var client = getClient();
    if (!client) return buildSkippedResult(false);
    var result = await client
      .from(TABLES.reports)
      .select("id")
      .eq("post_id", String(postId || ""))
      .eq("reporter", String(reporter || ""))
      .limit(1);
    return {
      data: !!(Array.isArray(result.data) && result.data.length),
      error: result.error || null
    };
  }

  async function insertReport(entry) {
    var client = getClient();
    if (!client) return buildSkippedResult(toReportRow(entry));
    var result = await client.from(TABLES.reports).insert(toReportRow(entry)).select("*").limit(1);
    var row = Array.isArray(result.data) ? result.data[0] : result.data;
    return {
      data: row || null,
      error: result.error || null
    };
  }

  window.CLWCommunityCloud = {
    getConfig: getConfig,
    isConfigured: isConfigured,
    getClient: getClient,
    listPosts: listPosts,
    ensureSeedPosts: ensureSeedPosts,
    savePost: savePost,
    deletePost: deletePost,
    listActivity: listActivity,
    insertActivity: insertActivity,
    listReports: listReports,
    hasReport: hasReport,
    insertReport: insertReport
  };
})();
