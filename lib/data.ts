// ── ALL SITE CONTENT ─────────────────────────────────────────
// Single source of truth. Edit here — updates everywhere.

export const SITE = {
  name: 'Buteforce',
  tagline: 'AI Automation & Computer Vision',
  email: 'admin@buteforce.com',
  url: 'https://buteforce.com',
  github: 'https://github.com/buteforce',
  linkedin: 'https://linkedin.com/company/buteforce',
}

// ── NAV ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work' },
  { label: 'Blog',     href: '/blog' },
  { label: 'About',    href: '/about' },
]

// ── PAIN LINES (the psychological scroll section) ─────────
// These make the visitor feel understood before the solution.
// They should think "how do they know?" — not "what do they sell?"
export const PAIN_LINES = [
  'Your team is doing the same things every single day.',
  'Leads slip through because no one followed up in time.',
  'You know AI can help. You just don\'t know where to start.',
  'Every new project needs more people, more cost, more time.',
  'Your competitors are moving faster and you feel it.',
]

// ── STATS ─────────────────────────────────────────────────
export const STATS = [
  { value: '99.2%',  label: 'Classification accuracy',  sub: 'Ortho Vision System'   },
  { value: '80%',    label: 'Time saved on content ops', sub: 'AI Marketing Agent'    },
  { value: '70%',    label: 'Inquiries handled by AI',   sub: 'Real Estate Agent'     },
  { value: '<1s',    label: 'Document processing speed', sub: 'OCR Extraction System' },
]

// ── SERVICES ──────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'automation',
    label: '01',
    title: 'AI Automation & Workflows',
    short: 'Turn repetitive operations into autonomous pipelines.',
    description:
      'We design and build end-to-end automation systems using n8n, Python, and AI models. If a human does it repeatedly, we automate it — email triage, document processing, multi-platform publishing, CRM updates, and more.',
    metric: '80% average time saved',
    stack: ['n8n', 'Python', 'Claude API', 'Trigger.dev', 'Supabase'],
    slug: 'ai-automation',
  },
  {
    id: 'vision',
    label: '02',
    title: 'Computer Vision',
    short: 'Train machines to see what matters.',
    description:
      'Custom-trained object detection and classification systems for manufacturing quality control, sports analytics, inventory management, and visual data extraction. We train the models on your data, for your use case.',
    metric: '99.2% accuracy at 120 items/min',
    stack: ['YOLOv8', 'PyTorch', 'OpenCV', 'Python', 'CUDA'],
    slug: 'computer-vision',
  },
  {
    id: 'agents',
    label: '03',
    title: 'AI Agents',
    short: 'Systems that think, decide, and act on your behalf.',
    description:
      'Autonomous multi-step agents that handle research, decision-making, communication, and task execution — with human oversight when it matters. From personal assistants to full marketing teams.',
    metric: '70% of tasks handled autonomously',
    stack: ['Claude API', 'Google ADK', 'LangChain', 'Supabase', 'n8n'],
    slug: 'ai-agents',
  },
  {
    id: 'ocr',
    label: '04',
    title: 'Document AI & OCR',
    short: 'Extract structure from any document, at any scale.',
    description:
      'Production-grade document intelligence for invoices, receipts, handwritten forms, contracts, and complex table structures. Dual-engine routing for maximum accuracy across document types.',
    metric: 'Sub-second latency, any document format',
    stack: ['Mistral 7B', 'Google Cloud Vision', 'PaddleOCR', 'Next.js', 'PostgreSQL'],
    slug: 'document-ai',
  },
]

// ── CASE STUDIES ──────────────────────────────────────────
export const CASE_STUDIES = [
  {
    id: 'ocr-extraction',
    year: '2025',
    category: 'Document AI',
    title: 'Production OCR pipeline handling any document format',
    description:
      'Built a dual-engine OCR system combining Mistral 7B and Google Cloud Vision to extract structured data from printed documents, handwritten text, and complex table layouts.',
    stats: [
      { value: '<1s',   label: 'Processing latency' },
      { value: 'Lowest CER', label: 'Character error rate' },
      { value: 'Dual-engine', label: 'Routing architecture' },
    ],
    stack: ['Mistral 7B', 'Google Cloud Vision', 'Next.js', 'PostgreSQL'],
    featured: true,
    slug: 'ocr-extraction',
  },
  {
    id: 'ortho-classifier',
    year: '2025',
    category: 'Computer Vision',
    title: 'Quality control system eliminating manual inspection on production lines',
    description:
      'Custom YOLOv8 model trained on 10,000+ product images. Deployed on live manufacturing line for orthopedic insole classification.',
    stats: [
      { value: '99.2%', label: 'Classification accuracy' },
      { value: '120/min', label: 'Items processed' },
      { value: '94%', label: 'Error reduction' },
    ],
    stack: ['YOLOv8', 'PyTorch', 'OpenCV', 'Industrial cameras'],
    featured: true,
    slug: 'ortho-classifier',
  },
  {
    id: 'real-estate-agent',
    year: '2025',
    category: 'AI Agents',
    title: 'AI agent handling property inquiries around the clock',
    description:
      'Intelligent real estate agent understanding budget, location preferences, and amenities. Compares listings, schedules viewings, and answers neighborhood questions.',
    stats: [
      { value: '70%', label: 'Inquiries handled autonomously' },
      { value: '95%', label: 'Faster lead response' },
      { value: '24/7', label: 'Availability' },
    ],
    stack: ['Custom NLP', 'PostgreSQL', 'Telegram API', 'CRM integration'],
    featured: true,
    slug: 'real-estate-agent',
  },
  {
    id: 'football-analytics',
    year: '2025',
    category: 'Computer Vision',
    title: 'Football match analytics from raw video footage',
    description:
      'End-to-end computer vision system analyzing match footage. Custom YOLO model for player/ball detection, optical flow for camera compensation, team clustering.',
    stats: [
      { value: 'Real-time', label: 'Video processing' },
      { value: 'Full match', label: 'Analytics coverage' },
      { value: 'Professional', label: 'Grade metrics' },
    ],
    stack: ['YOLOv8', 'PyTorch', 'OpenCV', 'K-means', 'Python'],
    featured: false,
    slug: 'football-analytics',
  },
  {
    id: 'marketing-agent',
    year: '2025',
    category: 'AI Automation',
    title: 'Autonomous marketing team running on voice commands',
    description:
      'Multi-agent system orchestrating content creation, image generation, scheduling, and multi-platform publishing from a single Telegram voice message.',
    stats: [
      { value: '80%', label: 'Time reduction' },
      { value: 'Voice → Live', label: 'Workflow' },
      { value: 'Multi-platform', label: 'Publishing' },
    ],
    stack: ['GPT-4.1', 'DALL-E', 'Telegram API', 'n8n', 'Google Drive'],
    featured: false,
    slug: 'marketing-agent',
  },
  {
    id: 'invoice-generator',
    year: '2024',
    category: 'Document AI',
    title: 'Invoice generation from photos in 30 seconds',
    description:
      'Photograph a bill or receipt — the agent extracts all data, calculates taxes, and generates a pixel-perfect professional invoice.',
    stats: [
      { value: '30s', label: 'End-to-end process' },
      { value: '15 min → 30s', label: 'Time saved' },
      { value: 'Zero errors', label: 'In calculations' },
    ],
    stack: ['PaddleOCR', 'OpenAI', 'Telegram', 'PostgreSQL'],
    featured: false,
    slug: 'invoice-generator',
  },
  {
    id: 'personal-assistant',
    year: '2024',
    category: 'AI Agents',
    title: 'AI personal assistant managing email and calendar',
    description:
      'Orchestrates daily tasks through natural conversation. Connects Gmail, Google Calendar, and communication platforms. Learns preferences over time.',
    stats: [
      { value: '60%', label: 'Admin time reduced' },
      { value: 'Persistent', label: 'Context memory' },
      { value: 'Mobile-first', label: 'Interface' },
    ],
    stack: ['Mistral', 'Gmail API', 'Google Calendar', 'PostgreSQL'],
    featured: false,
    slug: 'personal-assistant',
  },
  {
    id: 'email-agent',
    year: '2024',
    category: 'AI Automation',
    title: 'Email management agent cutting inbox time by 75%',
    description:
      'Connects to Gmail, classifies by priority and topic, drafts responses, handles routine inquiries automatically, flags what actually needs attention.',
    stats: [
      { value: '75%', label: 'Less time on email' },
      { value: 'Zero', label: 'Missed important messages' },
      { value: 'Auto-draft', label: 'Smart replies' },
    ],
    stack: ['Mistral', 'Gmail API', 'PostgreSQL', 'n8n'],
    featured: false,
    slug: 'email-agent',
  },
  {
    id: 'blog-agent',
    year: '2024',
    category: 'AI Automation',
    title: 'Blog post generation from brief to published in 30 minutes',
    description:
      'Automated research, SEO-optimised outline generation, full article writing, AI image creation, and multi-format publishing.',
    stats: [
      { value: '4h → 30m', label: 'Creation time' },
      { value: '65%', label: 'More organic traffic' },
      { value: 'SEO-ready', label: 'Every post' },
    ],
    stack: ['GPT-4.1', 'Tavily', 'DALL-E', 'Google Drive', 'Telegram'],
    featured: false,
    slug: 'blog-agent',
  },
  {
    id: 'cinecraft',
    year: '2023',
    category: 'AI Agents',
    title: 'Natural language to cinematic Minecraft animation',
    description:
      'AI-powered system transforming plain English scene descriptions into fully-orchestrated Minecraft animations with character placement, camera movement, and precise timing.',
    stats: [
      { value: 'Hours → Minutes', label: 'Setup time' },
      { value: 'Plain English', label: 'Input method' },
      { value: 'Full scene', label: 'Orchestration' },
    ],
    stack: ['OpenAI', 'Python', 'Gradio', 'RCON', 'FFmpeg'],
    featured: false,
    slug: 'cinecraft',
  },
]

// ── PROCESS STEPS ─────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Understand',
    description:
      'We start by understanding the real problem — not the one described in a brief, but the one that actually costs you time and money every day. This is a conversation, not a discovery call.',
    detail:
      'Most projects fail because someone built the wrong thing correctly. We spend real time here — asking uncomfortable questions, mapping existing workflows, identifying where AI creates genuine leverage versus where it would add complexity.',
  },
  {
    num: '02',
    title: 'Architect',
    description:
      'We design the system before writing a line of code. Data flow, model selection, integration points, fallback behaviour, human oversight layers — all mapped out and agreed on.',
    detail:
      'Architecture decisions are permanent. A bad choice here creates technical debt that grows every week. We choose tools for your specific problem — not because they\'re trending or because we know them best.',
  },
  {
    num: '03',
    title: 'Build',
    description:
      'Production-grade from day one. No prototypes dressed up as products. Real error handling, real logging, real performance on real data.',
    detail:
      'We build the thing, not a demo. Every system we ship handles edge cases, fails gracefully, and includes monitoring so you know when something goes wrong before your clients do.',
  },
  {
    num: '04',
    title: 'Ship',
    description:
      'Deployment, documentation, and handover. You own the system — the code, the models, the infrastructure. We don\'t lock you in.',
    detail:
      'After launch we don\'t disappear. The first 30 days are when things get refined — real usage surfaces real edge cases. We stay close until the system runs exactly as designed.',
  },
]

// ── COMPARISON TABLE ──────────────────────────────────────
export const COMPARISON_ROWS = [
  { us: 'Custom-built for your exact workflow',        them: 'Template solutions adapted to fit' },
  { us: 'We train models on your actual data',         them: 'Plug-in APIs with no customisation' },
  { us: 'Production-grade from day one',               them: 'Prototypes that need a rebuild' },
  { us: 'You own the code, models, and infrastructure', them: 'Locked into their platform' },
  { us: 'Specific, measurable outcomes agreed upfront', them: 'Vague deliverables and scope creep' },
  { us: 'Deep expertise in the models we use',          them: 'Resellers of AI tools they don\'t fully understand' },
  { us: 'Works alongside your team, not above it',      them: 'Consultants who disappear after delivery' },
  { us: 'Live demos you can test before you decide',    them: 'Slide decks and case study PDFs' },
]

// ── TECH STACK ────────────────────────────────────────────
export const TECH_STACK = [
  { num: '/01', name: 'Claude API',     logo: '/logos/claude.svg'   },
  { num: '/02', name: 'YOLOv8',         logo: '/logos/yolo.svg'     },
  { num: '/03', name: 'n8n',            logo: '/logos/n8n.svg'      },
  { num: '/04', name: 'Google ADK',     logo: '/logos/google.svg'   },
  { num: '/05', name: 'PyTorch',        logo: '/logos/pytorch.svg'  },
  { num: '/06', name: 'Next.js',        logo: '/logos/nextjs.svg'   },
  { num: '/07', name: 'Mistral',        logo: '/logos/mistral.svg'  },
  { num: '/08', name: 'Supabase',       logo: '/logos/supabase.svg' },
]

// ── TESTIMONIALS ──────────────────────────────────────────
// Add real ones as they come in. Placeholder for now.
export const TESTIMONIALS = [
  {
    quote:
      'They shipped a working computer vision system in three weeks. Our quality control errors dropped by 94% in the first month. I didn\'t think it would be this fast.',
    name: 'Operations Director',
    company: 'Manufacturing Client',
    initials: 'OD',
  },
  {
    quote:
      'The OCR pipeline handles documents I thought were impossible to automate — handwritten forms, photos of receipts, tables with merged cells. Sub-second. Every time.',
    name: 'Head of Finance Ops',
    company: 'Financial Services Client',
    initials: 'HF',
  },
  {
    quote:
      'Our AI agent handles 70% of property inquiries now. The sales team only speaks to people who are ready to view. Lead quality went up, response time went to zero.',
    name: 'Director',
    company: 'Real Estate Agency',
    initials: 'D',
  },
]

// ── FAQ ───────────────────────────────────────────────────
export const FAQ = [
  {
    q: 'What types of businesses do you work with?',
    a: 'We work with businesses of 5 to 500 people across manufacturing, logistics, real estate, finance, healthcare, and professional services. If you have a manual process that costs time or money every day, we can probably automate it.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Depends on scope. A focused automation workflow can be live in 2–3 weeks. A custom-trained computer vision system typically takes 4–6 weeks from data collection to production deployment. We\'ll give you a specific timeline after understanding your project.',
  },
  {
    q: 'Do I need to provide training data for computer vision?',
    a: 'Sometimes yes, sometimes we help collect it. For manufacturing QC, we typically need 500–5,000 labelled images of your specific products. We\'ll tell you exactly what\'s needed upfront.',
  },
  {
    q: 'Who owns the code and models after the project?',
    a: 'You do. 100%. All code, trained models, and infrastructure belong to you. We don\'t use a proprietary platform — we build on open standards.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Yes. We\'ve integrated with Salesforce, HubSpot, SAP, various ERPs, Gmail, Google Workspace, custom databases, and most things with an API. If it has an API or webhook, we can connect to it.',
  },
]
