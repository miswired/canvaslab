/* ============================================================
   Lean Canvas Builder — Application Logic
   ============================================================ */

// === Help Content ===
// Fictional startup "FreshPlate" used consistently across all examples:
// A meal-planning and grocery-list app for busy professionals.

const HELP_CONTENT = {
  problem: {
    what: 'List the top 1-3 problems your target customers face. Problems create innovation opportunities — if no problem exists, there\'s no market.',
    how: `<ul>
      <li>List no more than 3 problems — prioritize ruthlessly</li>
      <li>Frame problems from the customer's perspective, not yours</li>
      <li>Talk to real customers to validate these are real problems</li>
      <li>Ask: "What is the most painful part of [doing X]?"</li>
      <li>Problems should be specific and observable, not vague</li>
    </ul>`,
    example: '1. Planning healthy meals weekly is time-consuming and repetitive\n2. Grocery lists are tedious to create and often incomplete\n3. Food waste from buying ingredients that go unused',
    references: [
      { text: 'Lean Canvas Problem Section — Railsware', url: 'https://railsware.com/blog/lean-canvas/' },
      { text: 'Why Lean Canvas vs BMC — Ash Maurya', url: 'https://www.linkedin.com/pulse/why-lean-canvas-vs-business-model-ash-maurya' },
    ],
    tools: [
      { text: 'Google Trends', url: 'https://trends.google.com/' },
      { text: 'AnswerThePublic', url: 'https://answerthepublic.com/' },
      { text: 'SurveyMonkey', url: 'https://www.surveymonkey.com/' },
    ],
  },

  existingAlternatives: {
    what: 'How do customers solve these problems today? Most problems have existing solutions — understanding them is critical. Existing alternatives include direct competitors, workarounds, and "do nothing." Ash Maurya calls this the most important building block on the canvas.',
    how: `<ul>
      <li>Include direct competitors (other products solving the same problem)</li>
      <li>Include indirect alternatives (workarounds, manual processes, spreadsheets)</li>
      <li>Include "do nothing" — sometimes people just live with the problem</li>
      <li>For each alternative, note what's good and what's lacking</li>
      <li>Your solution must be significantly better than these, not just marginally</li>
    </ul>`,
    example: '- Meal kit services (Blue Apron, HelloFresh) — convenient but expensive ($10-12/serving), limited choice, generates packaging waste\n- Pinterest/recipe blogs — free inspiration but no planning, no grocery integration, overwhelming choice\n- Pen and paper / spreadsheets — free but manual, error-prone, tedious to maintain\n- Do nothing — eat out or order delivery, expensive and often unhealthy',
    references: [
      { text: 'Existing Alternatives: The Most Important Block', url: 'https://www.leanfoundry.com/lean-1-2-3/nov-30-2024' },
      { text: 'What is Lean Canvas? — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
    ],
    tools: [
      { text: 'G2 (Competitor Reviews)', url: 'https://www.g2.com/' },
      { text: 'Crunchbase (competitive research)', url: 'https://www.crunchbase.com/' },
      { text: 'SimilarWeb', url: 'https://www.similarweb.com/' },
      { text: 'Product Hunt', url: 'https://www.producthunt.com/' },
    ],
  },

  earlyAdopters: {
    what: 'Early adopters are the specific people most likely to try your product first. They have the problem most urgently, are actively seeking a solution, and are willing to use an imperfect early product. They are NOT your mainstream market.',
    how: `<ul>
      <li>Be specific: describe a real person, not a demographic</li>
      <li>They should have the problem acutely — it's a "hair on fire" problem for them</li>
      <li>They're already trying to solve it with existing alternatives (and frustrated)</li>
      <li>They're reachable — you know where to find them</li>
      <li>They're willing to give feedback and tolerate rough edges</li>
      <li>Don't target mainstream users yet — you need early adopters to validate first</li>
    </ul>`,
    example: 'Dual-income couples (25-35) with no kids who:\n- Already order meal kits but find them too expensive or restrictive\n- Follow food/health influencers on Instagram\n- Have tried and abandoned at least one meal planning method\n- Value healthy eating but feel time-constrained\n- Are comfortable with apps and willing to try new tools',
    references: [
      { text: 'How to Define Early Adopters', url: 'https://www.shortform.com/blog/ash-maurya-lean-canvas/' },
      { text: 'Customer Segments — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
    ],
    tools: [
      { text: 'Reddit (find your niche)', url: 'https://www.reddit.com/' },
      { text: 'SparkToro (Audience Research)', url: 'https://sparktoro.com/' },
      { text: 'Facebook Groups', url: 'https://www.facebook.com/groups/' },
    ],
  },

  customerSegments: {
    what: 'Identify the broader market of people who will benefit from your product. A customer pays for your product; a user may not. Think about demographics, behaviors, and context. Create a separate canvas if you have very different segments.',
    how: `<ul>
      <li>Start narrow, then expand: early adopters first, mainstream later</li>
      <li>Distinguish between users (who use it) and customers (who pay)</li>
      <li>Consider demographics, behaviors, psychographics, and context</li>
      <li>If segments have very different problems, create separate canvases</li>
      <li>Estimate market size: how many people fit this description?</li>
    </ul>`,
    example: 'Busy working professionals (25-45) in urban areas who want to eat healthy but lack time to plan meals and grocery shop.\n\nSecondary: Health-conscious parents managing family meal planning.\n\nMarket size: ~40M US adults who cook at home 3+ times/week and earn $50K+.',
    references: [
      { text: 'Customer Segments — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Running Lean by Ash Maurya', url: 'https://www.leanfoundry.com/running-lean-book' },
    ],
    tools: [
      { text: 'Google Trends', url: 'https://trends.google.com/' },
      { text: 'Census Data Explorer', url: 'https://data.census.gov/' },
      { text: 'SparkToro (Audience Research)', url: 'https://sparktoro.com/' },
      { text: 'Statista', url: 'https://www.statista.com/' },
    ],
  },

  solution: {
    what: 'Sketch the simplest possible solution for each problem. This box is intentionally small — don\'t over-engineer. List your top 3 features, each tied to a specific problem.',
    how: `<ul>
      <li>Map each feature to a specific problem listed above</li>
      <li>Describe the minimum viable approach, not the dream product</li>
      <li>Use plain language — describe what the customer experiences</li>
      <li>Bind to problems as late as possible — stay flexible</li>
      <li>Remember: investors care about traction, customers care about problems — not your solution</li>
    </ul>`,
    example: '1. AI-powered weekly meal plan generator based on dietary preferences and household size (solves Problem #1)\n2. Auto-generated grocery list synced to local store inventory (solves Problem #2)\n3. Smart portioning that adjusts recipes to minimize leftover ingredients (solves Problem #3)',
    references: [
      { text: 'Solution Section — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'MVP Approach — Running Lean', url: 'https://www.leanfoundry.com/running-lean-book' },
    ],
    tools: [
      { text: 'Figma (prototype)', url: 'https://www.figma.com/' },
      { text: 'Balsamiq (wireframes)', url: 'https://balsamiq.com/' },
      { text: 'Miro (brainstorm)', url: 'https://miro.com/' },
    ],
  },

  uvp: {
    what: 'A single, clear, compelling message that explains why you are different and worth paying attention to. Your UVP should connect directly to your #1 problem and target early adopters specifically.',
    how: `<ul>
      <li>Connect it to your #1 problem — what outcome do customers get?</li>
      <li>Target early adopters specifically, not the mainstream</li>
      <li>Focus on the finished result, not features</li>
      <li>Keep it under ~120 characters (headline length)</li>
      <li>Answer: What, Who, and Why</li>
      <li>Use the formula: "We help [customer] achieve [outcome] by [approach]"</li>
    </ul>`,
    example: 'Eat healthy every week without spending hours planning — personalized meal plans and auto-generated grocery lists in 2 minutes.',
    references: [
      { text: 'Crafting a UVP — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Running Lean: UVP Chapter', url: 'https://www.oreilly.com/library/view/running-lean-3rd/9781098108762/ch01.html' },
      { text: 'Value Proposition Design — Strategyzer', url: 'https://www.strategyzer.com/library/the-value-proposition-canvas' },
    ],
    tools: [
      { text: 'Hemingway Editor (clarity)', url: 'https://hemingwayapp.com/' },
      { text: 'CoSchedule Headline Analyzer', url: 'https://coschedule.com/headline-analyzer' },
    ],
  },

  highLevelConcept: {
    what: 'A short, memorable pitch that makes your idea easy to understand and spread. Use an analogy people instantly get. This is your "X for Y" statement — the thing you say at a party when someone asks what your startup does.',
    how: `<ul>
      <li>Use the "X for Y" formula: "[Known thing] for [your market]"</li>
      <li>Keep it to one sentence — if you need more, it's not clear enough</li>
      <li>It should be instantly understandable by anyone, even outside your market</li>
      <li>It should make people curious enough to ask a follow-up question</li>
      <li>It's a communication tool, not a strategy — your UVP is the real substance</li>
    </ul>`,
    example: '"Spotify for meal planning" — personalized, effortless, always fresh.',
    references: [
      { text: 'High-Level Concept — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Running Lean by Ash Maurya', url: 'https://www.leanfoundry.com/running-lean-book' },
    ],
    tools: [
      { text: 'ChatGPT (brainstorm analogies)', url: 'https://chat.openai.com/' },
      { text: 'Hemingway Editor (clarity)', url: 'https://hemingwayapp.com/' },
    ],
  },

  unfairAdvantage: {
    what: 'Something that cannot be easily copied or bought. This is the hardest box to fill — and it\'s okay to leave it blank initially. Real advantages include insider knowledge, network effects, community, personal authority, and existing customers.',
    how: `<ul>
      <li>Ask: "Could a well-funded competitor replicate this in 6 months?"</li>
      <li>If yes, it's not an unfair advantage</li>
      <li><strong>Real advantages:</strong> network effects, insider info, expert endorsements, dream team, community, existing customers, organic SEO</li>
      <li><strong>Not real advantages:</strong> passion, code, features, first-mover advantage</li>
      <li>If you don't have one yet, describe your "unfair advantage story" — what you're building toward</li>
      <li>It's okay to leave this blank and come back to it</li>
    </ul>`,
    example: 'Proprietary taste-preference algorithm trained on 50,000+ user meal ratings (data moat).\n\nBuilding toward: network effects — as more users rate meals, recommendations improve for everyone, creating a virtuous cycle competitors can\'t replicate without the same user base.',
    references: [
      { text: 'Unfair Advantage — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Real vs Fake Advantages — Ash Maurya', url: 'https://www.businessmodelcompetition.com/ash-maurya--lean-canvas.html' },
    ],
    tools: [
      { text: 'Crunchbase (competitive research)', url: 'https://www.crunchbase.com/' },
      { text: 'Google Patents', url: 'https://patents.google.com/' },
    ],
  },

  channels: {
    what: 'How will you reach and acquire your customers? Think about both free and paid channels. Your initial goal is learning (getting in front of customers), not scaling.',
    how: `<ul>
      <li>Start with channels that get you face-to-face with early adopters</li>
      <li>Include both inbound (blog, SEO, content) and outbound (ads, partnerships)</li>
      <li>Think about the full path: awareness → interest → decision → purchase</li>
      <li>Don't just list channels — prioritize the 2-3 you'll try first</li>
      <li>"Failing to build a clear path to customers is among the top reasons startups fail"</li>
    </ul>`,
    example: '- Content marketing: healthy eating blog + SEO\n- Instagram/TikTok: short meal-prep videos\n- Partnerships with fitness apps and gym chains\n- App Store optimization\n- Referral program: invite a friend, both get a free week',
    references: [
      { text: 'Channels — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Traction by Gabriel Weinberg', url: 'https://www.goodreads.com/book/show/22091581-traction' },
    ],
    tools: [
      { text: 'Google Keyword Planner', url: 'https://ads.google.com/home/tools/keyword-planner/' },
      { text: 'Ubersuggest', url: 'https://neilpatel.com/ubersuggest/' },
      { text: 'Meta Ads Library', url: 'https://www.facebook.com/ads/library/' },
      { text: 'SimilarWeb', url: 'https://www.similarweb.com/' },
    ],
  },

  costStructure: {
    what: 'List your costs to build and operate the business. Think in stages: what does it cost to build the MVP, and what is the ongoing monthly burn rate?',
    how: `<ul>
      <li>Focus on the next 3-6 months, not a 5-year forecast</li>
      <li>Calculate two numbers: (1) MVP cost, (2) monthly burn rate</li>
      <li>Include: development, hosting, marketing, salaries, legal, tools</li>
      <li>Compare costs to revenue streams — when do you break even?</li>
      <li>Keep it honest — underestimating costs is a top startup mistake</li>
    </ul>`,
    example: 'MVP Development: $15,000 (3 months, 1 developer)\nHosting/infrastructure: $200/month\nFood/recipe database license: $500/month\nMarketing budget: $1,000/month\nFounder salary: $0 (bootstrapped initially)\n\nMonthly burn rate: ~$1,700\nBreakeven: ~170 premium subscribers',
    references: [
      { text: 'Cost Structure — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Lean Canvas Cost Guide — Railsware', url: 'https://railsware.com/blog/lean-canvas/' },
    ],
    tools: [
      { text: 'Google Sheets (financial model)', url: 'https://sheets.google.com/' },
      { text: 'Causal (financial planning)', url: 'https://www.causal.app/' },
    ],
  },

  revenueStreams: {
    what: 'How will you make money? Price is part of the product — it defines who your customers are and how they perceive quality. Don\'t defer this decision. Revenue distinguishes "a hobby and a business."',
    how: `<ul>
      <li>Define your pricing model: subscription, one-time, freemium, marketplace cut, etc.</li>
      <li>Set a price from day one — getting paid is the hardest validation</li>
      <li>Price defines your customer: $5/mo attracts different people than $50/mo</li>
      <li>Research what customers pay for existing alternatives</li>
      <li>Consider: what would make this a no-brainer purchase?</li>
    </ul>`,
    example: '- Freemium: basic meal plans free, premium features $9.99/month\n- Premium tier: AI-customized plans, grocery delivery integration, family accounts\n- Affiliate revenue: commission from grocery delivery partners\n- Annual plan: $79.99/year (33% discount)',
    references: [
      { text: 'Revenue Streams — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Pricing Strategy — Running Lean', url: 'https://www.leanfoundry.com/running-lean-book' },
    ],
    tools: [
      { text: 'Stripe (payment infrastructure)', url: 'https://stripe.com/' },
      { text: 'PriceIntelligently', url: 'https://www.priceintelligently.com/' },
      { text: 'Competitor pricing research', url: 'https://www.g2.com/' },
    ],
  },

  keyMetrics: {
    what: 'The 3-5 key numbers that tell you how your business is doing in real time. Focus on leading indicators (what predicts success) over trailing indicators (what measures past results).',
    how: `<ul>
      <li>List 3-5 metrics — avoid metric overload</li>
      <li>Prefer outcome metrics (customer behavior) over output metrics (what you built)</li>
      <li>Pick leading indicators: conversion rate, active users, churn — not just revenue</li>
      <li>Define one "minimum success criterion" — the single number that defines success</li>
      <li>Study what metrics matter for your product type (SaaS, marketplace, etc.)</li>
    </ul>`,
    example: '- Weekly active users (WAU)\n- Free-to-paid conversion rate (target: 5%)\n- Weekly meal plans generated per user\n- Monthly churn rate (target: <5%)\n- Customer acquisition cost (CAC) vs. lifetime value (LTV)',
    references: [
      { text: 'Key Metrics — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Lean Analytics by Alistair Croll', url: 'https://www.goodreads.com/book/show/16033602-lean-analytics' },
    ],
    tools: [
      { text: 'Google Analytics', url: 'https://analytics.google.com/' },
      { text: 'Mixpanel', url: 'https://mixpanel.com/' },
      { text: 'Amplitude', url: 'https://amplitude.com/' },
      { text: 'Baremetrics (SaaS metrics)', url: 'https://baremetrics.com/' },
    ],
  },
};

// === Section Metadata (custom fill order — 12 steps) ===
const SECTIONS = [
  { key: 'problem', title: 'Problem' },
  { key: 'existingAlternatives', title: 'Existing Alternatives' },
  { key: 'earlyAdopters', title: 'Early Adopters' },
  { key: 'customerSegments', title: 'Customer Segments' },
  { key: 'solution', title: 'Solution' },
  { key: 'uvp', title: 'Unique Value Proposition' },
  { key: 'highLevelConcept', title: 'High-Level Concept' },
  { key: 'unfairAdvantage', title: 'Unfair Advantage' },
  { key: 'channels', title: 'Channels' },
  { key: 'costStructure', title: 'Cost Structure' },
  { key: 'revenueStreams', title: 'Revenue Streams' },
  { key: 'keyMetrics', title: 'Key Metrics' },
];

// === State ===
const STORAGE_KEY = 'leancanvas_data';
const THEME_KEY = 'leancanvas_theme';

let canvasData = createEmptyCanvas();
let saveTimeout = null;

function createEmptyCanvas() {
  return {
    title: '',
    lastModified: new Date().toISOString(),
    sections: {
      problem: { content: '' },
      existingAlternatives: { content: '' },
      earlyAdopters: { content: '' },
      customerSegments: { content: '' },
      uvp: { content: '' },
      highLevelConcept: { content: '' },
      solution: { content: '' },
      channels: { content: '' },
      revenueStreams: { content: '' },
      costStructure: { content: '' },
      keyMetrics: { content: '' },
      unfairAdvantage: { content: '' },
    },
  };
}

// === Persistence ===
function saveToLocalStorage() {
  canvasData.lastModified = new Date().toISOString();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(canvasData));
  } catch (e) {
    console.warn('Failed to save to localStorage:', e);
  }
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const empty = createEmptyCanvas();
      canvasData = {
        title: parsed.title || '',
        lastModified: parsed.lastModified || new Date().toISOString(),
        sections: {},
      };
      for (const key of Object.keys(empty.sections)) {
        canvasData.sections[key] = { ...empty.sections[key], ...(parsed.sections?.[key] || {}) };
      }
      // Migrate from old format (sub-sections nested inside parent)
      if (parsed.sections?.problem?.existingAlternatives && !parsed.sections?.existingAlternatives) {
        canvasData.sections.existingAlternatives = { content: parsed.sections.problem.existingAlternatives };
      }
      if (parsed.sections?.customerSegments?.earlyAdopters && !parsed.sections?.earlyAdopters) {
        canvasData.sections.earlyAdopters = { content: parsed.sections.customerSegments.earlyAdopters };
      }
      if (parsed.sections?.uvp?.highLevelConcept && !parsed.sections?.highLevelConcept) {
        canvasData.sections.highLevelConcept = { content: parsed.sections.uvp.highLevelConcept };
      }
    }
  } catch (e) {
    console.warn('Failed to load from localStorage:', e);
  }
}

function debouncedSave() {
  const status = document.getElementById('saveStatus');
  status.textContent = 'Saving...';
  status.classList.add('saving');

  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    saveToLocalStorage();
    status.textContent = 'Saved';
    status.classList.remove('saving');
  }, 300);
}

// === Theme ===
function applyTheme(theme) {
  document.body.className = theme;
  document.getElementById('themeSelect').value = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) { /* ignore */ }
}

function loadTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      applyTheme(saved);
    }
  } catch (e) { /* ignore */ }
}

// === Populate Editor ===
function populateEditor() {
  document.getElementById('canvasTitle').value = canvasData.title;
  for (const section of SECTIONS) {
    const field = document.querySelector(`[data-field="${section.key}.content"]`);
    if (field) field.value = canvasData.sections[section.key]?.content || '';
  }
}

// === Read Editor State ===
function readEditorState() {
  canvasData.title = document.getElementById('canvasTitle').value;
  for (const section of SECTIONS) {
    const field = document.querySelector(`[data-field="${section.key}.content"]`);
    if (field) canvasData.sections[section.key].content = field.value;
  }
}

// === Help Panels ===
function renderHelpPanels() {
  for (const section of SECTIONS) {
    const panel = document.getElementById(`help-${section.key}`);
    if (!panel) continue;
    const help = HELP_CONTENT[section.key];
    if (!help) continue;

    let html = '';
    html += `<h4>What is this?</h4><p>${help.what}</p>`;
    html += `<h4>How to fill it out</h4>${help.how}`;
    html += `<h4>Example (FreshPlate — a meal planning app)</h4><div class="help-example">${escapeHtml(help.example)}</div>`;

    if (help.references?.length) {
      html += '<h4>References</h4><div class="help-links">';
      for (const ref of help.references) {
        html += `<a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener">${escapeHtml(ref.text)}</a>`;
      }
      html += '</div>';
    }

    if (help.tools?.length) {
      html += '<h4>Research Tools</h4><div class="help-links">';
      for (const tool of help.tools) {
        html += `<a href="${escapeHtml(tool.url)}" target="_blank" rel="noopener">${escapeHtml(tool.text)}</a>`;
      }
      html += '</div>';
    }

    panel.innerHTML = html;
  }
}

function toggleHelp(sectionKey) {
  const panel = document.getElementById(`help-${sectionKey}`);
  const btn = document.querySelector(`[data-help-toggle="${sectionKey}"]`);
  if (!panel || !btn) return;

  const isHidden = panel.hasAttribute('hidden');
  if (isHidden) {
    panel.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    panel.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  }
}

// === Canvas Generation (View Mode) ===
// The generated canvas still uses the classic Lean Canvas grid layout.
// The 12 editor sections map back into the standard grid cells:
//   Problem cell = problem + existingAlternatives
//   Customer cell = customerSegments + earlyAdopters
//   UVP cell = uvp + highLevelConcept
function generateCanvas() {
  readEditorState();

  const title = canvasData.title || 'Lean Canvas';
  document.getElementById('canvasViewTitle').textContent = title;

  const date = new Date(canvasData.lastModified);
  document.getElementById('canvasDate').textContent =
    `Generated ${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;

  const viewMap = {
    'view-problem': canvasData.sections.problem.content,
    'view-existingAlternatives': canvasData.sections.existingAlternatives.content,
    'view-solution': canvasData.sections.solution.content,
    'view-uvp': canvasData.sections.uvp.content,
    'view-highLevelConcept': canvasData.sections.highLevelConcept.content,
    'view-unfairAdvantage': canvasData.sections.unfairAdvantage.content,
    'view-customerSegments': canvasData.sections.customerSegments.content,
    'view-earlyAdopters': canvasData.sections.earlyAdopters.content,
    'view-keyMetrics': canvasData.sections.keyMetrics.content,
    'view-channels': canvasData.sections.channels.content,
    'view-costStructure': canvasData.sections.costStructure.content,
    'view-revenueStreams': canvasData.sections.revenueStreams.content,
  };

  for (const [id, text] of Object.entries(viewMap)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text || '';
  }

  document.getElementById('editMode').hidden = true;
  document.getElementById('viewMode').hidden = false;
}

function backToEditor() {
  document.getElementById('viewMode').hidden = true;
  document.getElementById('editMode').hidden = false;
}

// === Export / Import ===
function exportJSON() {
  readEditorState();
  saveToLocalStorage();

  const slug = canvasData.title
    ? canvasData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    : 'untitled';
  const dateStr = new Date().toISOString().slice(0, 10);
  const filename = `lean-canvas-${slug}-${dateStr}.json`;

  const blob = new Blob([JSON.stringify(canvasData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed.sections || typeof parsed.sections !== 'object') {
        throw new Error('Missing sections');
      }

      if (!confirm('This will replace your current canvas data. Continue?')) return;

      const empty = createEmptyCanvas();
      canvasData = {
        title: parsed.title || '',
        lastModified: parsed.lastModified || new Date().toISOString(),
        sections: {},
      };
      for (const key of Object.keys(empty.sections)) {
        canvasData.sections[key] = { ...empty.sections[key], ...(parsed.sections[key] || {}) };
      }
      // Migrate from old format
      if (parsed.sections?.problem?.existingAlternatives && !parsed.sections?.existingAlternatives) {
        canvasData.sections.existingAlternatives = { content: parsed.sections.problem.existingAlternatives };
      }
      if (parsed.sections?.customerSegments?.earlyAdopters && !parsed.sections?.earlyAdopters) {
        canvasData.sections.earlyAdopters = { content: parsed.sections.customerSegments.earlyAdopters };
      }
      if (parsed.sections?.uvp?.highLevelConcept && !parsed.sections?.highLevelConcept) {
        canvasData.sections.highLevelConcept = { content: parsed.sections.uvp.highLevelConcept };
      }

      saveToLocalStorage();
      populateEditor();
    } catch (err) {
      alert('Invalid file format. Please select a Lean Canvas JSON export.');
    }
  };
  reader.readAsText(file);
}

function clearCanvas() {
  if (!confirm('Are you sure? This will erase all content.')) return;
  canvasData = createEmptyCanvas();
  saveToLocalStorage();
  populateEditor();
}

// === Utility ===
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// === Event Setup ===
function init() {
  loadFromLocalStorage();
  loadTheme();
  populateEditor();
  renderHelpPanels();

  // Input change listeners (auto-save)
  document.querySelectorAll('[data-field]').forEach((el) => {
    el.addEventListener('input', () => {
      const field = el.dataset.field;
      if (field === 'title') {
        canvasData.title = el.value;
      } else {
        const [section, prop] = field.split('.');
        if (canvasData.sections[section]) {
          canvasData.sections[section][prop] = el.value;
        }
      }
      debouncedSave();
    });
  });

  // Help toggles
  document.querySelectorAll('[data-help-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleHelp(btn.dataset.helpToggle);
    });
  });

  // Theme selector
  document.getElementById('themeSelect').addEventListener('change', (e) => {
    applyTheme(e.target.value);
  });

  // Generate / Back
  document.getElementById('btnGenerate').addEventListener('click', generateCanvas);
  document.getElementById('btnBackToEditor').addEventListener('click', backToEditor);

  // Print
  document.getElementById('btnPrint').addEventListener('click', () => {
    window.print();
  });

  // Export / Import / Clear
  document.getElementById('btnExport').addEventListener('click', exportJSON);
  document.getElementById('btnImport').addEventListener('click', () => {
    document.getElementById('fileImport').click();
  });
  document.getElementById('fileImport').addEventListener('change', (e) => {
    if (e.target.files[0]) {
      importJSON(e.target.files[0]);
      e.target.value = '';
    }
  });
  document.getElementById('btnClear').addEventListener('click', clearCanvas);
}

// Start
document.addEventListener('DOMContentLoaded', init);
