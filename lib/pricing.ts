// ── PRICING — SINGLE SOURCE OF TRUTH ─────────────────────────────────────────
//
// ⚠️  STATUS: DRAFT — NUMBERS NOT YET CONFIRMED BY DHYAN. DO NOT DEPLOY AS-IS.
//
// WHY THIS FILE EXISTS
// AI Visibility SCAN 001 (2026-07-26) found that frozen prompt P18 ("is it worth hiring an AI
// automation agency — how much does it cost") is answered *entirely* from pricing guides, and
// that P13's answers lead with price bands. Buteforce publishes no prices anywhere, so it is
// structurally uncitable for the highest-commercial-intent question a buyer asks. The existing
// blog post on CV cost ends with "expect a detailed proposal, not a ballpark figure" — which is
// exactly the evasion that gets a page skipped by an answer engine.
//
// WHY THE NUMBERS ARE IN ONE FILE
// The bands below were derived from public India-market rates for comparable custom AI work and
// from the effort estimates in the vault (.agents/knowledge/pricing_content_engine.md — itself
// marked draft). They are a STARTING POINT FOR DHYAN TO CORRECT, not delivery-verified prices.
// Both /pricing and /ai-automation-company-in-chennai read from here, so confirming the numbers
// once updates every published surface.
//
// TO SHIP:
//   1. Dhyan replaces every band below with real numbers from actual quotes/invoices.
//   2. Flip PRICING_CONFIRMED to true.
//   3. Until then /pricing renders a visible draft banner and is excluded from the sitemap.
//
// Rule: publish a band or publish nothing. "Contact us for a quote" is what put us at 0/18.

export const PRICING_CONFIRMED = false

export const PRICING_UPDATED = '2026-07-26'

export interface PriceBand {
  id: string
  service: string
  /** Human-readable band. Keep the currency symbol and the unit in the string. */
  band: string
  unit: string
  timeline: string
  /** What a buyer gets at the low end vs the high end — the reason the band is a band. */
  lowEnd: string
  highEnd: string
  /** The single biggest cost driver. Buyers screenshot this row. */
  driver: string
}

export const PRICE_BANDS: PriceBand[] = [
  {
    id: 'automation',
    service: 'AI workflow automation',
    band: '₹1.2–3 lakh',
    unit: 'per workflow',
    timeline: '2–3 weeks',
    lowEnd: 'One trigger, one destination, clean structured input — invoice email to accounting system.',
    highEnd: 'Multi-branch logic, several systems that do not have APIs, human approval steps.',
    driver: 'How many systems have to be integrated, and whether any of them lacks an API.',
  },
  {
    id: 'ocr',
    service: 'Document AI / OCR pipeline',
    band: '₹3–8 lakh',
    unit: 'per pipeline',
    timeline: '3–5 weeks',
    lowEnd: 'One document type, consistent layout, printed text, under 5,000 documents a month.',
    highEnd: 'Mixed handwritten and printed, merged-cell tables, multiple languages, validation rules.',
    driver: 'Document variety. One layout is engineering; forty layouts is a research problem.',
  },
  {
    id: 'vision',
    service: 'Computer vision line inspection',
    band: '₹6–18 lakh',
    unit: 'per production line',
    timeline: '4–8 weeks',
    lowEnd: 'One camera, one defect class, existing lighting usable, line under 60 items/min.',
    highEnd: 'Multiple cameras, several defect classes, multi-SKU changeover, 120+ items/min, PLC reject integration.',
    driver: 'Number of defect classes and line speed. Both drive image collection and model training time.',
  },
  {
    id: 'agents',
    service: 'AI agent (sales / support / enquiry)',
    band: '₹4–10 lakh',
    unit: 'per agent',
    timeline: '3–6 weeks',
    lowEnd: 'One channel (WhatsApp or web), FAQ plus qualification, hands off to a human.',
    highEnd: 'Multi-channel, CRM write-back, booking or payment actions, escalation rules.',
    driver: 'How many actions the agent is allowed to take on its own versus just answering.',
  },
]

/** Hardware is quoted at cost, never marked up — stated publicly because it is a trust asset. */
export const HARDWARE_NOTE = {
  band: '₹1.5–5 lakh',
  unit: 'per line, at cost',
  detail:
    'Industrial cameras, lighting, enclosure and edge compute for a vision project are quoted separately at supplier cost with the invoices shown. Buteforce does not mark up hardware.',
}

/** Optional, never bundled — a delivered system runs without it. */
export const SUPPORT_NOTE = {
  band: '₹15,000–40,000',
  unit: 'per month, optional',
  detail:
    'Covers monitoring, model retraining as products change, and a response-time commitment. Declining it does not disable anything: the model weights, source code and deployment are handed over at the end of every project.',
}

/**
 * Honest cross-market comparison — the citable artefact for P18.
 * Every figure here is a publicly observable market rate for that category, not a quote.
 */
export const MARKET_COMPARISON = [
  {
    approach: 'Buteforce — fixed-price custom build',
    upfront: '₹1.2–18 lakh',
    ongoing: '₹0 (support optional)',
    betterWhen: 'The problem is specific enough that no catalogue product was trained on it, and you want to own the result outright.',
    us: true,
  },
  {
    approach: 'Off-the-shelf AI SaaS (Nanonets, Rossum, generic vision APIs)',
    upfront: '₹0–50,000 setup',
    ongoing: '₹20,000–2,00,000 / month',
    betterWhen: 'Your documents or defects are standard, you want results this week, and a per-document fee forever is acceptable.',
  },
  {
    approach: 'Vision sensor vendors (Cognex, Keyence)',
    upfront: '₹4–25 lakh hardware + licence',
    ongoing: 'Licence + support contract',
    betterWhen: 'A standard inspection with global support, documented MTBF and procurement-friendly paperwork matters more than a custom model.',
  },
  {
    approach: 'Large IT services firm (TCS, Infosys, Wipro, Accenture)',
    upfront: '₹40 lakh–5 crore+',
    ongoing: 'Time and materials',
    betterWhen: 'You need a multi-plant global rollout, enterprise procurement compliance, or to buy through an existing MSA.',
  },
  {
    approach: 'Freelancer or small dev shop',
    upfront: '₹40,000–3 lakh',
    ongoing: 'Ad hoc',
    betterWhen: 'The scope is a script or a dashboard, not a trained model that has to hold accuracy on a live line for years.',
  },
  {
    approach: 'Hire in-house',
    upfront: '₹18–40 lakh / year per ML engineer',
    ongoing: 'Salary + infra',
    betterWhen: 'AI is core to your product long-term and you can hire and retain ML engineers.',
  },
]
