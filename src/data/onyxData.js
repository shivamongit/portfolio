// Shivam Shasheesh — content from OPTIMIZED_LINKEDIN_PROFILE.md
// Layout: github.com/nodeanurag/dhirendra_sirji_portfolio
export const basics = {
  name: "Shivam Shasheesh",
  firstName: "Shivam",
  headline:
    "Senior Software Engineer | AI Platform Engineering | Full-Stack (Angular, Python, C#) | Azure OpenAI & RAG | ZF Group",
  location: "Hyderabad, India",
  email: "shivam.akka@outlook.com",
  phone: "+91 98710 31429",
  avatar: "/images/profile.jpg",
  resume:
    "https://drive.google.com/file/d/1P-oP3aATTchfEzfag1W_3LUqv5OVMEdU/view?usp=sharing",
  socials: {
    github: "https://github.com/shivamongit",
    linkedin: "https://www.linkedin.com/in/shivamshasheesh/",
    twitter: "https://twitter.com/shivamshasheesh",
    website: "https://portfolio-shivamongit.vercel.app/",
  },
  githubUser: "shivamongit",
};

export const aboutParagraphs = [
  "I build AI-powered enterprise platforms that transform manual workflows into intelligent systems. Eight production tools shipped: three RAG/AI platforms, two automotive embedded tools, and three enterprise workflow systems.",
  "As a Senior Software Engineer at ZF Group, I architect full-stack applications that combine modern web technologies with AI/ML. I own systems end-to-end — from ETL pipelines and vector embeddings to real-time hardware communication and production deployment.",
  "Key systems include OpsAI (incident resolution over 21,000+ records), SAM (AUTOSAR configuration intelligence with FAISS), BCT Tool (ECU bootloader testing across CAN/CAN FD/FlexRay), WoLET (workload estimation for 50+ teams), plus RequirementsAI, DivOps, LearnOps, and ERM HIL Setup. Open to connecting on AI engineering, platform development, and enterprise automation.",
];

export const quote = {
  text:
    "A distributed system is one in which the failure of a computer you didn't even know existed can render your own computer unusable.",
  author: "Leslie Lamport",
};

export const allProjects = [
  {
    name: "OpsAI",
    tag: "Enterprise · AI Platform · ZF Group",
    description:
      "RAG-powered incident resolution engine embedded in enterprise ticketing — 21,000+ historical records converted into instant, contextual resolutions.",
    details:
      "FAISS vector search across 5,914 PBIs and 528 documented solutions; multi-model inference (GPT-5.2, GPT-4o-mini) with confidence scoring; Azure DevOps log-to-resolution mapping; 25% self-service rate and 300+ tickets/month. Resolution time dropped from 1–2 days to minutes.",
    live_url: null,
    repo_url: null,
    image: null,
    tech: ["Python", "FastAPI", "Streamlit", "Azure OpenAI", "FAISS", "RAG"],
    featured: true,
  },
  {
    name: "SAM",
    tag: "Enterprise · Automotive · ZF Group",
    description:
      "AUTOSAR configuration intelligence for EVA2 — natural language queries over 1,000+ parameters across multiple ECU releases.",
    details:
      "ETL across 10+ ARXML domains; 3072-dim embeddings with FAISS; pre-calculation layer before LLM inference to eliminate math errors; domain-specific prompts for memory, OS, diagnostic, and signal queries.",
    live_url: null,
    repo_url: null,
    image: null,
    tech: ["Python", "FastAPI", "Azure OpenAI", "FAISS", "lxml", "Pandas"],
    featured: true,
  },
  {
    name: "RequirementsAI",
    tag: "Enterprise · AI Platform · ZF Group",
    description:
      "Semantic document comparison across 10,000+ requirement items with automatic change classification and compliance explanations.",
    details:
      "Azure OpenAI embeddings with unchanged/modified/added/deleted classification; GPT-generated compliance notes; MD5 caching to reduce API cost; batch processing with rate-limit handling.",
    live_url: null,
    repo_url: null,
    image: null,
    tech: ["Python", "Streamlit", "Azure OpenAI", "FAISS", "Pandas"],
    featured: true,
  },
  {
    name: "BCT Tool",
    tag: "Enterprise · Automotive · ZF Group",
    description:
      "Cross-platform ECU bootloader confidence testing — firmware flashing, 30+ UDS services, and robustness scenarios for 4+ OEM programs.",
    details:
      "Electron + Angular UI with C#/.NET backends; CAN, CAN FD, and FlexRay via Vector XL API; JSON-driven zero-code configuration; sub-100ms IPC between UI and native executables. ~70% reduction in manual testing.",
    live_url: null,
    repo_url: null,
    image: null,
    tech: ["Electron", "Angular", "C#/.NET", "UDS", "Vector XL API"],
    featured: true,
  },
  {
    name: "ERM HIL Setup Tool",
    tag: "Enterprise · HIL Testing · ZF Group",
    description:
      "Hardware-in-the-loop platform controlling four ECUs simultaneously over a custom RS-232 binary protocol.",
    details:
      "12-byte response parsing, bitwise state for six parameters per ECU (KL30/KL15, CAN FD, CANoe/CANape), persistent presets, RBAC, and audit logging for automotive compliance. ~70% faster test setup.",
    live_url: null,
    repo_url: null,
    image: null,
    tech: ["C#", ".NET", "Windows Forms", "RS-232", "HIL"],
    featured: false,
  },
  {
    name: "WoLET",
    tag: "Enterprise · Full-Stack · ZF Group",
    description:
      "Workload estimation platform with 37+ API endpoints integrating Clarity, OnePlan, and Actuals — 70% faster estimates for 50+ teams.",
    details:
      "Angular 16 wizard, FastAPI + PostgreSQL (10+ tables), multi-location cost centers, OnePlan-compatible Excel export, Azure AD SSO, deployed on AKS with CI/CD.",
    live_url: null,
    repo_url: null,
    image: null,
    tech: ["Angular", "FastAPI", "PostgreSQL", "Azure AD", "Kubernetes"],
    featured: false,
  },
  {
    name: "DivOps",
    tag: "Enterprise · Workforce · ZF Group",
    description:
      "Resource management for 5,000+ employees across six divisions — allocations, financial reporting, and WFH compliance workflows.",
    details:
      "RBAC with four personas, RxJS-driven real-time modules, Clarity integration, automated Excel reporting (40+ hours/month saved), 95% reduction in allocation cycle time.",
    live_url: null,
    repo_url: null,
    image: null,
    tech: ["Angular", "TypeScript", "RxJS", "PrimeNG", "OAuth2/JWT"],
    featured: false,
  },
  {
    name: "LearnOps",
    tag: "Enterprise · Training Ops · ZF Group",
    description:
      "Training operations for 5,000+ employees — nominations, approvals, waitlists, attendance, and analytics.",
    details:
      "Enterprise SSO/OIDC, role-aware workflows, operational dashboards, and spreadsheet import/export replacing manual email-driven processes.",
    live_url: null,
    repo_url: null,
    image: null,
    tech: ["Angular", "TypeScript", "RxJS", "SSO/OIDC", "REST APIs"],
    featured: false,
  },
  {
    name: "ragpipe",
    tag: "Open Source · Modular RAG Framework",
    description:
      "Production-grade modular RAG framework with pluggable chunkers, embedders, retrievers, rerankers, and generators.",
    details:
      "Hybrid retrieval (FAISS + BM25), cross-encoder reranking, and local-first inference with Ollama and Sentence Transformers.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/ragpipe",
    image: null,
    tech: ["Python", "FAISS", "OpenAI", "Hybrid Search"],
    featured: true,
  },
  {
    name: "docmind",
    tag: "Open Source · Document Intelligence",
    description:
      "Upload documents and get cited answers via FAISS vector search and GPT-4o.",
    details:
      "React + TypeScript frontend, FastAPI backend, chunking and embedding pipelines for PDF/DOCX/TXT.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/docmind",
    image: null,
    tech: ["React", "FastAPI", "FAISS", "OpenAI"],
    featured: false,
  },
  {
    name: "synth-ui",
    tag: "Open Source · AI UI Generator",
    description:
      "Natural-language prompts to production-ready React + TypeScript components with live preview.",
    details:
      "Turborepo monorepo with Zustand state and FastAPI routes to OpenAI and Anthropic.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/synth-ui",
    image: null,
    tech: ["React", "TypeScript", "Tailwind", "FastAPI"],
    featured: false,
  },
  {
    name: "pulse",
    tag: "Open Source · Real-Time Analytics",
    description:
      "Streaming metrics dashboard with Isolation Forest anomaly detection over WebSockets.",
    details:
      "Angular 17 + RxJS frontend with FastAPI ingestion and scikit-learn models.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/pulse",
    image: null,
    tech: ["Angular", "FastAPI", "WebSockets", "scikit-learn"],
    featured: false,
  },
  {
    name: "Nexus Synth",
    tag: "Personal Project · Web Audio",
    description:
      "Browser polysynth with sequencer, FX rack, and live spectrum analyzer.",
    details: "Pure Web Audio API implementation in TypeScript.",
    live_url: "https://nexus-synth.onrender.com",
    repo_url: "https://github.com/shivamongit/nexus-synth",
    image: null,
    tech: ["TypeScript", "Web Audio API"],
    featured: false,
  },
];

export const experienceList = [
  {
    role: "Senior Software Engineer",
    company: "ZF Group, Hyderabad, India",
    date: "March 2025 – Present · Full-time",
    highlights: [
      "Architected OpsAI — RAG incident resolution in enterprise ticketing over 21,000+ records (FAISS, GPT-5.2 / GPT-4o-mini). 25% self-service, 300+ tickets/month; resolution time from 1–2 days to minutes.",
      "Built SAM for EVA2 — AUTOSAR ETL across 10+ domains, 3072-dim embeddings, FAISS search, and NL queries over 1,000+ config parameters.",
      "Developed RequirementsAI — semantic comparison of 10,000+ requirement items with GPT compliance explanations and MD5 caching.",
      "Architected WoLET — 37+ FastAPI endpoints, PostgreSQL, Angular 16, Clarity/OnePlan/Actuals integration; 70% faster estimation for 50+ teams on AKS.",
      "Built DivOps for 5,000+ employees — RBAC, real-time allocation, automated reporting, WFH approvals; 95% reduction in allocation cycle time.",
      "Led management demos of OpsAI and secured buy-in for expanded AI deployment across engineering operations.",
    ],
  },
  {
    role: "Software Engineer",
    company: "ZF Group, India",
    date: "April 2022 – March 2025 · Full-time",
    highlights: [
      "Built BCT Tool — Electron + Angular + C#/.NET ECU bootloader testing; CAN/CAN FD/FlexRay, 30+ UDS services, 7 robustness scenarios, 4+ OEM programs; ~70% less manual testing.",
      "Developed ERM HIL Setup Tool — four ECUs over RS-232 with 12-byte parsing and audit-compliant logging; ~70% faster setup.",
      "Delivered LearnOps training operations (nominations, approvals, waitlists, SSO/OIDC) replacing email-driven workflows.",
      "Shipped enterprise Angular apps (DivOps, WoLET prototype) with OAuth2/JWT, PrimeNG, and RxJS. Two Spot Awards for engineering excellence.",
    ],
  },
];

export const educationList = [
  {
    degree: "Bachelor of Computer Applications (Industry Oriented Program)",
    school: "Galgotias University, Greater Noida",
    date: "2018 – 2021",
    grade: "",
  },
];

export const skillGroups = [
  {
    category: "AI / ML & Data",
    items: [
      "Azure OpenAI",
      "GPT-4 / GPT-5",
      "RAG",
      "FAISS",
      "Embeddings",
      "Semantic Search",
      "NLP",
      "ETL",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Angular",
      "TypeScript",
      "React",
      "Electron",
      "Streamlit",
      "PrimeNG",
      "RxJS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "C#",
      ".NET",
      "REST APIs",
      "SQLAlchemy",
      "Microservices",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Azure DevOps",
      "Azure AD",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Git / GitHub",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "Microsoft SQL Server",
      "MongoDB",
      "Vector Databases",
      "SQLite",
    ],
  },
  {
    category: "Automotive & Embedded",
    items: [
      "HIL Testing",
      "ECU Integration",
      "UDS / ISO 14229",
      "CAN / CAN FD",
      "Vector XL API",
      "RS-232",
      "AUTOSAR",
    ],
  },
];
