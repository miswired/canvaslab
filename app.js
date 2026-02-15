/* ============================================================
   Lean Canvas Builder — Application Logic
   ============================================================ */

// === Help Content ===
// Fictional startup "FreshPlate" used consistently across all examples:
// A meal-planning and grocery-list app for busy professionals.

const HELP_CONTENT = {
  customerSegments: {
    what: 'Identify who will benefit from your product. A customer pays for your product; a user may not. Focus on early adopters — the specific people most likely to try your product first — not the mainstream market.',
    how: `<ul>
      <li>Start narrow: describe a specific person, not "everyone"</li>
      <li>Distinguish between users (who use it) and customers (who pay)</li>
      <li>Define early adopters: who has the problem most urgently?</li>
      <li>Consider demographics, behaviors, and context</li>
      <li>Create a separate canvas if you have very different segments</li>
    </ul>`,
    example: 'Busy working professionals (25-45) in urban areas who want to eat healthy but lack time to plan meals and grocery shop.\n\nEarly Adopters:\nDual-income couples with no kids who already order meal kits but find them too expensive or restrictive.',
    references: [
      { text: 'Customer Segments — LEANFoundry', url: 'https://www.leanfoundry.com/articles/what-is-lean-canvas' },
      { text: 'Running Lean by Ash Maurya', url: 'https://www.leanfoundry.com/running-lean-book' },
      { text: 'How to Define Early Adopters', url: 'https://www.shortform.com/blog/ash-maurya-lean-canvas/' },
    ],
    tools: [
      { text: 'Google Trends', url: 'https://trends.google.com/' },
      { text: 'Census Data Explorer', url: 'https://data.census.gov/' },
      { text: 'SparkToro (Audience Research)', url: 'https://sparktoro.com/' },
      { text: 'Reddit (find your niche)', url: 'https://www.reddit.com/' },
    ],
  },

  problem: {
    what: 'List the top 1-3 problems your target customers face. Also identify how they currently solve these problems (existing alternatives). Most problems have existing solutions — understanding them is critical.',
    how: `<ul>
      <li>List no more than 3 problems — prioritize ruthlessly</li>
      <li>Frame problems from the customer's perspective, not yours</li>
      <li>For existing alternatives: include direct competitors, workarounds, and "do nothing"</li>
      <li>Talk to real customers to validate these are real problems</li>
      <li>Problems create innovation opportunities — if no problem exists, there's no market</li>
    </ul>`,
    example: '1. Planning healthy meals weekly is time-consuming and repetitive\n2. Grocery lists are tedious to create and often incomplete\n3. Food waste from buying ingredients that go unused\n\nExisting Alternatives:\n- Meal kit services (Blue Apron, HelloFresh) — expensive, limited choice\n- Pinterest/recipe blogs — no planning, no grocery integration\n- Pen and paper / spreadsheets — manual, error-prone',
    references: [
      { text: 'Existing Alternatives: The Most Important Block', url: 'https://www.leanfoundry.com/lean-1-2-3/nov-30-2024' },
      { text: 'Lean Canvas Problem Section — Railsware', url: 'https://railsware.com/blog/lean-canvas/' },
      { text: 'Why Lean Canvas vs BMC — Ash Maurya', url: 'https://www.linkedin.com/pulse/why-lean-canvas-vs-business-model-ash-maurya' },
    ],
    tools: [
      { text: 'Google Trends', url: 'https://trends.google.com/' },
      { text: 'AnswerThePublic', url: 'https://answerthepublic.com/' },
      { text: 'G2 (Competitor Reviews)', url: 'https://www.g2.com/' },
      { text: 'SurveyMonkey', url: 'https://www.surveymonkey.com/' },
    ],
  },

  uvp: {
    what: 'A single, clear, compelling message that explains why you are different and worth paying attention to. Your UVP should connect directly to your #1 problem. The high-level concept is a short pitch (e.g., "YouTube = Flickr for video").',
    how: `<ul>
      <li>Connect it to your #1 problem — what outcome do customers get?</li>
      <li>Target early adopters specifically, not the mainstream</li>
      <li>Focus on the finished result, not features</li>
      <li>Keep it under ~120 characters (headline length)</li>
      <li>Answer: What, Who, and Why</li>
      <li>High-level concept: use an analogy people instantly understand</li>
    </ul>`,
    example: 'Eat healthy every week without spending hours planning — personalized meal plans and auto-generated grocery lists in 2 minutes.\n\nHigh-Level Concept:\n"Spotify for meal planning" — personalized, effortless, always fresh.',
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
};

// === Section Metadata (fill order) ===
const SECTIONS = [
  { key: 'customerSegments', title: 'Customer Segments', sub: { key: 'earlyAdopters', title: 'Early Adopters' } },
  { key: 'problem', title: 'Problem', sub: { key: 'existingAlternatives', title: 'Existing Alternatives' } },
  { key: 'uvp', title: 'Unique Value Proposition', sub: { key: 'highLevelConcept', title: 'High-Level Concept' } },
  { key: 'solution', title: 'Solution' },
  { key: 'channels', title: 'Channels' },
  { key: 'revenueStreams', title: 'Revenue Streams' },
  { key: 'costStructure', title: 'Cost Structure' },
  { key: 'keyMetrics', title: 'Key Metrics' },
  { key: 'unfairAdvantage', title: 'Unfair Advantage' },
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
      problem: { content: '', existingAlternatives: '' },
      customerSegments: { content: '', earlyAdopters: '' },
      uvp: { content: '', highLevelConcept: '' },
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
      // Merge with empty canvas to ensure all fields exist
      const empty = createEmptyCanvas();
      canvasData = {
        title: parsed.title || '',
        lastModified: parsed.lastModified || new Date().toISOString(),
        sections: {},
      };
      for (const key of Object.keys(empty.sections)) {
        canvasData.sections[key] = { ...empty.sections[key], ...(parsed.sections?.[key] || {}) };
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
    const mainField = document.querySelector(`[data-field="${section.key}.content"]`);
    if (mainField) mainField.value = canvasData.sections[section.key]?.content || '';
    if (section.sub) {
      const subField = document.querySelector(`[data-field="${section.key}.${section.sub.key}"]`);
      if (subField) subField.value = canvasData.sections[section.key]?.[section.sub.key] || '';
    }
  }
}

// === Read Editor State ===
function readEditorState() {
  canvasData.title = document.getElementById('canvasTitle').value;
  for (const section of SECTIONS) {
    const mainField = document.querySelector(`[data-field="${section.key}.content"]`);
    if (mainField) canvasData.sections[section.key].content = mainField.value;
    if (section.sub) {
      const subField = document.querySelector(`[data-field="${section.key}.${section.sub.key}"]`);
      if (subField) canvasData.sections[section.key][section.sub.key] = subField.value;
    }
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
function generateCanvas() {
  readEditorState();

  // Title
  const title = canvasData.title || 'Lean Canvas';
  document.getElementById('canvasViewTitle').textContent = title;

  // Date
  const date = new Date(canvasData.lastModified);
  document.getElementById('canvasDate').textContent =
    `Generated ${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;

  // Simple section mapping for view
  const viewMap = {
    'view-problem': canvasData.sections.problem.content,
    'view-problem-existingAlternatives': canvasData.sections.problem.existingAlternatives,
    'view-solution': canvasData.sections.solution.content,
    'view-uvp': canvasData.sections.uvp.content,
    'view-uvp-highLevelConcept': canvasData.sections.uvp.highLevelConcept,
    'view-unfairAdvantage': canvasData.sections.unfairAdvantage.content,
    'view-customerSegments': canvasData.sections.customerSegments.content,
    'view-customerSegments-earlyAdopters': canvasData.sections.customerSegments.earlyAdopters,
    'view-keyMetrics': canvasData.sections.keyMetrics.content,
    'view-channels': canvasData.sections.channels.content,
    'view-costStructure': canvasData.sections.costStructure.content,
    'view-revenueStreams': canvasData.sections.revenueStreams.content,
  };

  for (const [id, text] of Object.entries(viewMap)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text || '';
  }

  // Switch modes
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
      // Validate structure
      if (!parsed.sections || typeof parsed.sections !== 'object') {
        throw new Error('Missing sections');
      }
      const requiredKeys = ['problem', 'customerSegments', 'uvp', 'solution', 'channels', 'revenueStreams', 'costStructure', 'keyMetrics', 'unfairAdvantage'];
      const hasKeys = requiredKeys.some((k) => k in parsed.sections);
      if (!hasKeys) {
        throw new Error('Invalid sections structure');
      }

      if (!confirm('This will replace your current canvas data. Continue?')) return;

      // Merge safely
      const empty = createEmptyCanvas();
      canvasData = {
        title: parsed.title || '',
        lastModified: parsed.lastModified || new Date().toISOString(),
        sections: {},
      };
      for (const key of Object.keys(empty.sections)) {
        canvasData.sections[key] = { ...empty.sections[key], ...(parsed.sections[key] || {}) };
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
  // Load saved data and theme
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
