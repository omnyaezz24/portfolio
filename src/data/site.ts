export type Project = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  stack: string[];
  summary: string;
  description: string;
  features: string[];
  featured: boolean;
  outcome: string;
  problem: string;
  role: string;
  solution: string;
  result: string;
  lesson: string;
  gallery?: {
    title: string;
    description: string;
    image: string;
  }[];
};

export const site = {
  name: "Omnya Ezz",
  role: "Full-Stack Software & Systems Engineer",
  /** One clear market promise */
  promise: "I build end-to-end systems that actually ship — mobile, backend, analytics, and trading ops.",
  tagline:
    "For founders, ops teams, and traders who need reliable software — not demos that die in a slide deck.",
  email: "omnyaezz24@gmail.com",
  location: "Available worldwide",
  replyTime: "I usually reply within 24 hours.",
  audience: "Startups, internal ops teams, and trading/automation projects",
  // Social profiles intentionally omitted — email-only contact.
  about: {
    lead: "I help people turn messy operational problems into working software. My core stack is Python, Flask, Flutter, and algorithmic trading systems — built for production use, not portfolio fluff.",
    body: "If you need a mobile product with a real API, an internal analytics command center, trading automation with risk gates, or an AI tool that audits and rewrites insecure code — that is the work I already ship. I care about architecture, measurable outcomes, and interfaces operators can trust under pressure.",
  },
  offer: {
    headline: "What you can hire me for",
    items: [
      {
        title: "Full-stack product builds",
        detail: "Flutter clients + Flask/Postgres APIs with offline-ready UX.",
      },
      {
        title: "Internal analytics platforms",
        detail: "ETL, reporting, attachment pipelines, and operator dashboards.",
      },
      {
        title: "Trading & automation systems",
        detail: "MQL5 EAs, news/spread gates, and Python operational monitoring.",
      },
      {
        title: "AI security / decision tools",
        detail: "Local LLM audit UIs, multi-agent workflows, structured reports.",
      },
    ],
  },
  contactGuide: [
    "What you need built or fixed",
    "Current stack / constraints",
    "Timeline and success criteria",
  ],
  proof: [
    { label: "Case records handled", value: "5,400+" },
    { label: "Attachments resolved", value: "62,000+" },
    { label: "Live trading symbols", value: "XAU · EUR · JPY" },
    { label: "Response target", value: "< 24h" },
  ],
};

export const skills = [
  {
    category: "Languages & Core",
    items: ["Python", "Dart", "MQL5", "TypeScript", "SQL", "JavaScript"],
  },
  {
    category: "Backend & Data",
    items: ["Flask", "REST APIs", "PostgreSQL", "SQLite", "ETL Pipelines", "Aiven"],
  },
  {
    category: "Mobile & Frontend",
    items: ["Flutter", "Optimistic UI", "Offline Caching", "Jinja", "Responsive Web"],
  },
  {
    category: "AI & Trading Systems",
    items: ["CrewAI", "LangGraph", "Groq API", "MetaTrader 5", "Risk Gates", "Ops Monitoring"],
  },
];

export const projects: Project[] = [
  {
    slug: "enterprise-case-analytics",
    title: "Enterprise Case Analytics & Document Pipeline",
    image: "/assets/enterprise-analytics-ui.jpg",
    imageAlt: "Enterprise Case Analytics & Document Pipeline Command Center",
    stack: ["Flask", "Python", "SQLite", "ETL Pipelines", "Data Ingestion"],
    featured: true,
    outcome: "5,400+ case records · 62k+ attachments resolved",
    summary:
      "High-throughput enterprise records platform that aggregates mission-critical case data, documents, and attachments into a unified operational command center.",
    description:
      "I designed and implemented an enterprise-grade reporting and case analytics infrastructure built with Flask, SQLite, and Jinja for high-stakes operational visibility.",
    problem:
      "Operators and auditors faced fragmented, siloed data across legacy systems — struggling with missing attachment paths, slow manual lookups, and unindexed physical documents.",
    role: "I owned architecture, ETL ingestion, attachment path resolution engine, and dashboard UX end to end.",
    solution:
      "Implemented resilient ETL ingestion pipelines, QR-code lookup indexing, deterministic path resolution across multi-tier storage, and real-time operational views.",
    result:
      "Successfully indexed and resolved 5,400+ enterprise cases and 62,000+ linked attachments with sub-second retrieval speeds and zero document loss.",
    lesson:
      "In enterprise operations software, deterministic data integrity and path verification always supersede superficial visuals — reliability is the product.",
    features: [
      "High-throughput ETL pipelines for bulk case ingestion & normalization",
      "Automated attachment resolution engine handling 62,000+ multi-format documents",
      "Deterministic QR-code caching layer for instant physical file retrieval",
      "High-concurrency SQLite/Flask architecture with read-replica safety",
      "Role-partitioned operational dashboard with audit logging and SLA metrics",
    ],
  },
  {
    slug: "cloud-retail-pos",
    title: "OmniRetail — Cloud POS, Inventory & ERP Platform",
    image: "/assets/cloud-retail-ui.jpg",
    imageAlt: "OmniRetail Cloud POS and ERP Platform",
    stack: ["Google Apps Script", "JavaScript", "Sheets API", "PWA", "ESC/POS", "Android"],
    featured: true,
    outcome: "Full retail lifecycle · offline-first PWA",
    summary:
      "Commercial-grade POS and ERP engine powering end-to-end store operations: barcode checkout, thermal printing, serialized warranty, and live accounting.",
    description:
      "I engineered a full-scale cloud POS, inventory, and retail management system built with Google Apps Script, Sheets API, service workers, and an Android client.",
    problem:
      "Retailers struggle with expensive, bloated POS systems that require dedicated servers, fail when internet drops, and lack serialized hardware/warranty tracking.",
    role: "I designed and implemented the entire cloud backend, offline PWA architecture, ESC/POS printing engine, and Android application wrapper.",
    solution:
      "Built an offline-first PWA with multi-role permissions (Admin/Cashier), ESC/POS 58/80mm thermal receipt printing, automated WhatsApp/PDF invoices, IMEI warranty tracking, supplier purchase cycles, and real-time ledger accounting.",
    result:
      "Delivered a zero-server-maintenance ERP solution handling high-volume daily sales, barcode scanning, deficit alerts, daily Google Drive backups, and shift reconciliations.",
    lesson:
      "Reliable retail software must be offline-resilient and instant at checkout — cashier speed directly impacts revenue.",
    features: [
      "Barcode scanning and 58mm/80mm ESC/POS direct thermal receipt printing",
      "Offline-first PWA with background sync and native Android APK wrapper",
      "Role-based access control (Admin & Cashier shift auditing)",
      "Serialized IMEI warranty tracking & maintenance service ticketing",
      "Automated WhatsApp & PDF invoice dispatch",
      "Dynamic promotions engine (percentage, fixed amount, Buy-X-Get-Y)",
      "Daily automated cloud backups to Google Drive & CSV exports",
    ],
    gallery: [
      {
        title: "Fast Barcode POS & Checkout",
        description: "Instant USB barcode scanning, item search, and live unit pricing for hardware & accessories.",
        image: "/assets/retail-screen-pos.png",
      },
      {
        title: "Sales & Revenue Analytics",
        description: "Real-time metrics: top-moving items, dead stock alerts, and daily gross revenue tracking.",
        image: "/assets/retail-screen-analytics.png",
      },
      {
        title: "Serialized IMEI & Product Catalog",
        description: "Automated SKU generation, category partitioning, and serialized IMEI warranty binding.",
        image: "/assets/retail-screen-catalog.png",
      },
      {
        title: "Operational Expense Tracking",
        description: "Categorized ledger for daily shop expenses, utility bills, and cashier shift reconciliation.",
        image: "/assets/retail-screen-expenses.png",
      },
      {
        title: "Returns & Exchange Workflow",
        description: "Automated inventory adjustment upon verified return with invoice reference lookups.",
        image: "/assets/retail-screen-returns.png",
      },
    ],
  },
  {
    slug: "mt5-eas",
    title: "MetaTrader 5 Algorithmic Trading EAs",
    image: "/assets/mt5-eas-ui.png",
    imageAlt: "MetaTrader 5 Expert Advisors",
    stack: ["MQL5", "Python", "MT5"],
    featured: true,
    outcome: "News + spread gates · multi-symbol ops",
    summary:
      "Production-minded Expert Advisors with news filters, spread gates, and Python monitoring for Gold, EURUSD, and USDJPY.",
    description:
      "I develop and operate MetaTrader 5 Expert Advisors focused on Gold, EURUSD, and USDJPY with risk controls and ops observability.",
    problem:
      "Strategy code alone is not enough — live trading fails on news spikes, wide spreads, and silent operational blind spots.",
    role: "I built the EA logic, risk gates, and the Python monitoring layer around the terminal.",
    solution:
      "Native economic calendar filters, spread limit gates, and automated monitoring scripts keep entries disciplined and systems observable.",
    result:
      "A multi-symbol MT5 stack (v2.70 lineage) running with explicit risk gates and live/shadow-ready operational workflows.",
    lesson:
      "Trading systems win on discipline and monitoring — not on signals alone.",
    features: [
      "MQL5 Expert Advisors (v2.70) for major symbols",
      "Native economic calendar news filters",
      "Spread limit gates before trade entry",
      "Automated Python ops monitoring and health checks",
      "Live-capable and shadow deployment workflows",
    ],
  },
  {
    slug: "security-auditor-dashboard",
    title: "Security Auditor Dashboard",
    image: "/assets/security-auditor-ui.png",
    imageAlt: "Security Auditor Dashboard",
    stack: ["Flask", "Ollama", "Python", "Prompt Engineering"],
    featured: true,
    outcome: "Local AI audit · secure rewrite + diff",
    summary:
      "Local AI code-audit product: scan code, score findings, rewrite securely, and export reports — without sending source to the cloud.",
    description:
      "I built a Flask + Ollama security audit dashboard for local vulnerability review, secure rewrites, and exportable reports.",
    problem:
      "Teams need practical security review on real code, but cloud LLM workflows can be slow, costly, or unacceptable for private source.",
    role: "I designed the product flow, prompts, UI, and evaluation path for local model auditing.",
    solution:
      "Paste/upload/folder scan, model picker, findings + score + chain of thought, side-by-side secure rewrite, chat follow-up, and JSON/Markdown export.",
    result:
      "A usable local audit workstation with eval-suite support and optional Bandit baseline comparison for prompt-engineering defense.",
    lesson:
      "Security tooling sells when the rewrite and evidence are visible — not when it only dumps warnings.",
    features: [
      "Paste, upload, or drag-drop source across common languages",
      "Choose Folder project scan with aggregated file-path findings",
      "Ollama model picker for local LLMs",
      "Findings, score, chain of thought, and secure rewrite",
      "Side-by-side diff, follow-up chat, and JSON/Markdown export",
      "Eval suite plus optional Bandit baseline compare",
    ],
  },
  {
    slug: "mysmartcoach",
    title: "MySmartCoach App",
    image: "/assets/mysmartcoach-ui.png",
    imageAlt: "MySmartCoach brand",
    stack: ["Flutter", "Flask", "Postgres", "Aiven"],
    featured: false,
    outcome: "Mobile + API product shipped",
    summary:
      "Cross-platform fitness product with workout systems, optimistic UI, and offline caching on a Flask/Postgres backend.",
    description:
      "I built MySmartCoach as a cross-platform fitness product with a Flutter client and Flask REST API.",
    problem:
      "Fitness apps often feel laggy and break offline — users abandon workflows mid-session.",
    role: "I built the mobile experience and API architecture as a full-stack product.",
    solution:
      "Workout splits, progressive warm-ups, optimistic updates, and offline caching against a managed Postgres API.",
    result:
      "A coherent mobile+backend fitness system designed for daily training use, not just UI mockups.",
    lesson:
      "Perceived speed (optimistic UI + cache) is a retention feature.",
    features: [
      "Workout split routines with clear progression tracking",
      "Progressive warm-up generator tailored to the session",
      "Optimistic UI updates for a snappy mobile feel",
      "Offline caching for workouts and recent activity",
      "Flask REST API with Postgres on a managed host",
    ],
  },
  {
    slug: "multi-agent-ai",
    title: "Multi-Agent AI Decision Systems",
    image: "/assets/multi-agent-ai-ui.png",
    imageAlt: "Multi-Agent AI",
    stack: ["CrewAI", "LangGraph", "Groq"],
    featured: false,
    outcome: "Structured multi-agent decisions",
    summary:
      "Agent architectures for market evaluation, risk checks, and news analysis with clear decision separation.",
    description:
      "I build multi-agent AI systems with CrewAI, LangGraph, and Groq for research and risk-aware decisions.",
    problem:
      "Single-prompt AI collapses research, risk, and synthesis into one unreliable answer.",
    role: "I designed agent roles and orchestration so each concern stays specialized.",
    solution:
      "CrewAI/LangGraph flows with dedicated evaluation, risk, and news agents on low-latency Groq inference.",
    result:
      "A repeatable decision architecture that separates analysis stages instead of hoping one prompt does everything.",
    lesson:
      "In high-stakes domains, process design beats clever prompting.",
    features: [
      "CrewAI and LangGraph orchestration patterns",
      "Market asset evaluation agents",
      "Risk management decision layers",
      "Real-time news analysis pipelines",
      "Groq API for low-latency inference",
    ],
  },
  {
    slug: "edu-software",
    title: "Interactive Educational Software",
    image: "/assets/edu-software-ui.png",
    imageAlt: "Educational Software",
    stack: ["Games", "Speech Synthesis", "UX"],
    featured: false,
    outcome: "Play-based learning loops",
    summary:
      "Children’s learning games for numbers, shapes, and animal flashcards with English speech synthesis.",
    description:
      "I created interactive educational software that turns vocabulary and concepts into short playful sessions.",
    problem:
      "Young learners disengage quickly when education feels like drills instead of play.",
    role: "I designed the interaction loops, content modes, and speech-assisted feedback.",
    solution:
      "Games for numbers and geometry plus photographic animal flashcards with English speech synthesis.",
    result:
      "Short-session educational experiences built for attention, repetition, and spoken reinforcement.",
    lesson:
      "For kids’ products, feedback speed and delight beat content volume.",
    features: [
      "Number and geometry learning games",
      "Photographic animal flashcards",
      "English speech synthesis integration",
      "Child-friendly interaction patterns",
      "Custom game loops designed for short sessions",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const secondaryProjects = projects.filter((project) => !project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
