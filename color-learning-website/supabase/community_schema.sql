-- Community public sync schema for Color Learning Website
-- Run this in the Supabase SQL Editor before filling js/supabase-config.js.
-- This setup is intentionally permissive for a coursework demo because the
-- current site still uses local front-end usernames instead of Supabase Auth.

create extension if not exists pgcrypto;

grant usage on schema public to anon;

create table if not exists public.community_posts (
  id text primary key,
  author text not null,
  content text not null,
  tag text not null,
  color_hex text not null default '#2b78e4',
  palette_hexes jsonb not null default '[]'::jsonb,
  include_palette boolean not null default true,
  include_image boolean not null default false,
  image_data_url text not null default '',
  likes integer not null default 0,
  liked_by jsonb not null default '[]'::jsonb,
  points_awarded integer not null default 5,
  created_at timestamptz not null default timezone('utc', now()),
  origin text not null default 'community',
  origin_meta jsonb not null default '{}'::jsonb,
  featured boolean not null default false
);

create index if not exists community_posts_created_at_idx
  on public.community_posts (created_at desc);

create table if not exists public.community_activity (
  id uuid primary key default gen_random_uuid(),
  source text not null default 'community',
  username text not null,
  points_delta integer not null default 0,
  type text not null default 'post',
  ref_id text not null default '',
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists community_activity_created_at_idx
  on public.community_activity (created_at desc);

create index if not exists community_activity_username_idx
  on public.community_activity (username);

create table if not exists public.community_reports (
  id uuid primary key default gen_random_uuid(),
  post_id text not null references public.community_posts (id) on delete cascade,
  reporter text not null,
  created_at timestamptz not null default timezone('utc', now()),
  constraint community_reports_unique_report unique (post_id, reporter)
);

create index if not exists community_reports_created_at_idx
  on public.community_reports (created_at desc);

alter table public.community_posts enable row level security;
alter table public.community_activity enable row level security;
alter table public.community_reports enable row level security;

grant select, insert, update, delete on public.community_posts to anon;
grant select, insert on public.community_activity to anon;
grant select, insert on public.community_reports to anon;

drop policy if exists "community_posts_public_demo_access" on public.community_posts;
create policy "community_posts_public_demo_access"
  on public.community_posts
  for all
  to anon
  using (true)
  with check (true);

drop policy if exists "community_activity_public_demo_access" on public.community_activity;
create policy "community_activity_public_demo_access"
  on public.community_activity
  for all
  to anon
  using (true)
  with check (true);

drop policy if exists "community_reports_public_demo_access" on public.community_reports;
create policy "community_reports_public_demo_access"
  on public.community_reports
  for all
  to anon
  using (true)
  with check (true);
