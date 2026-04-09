(function () {
  "use strict";

  var STORAGE_KEY = "clw_test_module_state_v2";
  var LEVEL_ORDER = ["easy", "medium", "hard"];
  var LEVEL_POINTS = { easy: 10, medium: 14, hard: 18 };

  var CHAPTERS = [
    {
      id: "basics",
      name: "Color Basics",
      eyebrow: "Chapter 1",
      intro: "Build confidence with color families, contrast, and readable hierarchy.",
      colors: { primary: "#f97316", secondary: "#fb923c", border: "#fed7aa" },
      focuses: {
        easy: ["Primary and secondary colors", "Warm and cool groups", "Contrast spotting", "Repair weak palettes"],
        medium: ["Analogous and complementary choices", "Value balance in layouts", "Saturation for hierarchy", "Repair weak contrast", "Applied palette decisions"],
        hard: ["Audience-first palette planning", "Accessibility trade-offs", "Harmony versus emphasis", "Recovering confusing layouts", "Final critique round"]
      }
    },
    {
      id: "models",
      name: "Color Models",
      eyebrow: "Chapter 2",
      intro: "Practice RGB, CMYK, and HSV choices for different devices and outputs.",
      colors: { primary: "#2563eb", secondary: "#38bdf8", border: "#bfdbfe" },
      focuses: {
        easy: ["RGB on screens", "CMYK for print", "HSV basics", "Review additive and subtractive color"],
        medium: ["Channel mixing decisions", "Device output matching", "Converting between spaces", "Debugging wrong exports", "Applied model selection"],
        hard: ["Cross-media production planning", "Color management pitfalls", "Interpreting channel data", "Recovering from conversion issues", "Final system critique"]
      }
    },
    {
      id: "meaning",
      name: "Color Meaning",
      eyebrow: "Chapter 3",
      intro: "Use color responsibly across mood, culture, accessibility, and social context.",
      colors: { primary: "#db2777", secondary: "#f472b6", border: "#fbcfe8" },
      focuses: {
        easy: ["Mood and emotion cues", "Inclusive warning colors", "Accessible call-to-action choices", "Review audience fit"],
        medium: ["Cross-cultural assumptions", "Tone for different audiences", "Ethical feedback visuals", "Repair mixed signals", "Applied communication choices"],
        hard: ["Conflicting audience expectations", "Accessible persuasion design", "Risk of over-coded meaning", "Recovering biased visual signals", "Final critique round"]
      }
    }
  ];

  var LEVELS = [
    { id: "easy", name: "Easy", label: "Starter Path", duration: "5-7 min" },
    { id: "medium", name: "Medium", label: "Applied Path", duration: "7-9 min" },
    { id: "hard", name: "Hard", label: "Critique Path", duration: "9-12 min" }
  ];

  var UNIT_TEMPLATES = {
    easy: [
      { id: "unit-1", kind: "practice", label: "Starter Sprint", short: "S1", taskLabel: "4 prompts" },
      { id: "unit-2", kind: "practice", label: "Checkpoint One", short: "C1", taskLabel: "4 prompts" },
      { id: "unit-3", kind: "review", label: "Repair Loop", short: "RV", taskLabel: "Mistake review" },
      { id: "unit-4", kind: "summit", label: "Finish Badge", short: "BG", taskLabel: "4 prompts" }
    ],
    medium: [
      { id: "unit-1", kind: "practice", label: "Compare Lab", short: "L1", taskLabel: "4 prompts" },
      { id: "unit-2", kind: "checkpoint", label: "Decision Check", short: "DC", taskLabel: "4 prompts" },
      { id: "unit-3", kind: "practice", label: "Scenario Run", short: "SR", taskLabel: "4 prompts" },
      { id: "unit-4", kind: "review", label: "Repair Link", short: "RV", taskLabel: "Mistake review" },
      { id: "unit-5", kind: "summit", label: "Master Gate", short: "MG", taskLabel: "4 prompts" }
    ],
    hard: [
      { id: "unit-1", kind: "practice", label: "Analysis Gate", short: "A1", taskLabel: "4 prompts" },
      { id: "unit-2", kind: "checkpoint", label: "Critique Check", short: "CC", taskLabel: "4 prompts" },
      { id: "unit-3", kind: "practice", label: "Applied Decision", short: "AD", taskLabel: "4 prompts" },
      { id: "unit-4", kind: "review", label: "Recovery Loop", short: "RV", taskLabel: "Mistake review" },
      { id: "unit-5", kind: "summit", label: "Summit Badge", short: "SB", taskLabel: "4 prompts" }
    ]
  };

  var QUESTION_DATA = buildQuestionData();
  var DEFAULT_STATE = createDefaultState();
  var state = loadState();
  var mainEl = document.querySelector("[data-test-page]");
  var rootEl = document.querySelector("[data-test-root]");

  if (!mainEl || !rootEl) return;

  syncSelectionFromQuery();
  applyChapterTheme(resolveChapterId());
  bindEvents();
  renderPage();

  function buildQuestionData() {
    return {
      basics: {
        easy: makeSet(
          ["Color relationships", "Warm and cool color groups", "Readability and contrast", "Lightness and value", "Saturation"],
          "Which pair is complementary on a simple color wheel?",
          ["Blue and orange", "Blue and green", "Yellow and orange", "Red and purple"],
          "Blue and orange",
          "Warm colors usually feel more energetic than cool colors in introductory visual design.",
          true,
          "Pick the sample that gives the clearest text contrast for a quick information card.",
          [
            { id: "a", label: "Cream card with dark navy text", swatch: "linear-gradient(135deg,#fef3c7,#0f172a)" },
            { id: "b", label: "Mint card with pale lime text", swatch: "linear-gradient(135deg,#a7f3d0,#d9f99d)" },
            { id: "c", label: "Light pink card with peach text", swatch: "linear-gradient(135deg,#fbcfe8,#fdba74)" }
          ],
          "a",
          "Arrange these swatches from lightest to darkest.",
          ["Pale yellow", "Soft orange", "Brick orange", "Deep brown"],
          "Which description best matches a desaturated color?",
          ["Bright and intense", "Closer to gray and softer", "Always darker than black", "Only used in print"],
          "Closer to gray and softer",
          ["Complementary color pairs", "Warm and cool emotional cues", "Readable contrast for basic interfaces", "Value order and hierarchy", "Saturation basics"]
        ),
        medium: makeSet(
          ["Harmony choices", "Visual hierarchy", "Interface readability", "Palette repair", "Audience fit"],
          "You want calm variety without sharp tension. Which palette is usually the safer first choice?",
          ["Analogous colors", "Complementary colors", "Pure black and white only", "Random vivid colors"],
          "Analogous colors",
          "A single saturated accent can help guide attention when the surrounding colors are quieter.",
          true,
          "Which palette would make secondary information recede while keeping the primary action clear?",
          [
            { id: "a", label: "Muted blue layout with one vivid coral button", swatch: "linear-gradient(135deg,#dbeafe,#94a3b8,#fb7185)" },
            { id: "b", label: "Every element in strong neon colors", swatch: "linear-gradient(135deg,#22d3ee,#fde047,#f43f5e)" },
            { id: "c", label: "All elements in the same medium gray", swatch: "linear-gradient(135deg,#cbd5e1,#94a3b8,#cbd5e1)" }
          ],
          "a",
          "Place these actions in a sensible order when repairing a low-contrast interface.",
          ["Identify the weak text pair", "Increase value contrast", "Retest readability", "Document the approved choice"],
          "A youth event poster needs energy but still readable details. Which direction is strongest?",
          ["Use several vivid accents plus one dark anchor color", "Use pale gray text everywhere", "Remove all contrast for softness", "Use one flat beige tone"],
          "Use several vivid accents plus one dark anchor color",
          ["Choosing analogous palettes", "Saturation and hierarchy", "Value and emphasis balance", "Repairing weak contrast", "Balancing energy with readability"]
        ),
        hard: makeSet(
          ["Strategy trade-offs", "Accessibility trade-offs", "Design critique", "Color review workflow", "Recovering weak layouts"],
          "A health dashboard must feel calm, but an urgent alert still needs fast attention. Which approach is strongest?",
          ["Neutral base with one high-contrast alert accent", "Use all urgent colors throughout", "Avoid contrast so the screen feels soft", "Make alerts smaller than other content"],
          "Neutral base with one high-contrast alert accent",
          "A visually harmonious palette is acceptable even if key labels fall below readable contrast expectations.",
          false,
          "Which redesign best improves both hierarchy and focus for a busy product card?",
          [
            { id: "a", label: "Soft background, dark text, single vivid price tag", swatch: "linear-gradient(135deg,#f8fafc,#334155,#fb7185)" },
            { id: "b", label: "Multiple bright badges competing equally", swatch: "linear-gradient(135deg,#22d3ee,#fde047,#f97316)" },
            { id: "c", label: "Low-contrast neutral card with no clear emphasis", swatch: "linear-gradient(135deg,#e2e8f0,#cbd5e1,#94a3b8)" }
          ],
          "a",
          "Order this critique workflow from first review to final approval.",
          ["Check readability", "Check emotional fit", "Test with audience context", "Approve final palette system"],
          "If harmony and readability conflict, what should guide the final color decision on an instructional page?",
          ["Readable communication for the target users", "Only the designer's favorite palette", "The most decorative option", "Whichever uses the most colors"],
          "Readable communication for the target users",
          ["Balancing harmony and emphasis", "Accessibility over decorative harmony", "Critiquing palette hierarchy", "Structured palette critique", "User-centered color decisions"]
        )
      },
      models: {
        easy: makeSet(
          ["Screen color models", "Print versus screen", "Choosing the right model", "Additive color", "HSV use"],
          "Which color model is used most directly by digital displays?",
          ["RGB", "CMYK", "Pantone only", "Charcoal scale"],
          "RGB",
          "CMYK is the color model most closely linked to print production workflows.",
          true,
          "Select the option that best matches a social media banner workflow.",
          [
            { id: "a", label: "RGB export for screens", swatch: "linear-gradient(135deg,#0f172a,#2563eb,#38bdf8)" },
            { id: "b", label: "CMYK ink layout for brochure stock", swatch: "linear-gradient(135deg,#06b6d4,#ec4899,#facc15,#111827)" },
            { id: "c", label: "Single gray proof sheet", swatch: "linear-gradient(135deg,#f8fafc,#64748b)" }
          ],
          "a",
          "Arrange the additive mixing sequence from no light to full white light.",
          ["No light", "One channel active", "Two channels active", "All three channels active"],
          "Which HSV control changes how bright or dark a color appears?",
          ["Value", "Hue", "Saturation", "Resolution"],
          "Value",
          ["RGB for digital displays", "CMYK for print", "Matching model to output", "Additive color sequence", "HSV brightness control"]
        ),
        medium: makeSet(
          ["Cross-device output", "Channel interpretation", "Export planning", "Conversion workflow", "HSV as a design tool"],
          "A designer is preparing both a website banner and a printed poster. What is the most reliable starting approach?",
          ["Prepare screen assets in RGB and print assets in CMYK", "Use CMYK for both", "Use RGB for both with no review", "Avoid color conversion entirely"],
          "Prepare screen assets in RGB and print assets in CMYK",
          "Increasing RGB channels usually pushes the image toward darkness.",
          false,
          "Which export note is most suitable for a print handout that must stay consistent on paper?",
          [
            { id: "a", label: "CMYK proof with black text anchor", swatch: "linear-gradient(135deg,#06b6d4,#ec4899,#facc15,#111827)" },
            { id: "b", label: "RGB neon gradient for mobile splash", swatch: "linear-gradient(135deg,#0ea5e9,#22d3ee,#38bdf8)" },
            { id: "c", label: "HSV picker screenshot only", swatch: "linear-gradient(135deg,#f97316,#facc15,#86efac)" }
          ],
          "a",
          "Put these actions in a sensible order when a print color looks wrong.",
          ["Identify the original color space", "Check conversion settings", "Proof the result", "Adjust and export again"],
          "When would HSV be most useful during early interface color exploration?",
          ["When quickly testing hue families and brightness variations", "When calibrating a commercial printer", "When replacing all brand guidelines", "When removing accessibility checks"],
          "When quickly testing hue families and brightness variations",
          ["Choosing models for mixed outputs", "Understanding additive color", "Print-ready output decisions", "Fixing wrong color conversions", "When HSV is useful"]
        ),
        hard: makeSet(
          ["Production strategy", "Color management pitfalls", "Interpreting channel data", "Recovery workflow", "System critique"],
          "A campaign must look consistent across app screens, event posters, and social media templates. What should lead the workflow?",
          ["Plan separate output-ready versions with model-aware review", "Keep one RGB file and never test print", "Convert everything at the very end without checking", "Use HSV only for final production"],
          "Plan separate output-ready versions with model-aware review",
          "If a color looks vivid on screen, it will reproduce with the same intensity in every print workflow.",
          false,
          "Which interface note best shows a model-aware decision for a high-stakes report dashboard?",
          [
            { id: "a", label: "Screen-first RGB dashboard with tested alert contrast", swatch: "linear-gradient(135deg,#0f172a,#2563eb,#38bdf8)" },
            { id: "b", label: "Unmanaged neon gradient for every deliverable", swatch: "linear-gradient(135deg,#7c3aed,#ec4899,#f97316)" },
            { id: "c", label: "Muted grayscale with no signal hierarchy", swatch: "linear-gradient(135deg,#f8fafc,#94a3b8,#64748b)" }
          ],
          "a",
          "Order the recovery workflow after a brand blue shifts badly between screen comps and print proofs.",
          ["Review source color model", "Check profile and conversion intent", "Compare proof to target use", "Approve the adjusted production file"],
          "What is the most responsible message to give a teammate when a screen color cannot print exactly?",
          ["Explain the gamut limit and offer the closest tested alternative", "Promise the same result anyway", "Ignore the difference because most users will not notice", "Remove all color from the design"],
          "Explain the gamut limit and offer the closest tested alternative",
          ["Model-aware production planning", "Screen gamut versus print gamut", "Model-aware interface decisions", "Recovering from conversion issues", "Communicating color model limits"]
        )
      },
      meaning: {
        easy: makeSet(
          ["Mood and emotion", "Inclusive meaning", "Accessible call-to-action", "Audience fit", "Cultural awareness"],
          "A calm wellbeing screen is more likely to start with which color direction?",
          ["Soft blues and greens", "Flashing red on every panel", "Only black warning stripes", "Random intense contrasts"],
          "Soft blues and greens",
          "A warning should not rely on red alone if you want more inclusive communication.",
          true,
          "Which call-to-action sample feels both clear and accessible for a general audience?",
          [
            { id: "a", label: "Dark navy text on pale sky button with clear label", swatch: "linear-gradient(135deg,#dbeafe,#0f172a)" },
            { id: "b", label: "Pale yellow text on white button", swatch: "linear-gradient(135deg,#fef9c3,#ffffff)" },
            { id: "c", label: "Red-only icon with no label", swatch: "linear-gradient(135deg,#fecaca,#ef4444)" }
          ],
          "a",
          "Arrange these design goals from most supportive to most alarming for a beginner learning page.",
          ["Clear and calm", "Warm and encouraging", "Focused and urgent", "High-alert emergency tone"],
          "What is the safest assumption about color meaning across cultures?",
          ["Meanings can vary and should be checked", "Every culture reads colors the same way", "Only designers understand color meaning", "Red always means celebration"],
          "Meanings can vary and should be checked",
          ["Mood-setting with color", "Inclusive warning design", "Accessible calls to action", "Matching color tone to learning context", "Checking color meaning across audiences"]
        ),
        medium: makeSet(
          ["Audience and tone", "Ethical feedback visuals", "Signal repair", "Decision process", "Bias reduction"],
          "A global community campaign needs a palette for trust and openness. Which approach is strongest?",
          ["Test color choices with audience context instead of assuming one universal meaning", "Use one symbolic color and never question it", "Choose the brightest colors available", "Avoid all contrast"],
          "Test color choices with audience context instead of assuming one universal meaning",
          "Formative feedback should help users understand what to improve, not only display failure signals.",
          true,
          "Which interface treatment best balances encouragement with clear caution?",
          [
            { id: "a", label: "Neutral surface with one amber warning bar and plain-language label", swatch: "linear-gradient(135deg,#f8fafc,#f59e0b,#334155)" },
            { id: "b", label: "Multiple clashing colors on every status label", swatch: "linear-gradient(135deg,#22d3ee,#f43f5e,#fde047)" },
            { id: "c", label: "Muted gray message with no visual distinction", swatch: "linear-gradient(135deg,#e5e7eb,#94a3b8,#cbd5e1)" }
          ],
          "a",
          "Put these review steps in a sensible order for an audience-sensitive color decision.",
          ["Clarify communication goal", "Check cultural assumptions", "Test accessibility and contrast", "Approve the final message style"],
          "Which feedback color strategy is best for a learning product?",
          ["Use supportive labels and icons with color, not color alone", "Use harsh red screens for every wrong answer", "Hide all mistakes to avoid emotion", "Use one gray tone for every state"],
          "Use supportive labels and icons with color, not color alone",
          ["Testing meaning with context", "Formative feedback tone", "Balancing caution with support", "Reviewing color meaning responsibly", "Designing supportive feedback states"]
        ),
        hard: makeSet(
          ["Conflicting audience expectations", "Bias-aware design", "Accessible persuasion design", "Ethical evaluation", "Recovering biased signals"],
          "A public information page needs urgency without panic. Which approach is strongest?",
          ["Use a restrained base with a focused warning accent and explicit labels", "Turn the entire page bright red", "Remove contrast to appear calm", "Use multiple unrelated status colors"],
          "Use a restrained base with a focused warning accent and explicit labels",
          "It is safe to assume a single emotional meaning for a color across all ages, contexts, and cultures.",
          false,
          "Which campaign component best encourages action while staying inclusive and readable?",
          [
            { id: "a", label: "High-contrast navy card with one warm action button and direct wording", swatch: "linear-gradient(135deg,#0f172a,#38bdf8,#fb923c)" },
            { id: "b", label: "Low-contrast pastel card with hidden action cue", swatch: "linear-gradient(135deg,#fce7f3,#fbcfe8,#fde68a)" },
            { id: "c", label: "Flashing red and yellow danger-style panel", swatch: "linear-gradient(135deg,#ef4444,#f59e0b,#facc15)" }
          ],
          "a",
          "Order this ethical review from initial framing to final sign-off.",
          ["Define the message goal", "Check for bias or cultural assumptions", "Test accessibility and emotional tone", "Approve the final communication pattern"],
          "A palette unintentionally stigmatizes a user group. What should the team do first?",
          ["Pause rollout, review the signal with affected context, and revise", "Keep it because the visuals look polished", "Only adjust the font size", "Ignore feedback until launch ends"],
          "Pause rollout, review the signal with affected context, and revise",
          ["Urgency without panic", "Avoiding universal color claims", "Inclusive persuasive design", "Ethical review workflow", "Responding to harmful color signals"]
        )
      }
    };
  }

  function makeSet(topics, mcqPrompt, mcqOptions, mcqCorrect, tfPrompt, tfCorrect, imagePrompt, imageOptions, imageCorrect, sortPrompt, sortItems, bonusPrompt, bonusOptions, bonusCorrect, reviewTopics) {
    return {
      topics: topics,
      mcqPrompt: mcqPrompt,
      mcqOptions: mcqOptions,
      mcqCorrect: mcqCorrect,
      tfPrompt: tfPrompt,
      tfCorrect: tfCorrect,
      imagePrompt: imagePrompt,
      imageOptions: imageOptions,
      imageCorrect: imageCorrect,
      sortPrompt: sortPrompt,
      sortItems: sortItems,
      bonusPrompt: bonusPrompt,
      bonusOptions: bonusOptions,
      bonusCorrect: bonusCorrect,
      reviewTopics: reviewTopics
    };
  }

  function createDefaultState() {
    var baseResult = {
      id: "result-seed-models-easy",
      chapter: "models",
      chapterName: "Color Models",
      level: "easy",
      levelName: "Easy",
      unit: "unit-2",
      mode: "path",
      score: 26,
      maxScore: 40,
      accuracy: 0.75,
      correctCount: 3,
      totalQuestions: 4,
      hintsUsed: 1,
      starsEarned: 2,
      badgeAwarded: "Model Navigator",
      bestStreak: 2,
      strengths: ["RGB for digital displays", "Matching model to output"],
      weakAreas: ["HSV brightness control"],
      reviewTopics: ["HSV brightness control", "Additive color sequence"],
      trendText: "Up 12% from the previous Color Models attempt.",
      timestamp: "2026-04-07T18:20:00.000Z"
    };

    return {
      version: 2,
      selection: { chapter: "models", level: "easy" },
      ui: {},
      progress: {
        basics: {
          easy: makeProgress(["unit-1"], "unit-2", 18, 0.5, "2026-04-02T13:30:00.000Z"),
          medium: makeProgress([], "unit-1", 0, 0, ""),
          hard: makeProgress([], "unit-1", 0, 0, "")
        },
        models: {
          easy: makeProgress(["unit-1"], "unit-2", 26, 0.75, "2026-04-07T18:20:00.000Z"),
          medium: makeProgress(["unit-1"], "unit-2", 34, 0.64, "2026-04-03T10:10:00.000Z"),
          hard: makeProgress([], "unit-1", 0, 0, "")
        },
        meaning: {
          easy: makeProgress(["unit-1"], "unit-2", 22, 0.75, "2026-04-04T09:00:00.000Z"),
          medium: makeProgress([], "unit-1", 0, 0, ""),
          hard: makeProgress([], "unit-1", 0, 0, "")
        }
      },
      history: [
        baseResult,
        {
          id: "result-seed-meaning-easy",
          chapter: "meaning",
          chapterName: "Color Meaning",
          level: "easy",
          levelName: "Easy",
          unit: "unit-1",
          mode: "path",
          score: 22,
          maxScore: 40,
          accuracy: 0.75,
          correctCount: 3,
          totalQuestions: 4,
          hintsUsed: 0,
          starsEarned: 2,
          badgeAwarded: null,
          bestStreak: 3,
          strengths: ["Inclusive warning design", "Mood-setting with color"],
          weakAreas: ["Checking color meaning across audiences"],
          reviewTopics: ["Checking color meaning across audiences"],
          trendText: "Steady performance compared with the prior easy attempt.",
          timestamp: "2026-04-04T09:00:00.000Z"
        }
      ],
      mistakes: [
        createMistakeRecord(getUnitQuestions("models", "easy", "unit-2")[2], { chapterId: "models", levelId: "easy", unitId: "unit-2" }, "Review the difference between screen-first exports and print workflows.", "2026-04-07T18:20:00.000Z"),
        createMistakeRecord(getUnitQuestions("basics", "easy", "unit-1")[0], { chapterId: "basics", levelId: "easy", unitId: "unit-1" }, "Revisit which color pairs sit opposite each other on the wheel.", "2026-04-02T13:30:00.000Z"),
        createMistakeRecord(getUnitQuestions("meaning", "medium", "unit-1")[1], { chapterId: "meaning", levelId: "medium", unitId: "unit-1" }, "Do not assume color cues work equally for every audience without testing context.", "2026-04-05T14:10:00.000Z")
      ],
      rewards: { stars: 18, badges: ["Contrast Scout", "Model Navigator"], streak: 4 },
      currentQuiz: null,
      lastResult: baseResult
    };
  }

  function makeProgress(completedUnits, currentUnit, lastScore, accuracy, lastPlayed) {
    return {
      completedUnits: completedUnits,
      currentUnit: currentUnit,
      lastScore: lastScore,
      accuracy: accuracy,
      lastPlayed: lastPlayed
    };
  }

  function loadState() {
    var raw = readStorage();
    if (!raw || raw.version !== DEFAULT_STATE.version) return clone(DEFAULT_STATE);

    var next = clone(DEFAULT_STATE);
    next.selection = assign(next.selection, raw.selection || {});
    next.ui = assign(next.ui, raw.ui || {});
    next.progress = raw.progress || next.progress;
    next.history = Array.isArray(raw.history) && raw.history.length ? raw.history : next.history;
    next.mistakes = Array.isArray(raw.mistakes) ? raw.mistakes : next.mistakes;
    next.rewards = assign(next.rewards, raw.rewards || {});
    next.currentQuiz = raw.currentQuiz || null;
    next.lastResult = raw.lastResult || next.lastResult;
    return next;
  }

  function readStorage() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* ignore */
    }
  }

  function assign(target, source) {
    var copy = clone(target);
    Object.keys(source).forEach(function (key) {
      copy[key] = source[key];
    });
    return copy;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function bindEvents() {
    rootEl.addEventListener("click", handleClick);
    rootEl.addEventListener("change", handleChange);
  }

  function handleClick(event) {
    var target = event.target;
    var chapterButton = target.closest("[data-chapter-select]");
    var levelButton = target.closest("[data-level-select]");
    var answerButton = target.closest("[data-answer-value]");
    var sortAddButton = target.closest("[data-sort-add]");
    var sortRemoveButton = target.closest("[data-sort-remove]");
    var sortResetButton = target.closest("[data-sort-reset]");
    var quizAction = target.closest("[data-quiz-action]");
    var masteredButton = target.closest("[data-mark-mastered]");
    var explanationButton = target.closest("[data-toggle-explanation]");

    if (chapterButton) {
      state.selection.chapter = chapterButton.getAttribute("data-chapter-select");
      saveState();
      applyChapterTheme(state.selection.chapter);
      renderPage();
      return;
    }
    if (levelButton) {
      state.selection.level = levelButton.getAttribute("data-level-select");
      saveState();
      renderPage();
      return;
    }
    if (answerButton) {
      setDraftAnswer(answerButton.getAttribute("data-answer-value"));
      return;
    }
    if (sortAddButton) {
      addSortItem(sortAddButton.getAttribute("data-sort-add"));
      return;
    }
    if (sortRemoveButton) {
      removeSortItem(Number(sortRemoveButton.getAttribute("data-sort-remove")));
      return;
    }
    if (sortResetButton) {
      resetSortDraft();
      return;
    }
    if (quizAction) {
      handleQuizAction(quizAction.getAttribute("data-quiz-action"));
      return;
    }
    if (masteredButton) {
      event.preventDefault();
      toggleMastered(masteredButton.getAttribute("data-mark-mastered"));
      return;
    }
    if (explanationButton) {
      event.preventDefault();
      toggleMistakeExplanation(explanationButton.getAttribute("data-toggle-explanation"));
    }
  }

  function handleChange(event) {
    var target = event.target;
    if (target.matches("[data-map-select='chapter']")) {
      if (getChapter(target.value)) {
        state.selection.chapter = target.value;
        saveState();
        applyChapterTheme(state.selection.chapter);
        renderPage();
      }
      return;
    }
    if (target.matches("[data-map-select='level']")) {
      if (getLevel(target.value)) {
        state.selection.level = target.value;
        saveState();
        renderPage();
      }
      return;
    }
    if (target.matches("[data-mistake-filter='chapter']")) {
      window.location.href = buildUrl("test-mistakes.html", { chapter: target.value === "all" ? "" : target.value, level: getMistakeLevelFilter() === "all" ? "" : getMistakeLevelFilter(), status: getMistakeStatusFilter() === "all" ? "" : getMistakeStatusFilter() });
      return;
    }
    if (target.matches("[data-mistake-filter='level']")) {
      window.location.href = buildUrl("test-mistakes.html", { chapter: getMistakeChapterFilter() === "all" ? "" : getMistakeChapterFilter(), level: target.value === "all" ? "" : target.value, status: getMistakeStatusFilter() === "all" ? "" : getMistakeStatusFilter() });
      return;
    }
    if (target.matches("[data-mistake-filter='status']")) {
      window.location.href = buildUrl("test-mistakes.html", { chapter: getMistakeChapterFilter() === "all" ? "" : getMistakeChapterFilter(), level: getMistakeLevelFilter() === "all" ? "" : getMistakeLevelFilter(), status: target.value === "all" ? "" : target.value });
    }
  }

  function renderPage() {
    var page = mainEl.getAttribute("data-test-page");
    if (page === "map") return renderMapPage();
    if (page === "quiz") return renderQuizPage();
    if (page === "results") return renderResultsPage();
    return renderMistakesPage();
  }

  function renderMapPage() {
    var chapter = getChapter(state.selection.chapter) || CHAPTERS[0];
    var level = getLevel(state.selection.level) || LEVELS[0];
    var units = getUnits(chapter.id, level.id);
    var snapshot = getProgressSnapshot(chapter.id, level.id);
    var latest = getLatestHistory(chapter.id, level.id);
    var recommended = getRecommendedTopics(chapter.id, level.id);
    var mistakeCount = getVisibleMistakes(chapter.id, level.id).length;

    applyChapterTheme(chapter.id);

    rootEl.innerHTML =
      '<div class="test-map-layout">' +
        '<div class="test-map-main">' +
          '<section class="test-map-topbar">' +
        '<div class="test-map-topbar__group">' +
          '<label class="test-map-topbar__field"><span>Current Chapter</span>' + renderMapChapterSelect(chapter.id) + "</label>" +
          '<label class="test-map-topbar__field"><span>Difficulty</span>' + renderMapLevelSelect(level.id) + "</label>" +
        "</div>" +
          "</section>" +
          '<div class="test-grid test-grid--map">' +
        '<section class="test-panel test-map-shell">' +
          '<div class="test-map-header">' +
            '<div><div class="test-kicker">' + chapter.eyebrow + '</div><h2 class="test-map-heading">' + chapter.name + " - " + level.label + '</h2><p class="test-map-copy">' + chapter.intro + " This path keeps each assessment focused, fast, and review-friendly.</p></div>" +
            '<div class="test-map-badges"><span class="test-map-badge">' + level.duration + '</span><span class="test-map-badge">' + units.length + ' nodes</span><span class="test-map-badge">' + snapshot.levelRate + " complete</span></div>" +
          "</div>" +
          '<div class="test-map-list">' + units.map(renderMapNode).join("") + "</div>" +
            "</section>" +
          "</div>" +
        "</div>" +
        '<aside class="test-sidebar test-sidebar--map">' +
          renderSidebarCard("Progress Snapshot", '<div class="test-stat-grid">' + renderStat("Chapter", snapshot.chapterRate) + renderStat("Level", snapshot.levelRate) + renderStat("Accuracy", snapshot.overallAccuracy) + renderStat("Last score", snapshot.lastScore) + "</div>") +
          renderSidebarCard("Recent Activity", latest ? '<div class="test-mini-item"><strong>' + latest.score + " / " + latest.maxScore + '</strong><span class="test-card-copy">' + Math.round(latest.accuracy * 100) + "% on " + formatDate(latest.timestamp) + "</span></div>" : '<div class="test-mini-item"><strong>No completed attempt yet</strong><span class="test-card-copy">Start this path to generate a summary.</span></div>') +
          renderSidebarCard("Mistake Review", '<div class="test-mini-item"><strong>' + mistakeCount + ' saved mistakes</strong><span class="test-card-copy">Recommended loop: ' + (recommended[0] || "No active topic yet") + "</span></div>") +
          renderSidebarCard("Rewards", '<div class="test-inline-meta"><span class="test-tag">' + state.rewards.stars + " stars</span><span class=\"test-tag\">" + state.rewards.streak + ' streak</span></div><ul class="test-note-list">' + state.rewards.badges.map(function (badge) { return "<li>" + badge + "</li>"; }).join("") + "</ul>") +
          renderSidebarCard("Recommended Review", '<ul class="test-note-list">' + recommended.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>") +
        "</aside>" +
      "</div>";
  }

  function renderQuizPage() {
    var session = ensureQuizSession();
    if (!session) {
      rootEl.innerHTML =
        '<section class="test-hero"><div class="test-kicker">Quiz unavailable</div><h1 class="test-title">No question set is ready for this route yet.</h1><div class="test-quick-actions">' +
        renderLinkButton("Back to map", "test.html", "test-link-btn--primary") +
        renderLinkButton("Open mistakes", "test-mistakes.html", "test-link-btn--soft") +
        "</div></section>";
      return;
    }

    var chapter = getChapter(session.chapterId);
    var level = getLevel(session.levelId);
    var question = session.questions[session.currentIndex];
    var result = session.submitted[question.id] || null;
    var draft = session.drafts[question.id];
    var answered = Object.keys(session.submitted).length;
    var accuracy = answered ? Math.round((session.correctCount / answered) * 100) + "%" : "0%";

    applyChapterTheme(session.chapterId);

    rootEl.innerHTML =
      '<div class="quiz-shell">' +
        '<div class="test-grid test-grid--quiz">' +
          '<section class="quiz-card">' +
            '<div class="quiz-card__header"><div><div class="test-inline-meta"><span class="quiz-tag">' + labelForType(question.type) + "</span><span class=\"quiz-tag\">" + question.objective + '</span><span class="quiz-tag">' + question.topic + '</span></div><p class="quiz-card__support">' + getUnitFocus(session.chapterId, session.levelId, session.unitId) + "</p></div><span class=\"test-tag\">" + LEVEL_POINTS[session.levelId] + " pts</span></div>" +
            '<h1 class="quiz-card__prompt">' + question.prompt + '</h1><p class="quiz-card__support">Submit each answer to unlock immediate feedback, knowledge reminders, and a suggested review topic.</p>' +
            renderQuestionBody(question, draft) +
            renderHintBlock(question, session) +
            '<div class="quiz-actions">' +
              renderActionButton("Hint", "hint", false, !!result) +
              renderActionButton("Submit Answer", "submit", !hasAnswer(question, draft), !!result) +
              (result ? renderActionButton(session.currentIndex === session.questions.length - 1 ? "Finish Quiz" : "Next Question", "next", false, false) : "") +
              renderLinkButton("Save and Exit", buildUrl("test.html", { chapter: session.chapterId, level: session.levelId }), "test-link-btn--soft") +
            "</div>" +
            (result ? renderFeedback(question, result) : "") +
          "</section>" +
          '<aside class="test-sidebar test-sidebar--quiz">' +
            '<section class="quiz-topbar">' +
              '<div class="quiz-topbar__row"><div class="test-cta-row">' +
                renderLinkButton("Back to map", buildUrl("test.html", { chapter: session.chapterId, level: session.levelId }), "test-link-btn--soft") +
                '<span class="test-tag">' + chapter.name + '</span><span class="test-tag">' + level.name + '</span><span class="test-tag">' + (session.mode === "review" ? "Mistake Review Mode" : "Path Quiz") + '</span>' +
              "</div></div>" +
              '<div class="quiz-progress"><div class="quiz-topbar__row"><strong>Question ' + (session.currentIndex + 1) + " of " + session.questions.length + '</strong><span class="test-card-copy">' + getUnitFocus(session.chapterId, session.levelId, session.unitId) + '</span></div><div class="quiz-progress__bar"><div class="quiz-progress__fill" style="width:' + Math.max((session.currentIndex / session.questions.length) * 100, 8) + '%"></div></div></div>' +
              '<div class="quiz-mini-grid">' + renderQuizMini("Score", session.score) + renderQuizMini("Accuracy", accuracy) + renderQuizMini("Hints", Object.keys(session.revealedHints).length) + renderQuizMini("Streak", session.bestStreak) + "</div>" +
            "</section>" +
          "</aside>" +
        "</div>" +
      "</div>";
  }

  function renderResultsPage() {
    var result = getResultForPage();
    var nextLevel = getNextLevel(result.level);

    applyChapterTheme(result.chapter);

    rootEl.innerHTML =
      '<section class="test-hero results-hero"><div class="test-hero__top"><div><div class="test-kicker">Results Summary</div><h1 class="test-title">' + result.chapterName + " - " + result.levelName + ' recap</h1><p class="test-subtitle">This summary closes the formative loop by highlighting strengths, weak areas, and the most efficient next step.</p></div><div class="results-trend">' + result.trendText + "</div></div><div class=\"result-stats-grid\">" + renderResultStat("Score", result.score + " / " + result.maxScore) + renderResultStat("Accuracy", Math.round(result.accuracy * 100) + "%") + renderResultStat("Hints used", result.hintsUsed) + renderResultStat("Reward", result.starsEarned + " stars") + "</div></section>" +
      '<div class="test-grid test-grid--results">' +
        renderResultsCard("Performance overview", '<p class="results-copy">Completed <strong>' + result.totalQuestions + "</strong> questions. Best streak this round: <strong>" + result.bestStreak + "</strong>. Badge earned: <strong>" + (result.badgeAwarded || "No new badge this round") + "</strong>.</p>") +
        '<div class="results-split">' +
          renderResultsCard("Strengths", '<div class="results-list">' + result.strengths.map(function (item) { return '<div class="results-list__item"><strong>' + item + '</strong><div class="results-copy">You answered this topic confidently enough to keep moving.</div></div>'; }).join("") + "</div>") +
          renderResultsCard("Weak Areas", '<div class="results-list">' + result.weakAreas.map(function (item) { return '<div class="results-list__item"><strong>' + item + '</strong><div class="results-copy">Review this topic before trying a harder route.</div></div>'; }).join("") + "</div>") +
        "</div>" +
        renderResultsCard("Recommended review topics", '<ul class="test-note-list">' + result.reviewTopics.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>") +
        renderResultsCard("Next actions", '<div class="result-actions">' +
          renderLinkButton("Retry This Level", buildUrl("test-quiz.html", { chapter: result.chapter, level: result.level, unit: result.unit, fresh: "1" }), "test-link-btn--primary") +
          renderLinkButton("Try Next Level", nextLevel ? buildUrl("test.html", { chapter: result.chapter, level: nextLevel.id }) : buildUrl("test.html", { chapter: result.chapter, level: result.level }), "test-link-btn--soft") +
          renderLinkButton("Review Mistakes", buildUrl("test-mistakes.html", { chapter: result.chapter, level: result.level }), "test-link-btn--soft") +
          renderLinkButton("Back to Map", buildUrl("test.html", { chapter: result.chapter, level: result.level }), "test-link-btn--soft") +
          renderLinkButton("Review Recommended Topics", "learning.html", "test-link-btn--soft") +
        "</div>") +
      "</div>";
  }

  function renderMistakesPage() {
    var chapterFilter = getMistakeChapterFilter();
    var levelFilter = getMistakeLevelFilter();
    var statusFilter = getMistakeStatusFilter();
    var visible = getVisibleMistakes(chapterFilter, levelFilter, statusFilter);
    var totalMistakes = getVisibleMistakes(chapterFilter, levelFilter, "all");
    var reviewedCount = totalMistakes.filter(function (item) { return item.mastered; }).length;
    var pendingCount = totalMistakes.length - reviewedCount;
    var suggestions = getMistakeSuggestions(totalMistakes);

    applyChapterTheme(chapterFilter === "all" ? state.selection.chapter : chapterFilter);

    rootEl.innerHTML =
      '<section class="mistakes-shell">' +
        '<div class="mistakes-overview">' +
          renderMistakeMetric("Total mistakes", totalMistakes.length, "mistakes-metric--total") +
          renderMistakeMetric("Reviewed", reviewedCount, "mistakes-metric--reviewed") +
          renderMistakeMetric("Pending review", pendingCount, "mistakes-metric--pending") +
        "</div>" +
        '<section class="results-card mistakes-filter-card"><div class="mistakes-filters"><div class="mistakes-filter"><label for="mistake-chapter">Chapter</label>' + renderChapterFilter(chapterFilter) + '</div><div class="mistakes-filter"><label for="mistake-level">Difficulty</label>' + renderLevelFilter(levelFilter) + '</div><div class="mistakes-filter"><label for="mistake-status">Status</label>' + renderStatusFilter(statusFilter) + '</div></div></section>' +
        (visible.length ? '<div class="mistake-list">' + visible.map(renderMistakeCard).join("") + "</div>" : '<section class="results-card"><div class="quiz-empty">No saved mistakes match the current filters yet.</div></section>') +
        renderResultsCard("Study suggestions", '<ul class="test-note-list">' + suggestions.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>") +
        '<div class="test-cta-row">' + renderLinkButton("Back to map", buildUrl("test.html", { chapter: chapterFilter === "all" ? state.selection.chapter : chapterFilter, level: levelFilter === "all" ? state.selection.level : levelFilter }), "test-link-btn--soft") + "</div>" +
      "</section>";
  }

  function ensureQuizSession() {
    var params = getParams();
    var chapterId = params.chapter && getChapter(params.chapter) ? params.chapter : state.selection.chapter;
    var levelId = params.level && getLevel(params.level) ? params.level : state.selection.level;
    var unitId = params.unit || getCurrentUnitId(chapterId, levelId);
    var mode = params.mode === "review" ? "review" : "path";
    var ids = params.ids ? params.ids.split(",").filter(Boolean) : [];
    var baseSignature = [chapterId, levelId, unitId, mode, ids.join("|")].join("::");

    state.selection.chapter = chapterId;
    state.selection.level = levelId;

    if (params.fresh !== "1" && state.currentQuiz && state.currentQuiz.baseSignature === baseSignature) {
      return state.currentQuiz;
    }

    var questions = mode === "review" ? getReviewQuestions(chapterId, levelId, ids) : getUnitQuestions(chapterId, levelId, unitId);
    if (!questions.length) return null;

    state.currentQuiz = {
      baseSignature: baseSignature,
      chapterId: chapterId,
      levelId: levelId,
      unitId: unitId,
      mode: mode,
      questions: questions,
      currentIndex: 0,
      drafts: {},
      submitted: {},
      revealedHints: {},
      score: 0,
      correctCount: 0,
      currentStreak: 0,
      bestStreak: 0
    };
    saveState();
    return state.currentQuiz;
  }

  function setDraftAnswer(value) {
    var quiz = state.currentQuiz;
    if (!quiz) return;
    var question = quiz.questions[quiz.currentIndex];
    if (!question || quiz.submitted[question.id] || question.type === "sort") return;
    quiz.drafts[question.id] = value;
    saveState();
    renderPage();
  }

  function addSortItem(value) {
    var quiz = state.currentQuiz;
    if (!quiz) return;
    var question = quiz.questions[quiz.currentIndex];
    if (!question || question.type !== "sort" || quiz.submitted[question.id]) return;
    var draft = Array.isArray(quiz.drafts[question.id]) ? quiz.drafts[question.id] : [];
    if (draft.indexOf(value) === -1) draft.push(value);
    quiz.drafts[question.id] = draft;
    saveState();
    renderPage();
  }

  function removeSortItem(index) {
    var quiz = state.currentQuiz;
    if (!quiz) return;
    var question = quiz.questions[quiz.currentIndex];
    if (!question || question.type !== "sort" || quiz.submitted[question.id]) return;
    var draft = Array.isArray(quiz.drafts[question.id]) ? quiz.drafts[question.id].slice() : [];
    draft.splice(index, 1);
    quiz.drafts[question.id] = draft;
    saveState();
    renderPage();
  }

  function resetSortDraft() {
    var quiz = state.currentQuiz;
    if (!quiz) return;
    var question = quiz.questions[quiz.currentIndex];
    if (!question || question.type !== "sort") return;
    quiz.drafts[question.id] = [];
    saveState();
    renderPage();
  }

  function handleQuizAction(action) {
    var quiz = state.currentQuiz;
    if (!quiz) return;
    var question = quiz.questions[quiz.currentIndex];
    if (!question) return;

    if (action === "hint") {
      quiz.revealedHints[question.id] = true;
      saveState();
      renderPage();
      return;
    }
    if (action === "submit") {
      submitCurrentQuestion();
      return;
    }
    if (action === "next") {
      if (quiz.currentIndex >= quiz.questions.length - 1) return finalizeQuiz();
      quiz.currentIndex += 1;
      saveState();
      renderPage();
    }
  }

  function submitCurrentQuestion() {
    var quiz = state.currentQuiz;
    if (!quiz) return;
    var question = quiz.questions[quiz.currentIndex];
    var draft = quiz.drafts[question.id];
    if (!hasAnswer(question, draft)) return;

    var correct = evaluate(question, draft);
    var usedHint = !!quiz.revealedHints[question.id];
    var points = correct ? Math.max(LEVEL_POINTS[quiz.levelId] - (usedHint ? 4 : 0), 4) : 0;

    quiz.submitted[question.id] = {
      selected: draft,
      isCorrect: correct,
      usedHint: usedHint,
      points: points
    };

    if (correct) {
      quiz.score += points;
      quiz.correctCount += 1;
      quiz.currentStreak += 1;
      quiz.bestStreak = Math.max(quiz.bestStreak, quiz.currentStreak);
      if (quiz.mode === "review") markMistakeReviewed(question.id);
    } else {
      quiz.currentStreak = 0;
      upsertMistake(question, quiz, buildMistakeReason(question));
    }

    saveState();
    renderPage();
  }

  function finalizeQuiz() {
    var quiz = state.currentQuiz;
    if (!quiz) return;
    var result = buildResult(quiz);
    state.history.unshift(result);
    state.history = state.history.slice(0, 20);
    state.lastResult = result;
    updateProgress(result);
    updateRewards(result);
    state.currentQuiz = null;
    saveState();
    window.location.href = buildUrl("test-results.html", { chapter: result.chapter, level: result.level, resultId: result.id });
  }

  function buildResult(quiz) {
    var answered = Object.keys(quiz.submitted).length;
    var accuracy = answered ? quiz.correctCount / answered : 0;
    var previous = getLatestHistory(quiz.chapterId, quiz.levelId);
    var weakTopics = [];
    var strongTopics = [];
    quiz.questions.forEach(function (question) {
      if (quiz.submitted[question.id] && quiz.submitted[question.id].isCorrect) strongTopics.push(question.topic);
      if (quiz.submitted[question.id] && !quiz.submitted[question.id].isCorrect) weakTopics.push(question.reviewTopic);
    });

    return {
      id: "result-" + Date.now(),
      chapter: quiz.chapterId,
      chapterName: getChapter(quiz.chapterId).name,
      level: quiz.levelId,
      levelName: getLevel(quiz.levelId).name,
      unit: quiz.unitId,
      mode: quiz.mode,
      score: quiz.score,
      maxScore: quiz.questions.length * LEVEL_POINTS[quiz.levelId],
      accuracy: accuracy,
      correctCount: quiz.correctCount,
      totalQuestions: quiz.questions.length,
      hintsUsed: Object.keys(quiz.revealedHints).length,
      starsEarned: Math.max(1, Math.round(accuracy * 3)),
      badgeAwarded: accuracy >= 0.9 ? buildBadgeName(quiz.chapterId) : null,
      bestStreak: quiz.bestStreak,
      strengths: unique(strongTopics).slice(0, 3).length ? unique(strongTopics).slice(0, 3) : [quiz.questions[0].topic],
      weakAreas: unique(weakTopics).slice(0, 3).length ? unique(weakTopics).slice(0, 3) : ["No major weak area detected"],
      reviewTopics: unique(weakTopics).length ? unique(weakTopics) : ["You can progress to the next path or revisit the map for confidence."],
      trendText: buildTrend(previous, accuracy, quiz.mode),
      timestamp: new Date().toISOString()
    };
  }

  function updateProgress(result) {
    var progress = state.progress[result.chapter][result.level];
    progress.lastScore = result.score;
    progress.accuracy = result.accuracy;
    progress.lastPlayed = result.timestamp;
    if (result.mode === "path" && progress.completedUnits.indexOf(result.unit) === -1) {
      progress.completedUnits.push(result.unit);
      var nextUnit = UNIT_TEMPLATES[result.level][progress.completedUnits.length];
      progress.currentUnit = nextUnit ? nextUnit.id : UNIT_TEMPLATES[result.level][UNIT_TEMPLATES[result.level].length - 1].id;
    }
  }

  function updateRewards(result) {
    state.rewards.stars += result.starsEarned;
    state.rewards.streak = result.accuracy >= 0.7 ? state.rewards.streak + 1 : 1;
    if (result.badgeAwarded && state.rewards.badges.indexOf(result.badgeAwarded) === -1) state.rewards.badges.push(result.badgeAwarded);
  }

  function getUnits(chapterId, levelId) {
    var progress = state.progress[chapterId][levelId];
    var focusList = getChapter(chapterId).focuses[levelId];
    var mistakes = getVisibleMistakes(chapterId, levelId);
    return UNIT_TEMPLATES[levelId].map(function (template, index) {
      var complete = progress.completedUnits.indexOf(template.id) !== -1;
      var current = progress.currentUnit === template.id;
      var review = template.kind === "review" && mistakes.length > 0 && !complete;
      return {
        id: template.id,
        kind: template.kind,
        label: template.label,
        short: template.short,
        taskLabel: template.taskLabel,
        focus: focusList[index] || focusList[focusList.length - 1],
        status: complete ? "complete" : current ? "current" : review ? "review" : "locked",
        href: template.kind === "review" ? buildUrl("test-mistakes.html", { chapter: chapterId, level: levelId }) : buildUrl("test-quiz.html", { chapter: chapterId, level: levelId, unit: template.id, fresh: "1" })
      };
    });
  }

  function getProgressSnapshot(chapterId, levelId) {
    return {
      chapterRate: Math.round(getChapterCompletion(chapterId) * 100) + "%",
      levelRate: Math.round(getLevelCompletion(chapterId, levelId) * 100) + "%",
      overallAccuracy: state.history.length ? Math.round(state.history.reduce(function (sum, item) { return sum + item.accuracy; }, 0) / state.history.length * 100) + "%" : "0%",
      lastScore: state.progress[chapterId][levelId].lastScore ? state.progress[chapterId][levelId].lastScore + " pts" : "No score yet"
    };
  }

  function getChapterCompletion(chapterId) { return LEVEL_ORDER.reduce(function (sum, levelId) { return sum + getLevelCompletion(chapterId, levelId); }, 0) / LEVEL_ORDER.length; }
  function getLevelCompletion(chapterId, levelId) { return state.progress[chapterId][levelId].completedUnits.length / UNIT_TEMPLATES[levelId].length; }
  function getQuickLinks(chapterId, levelId) {
    var latest = getLatestHistory(chapterId, levelId);
    var currentQuizLink = state.currentQuiz && state.currentQuiz.chapterId === chapterId && state.currentQuiz.levelId === levelId
      ? buildUrl("test-quiz.html", {
          chapter: state.currentQuiz.chapterId,
          level: state.currentQuiz.levelId,
          unit: state.currentQuiz.unitId,
          mode: state.currentQuiz.mode === "review" ? "review" : "",
          fresh: ""
        })
      : buildUrl("test-quiz.html", { chapter: chapterId, level: levelId, unit: getCurrentUnitId(chapterId, levelId), fresh: "1" });

    return {
      continueHref: currentQuizLink,
      mistakesHref: buildUrl("test-mistakes.html", { chapter: chapterId, level: levelId }),
      summaryHref: latest ? buildUrl("test-results.html", { chapter: chapterId, level: levelId, resultId: latest.id }) : "#"
    };
  }
  function getCurrentUnitId(chapterId, levelId) { return state.progress[chapterId][levelId].currentUnit || UNIT_TEMPLATES[levelId][0].id; }

  function getUnitQuestions(chapterId, levelId, unitId) {
    var set = QUESTION_DATA[chapterId][levelId];
    var unitIndex = Math.max(1, Number(unitId.split("-")[1]) || 1) - 1;
    var pool = [
      makeQuestion("mcq", set.topics[0], set.mcqPrompt, set.mcqOptions, set.mcqCorrect, set.reviewTopics[0], chapterId, levelId, unitId),
      makeQuestion("true-false", set.topics[1], set.tfPrompt, ["True", "False"], set.tfCorrect ? "True" : "False", set.reviewTopics[1], chapterId, levelId, unitId),
      makeQuestion("image", set.topics[2], set.imagePrompt, set.imageOptions, set.imageCorrect, set.reviewTopics[2], chapterId, levelId, unitId),
      makeQuestion("sort", set.topics[3], set.sortPrompt, set.sortItems, set.sortItems, set.reviewTopics[3], chapterId, levelId, unitId),
      makeQuestion("mcq", set.topics[4], set.bonusPrompt, set.bonusOptions, set.bonusCorrect, set.reviewTopics[4], chapterId, levelId, unitId)
    ];
    var ordered = [];
    for (var i = 0; i < 4; i += 1) ordered.push(clone(pool[(unitIndex + i) % pool.length]));
    ordered.forEach(function (question, index) { question.id = chapterId + "-" + levelId + "-" + unitId + "-q" + (index + 1); });
    return ordered;
  }

  function makeQuestion(type, topic, prompt, options, correct, reviewTopic, chapterId, levelId, unitId) {
    return {
      type: type,
      topic: topic,
      prompt: prompt,
      options: options,
      correct: correct,
      reviewTopic: reviewTopic,
      objective: getUnitFocus(chapterId, levelId, unitId),
      explanation: type === "sort" ? "This sequence matters because the process becomes easier to repeat and explain once the order is clear." : "The correct answer depends on the key concept in this topic. Review topic: " + reviewTopic + ".",
      hint: type === "image" ? "Focus on contrast, clarity, and context before visual excitement." : "Pause and match the answer to the core idea in " + reviewTopic + "."
    };
  }

  function getReviewQuestions(chapterId, levelId, ids) {
    return state.mistakes.filter(function (item) {
      var chapterMatch = !chapterId || item.chapter === chapterId;
      var levelMatch = !levelId || item.level === levelId;
      var idMatch = !ids.length || ids.indexOf(item.id) !== -1;
      return chapterMatch && levelMatch && idMatch;
    }).map(function (item) { return clone(item.questionSnapshot); });
  }

  function hasAnswer(question, draft) { return question.type === "sort" ? Array.isArray(draft) && draft.length === question.correct.length : typeof draft === "string" && draft.length > 0; }
  function evaluate(question, draft) { return question.type === "sort" ? JSON.stringify(draft) === JSON.stringify(question.correct) : draft === question.correct; }
  function buildMistakeReason(question) { return question.type === "sort" ? "The sequence needs another pass before the process feels automatic." : question.type === "image" ? "Review which visual option best supports the communication goal." : question.type === "true-false" ? "Slow down and check the principle hidden inside the statement." : "Revisit the key distinction in this topic before the next attempt."; }

  function renderQuestionBody(question, draft) {
    if (question.type === "image") {
      return '<div class="quiz-image-options">' + question.options.map(function (option) { return '<button type="button" class="quiz-image-option' + (draft === option.id ? " is-selected" : "") + '" data-answer-value="' + option.id + '"><span class="quiz-image-option__swatch" style="background:' + option.swatch + ';"></span><strong>' + option.label + "</strong></button>"; }).join("") + "</div>";
    }
    if (question.type === "sort") {
      var selected = Array.isArray(draft) ? draft : [];
      var remaining = question.options.filter(function (item) { return selected.indexOf(item) === -1; });
      return '<div class="quiz-sort-shell"><div class="quiz-sort-pool">' + remaining.map(function (item) { return '<button type="button" class="quiz-sort-chip" data-sort-add="' + item + '">' + item + "</button>"; }).join("") + '</div><div class="quiz-sort-slots">' + question.correct.map(function (item, index) { return '<div class="quiz-slot' + (selected[index] ? " is-filled" : "") + '"><span class="quiz-slot__index">Step ' + (index + 1) + '</span>' + (selected[index] ? '<div class="test-inline-meta"><strong>' + selected[index] + '</strong><button type="button" class="test-inline-btn" data-sort-remove="' + index + '">Remove</button></div>' : "<span>Choose an item for this position.</span>") + "</div>"; }).join("") + '</div><button type="button" class="test-inline-btn" data-sort-reset>Reset order</button></div>';
    }
    return '<div class="quiz-options">' + question.options.map(function (option) { return '<button type="button" class="quiz-option' + (draft === option ? " is-selected" : "") + '" data-answer-value="' + option + '">' + option + "</button>"; }).join("") + "</div>";
  }

  function renderHintBlock(question, quiz) { return quiz.revealedHints[question.id] ? '<div class="quiz-empty"><strong>Hint:</strong> ' + question.hint + '<br /><span>This keeps the practice formative, but lowers the points available for a correct answer.</span></div>' : ""; }
  function renderFeedback(question, result) { return '<div class="quiz-feedback ' + (result.isCorrect ? "is-correct" : "is-wrong") + '"><h2 class="quiz-feedback__title">' + (result.isCorrect ? "Correct answer" : "Review this concept") + '</h2><p class="quiz-feedback__copy"><strong>Explanation:</strong> ' + question.explanation + '</p><p class="quiz-feedback__copy"><strong>Knowledge point:</strong> ' + question.objective + '</p><p class="quiz-feedback__copy"><strong>Review topic:</strong> ' + question.reviewTopic + '</p>' + (result.usedHint ? '<p class="quiz-feedback__copy"><strong>Hint impact:</strong> Some points were traded for guidance on this question.</p>' : "") + "</div>"; }
  function renderMapNode(unit, index) { var align = index % 3 === 0 ? "test-map-node--center" : index % 2 === 0 ? "test-map-node--right" : ""; var statusLabel = unit.status === "complete" ? "Done" : unit.status === "current" ? "Start here" : unit.status === "review" ? "Review" : "Locked"; return '<div class="test-map-node ' + align + '"><a class="test-map-node__card is-' + unit.status + '" href="' + (unit.status === "locked" ? "#" : unit.href) + '"' + (unit.status === "locked" ? ' aria-disabled="true"' : "") + '><span class="test-map-node__button is-' + unit.status + '">' + unit.short + '</span><span><span class="test-map-node__eyebrow">' + unit.kind + '</span><h3 class="test-map-node__title">' + unit.label + '</h3><p class="test-map-node__meta">' + unit.focus + " - " + unit.taskLabel + '</p></span><span class="test-map-node__status">' + statusLabel + "</span></a></div>"; }
  function renderMistakeCard(mistake) {
    var explanationOpen = !!mistake.showExplanation;
    return '<article class="mistake-card mistake-card--review"><div class="mistake-item__header"><div><div class="test-inline-meta"><span class="mistake-tag">' + getLevel(mistake.level).name + '</span><span class="mistake-tag">' + mistake.topic + '</span><span class="mistake-tag">' + (mistake.mastered ? "Reviewed" : "Pending") + '</span></div><h3 class="mistake-card__title">' + mistake.prompt + '</h3></div></div><div class="mistake-answer-panels"><div class="mistake-answer-panel is-wrong"><span class="mistake-answer-panel__label">Your answer</span><strong>' + getMistakeUserAnswer(mistake) + '</strong></div><div class="mistake-answer-panel is-correct"><span class="mistake-answer-panel__label">Correct answer</span><strong>' + getMistakeCorrectAnswer(mistake) + '</strong></div></div>' + (explanationOpen ? '<div class="mistake-explanation"><strong>Explanation:</strong> ' + mistake.correctConcept + '<br /><span class="test-card-copy">' + mistake.mistakeReason + '</span></div>' : "") + '<div class="mistake-item__footer"><div class="mistake-item__meta"><span>Attempts: ' + (mistake.attemptCount || 1) + '</span><span>Last attempt: ' + formatDate(mistake.lastWrongAt) + '</span></div><div class="mistake-item__controls"><button type="button" class="test-inline-btn" data-toggle-explanation="' + mistake.id + '">' + (explanationOpen ? "Hide explanation" : "View explanation") + '</button><button type="button" class="test-action test-action--primary" data-mark-mastered="' + mistake.id + '">' + (mistake.mastered ? "Mark as pending" : "Mark reviewed") + '</button></div></div></article>';
  }
  function renderSidebarCard(title, inner) { return '<section class="test-sidebar-card"><h3 class="test-card-title">' + title + "</h3>" + inner + "</section>"; }
  function renderResultsCard(title, inner) { return '<section class="results-card"><h2 class="results-card__title">' + title + "</h2>" + inner + "</section>"; }
  function renderMistakeMetric(label, value, extraClass) { return '<section class="mistakes-metric ' + (extraClass || "") + '"><span class="mistakes-metric__label">' + label + '</span><strong class="mistakes-metric__value">' + value + "</strong></section>"; }
  function renderChoiceChip(label, attrs, active) { return '<button type="button" class="test-chip' + (active ? " is-active" : "") + '" ' + attrs + ">" + label + "</button>"; }
  function renderLinkButton(label, href, extraClass) { var disabled = extraClass && extraClass.indexOf("is-disabled") !== -1; return '<a class="test-link-btn ' + (extraClass || "") + '" href="' + (disabled ? "#" : href) + '"' + (disabled ? ' aria-disabled="true"' : "") + ">" + label + "</a>"; }
  function renderActionButton(label, action, disabled, locked) { return '<button type="button" class="' + (action === "next" ? "test-action test-action--primary" : "test-action test-action--soft") + '" data-quiz-action="' + action + '"' + (disabled || locked ? " disabled" : "") + ">" + label + "</button>"; }
  function renderMapChapterSelect(current) { return '<select class="test-map-topbar__select" data-map-select="chapter">' + CHAPTERS.map(function (item) { return '<option value="' + item.id + '"' + (current === item.id ? " selected" : "") + ">" + item.name + "</option>"; }).join("") + "</select>"; }
  function renderMapLevelSelect(current) { return '<select class="test-map-topbar__select" data-map-select="level">' + LEVELS.map(function (item) { return '<option value="' + item.id + '"' + (current === item.id ? " selected" : "") + ">" + item.name + "</option>"; }).join("") + "</select>"; }
  function renderChapterFilter(current) { return '<select id="mistake-chapter" data-mistake-filter="chapter"><option value="all"' + (current === "all" ? " selected" : "") + '>All chapters</option>' + CHAPTERS.map(function (item) { return '<option value="' + item.id + '"' + (current === item.id ? " selected" : "") + ">" + item.name + "</option>"; }).join("") + "</select>"; }
  function renderLevelFilter(current) { return '<select id="mistake-level" data-mistake-filter="level"><option value="all"' + (current === "all" ? " selected" : "") + '>All levels</option>' + LEVELS.map(function (item) { return '<option value="' + item.id + '"' + (current === item.id ? " selected" : "") + ">" + item.name + "</option>"; }).join("") + "</select>"; }
  function renderStatusFilter(current) { return '<select id="mistake-status" data-mistake-filter="status"><option value="all"' + (current === "all" ? " selected" : "") + '>All status</option><option value="pending"' + (current === "pending" ? " selected" : "") + '>Pending</option><option value="reviewed"' + (current === "reviewed" ? " selected" : "") + '>Reviewed</option></select>'; }
  function getMistakeChapterFilter() { var params = getParams(); return params.chapter && getChapter(params.chapter) ? params.chapter : "all"; }
  function getMistakeLevelFilter() { var params = getParams(); return params.level && getLevel(params.level) ? params.level : "all"; }
  function getMistakeStatusFilter() { var params = getParams(); return params.status === "pending" || params.status === "reviewed" ? params.status : "all"; }
  function renderStat(label, value) { return '<div class="test-stat"><span class="test-stat__label">' + label + '</span><span class="test-stat__value">' + value + "</span></div>"; }
  function renderResultStat(label, value) { return '<div class="result-stat"><span class="result-stat__label">' + label + '</span><span class="result-stat__value">' + value + "</span></div>"; }
  function renderQuizMini(label, value) { return '<div class="quiz-mini"><span class="quiz-mini__label">' + label + '</span><span class="quiz-mini__value">' + value + "</span></div>"; }

  function getParams() { var search = window.location.search.replace(/^\?/, ""); if (!search) return {}; return search.split("&").reduce(function (acc, item) { var parts = item.split("="); acc[decodeURIComponent(parts[0] || "")] = decodeURIComponent(parts.slice(1).join("=") || ""); return acc; }, {}); }
  function buildUrl(path, params) { var query = Object.keys(params || {}).filter(function (key) { return params[key]; }).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]); }).join("&"); return query ? path + "?" + query : path; }
  function syncSelectionFromQuery() { var params = getParams(); if (params.chapter && getChapter(params.chapter)) state.selection.chapter = params.chapter; if (params.level && getLevel(params.level)) state.selection.level = params.level; saveState(); }
  function resolveChapterId() { var params = getParams(); return params.chapter || state.selection.chapter || "basics"; }
  function applyChapterTheme(chapterId) { var chapter = getChapter(chapterId) || CHAPTERS[0]; mainEl.style.setProperty("--theme-stop-2", chapter.colors.primary); mainEl.style.setProperty("--theme-stop-3", chapter.colors.secondary); mainEl.style.setProperty("--color-primary", chapter.colors.primary); mainEl.style.setProperty("--test-border", chapter.colors.border); }
  function getChapter(id) { return CHAPTERS.find(function (item) { return item.id === id; }) || null; }
  function getLevel(id) { return LEVELS.find(function (item) { return item.id === id; }) || null; }
  function getNextLevel(id) { var index = LEVEL_ORDER.indexOf(id); return index >= 0 && index < LEVEL_ORDER.length - 1 ? getLevel(LEVEL_ORDER[index + 1]) : null; }
  function getUnitFocus(chapterId, levelId, unitId) { var list = getChapter(chapterId).focuses[levelId]; var index = Math.max(0, (Number(unitId.split("-")[1]) || 1) - 1); return list[Math.min(index, list.length - 1)]; }
  function getLatestHistory(chapterId, levelId) { return state.history.find(function (item) { return item.chapter === chapterId && item.level === levelId; }) || null; }
  function getRecommendedTopics(chapterId, levelId) { return unique((getLatestHistory(chapterId, levelId) ? getLatestHistory(chapterId, levelId).reviewTopics : []).concat(getVisibleMistakes(chapterId, levelId).map(function (item) { return item.reviewTopic; }))).slice(0, 4); }
  function getVisibleMistakes(chapterId, levelId, status) { return state.mistakes.filter(function (item) { var chapterMatch = !chapterId || chapterId === "all" || item.chapter === chapterId; var levelMatch = !levelId || levelId === "all" || item.level === levelId; var statusMatch = !status || status === "all" || (status === "reviewed" ? item.mastered : !item.mastered); return chapterMatch && levelMatch && statusMatch; }); }
  function labelForType(type) { return type === "true-false" ? "True / False" : type === "image" ? "Image Choice" : type === "sort" ? "Sort" : "MCQ"; }
  function formatDate(value) { try { return value ? new Date(value).toLocaleDateString(undefined, { month: "short", day: "numeric" }) : "Not yet"; } catch (e) { return value; } }
  function unique(items) { return items.filter(function (item, index) { return item && items.indexOf(item) === index; }); }
  function buildTrend(previous, accuracy, mode) { if (!previous) return "This is your first recorded attempt for this path."; if (mode === "review") return "Review mode completed. Use the map to test the full path again."; var diff = Math.round((accuracy - previous.accuracy) * 100); return diff > 0 ? "Up " + diff + "% from the previous attempt." : diff < 0 ? "Down " + Math.abs(diff) + "% from the previous attempt. Use the review loop before moving on." : "Steady performance compared with the previous attempt."; }
  function buildBadgeName(chapterId) { return chapterId === "basics" ? "Contrast Keeper" : chapterId === "models" ? "Output Strategist" : "Meaning Steward"; }
  function createMistakeRecord(question, session, reason, timestamp) { return { id: "mistake-" + question.id, chapter: session.chapterId, level: session.levelId, unit: session.unitId, topic: question.topic, reviewTopic: question.reviewTopic, questionType: question.type, prompt: question.prompt, correctConcept: question.explanation, mistakeReason: reason, mastered: false, questionSnapshot: clone(question), lastWrongAt: timestamp, attemptCount: 1, userAnswer: "", reviewedAt: "", showExplanation: false }; }
  function upsertMistake(question, quiz, reason) { var existing = state.mistakes.find(function (item) { return item.questionSnapshot.id === question.id; }); if (existing) { existing.mastered = false; existing.reviewedAt = ""; existing.lastWrongAt = new Date().toISOString(); existing.mistakeReason = reason; existing.attemptCount = (existing.attemptCount || 1) + 1; existing.userAnswer = stringifyMistakeAnswer(quiz.drafts[question.id]); existing.showExplanation = false; return; } var next = createMistakeRecord(question, quiz, reason, new Date().toISOString()); next.userAnswer = stringifyMistakeAnswer(quiz.drafts[question.id]); state.mistakes.unshift(next); state.mistakes = state.mistakes.slice(0, 40); }
  function markMistakeReviewed(questionId) { var item = state.mistakes.find(function (mistake) { return mistake.questionSnapshot.id === questionId; }); if (item) { item.mastered = true; item.reviewedAt = new Date().toISOString(); } }
  function toggleMastered(id) { var item = state.mistakes.find(function (mistake) { return mistake.id === id; }); if (!item) return; item.mastered = !item.mastered; item.reviewedAt = item.mastered ? new Date().toISOString() : ""; saveState(); renderPage(); }
  function toggleMistakeExplanation(id) { var item = state.mistakes.find(function (mistake) { return mistake.id === id; }); if (!item) return; item.showExplanation = !item.showExplanation; saveState(); renderPage(); }
  function stringifyMistakeAnswer(answer) { if (Array.isArray(answer)) return answer.join(" -> "); if (answer && typeof answer === "object") return answer.label || answer.id || JSON.stringify(answer); return answer || "No answer recorded"; }
  function getMistakeUserAnswer(mistake) { return mistake.userAnswer || "No answer recorded"; }
  function getMistakeCorrectAnswer(mistake) { return stringifyMistakeAnswer(mistake.questionSnapshot.correct); }
  function getMistakeSuggestions(items) { if (!items.length) return ["Great job keeping the mistake list clear. Continue with a fresh path quiz to build momentum."]; return unique(items.map(function (item) { return item.reviewTopic; })).slice(0, 3).map(function (topic) { return "Review " + topic + " and then retry one related question without hints."; }); }
  function getResultForPage() { var params = getParams(); if (params.resultId) { var match = state.history.find(function (item) { return item.id === params.resultId; }); if (match) return match; } if (params.chapter && params.level) { var filtered = getLatestHistory(params.chapter, params.level); if (filtered) return filtered; } return state.lastResult || state.history[0] || clone(DEFAULT_STATE.lastResult); }
})();
