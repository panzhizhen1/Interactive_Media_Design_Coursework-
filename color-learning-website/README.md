# Color Learning Website (Initial Scaffold)

This is a static multi-page website scaffold designed for team collaboration.  
Each member mainly works on their own page with separate HTML, CSS, and JS files.

---

## Getting Started

1. Open the project using a local development server (e.g. VS Code **Live Server**)
2. Navigate to `index.html` as the homepage
3. Start working on your assigned page:

| Page | HTML | CSS | JS |
|------|------|-----|----|
| Homepage | index.html | css/pages/homepage.css | js/pages/homepage.js |
| Learning | learning.html | css/pages/learning.css | js/pages/learning.js |
| Game | game.html | css/pages/game.css | js/pages/game.js |
| Test | test.html | css/pages/test.css | js/pages/test/test.js |
| Community | community.html | css/pages/community.css | js/pages/community.js |

---

## Directory Overview

| Path | Purpose |
|------|---------|
| `index.html` … `community.html` | Page entry points |
| `css/variables.css` | Theme tokens (colors, typography, spacing) |
| `css/main.css` | Global reset and typography |
| `css/layout.css` | Navbar, footer, breadcrumb, shared layout |
| `css/pages/*.css` | Per-page styles |
| `js/main.js` | Loads shared components |
| `js/navbar.js` | Navigation logic |
| `js/pages/*.js` | Per-page scripts |
| `components/` | Reusable HTML fragments |
| `assets/` | Images, icons, media |

---

## 🔧 Local Preview

Shared components (e.g. navbar, footer) are loaded using `fetch`.  
For this reason, it is recommended to run the project via a local server (e.g. Live Server).

Note: The website remains a static front-end project, but the public Community feed can optionally sync through Supabase for shared multi-device data.

---

## Demo Sign-in 

A simple front-end sign-in system is included as a placeholder (`localStorage` only).

- `studentA` / `StudentA123!`
- `studentB` / `StudentB123!`
- `studentC` / `StudentC123!`

`studentA` is also used as the demo moderator account for Community highlight actions during showcase.

---

## Community Sync Notes

The site still uses front-end demo login (`CLWAuth`) in `localStorage`, but Community public data can now sync through Supabase.

- Public/shared data: posts, likes, reports, and activity leaderboard events.
- Local/private data: current login session, composer draft, hidden-post preference, and some UI preferences.
- `Learning`, `Game`, and `Test` still send drafts into `Community` through `clw_community_draft_v1`.
- Weekly leaderboard uses the last 7 days of recorded activity. All-time leaderboard combines Supabase activity totals with showcase seed learners.
- If Supabase is not configured, Community falls back to the previous `localStorage` behavior.

## Supabase Setup

1. Create a Supabase project.
2. Open the SQL Editor and run [`supabase/community_schema.sql`](./supabase/community_schema.sql).
3. Copy your project URL and anon/publishable key into [`js/supabase-config.js`](./js/supabase-config.js).
4. Redeploy the static site.

After that, Community posts and leaderboard activity will sync across devices and public visitors of the deployed website.

---

## Breadcrumb

`components/breadcrumb.html` is a reusable template.  
Copy it into `<main>` where needed and adjust labels and links.
