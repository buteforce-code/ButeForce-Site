export const CAPABILITIES_DATA = [
  {
    id: 'dom1',
    title: 'AI Automation & Workflow Orchestration',
    sub: 'n8n · Trigger.dev · Python · Claude API · Zapier',
    items: [
      { name: 'Agentic workflow pipelines', desc: 'Multi-step autonomous workflows that read inputs, make decisions, call APIs, and write outputs — without a human in the loop.', tags: ['n8n', 'Trigger.dev', 'Python'] },
      { name: 'Email & CRM automation', desc: 'Triage inboxes, draft replies, qualify leads, update CRM records, and route tasks — fully autonomous or human-in-the-loop.', tags: ['Gmail API', 'HubSpot', 'Salesforce'] },
      { name: 'Content & marketing automation', desc: 'Blog generation, SEO optimisation, social scheduling, image creation — from a single prompt to a published post across channels.', tags: ['GPT-4o', 'DALL-E', 'Whisper'] },
      { name: 'Data extraction pipelines', desc: 'Pull structured data from unstructured sources — websites, PDFs, spreadsheets, APIs — and pipe it into databases or downstream systems.', tags: ['Python', 'Supabase', 'PostgreSQL'] },
      { name: 'Scheduling & coordination bots', desc: 'Calendar management, meeting coordination, reminder systems, and cross-system sync — no more manual scheduling overhead.', tags: ['Google Calendar API', 'Telegram'] },
      { name: 'Invoice & financial automation', desc: 'Extract data from receipts, generate professional invoices, apply tax logic, and file to accounting systems — end to end.', tags: ['PaddleOCR', 'PDF generation'] }
    ]
  },
  {
    id: 'dom2',
    title: 'Computer Vision & Image Intelligence',
    sub: 'YOLOv8 · PyTorch · OpenCV · TensorFlow · CUDA',
    items: [
      { name: 'Custom object detection', desc: 'Train YOLO or custom architectures on your specific objects — products, defects, people, vehicles — at production speed.', tags: ['YOLOv8', 'YOLOv5', 'Custom YOLO'] },
      { name: 'Manufacturing QC systems', desc: 'Real-time defect detection and product classification on live conveyor lines. Integrated with PLC systems and industrial cameras.', tags: ['Industrial cameras', 'PLC', 'PyTorch'] },
      { name: 'Sports & motion analytics', desc: 'Player tracking, speed/distance calculation, possession analysis, and heatmap generation from video footage.', tags: ['Optical flow', 'OpenCV', 'K-means'] },
      { name: 'Image segmentation', desc: 'Pixel-level segmentation for medical imaging, satellite analysis, retail shelf analysis, and part identification.', tags: ['Mask R-CNN', 'SAM', 'PyTorch'] },
      { name: 'Video processing pipelines', desc: 'Frame-by-frame analysis, scene classification, motion detection, and event-triggered recording systems.', tags: ['FFmpeg', 'OpenCV', 'Python'] },
      { name: 'MLOps for vision models', desc: 'Automated data collection, labelling pipelines, model versioning, continuous retraining, and performance monitoring in production.', tags: ['MLflow', 'Docker', 'CUDA'] }
    ]
  },
  {
    id: 'dom3',
    title: 'AI Agents & Multi-Agent Systems',
    sub: 'LangChain · LangGraph · Google ADK · Claude API · CrewAI',
    items: [
      { name: 'Single-purpose agents', desc: 'Focused agents with a defined role: lead qualifier, support responder, invoice processor, research assistant. One job, done autonomously.', tags: ['Claude API', 'LangChain', 'Supabase'] },
      { name: 'Multi-agent orchestration', desc: 'Supervisor agents delegating to specialist subagents — for complex, multi-step workflows that require coordination across functions.', tags: ['LangGraph', 'Google ADK', 'CrewAI'] },
      { name: 'Persistent memory agents', desc: 'Agents that remember context across sessions — user preferences, conversation history, prior decisions — using PostgreSQL or vector memory.', tags: ['Postgres Chat Memory', 'pgvector'] },
      { name: 'Tool-using agents', desc: 'Agents with access to real tools: web search, code execution, database reads/writes, API calls, file manipulation — act, not just respond.', tags: ['Function calling', 'Tavily', 'FastAPI'] },
      { name: 'Customer-facing agents', desc: 'Deployed on Telegram, WhatsApp, web chat, or email. Handle inquiries, qualify leads, book appointments, escalate edge cases.', tags: ['Telegram API', 'WhatsApp Business'] },
      { name: 'Internal ops agents', desc: 'Personal assistants for operations teams — managing emails, calendars, research tasks, and cross-system coordination via mobile interface.', tags: ['Gmail API', 'Google Calendar', 'Mistral'] }
    ]
  },
  {
    id: 'dom4',
    title: 'RAG Pipelines & LLM Integration',
    sub: 'Pinecone · Weaviate · pgvector · Hugging Face · Mistral · OpenAI',
    items: [
      { name: 'Standard RAG pipelines', desc: 'Document ingestion, chunking, embedding, vector storage, and retrieval — grounding LLM responses in your actual data, not hallucinations.', tags: ['LangChain', 'pgvector', 'OpenAI Embeddings'] },
      { name: 'Advanced / hybrid RAG', desc: 'HyDE, parent-child chunking, reranking with cross-encoders, multi-query retrieval, and metadata filtering for precision at scale.', tags: ['Pinecone', 'Weaviate', 'Cohere Rerank'] },
      { name: 'LLM fine-tuning', desc: 'Domain-specific fine-tuning using LoRA, QLoRA, and full fine-tuning on Hugging Face models — for tasks where prompt engineering isn\'t enough.', tags: ['LoRA', 'QLoRA', 'Hugging Face'] },
      { name: 'Multi-modal RAG', desc: 'Pipelines that retrieve across text, images, and tables — for product catalogues, technical manuals, and mixed-format knowledge bases.', tags: ['GPT-4o', 'Mistral Vision', 'CLIP'] },
      { name: 'Knowledge base Q&A systems', desc: 'Internal wikis, compliance documents, product manuals — turned into queryable systems that answer in seconds with cited sources.', tags: ['Claude API', 'Supabase', 'Next.js'] },
      { name: 'LLM evaluation & monitoring', desc: 'Automated evaluation of retrieval quality, response faithfulness, and latency — with dashboards and alerting for production systems.', tags: ['Ragas', 'LangSmith', 'Upstash Redis'] }
    ]
  },
  {
    id: 'dom5',
    title: 'Document AI & OCR',
    sub: 'Mistral 7B · Google Cloud Vision · PaddleOCR · Tesseract',
    items: [
      { name: 'Multi-engine OCR pipelines', desc: 'Dual-engine routing between Mistral Vision OCR and Google Cloud Vision — optimal model selected per document type, with automatic fallback.', tags: ['Mistral Vision', 'Google Cloud Vision'] },
      { name: 'Handwriting recognition', desc: 'Extraction from handwritten notes, forms, and annotations — including cursive, mixed print/handwrite, and degraded document quality.', tags: ['Fine-tuned VLM', 'Data augmentation'] },
      { name: 'Table & structured data extraction', desc: 'Complex table recognition with merged cells, spanning headers, and nested structures — output as JSON, CSV, or directly into your database.', tags: ['Layout analysis', 'Prisma ORM'] },
      { name: 'Invoice & receipt processing', desc: 'End-to-end extraction from financial documents — vendor details, line items, totals, taxes — structured and validated before writing to your systems.', tags: ['PaddleOCR', 'OpenCV', 'PostgreSQL'] },
      { name: 'Image preprocessing pipelines', desc: 'Blur correction, contrast enhancement, perspective warping, and deskewing — for real-world documents that arrive in non-ideal conditions.', tags: ['Sharp', 'OpenCV', 'PIL'] },
      { name: 'High-volume production systems', desc: 'Serverless architectures handling thousands of documents daily, with Redis caching, error correction, and sub-second per-document latency.', tags: ['Vercel Functions', 'Upstash Redis', 'Next.js'] }
    ]
  },
  {
    id: 'dom6',
    title: 'Machine Learning Engineering & MLOps',
    sub: 'PyTorch · TensorFlow · scikit-learn · MLflow · Docker · Kubernetes',
    items: [
      { name: 'Custom model training', desc: 'End-to-end: data collection, preprocessing, architecture design, training, evaluation, and production packaging. PyTorch or TensorFlow.', tags: ['PyTorch', 'TensorFlow', 'scikit-learn'] },
      { name: 'Predictive analytics systems', desc: 'Forecasting, anomaly detection, churn prediction, fraud detection — production-deployed models that feed into operational dashboards.', tags: ['XGBoost', 'LightGBM', 'Prophet'] },
      { name: 'NLP & text classification', desc: 'Sentiment analysis, intent detection, entity extraction, document classification — using fine-tuned transformers on your domain-specific data.', tags: ['Hugging Face', 'BERT', 'spaCy'] },
      { name: 'MLOps & deployment', desc: 'CI/CD pipelines for ML models. Containerised deployment, model registry, A/B testing infrastructure, and monitoring with drift detection.', tags: ['MLflow', 'Docker', 'Kubernetes'] },
      { name: 'Model optimisation', desc: 'Quantisation, pruning, distillation, and ONNX export — making models faster and cheaper to run in production without losing accuracy.', tags: ['ONNX', 'TensorRT', 'CUDA'] },
      { name: 'Data pipelines & feature stores', desc: 'ETL pipelines, feature engineering, data versioning, and automated retraining triggers — keeping production models current as your data changes.', tags: ['Apache Spark', 'FastAPI', 'Supabase'] }
    ]
  }
];

export const TECH_PILLS = [
  { name: 'PyTorch', isHigh: true },
  { name: 'TensorFlow', isHigh: true },
  { name: 'YOLOv8', isHigh: true },
  { name: 'LangChain', isHigh: true },
  { name: 'LangGraph', isHigh: true },
  { name: 'Claude API', isHigh: true },
  { name: 'n8n', isHigh: true },
  { name: 'Mistral 7B', isHigh: true },
  { name: 'Google ADK', isHigh: true },
  { name: 'Hugging Face', isHigh: true },
  { name: 'OpenAI GPT-4o', isHigh: false },
  { name: 'OpenCV', isHigh: false },
  { name: 'Pinecone', isHigh: false },
  { name: 'Weaviate', isHigh: false },
  { name: 'pgvector', isHigh: false },
  { name: 'PaddleOCR', isHigh: false },
  { name: 'Google Cloud Vision', isHigh: false },
  { name: 'Trigger.dev', isHigh: false },
  { name: 'Supabase', isHigh: false },
  { name: 'PostgreSQL', isHigh: false },
  { name: 'MLflow', isHigh: false },
  { name: 'Docker', isHigh: false },
  { name: 'FastAPI', isHigh: false },
  { name: 'Next.js', isHigh: false },
  { name: 'Upstash Redis', isHigh: false },
  { name: 'Kubernetes', isHigh: false },
  { name: 'CrewAI', isHigh: false },
  { name: 'Tavily', isHigh: false },
  { name: 'DALL-E', isHigh: false },
  { name: 'Whisper', isHigh: false },
  { name: 'scikit-learn', isHigh: false },
  { name: 'XGBoost', isHigh: false },
  { name: 'BERT', isHigh: false },
  { name: 'LoRA / QLoRA', isHigh: false },
  { name: 'TensorRT', isHigh: false },
  { name: 'ONNX', isHigh: false },
  { name: 'Telegram Bot API', isHigh: false },
  { name: 'Gmail API', isHigh: false },
  { name: 'Google Calendar API', isHigh: false },
  { name: 'Sharp', isHigh: false },
  { name: 'FFmpeg', isHigh: false },
  { name: 'RCON Protocol', isHigh: false },
  { name: 'Prisma ORM', isHigh: false },
  { name: 'Vercel', isHigh: false },
  { name: 'AWS SageMaker', isHigh: false },
  { name: 'GCP Vertex AI', isHigh: false },
  { name: 'K-means clustering', isHigh: false },
  { name: 'Optical flow', isHigh: false },
  { name: 'Ragas', isHigh: false },
  { name: 'Cohere Rerank', isHigh: false }
];

export const CASE_STUDIES = [
  {
    meta: 'Manufacturing · Computer Vision',
    title: 'Quality control eliminating manual inspection on production lines',
    problem: 'Manual insole classification was inconsistent across shifts. A tired inspector at 4pm isn\'t the same inspector as 9am Monday. Shipping errors were climbing. The client needed machine-consistent accuracy at any hour.',
    stack: ['YOLOv8', 'PyTorch', 'Industrial cameras', 'PLC systems'],
    results: [
      { num: '99.2%', label: 'Classification accuracy across all shifts' },
      { num: '94%', label: 'Reduction in misclassification errors' },
      { num: '120/min', label: 'Items processed at full line speed' }
    ]
  },
  {
    meta: 'Financial Services · Document AI & OCR',
    title: 'Dual-engine OCR pipeline for impossible document formats',
    problem: 'Handwritten forms. Photos of receipts. Tables with merged cells. Every off-the-shelf OCR tool had failed. The client needed one system that handled all of it, at scale, without human review on every document.',
    stack: ['Mistral 7B Vision', 'Google Cloud Vision', 'Next.js', 'PostgreSQL'],
    results: [
      { num: '<1s', label: 'Per document on standard GPUs' },
      { num: 'Dual', label: 'Engine routing with automatic fallback' },
      { num: 'Lowest', label: 'CER for handwriting and complex tables' }
    ]
  },
  {
    meta: 'Real Estate · AI Agents',
    title: '24/7 property inquiry agent with zero additional headcount',
    problem: 'Hundreds of inquiries per day. First-to-respond wins in real estate. Manual reply at 9am can\'t compete with an agent that responds at 11pm. Needed full qualification — budget, preferences, viewing schedule — without a human present.',
    stack: ['Custom NLP', 'Telegram API', 'PostgreSQL', 'CRM integration'],
    results: [
      { num: '70%', label: 'Inquiries handled without human involvement' },
      { num: '95%', label: 'Faster lead response rate' },
      { num: '24/7', label: 'Availability — zero additional headcount' }
    ]
  }
];

export const COMPARISONS = [
  { q: 'Who trains the models?', us: 'Your data. Your edge cases.', them: 'Plug-in APIs, no customisation' },
  { q: 'What does "production" mean?', us: 'Real error handling, real scale', them: 'Prototype needing a rebuild' },
  { q: 'Who owns the output?', us: 'You own everything', them: 'Locked into their platform' },
  { q: 'How are outcomes defined?', us: 'Specific metrics agreed upfront', them: 'Vague deliverables, scope drift' },
  { q: 'What happens post-delivery?', us: '30-day refinement, then yours', them: 'Disappear after launch' },
  { q: 'How deep is model expertise?', us: 'Deep in every model we use', them: 'Resellers of tools they don\'t fully understand' }
];

export const PROCESS_STEPS = [
  { n: '01', t: 'One conversation', b: 'Tell us the process that costs you the most time. We ask uncomfortable questions. This is where most agencies pitch. We\'re still listening.' },
  { n: '02', t: 'We design the system', b: 'Before code, we map data flow, model selection, integration points, and what done looks like. Architecture decisions are permanent — we get them right first.' },
  { n: '03', t: 'Production-grade build', b: 'Not a prototype. Real error handling, real logging, real performance on your data. Edge cases included. You know when something goes wrong before your clients do.' },
  { n: '04', t: 'You own everything', b: 'Code, models, infrastructure — all yours. Full documentation. We stay for 30 days of refinement. Then it runs without us. That\'s the point.' }
];

export const FAQ_DATA = [
  {
    q: "We already tried an AI solution. It didn't work. Why would this be different?",
    a: "Because most \"AI solutions\" are off-the-shelf tools configured to look custom. When they fail, it's because the model was never trained on your data, or the system was a prototype that couldn't handle production volume, or the edge cases were never accounted for. We train on your actual data, agree on success metrics before writing a line of code, and build for the edge cases — not just the happy path."
  },
  {
    q: "Can't we just hire an AI engineer internally?",
    a: "You could. Recruiting takes 3–6 months. Onboarding another 2–3. A good AI engineer costs £80–120k UK, $140–200k US — before benefits. One engineer brings expertise in one area. We bring production experience across automation, vision, agents, RAG, and OCR simultaneously. For a defined problem you need solved now, we're faster, cheaper, and lower risk."
  },
  {
    q: "How long does it actually take?",
    a: "A focused automation workflow can be live in 2–3 weeks. A custom-trained computer vision system — data collection, training, evaluation, deployment — typically takes 4–6 weeks. A full RAG pipeline or multi-agent system is usually 3–5 weeks. We give you a specific date after one call, not a range."
  },
  {
    q: "What if the system doesn't hit the numbers we agreed on?",
    a: "We agree on measurable success criteria before we start. Not \"the system works\" — specific accuracy thresholds, processing speeds, automation rates. If the system doesn't hit them, we don't stop until it does. We also stay for 30 days post-launch — that's when real usage surfaces real refinements that no test environment predicts."
  },
  {
    q: "Will this work with our existing systems and stack?",
    a: "Almost certainly. We've integrated with Salesforce, HubSpot, SAP, various ERPs, Gmail, Google Workspace, Telegram, WhatsApp Business, and most things with an API or webhook. If your system can receive data, we can send it. If your system emits events, we can listen to them."
  },
  {
    q: "Do we need to provide training data for computer vision?",
    a: "Sometimes yes, sometimes we help collect it. For manufacturing QC, we typically need 500–5,000 labelled images of your specific products. We'll tell you exactly what's needed in the first conversation — we've built data collection pipelines as part of projects before."
  }
];

export const TESTIMONIALS = [
  {
    quote: "They shipped a working computer vision system in three weeks. Our quality control errors dropped by 94% in the first month. I didn't think it would be this fast.",
    name: 'Operations Director',
    company: 'Manufacturing Client',
    initials: 'OD',
  },
  {
    quote: 'The OCR pipeline handles documents I thought were impossible to automate — handwritten forms, photos of receipts, tables with merged cells. Sub-second. Every time.',
    name: 'Head of Finance Ops',
    company: 'Financial Services Client',
    initials: 'HF',
  },
  {
    quote: 'Our AI agent handles 70% of property inquiries now. The sales team only speaks to people who are ready to view. Lead quality went up, response time went to zero.',
    name: 'Director',
    company: 'Real Estate Agency',
    initials: 'D',
  },
];
