# EBU6305 - Interactive Media Design Coursework

## Website Access

You can open this website in either of the following two ways:

- **Method 1: VS Code lightweight local server (for development/testing)**
  - Open this project in VS Code.
  - Start a lightweight server extension (for example, Live Server).
  - Open the generated local address (such as `http://127.0.0.1:5500/...`) in your browser.
  - This method provides full compatibility for dynamic modules during local debugging.

- **Method 2: Public website URL (for direct access)**
  - Open our deployed public URL directly in your browser.
  - This is the recommended method for demo/review because it matches the real online environment.

- **Method 3: Node.js http-server (for custom port testing)**
  - Ensure Node.js is installed on your machine.
  - Open your terminal or command prompt, and globally install http-server by running:
    npm install http-server -g
  - Navigate to your project's root directory in the terminal.
  - Start the local server on your custom port (8080) by running:
    http-server -p 8080
  - Open the generated local address (http://127.0.0.1:8080) in your browser.
  - This method provides a zero-configuration, lightweight HTTP server, ensuring full compatibility for dynamic modules and avoiding browser security restrictions associated with the file:// protocol.

## Group Number: 2025EBU6305G12  
## Project Title: Hue Hub: Interactive Color Learning

## Group Members

| Name             | BUPT ID    | QMUL ID   | Email |
|:-----------------|:-----------|:----------| :--- |
| **Shen Li**      | 2023213588 | 231224376 | 2023213588@bupt.cn |
| **Jialu Gu**     | 2023213523 | 231225007 | jp2023213523@qmul.ac.uk |
| **Zhizhen Pan**  | 2023213604 | 231224929 | panzhizhen@bupt.edu.cn |
| **Jinglin Wang** | 2023213527 | 231224697 | jinglin.wang@se23.qmul.ac.uk |
| **Wenyun Zhong** | 2023213579 | 231224516 | 2023213579@bupt.cn |

## Topic choice & Page Ownership

**Topic: Color**

**Team Leader: Zhizhen Pan** 

Each member owns exactly **one** of the **5 main pages/sections**. The page owner is responsible for **content**, **interaction design**, **implementation**, and **integration readiness** for that page.

| Section | Owner |
| :--- | :--- |
| 1. Homepage | Wenyun Zhong |
| 2. Learning | Shen Li |
| 3. Game | Jialu Gu |
| 4. Test | Jinglin Wang |
| 5. Community | Zhizhen Pan |

### Page Responsibilities

#### 1) Homepage
- Define and present the **unique selling point** of the website in the first screen.
- Build a clean, minimalist, and informative landing layout with clear **calls-to-action**.
- Implement **primary navigation** to all 5 main pages and ensure a consistent header/footer.
- Add **hero media** (video / animation / slideshow) that introduces the theme.
- Provide space for **announcements/adverts** (banner or card area) without harming usability.
- Ensure strong **responsiveness** (desktop/tablet/mobile) and basic accessibility (contrast, keyboard focus).

#### 2) Learning
- Design the learning page information architecture (sections, headings, and progression).
- Create **engaging learning content** (not just text): visuals, interactive cards, expand/collapse, mini checks.
- Add optional **sub-pages/anchors** if the topic is large (but keep navigation simple).
- Include at least one **interactive learning activity** (e.g., drag/drop, step-by-step demo, or short quiz).
- Ensure content is accurate, well-written, and aligned with the project topic.

#### 3) Game
- Build an interactive colouring game module where users can choose from multiple black-and-white vector drawings and freely colour them using different colour models. The interface includes colour selection tools, reusable recent colours, an eraser, undo/clear functions, and artwork saving support.

- Provide scalable SVG/vector-style line drawings to ensure the images remain sharp and undistorted at any screen size or zoom level. Include a variety of themed illustrations such as animals, objects, fantasy elements, and cartoon-style designs.

- Offer real-time colouring assistance through progress tracking, including colouring time, completion percentage, and number of colours used. Users can quickly switch between tools and continue colouring smoothly across desktop, tablet, and mobile devices.

- Include a Challenge Mode where the system randomly generates a fully coloured reference image. Users must recreate the colours as accurately as possible, then submit their work for automatic scoring. Scores are calculated using RGB colour distance comparison, rewarding closer colour matches with higher accuracy scores.

- Display detailed challenge results including final score, colour accuracy, completion time, and star-based performance feedback. High scores trigger celebratory animations and sound effects to increase engagement and motivation.

- Keep the Colouring Game interface simple, responsive, and accessible with clear controls, smooth interactions, progress indicators, and consistent visual feedback across all devices.

#### 4) Test
- Build a quiz-based testing module with a clear flow: **chapter and difficulty selection → questions → submission → feedback → final results → review**. The Test homepage includes themed chapter entries, difficulty switching, progress snapshots, resume links, mistake/bookmark access, and shortcuts back to related Learning modules.

- Provide **240 questions** in total: 5 chapters × 3 difficulty levels × 4 units × 4 questions. **Each question includes a hint, explanation, and Learning-related knowledge point**, covering single-choice, true/false, ordering, and image-based formats.

- Offer **interactive question feedback** through instant correct/incorrect responses, hints, explanations, Learning references, question overview navigation, real-time progress analysis, and bookmark support. **Sound effects** are used for answers, hints, stars, ribbons, and achievements, with both colour and **icon cues** for better accessibility.

- Show a **detailed result summary** with score, accuracy, time used, hint usage, attempt history, strengths, weak points, motivational feedback, recommended review sections, missed-question review, and star-based performance. Three-star results trigger ribbon animation and sound, and results can be shared to Community.

- Collect **missed and bookmarked questions** in one review page. It records mistake status, source chapter, difficulty, wrong count, and latest wrong time, with filters and options for **batch mistake practice**, bookmarked question practice, and bookmark removal.

- Display an **achievement system** with total stars, highest streak, and total score, with score data linked to the Community leaderboard. Completing all units in a chapter with three stars unlocks a chapter-specific title with animation and sound.

- Keep the Test interface **readable, responsive, and low-friction** with progress indicators, clear buttons, error prevention, responsive layouts, and SVG icons across desktop, tablet, and mobile.

#### 5) Community
- Create a community area that supports **social learning** (sharing results, tips, or short posts).
- Implement **profiles** (simple cards) and a **leaderboard/scoreboard** tied to Game/Test outcomes (if available).
- Highlight **star learners** (top scores or featured members) with a clear selection rule.
- If interactions are simulated (no backend), clearly indicate the behaviour (sample data, local storage, or mock UI).
- Define basic community guidelines (what can be shared) and keep the UI friendly and motivating.

### Community

**Purpose:** turn work from **Learning + Game + Test** into visible social learning evidence.

| Area | Key features |
| :--- | :--- |
| ✍️ Posting | Required reflection text, tags, optional palette, optional image |
| 🔗 Cross-page sharing | Learning notes, Game artwork + palette, Test result image + score |
| 💬 Discussion | Emoji reactions, comments, threaded replies |
| 🔎 Discovery | Source filters, tag search, full-post detail page |
| 👤 Social profile | Author cards, personal progress, streaks, rankings |
| 🛡️ Safety | Guidelines, hide/show, report, author delete |
| ♿ Inclusive design | English/Chinese UI, adjustable font size, responsive layout |

| Page | Role |
| :--- | :--- |
| `community.html` | Create posts, preview latest feed, view progress and leaderboards |
| `community-posts.html` | Browse all posts in a feed + detail layout |

#### Quick Guide

| Click | Action |
| :--- | :--- |
| `Avatar` | sign in / language / font size |
| `Create Post` | text + tag + optional palette/image → `Publish Post` |
| `😀` | react to posts/comments |
| `Comment` / `Reply` | discuss with peers |
| `Latest / From Learning / From Game / From Test` | filter posts |
| `Browse All Posts` | open the full feed page |
| `Author avatar` | view learning profile |
| `...` | hide, show again, report, or delete own post |

#### Data Note

| State | Behaviour |
| :--- | :--- |
| `Supabase configured` | shared public posts across devices |
| `No cloud config` | fallback to browser `localStorage` |
| `Local only` | drafts, hidden posts, login session, language, font size |

## Assigned TA: Jun Gu
### hint: Remember to merge all the code changes together and push them to the main branch.
