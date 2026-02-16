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
      { text: 'Google Trends', url: 'https://trends.google.com/', pricing: 'free' },
      { text: 'AnswerThePublic', url: 'https://answerthepublic.com/', pricing: 'freemium' },
      { text: 'Google Forms', url: 'https://docs.google.com/forms/', pricing: 'free' },
    ],
    aiPrompt: `I'm building a [type of product/service] for [target audience]. Help me identify and validate the top 3 problems my target customers face.

For each problem:
1. Describe the problem from the customer's perspective
2. Explain why it's painful enough to motivate action
3. Suggest how I could validate this problem is real (customer interviews, search data, forums, etc.)

My initial idea: [describe your idea]
My target audience: [describe your customers]

Please be specific and avoid vague problems. Each problem should be observable and measurable.`,
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
      { text: 'Product Hunt', url: 'https://www.producthunt.com/', pricing: 'free' },
      { text: 'G2', url: 'https://www.g2.com/', pricing: 'free' },
      { text: 'SimilarWeb', url: 'https://www.similarweb.com/', pricing: 'freemium' },
      { text: 'Meta Ad Library', url: 'https://www.facebook.com/ads/library/', pricing: 'free' },
    ],
    aiPrompt: `I'm building a [type of product/service] that solves [problem]. Help me map out all the existing alternatives my potential customers use today.

Include:
1. Direct competitors (other products/services solving the same problem)
2. Indirect alternatives (workarounds, manual processes, spreadsheets, hiring someone)
3. The "do nothing" option — why some people just live with the problem

For each alternative, describe:
- What it does well
- Where it falls short
- Approximate cost to the customer
- Why a customer might switch away from it

My product idea: [describe your idea]
The problems I'm solving: [list your top 1-3 problems]`,
  },

  earlyAdopters: {
    what: 'Your ideal customer — also called your early adopter — is the specific person most likely to try your product first. They have the problem most urgently, are actively seeking a solution, and are willing to use an imperfect early product. They are NOT your mainstream market.',
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
      { text: 'Reddit', url: 'https://www.reddit.com/', pricing: 'free' },
      { text: 'SparkToro', url: 'https://sparktoro.com/', pricing: 'freemium' },
      { text: 'Facebook Groups', url: 'https://www.facebook.com/groups/', pricing: 'free' },
    ],
    aiPrompt: `Help me create a detailed profile of my ideal first customer (early adopter) for my [product/service].

This person should:
- Have the problem most urgently — it's a "hair on fire" problem for them
- Already be trying to solve it with existing alternatives (and frustrated)
- Be willing to use an imperfect early product and give feedback
- Be reachable — I know where to find them

Describe them as a specific person, not a demographic. Include:
- Their daily routine and frustrations
- What they've already tried and why it didn't work
- Where they spend time online (specific subreddits, forums, social accounts)
- What would make them try a new solution immediately
- What would make them tell their friends about it

My product: [describe your product]
Problems I'm solving: [list your problems]
Existing alternatives they use: [list alternatives]`,
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
      { text: 'Census Data Explorer', url: 'https://data.census.gov/', pricing: 'free' },
      { text: 'Statista', url: 'https://www.statista.com/', pricing: 'freemium' },
      { text: 'Google Trends', url: 'https://trends.google.com/', pricing: 'free' },
      { text: 'Think with Google', url: 'https://www.thinkwithgoogle.com/', pricing: 'free' },
    ],
    aiPrompt: `Help me define the customer segments for my [product/service].

For each segment, provide:
1. Demographics (age, income, location, occupation)
2. Behaviors and psychographics (what they value, how they spend time)
3. How they currently solve the problem
4. Estimated market size (TAM, SAM, SOM if possible)
5. Why they would pay for my solution

Start with the narrowest, most urgent segment (my early adopters) and then describe 1-2 broader segments I could expand into later.

My product: [describe your product]
My ideal early adopter: [describe them]
Problems I'm solving: [list problems]
My pricing model: [if known]`,
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
      { text: 'Figma', url: 'https://www.figma.com/', pricing: 'freemium' },
      { text: 'Excalidraw', url: 'https://excalidraw.com/', pricing: 'free' },
      { text: 'Balsamiq', url: 'https://balsamiq.com/', pricing: 'paid' },
    ],
    aiPrompt: `I'm solving these problems for [target audience]:
1. [Problem 1]
2. [Problem 2]
3. [Problem 3]

Help me define the minimum viable solution (MVP) — the simplest possible product that addresses each problem.

For each problem, suggest:
1. A specific feature or capability (mapped to that problem)
2. How the customer would experience it (user story format)
3. The simplest way to build/test it
4. What I should NOT build yet (and why)

Keep it minimal — I want the smallest thing I can build to start learning from real customers.

My target customer: [describe them]
Existing alternatives they use: [list them]`,
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
      { text: 'Hemingway Editor', url: 'https://hemingwayapp.com/', pricing: 'free' },
      { text: 'CoSchedule Headline Analyzer', url: 'https://coschedule.com/headline-analyzer', pricing: 'free' },
    ],
    aiPrompt: `Help me craft a Unique Value Proposition (UVP) for my [product/service].

The UVP should:
- Be a single, clear sentence under 120 characters
- Explain why I'm different and worth paying attention to
- Target my early adopters specifically, not the mainstream
- Focus on the end result the customer gets, not features
- Follow the formula: "We help [customer] achieve [outcome] by [approach]"

Generate 5 options ranging from bold to conservative, and explain the strengths of each.

My product: [describe your product]
My #1 problem I solve: [describe]
My ideal customer: [describe]
My key differentiator vs. alternatives: [describe]
My solution: [describe briefly]`,
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
    tools: [],
    aiPrompt: `Help me create a High-Level Concept (elevator pitch) for my [product/service] using the "X for Y" format (e.g., "YouTube = Flickr for video", "Spotify for meal planning").

Generate 5-7 options. For each:
- Use a well-known company or product as the reference point
- Target a specific market or use case
- Make it instantly understandable to anyone, even outside my industry
- Make people curious enough to ask "tell me more"

Then recommend your top pick and explain why it works best.

My product: [describe your product]
My UVP: [your unique value proposition]
What makes us unique: [describe]
My target market: [describe]`,
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
      { text: 'Google Patents', url: 'https://patents.google.com/', pricing: 'free' },
      { text: 'Crunchbase', url: 'https://www.crunchbase.com/', pricing: 'freemium' },
    ],
    aiPrompt: `Help me identify and evaluate my potential unfair advantages for [product/service].

An unfair advantage is something that cannot be easily copied or bought by a well-funded competitor within 6 months.

Real unfair advantages: network effects, proprietary data, insider knowledge, expert endorsements, dream team, existing community/audience, patents/IP, regulatory advantages

NOT real unfair advantages: passion, code, features, first-mover advantage, working harder

Based on my situation, help me:
1. Identify 3-5 potential unfair advantages I might have (or could build)
2. Rate each on a 1-5 scale for defensibility
3. Suggest a strategy for strengthening my strongest advantage over time

My product: [describe your product]
My background/team: [describe your experience and team]
What I think my advantage might be: [describe]
My competitive landscape: [describe key competitors]`,
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
      { text: 'Google Keyword Planner', url: 'https://ads.google.com/home/tools/keyword-planner/', pricing: 'free' },
      { text: 'Google Search Console', url: 'https://search.google.com/search-console/', pricing: 'free' },
      { text: 'Ubersuggest', url: 'https://neilpatel.com/ubersuggest/', pricing: 'freemium' },
      { text: 'Meta Ad Library', url: 'https://www.facebook.com/ads/library/', pricing: 'free' },
    ],
    aiPrompt: `Help me identify and prioritize the best customer acquisition channels for my [product/service].

For each channel, provide:
1. Why it fits my target audience
2. Estimated cost (free, low, medium, high)
3. Time to first results (days, weeks, months)
4. Scalability potential (low, medium, high)
5. How to test it with minimal investment ($0-100)

Then rank the top 3 channels I should focus on first, with a specific 30-day action plan for each.

My target customer: [describe]
Where they spend time online: [describe]
My budget for marketing: [describe]
My product type: [B2B/B2C/marketplace/etc.]
My stage: [idea/MVP/launched]`,
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
      { text: 'Google Sheets', url: 'https://sheets.google.com/', pricing: 'free' },
      { text: 'SCORE Financial Templates', url: 'https://www.score.org/resource-article/financial-projections-template', pricing: 'free' },
    ],
    aiPrompt: `Help me estimate the costs for my [product/service] in two phases:

**Phase 1 — MVP (first 3 months):**
What does it cost to build and launch the minimum viable product?

**Phase 2 — Monthly Operations:**
What's the ongoing monthly burn rate after launch?

Include these categories:
- Development (build vs. buy vs. outsource)
- Hosting/infrastructure
- Tools and software subscriptions
- Marketing and customer acquisition
- Legal (incorporation, terms of service, etc.)
- Team/contractors
- Any domain-specific costs

Then calculate my breakeven point: how many customers at [price point] do I need to cover monthly costs?

My product: [describe your product]
My pricing model: [describe]
My team situation: [solo founder / co-founders / have developers]
My funding: [bootstrapped / seeking investment / have runway of X months]`,
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
      { text: 'PriceIntelligently', url: 'https://www.priceintelligently.com/', pricing: 'paid' },
      { text: 'G2 (competitor pricing)', url: 'https://www.g2.com/', pricing: 'free' },
    ],
    aiPrompt: `Help me design the revenue model for my [product/service].

Consider and recommend:
1. Best pricing model for my situation (subscription, freemium, one-time, marketplace cut, usage-based, etc.) and why
2. Specific price points with justification based on value delivered
3. What existing alternatives charge (for comparison)
4. Free vs. paid feature split (if freemium)
5. Revenue projections for first 12 months (conservative, moderate, optimistic)
6. What price would make this a "no-brainer" purchase for my customer?

My product: [describe your product]
My target customer: [describe them and their willingness to pay]
Existing alternatives and their pricing: [list them]
My monthly cost structure: [monthly burn rate]
My target market size: [number of potential customers]`,
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
      { text: 'Google Analytics', url: 'https://analytics.google.com/', pricing: 'free' },
      { text: 'Mixpanel', url: 'https://mixpanel.com/', pricing: 'freemium' },
      { text: 'PostHog', url: 'https://posthog.com/', pricing: 'free' },
    ],
    aiPrompt: `Help me identify the 3-5 key metrics I should track for my [product/service].

For each metric:
1. What it measures and why it matters at my current stage
2. How to calculate it (exact formula)
3. What a good benchmark/target looks like for my industry
4. How often I should measure it (daily, weekly, monthly)
5. What tool I can use to track it (preferably free)

Also identify:
- My ONE "minimum success criterion" — the single number that defines if this is working
- Which metrics are leading indicators (predict the future) vs. trailing indicators (measure the past)
- What "pirate metrics" (AARRR) stage I should focus on first

My product type: [SaaS/marketplace/e-commerce/mobile app/etc.]
My business model: [subscription/freemium/one-time/etc.]
My current stage: [pre-launch/MVP/launched with X users]
My revenue model: [describe]`,
  },
};

// === Resource Panel Data (All tools grouped by category) ===
const RESOURCE_PANEL_DATA = [
  {
    category: 'Problem Discovery & Validation',
    icon: '🔍',
    tools: [
      { name: 'Google Trends', url: 'https://trends.google.com/', description: 'Explore search interest over time to validate demand for problems', pricing: 'free' },
      { name: 'AnswerThePublic', url: 'https://answerthepublic.com/', description: 'Discover what questions people ask about any topic', pricing: 'freemium' },
      { name: 'GummySearch', url: 'https://gummysearch.com/', description: 'Monitor Reddit communities for pain points and unmet needs', pricing: 'paid' },
      { name: 'Google Forms', url: 'https://docs.google.com/forms/', description: 'Create free surveys for customer discovery interviews', pricing: 'free' },
      { name: 'Typeform', url: 'https://www.typeform.com/', description: 'Beautiful, conversational surveys for customer research', pricing: 'freemium' },
    ],
  },
  {
    category: 'Competitive & Market Research',
    icon: '📊',
    tools: [
      { name: 'Product Hunt', url: 'https://www.producthunt.com/', description: 'Discover new products, startups, and potential competitors', pricing: 'free' },
      { name: 'G2', url: 'https://www.g2.com/', description: 'Software reviews, competitor comparisons, and pricing data', pricing: 'free' },
      { name: 'Capterra', url: 'https://www.capterra.com/', description: 'Software comparison directory with user reviews', pricing: 'free' },
      { name: 'SimilarWeb', url: 'https://www.similarweb.com/', description: 'Analyze competitor website traffic and audience data', pricing: 'freemium' },
      { name: 'Crunchbase', url: 'https://www.crunchbase.com/', description: 'Research startup funding, team data, and company details', pricing: 'freemium' },
      { name: 'Meta Ad Library', url: 'https://www.facebook.com/ads/library/', description: 'See all active ads from any company on Facebook/Instagram', pricing: 'free' },
      { name: 'Google Patents', url: 'https://patents.google.com/', description: 'Search existing patents and intellectual property', pricing: 'free' },
    ],
  },
  {
    category: 'Audience & Customer Research',
    icon: '👥',
    tools: [
      { name: 'SparkToro', url: 'https://sparktoro.com/', description: 'Audience intelligence — discover where your customers spend time', pricing: 'freemium' },
      { name: 'Reddit', url: 'https://www.reddit.com/', description: 'Find niche communities where your target customers gather', pricing: 'free' },
      { name: 'Facebook Groups', url: 'https://www.facebook.com/groups/', description: 'Find and engage customer communities by interest', pricing: 'free' },
      { name: 'Census Data Explorer', url: 'https://data.census.gov/', description: 'US demographic and economic data for market sizing', pricing: 'free' },
      { name: 'Statista', url: 'https://www.statista.com/', description: 'Statistics, market data, and industry reports', pricing: 'freemium' },
      { name: 'Think with Google', url: 'https://www.thinkwithgoogle.com/', description: 'Consumer insights, trends, and marketing research from Google', pricing: 'free' },
    ],
  },
  {
    category: 'Prototyping & Design',
    icon: '🎨',
    tools: [
      { name: 'Figma', url: 'https://www.figma.com/', description: 'Collaborative design tool for prototypes and mockups', pricing: 'freemium' },
      { name: 'Excalidraw', url: 'https://excalidraw.com/', description: 'Quick whiteboard-style sketches and diagrams', pricing: 'free' },
      { name: 'Balsamiq', url: 'https://balsamiq.com/', description: 'Rapid low-fidelity wireframing tool', pricing: 'paid' },
      { name: 'Penpot', url: 'https://penpot.app/', description: 'Open-source design and prototyping platform', pricing: 'free' },
    ],
  },
  {
    category: 'Copywriting & Messaging',
    icon: '✍️',
    tools: [
      { name: 'Hemingway Editor', url: 'https://hemingwayapp.com/', description: 'Check writing clarity, readability, and conciseness', pricing: 'free' },
      { name: 'CoSchedule Headline Analyzer', url: 'https://coschedule.com/headline-analyzer', description: 'Score and improve headlines for emotional impact', pricing: 'free' },
      { name: 'Grammarly', url: 'https://www.grammarly.com/', description: 'Writing assistant for grammar, tone, and clarity', pricing: 'freemium' },
    ],
  },
  {
    category: 'Marketing & Distribution',
    icon: '📢',
    tools: [
      { name: 'Google Keyword Planner', url: 'https://ads.google.com/home/tools/keyword-planner/', description: 'Research search keywords and monthly volumes', pricing: 'free' },
      { name: 'Google Search Console', url: 'https://search.google.com/search-console/', description: 'Monitor your website\'s search performance', pricing: 'free' },
      { name: 'Ubersuggest', url: 'https://neilpatel.com/ubersuggest/', description: 'SEO keyword research and content opportunity analysis', pricing: 'freemium' },
      { name: 'Answer Socrates', url: 'https://answersocrates.com/', description: 'Find questions people are searching for on any topic', pricing: 'free' },
      { name: 'Meta Ad Library', url: 'https://www.facebook.com/ads/library/', description: 'Research competitor advertising strategies', pricing: 'free' },
      { name: 'TikTok Creative Center', url: 'https://ads.tiktok.com/business/creativecenter/', description: 'Trending content, hashtags, and ad inspiration', pricing: 'free' },
    ],
  },
  {
    category: 'Financial Planning',
    icon: '💰',
    tools: [
      { name: 'Google Sheets', url: 'https://sheets.google.com/', description: 'Build financial models and projections', pricing: 'free' },
      { name: 'SCORE Financial Templates', url: 'https://www.score.org/resource-article/financial-projections-template', description: 'Free startup financial plan and projection templates', pricing: 'free' },
      { name: 'Causal', url: 'https://www.causal.app/', description: 'Visual financial modeling and forecasting tool', pricing: 'freemium' },
    ],
  },
  {
    category: 'Analytics & Metrics',
    icon: '📈',
    tools: [
      { name: 'Google Analytics', url: 'https://analytics.google.com/', description: 'Website and app traffic analytics', pricing: 'free' },
      { name: 'PostHog', url: 'https://posthog.com/', description: 'Open-source product analytics, session replay, and feature flags', pricing: 'free' },
      { name: 'Mixpanel', url: 'https://mixpanel.com/', description: 'Event-based product analytics and funnel analysis', pricing: 'freemium' },
      { name: 'Hotjar', url: 'https://www.hotjar.com/', description: 'Heatmaps, session recordings, and user behavior insights', pricing: 'freemium' },
      { name: 'Baremetrics', url: 'https://baremetrics.com/', description: 'SaaS revenue, churn, and subscription analytics', pricing: 'paid' },
    ],
  },
];

// === Section Metadata (custom fill order — 12 steps) ===
const SECTIONS = [
  { key: 'problem', title: 'Problem' },
  { key: 'existingAlternatives', title: 'Existing Alternatives' },
  { key: 'earlyAdopters', title: 'Ideal Customer' },
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
        const badge = tool.pricing ? ` <span class="pricing-badge pricing-${tool.pricing}">${tool.pricing}</span>` : '';
        html += `<a href="${escapeHtml(tool.url)}" target="_blank" rel="noopener">${escapeHtml(tool.text)}${badge}</a>`;
      }
      html += '</div>';
    }

    if (help.aiPrompt) {
      html += `<div class="ai-prompt-section">
        <button type="button" class="ai-prompt-toggle" data-ai-toggle="${section.key}">AI Prompt</button>
        <div class="ai-prompt-body" id="ai-prompt-${section.key}" hidden>
          <pre class="ai-prompt-text" id="prompt-text-${section.key}">${escapeHtml(help.aiPrompt)}</pre>
          <button type="button" class="btn btn--secondary btn-copy-prompt" data-copy-prompt="${section.key}">Copy Prompt</button>
        </div>
      </div>`;
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

function toggleAiPrompt(sectionKey) {
  const body = document.getElementById(`ai-prompt-${sectionKey}`);
  const btn = document.querySelector(`[data-ai-toggle="${sectionKey}"]`);
  if (!body || !btn) return;

  const isHidden = body.hasAttribute('hidden');
  if (isHidden) {
    body.removeAttribute('hidden');
    btn.classList.add('expanded');
  } else {
    body.setAttribute('hidden', '');
    btn.classList.remove('expanded');
  }
}

function copyAiPrompt(sectionKey) {
  const promptText = HELP_CONTENT[sectionKey]?.aiPrompt;
  if (!promptText) return;

  const btn = document.querySelector(`[data-copy-prompt="${sectionKey}"]`);

  navigator.clipboard.writeText(promptText).then(() => {
    if (btn) {
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = original; }, 2000);
    }
  }).catch(() => {
    // Fallback: select text for manual copy
    const el = document.getElementById(`prompt-text-${sectionKey}`);
    if (el) {
      const range = document.createRange();
      range.selectNodeContents(el);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
}

// === Resource Panel ===
function renderResourcePanel() {
  const container = document.getElementById('resourcePanelContent');
  if (!container) return;

  let html = '';
  for (const group of RESOURCE_PANEL_DATA) {
    html += `<div class="resource-group">
      <button type="button" class="resource-group-toggle" data-resource-group>
        <span class="resource-group-icon">${group.icon}</span>
        <span class="resource-group-title">${escapeHtml(group.category)}</span>
        <span class="resource-group-count">${group.tools.length}</span>
        <span class="resource-group-arrow"></span>
      </button>
      <div class="resource-group-items">`;

    for (const tool of group.tools) {
      html += `<a href="${escapeHtml(tool.url)}" target="_blank" rel="noopener" class="resource-item">
        <div class="resource-item-header">
          <span class="resource-item-name">${escapeHtml(tool.name)}</span>
          <span class="pricing-badge pricing-${tool.pricing}">${tool.pricing}</span>
        </div>
        <div class="resource-item-desc">${escapeHtml(tool.description)}</div>
      </a>`;
    }

    html += '</div></div>';
  }

  container.innerHTML = html;
}

function toggleResourcePanel() {
  const panel = document.getElementById('resourcePanel');
  if (!panel) return;

  const isOpen = panel.classList.contains('open');
  if (isOpen) {
    panel.classList.remove('open');
  } else {
    panel.classList.add('open');
    if (!panel.dataset.rendered) {
      renderResourcePanel();
      panel.dataset.rendered = 'true';
    }
  }
}

function toggleResourceGroup(btn) {
  const group = btn.closest('.resource-group');
  if (!group) return;
  group.classList.toggle('collapsed');
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
async function exportJSON() {
  readEditorState();
  saveToLocalStorage();

  const slug = canvasData.title
    ? canvasData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    : 'untitled';
  const dateStr = new Date().toISOString().slice(0, 10);
  const filename = `lean-canvas-${slug}-${dateStr}.json`;
  const jsonStr = JSON.stringify(canvasData, null, 2);

  // Use File System Access API if available (Chromium browsers)
  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [{
          description: 'JSON Files',
          accept: { 'application/json': ['.json'] },
        }],
      });
      const writable = await handle.createWritable();
      await writable.write(jsonStr);
      await writable.close();
      return;
    } catch (err) {
      // User cancelled the picker — do nothing
      if (err.name === 'AbortError') return;
      // API failed — fall through to legacy download
    }
  }

  // Fallback: automatic download
  const blob = new Blob([jsonStr], { type: 'application/json' });
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

  // AI prompt toggles and copy buttons (delegated)
  document.addEventListener('click', (e) => {
    const aiToggle = e.target.closest('[data-ai-toggle]');
    if (aiToggle) {
      toggleAiPrompt(aiToggle.dataset.aiToggle);
      return;
    }

    const copyBtn = e.target.closest('[data-copy-prompt]');
    if (copyBtn) {
      copyAiPrompt(copyBtn.dataset.copyPrompt);
      return;
    }

    const resourceGroupBtn = e.target.closest('[data-resource-group]');
    if (resourceGroupBtn) {
      toggleResourceGroup(resourceGroupBtn);
      return;
    }
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

  // Resource panel
  document.getElementById('btnResources').addEventListener('click', toggleResourcePanel);
  document.getElementById('btnCloseResources').addEventListener('click', toggleResourcePanel);
}

// Start
document.addEventListener('DOMContentLoaded', init);
