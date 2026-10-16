// Shivam Shasheesh portfolio data (template: nodeanurag/dhirendra_sirji_portfolio)
export const basics = {
  name: "Shivam Shasheesh",
  firstName: "Shivam",
  headline:
    "Senior Software Engineer · AI Platform Engineering & Full-Stack",
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
  "I am a Senior Software Engineer at ZF Group, building AI-powered enterprise platforms that turn manual engineering workflows into intelligent systems. My work spans RAG pipelines, vector search, full-stack product engineering, and automotive tooling where reliability and accuracy matter.",
  "By day I architect systems with Azure OpenAI, FAISS, Angular, React, Python, and C#/.NET. Nights and weekends I ship open-source projects around modular RAG, document intelligence, and real-time ML. I hold a BCA (Industry Oriented Program) from Galgotias University, Greater Noida.",
];

export const quote = {
  text:
    "The best way to predict the future is to invent it.",
  author: "Alan Kay",
};

export const allProjects = [
  {
    name: "ragpipe",
    tag: "Open Source · Modular RAG Framework",
    description:
      "Production-grade modular RAG framework with pluggable chunkers, embedders, retrievers, rerankers, and generators. Hybrid search, local-first inference, and built-in evaluation metrics.",
    details:
      "Ships token, recursive, semantic, and contextual chunking; FAISS, BM25, and hybrid retrieval; cross-encoder reranking; and providers for Ollama, OpenAI, Anthropic, and more — designed as composable Python modules with pytest coverage.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/ragpipe",
    image: null,
    tech: ["Python", "FAISS", "OpenAI", "Hybrid Search", "pytest"],
    featured: true,
  },
  {
    name: "docmind",
    tag: "Open Source · Document Intelligence",
    description:
      "RAG-powered document intelligence. Upload PDFs, DOCX, or text, then ask questions and get cited answers from a FAISS-backed index.",
    details:
      "FastAPI backend with chunking and embedding pipelines, React + TypeScript frontend, and GPT-4o generation with source citations for enterprise-style knowledge bases.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/docmind",
    image: null,
    tech: ["React", "TypeScript", "FastAPI", "FAISS", "OpenAI"],
    featured: true,
  },
  {
    name: "synth-ui",
    tag: "Open Source · AI UI Generator",
    description:
      "Describe a UI component in plain English and get production-ready React + TypeScript with a live preview.",
    details:
      "Turborepo monorepo with a Zustand-driven editor, Tailwind styling, and FastAPI routes that call OpenAI and Anthropic for component synthesis.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/synth-ui",
    image: null,
    tech: ["React", "TypeScript", "Tailwind", "FastAPI", "Zustand"],
    featured: true,
  },
  {
    name: "pulse",
    tag: "Open Source · Real-Time Analytics",
    description:
      "Real-time analytics dashboard with ML-powered anomaly detection on streaming metrics and live visualization.",
    details:
      "Angular 17 frontend with RxJS streams, FastAPI WebSocket ingestion, and Isolation Forest models from scikit-learn for anomaly scoring.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/pulse",
    image: null,
    tech: ["Angular", "TypeScript", "FastAPI", "WebSockets", "scikit-learn"],
    featured: true,
  },
  {
    name: "Nexus Synth",
    tag: "Personal Project · Web Audio",
    description:
      "Browser-based polysynth with dual oscillators, multimode filter, FX rack, 16-step sequencer, and live scope plus spectrum analyzer.",
    details:
      "Built entirely on the Web Audio API with a TypeScript UI — no native audio plugins required.",
    live_url: "https://nexus-synth.onrender.com",
    repo_url: "https://github.com/shivamongit/nexus-synth",
    image: null,
    tech: ["TypeScript", "Web Audio API", "Vite"],
    featured: false,
  },
  {
    name: "vanish",
    tag: "Open Source · Chrome Extension",
    description:
      "Privacy-first Chrome extension that clears a site's history, cookies, cache, form data, and URL bar autocomplete in one click.",
    details:
      "Manifest V3 extension built with React and TypeScript for fast, scoped site data removal.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/vanish",
    image: null,
    tech: ["TypeScript", "React", "Chrome MV3"],
    featured: false,
  },
  {
    name: "obsidian-beats",
    tag: "Personal Project · Music",
    description:
      "Browser wavetable synth and seven-track drum machine with dual AI generators for synth patches and trap-style beats from natural-language prompts.",
    details:
      "Combines a Web Audio synthesis engine with OpenAI-driven patch and pattern generation in a single-page TypeScript app.",
    live_url: null,
    repo_url: "https://github.com/shivamongit/obsidian-beats",
    image: null,
    tech: ["TypeScript", "Web Audio", "OpenAI"],
    featured: false,
  },
];

export const experienceList = [
  {
    role: "Senior Software Engineer",
    company: "ZF Group, Hyderabad",
    date: "March 2025 – Present",
    highlights: [
      "Lead AI platform engineering for automotive and enterprise software — RAG pipelines, vector search, and full-stack tools used by engineering teams at scale.",
      "Architected an incident-resolution engine over 21,000+ historical records with FAISS and Azure OpenAI, cutting resolution time from days to minutes.",
      "Built AUTOSAR configuration intelligence: ETL across 10+ domains, semantic embeddings, and natural-language queries over 1,000+ ECU parameters.",
      "Tech stack: Python, FastAPI, Azure OpenAI, FAISS, Angular, React, TypeScript, C#/.NET, Docker, Kubernetes.",
    ],
  },
  {
    role: "Software Engineer",
    company: "ZF Group, India",
    date: "April 2022 – Present",
    highlights: [
      "Delivered ECU bootloader confidence testing, HIL multi-ECU automation, and enterprise platforms for workload estimation and workforce management (5,000+ employees).",
      "Shipped document comparison and training operations systems with semantic embeddings, approval workflows, and Azure DevOps CI/CD.",
      "Reduced manual test and allocation cycles by up to 70% across multiple production programs.",
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
    category: "AI / ML",
    items: [
      "Azure OpenAI",
      "RAG",
      "FAISS",
      "Embeddings",
      "scikit-learn",
      "Vector DBs",
    ],
  },
  {
    category: "Frontend",
    items: ["Angular 17", "React 18", "TypeScript", "Tailwind CSS", "RxJS", "Zustand"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Node.js", "C#", ".NET", "WebSockets", "REST"],
  },
  {
    category: "Data",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "SQLite", "Pandas", "NumPy"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Azure DevOps", "GitHub Actions", "Vite", "Turborepo"],
  },
];
