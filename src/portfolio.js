// Theme matches the reference portfolio. Content is Shivam Shasheesh.
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "Shivam";

// Main Page
export const main = {
  name: "Shivam Shasheesh",
  doamin: "AI Platform Engineer & Full-Stack Developer",
  resume:
    "https://drive.google.com/file/d/1P-oP3aATTchfEzfag1W_3LUqv5OVMEdU/view?usp=sharing",
};

// AboutMe
export const aboutme = {
  imgLink: "https://avatars.githubusercontent.com/u/60641065?v=4",
  p1: "Hey, my name is Shivam Shasheesh. I completed my Bachelor in Computer Applications (Industry Oriented Program) from Galgotias University, Greater Noida (2018–2021).",
  p2: "I am a Senior Software Engineer at ZF Group. I build AI-powered enterprise platforms — RAG pipelines, vector search, and full-stack tools — that turn manual engineering workflows into intelligent systems.",
  p3: "Day to day that means Azure OpenAI, FAISS, Angular, React, Python, and C#/.NET for automotive and enterprise software. I also write about local AI and RAG on Hashnode.",
};

// Experience
export const experience = {
  title: "Experience",
  p1: "ZF GROUP",
  p2: "ZF is a global technology company supplying systems for passenger cars, commercial vehicles, and industrial technology. I work on AI platform engineering and full-stack systems for automotive and enterprise software.",
  p3: "Software Engineer, Apr 2022 – Present  ·  Senior Software Engineer, Mar 2025 – Present  ·  Hyderabad, India",
  p4: "Responsibilities: ",
  work: [
    "Architected an incident-resolution RAG pipeline over 21,000+ historical records with FAISS and Azure OpenAI, cutting resolution time from days to minutes.",
    "Built an AUTOSAR configuration intelligence platform: ETL across 10+ domains, 3072-dimension embeddings, and natural-language queries over 1000+ ECU parameters.",
    "Shipped an ECU bootloader confidence platform for UDS diagnostics on CAN, CAN FD, and FlexRay, reducing manual testing by about 70%.",
    "Delivered HIL multi-ECU automation plus enterprise platforms for workload estimation, workforce management for 5,000+ employees, and training operations.",
    "Designed full-stack systems across Angular, React, Python/FastAPI, and C#/.NET, deployed with Docker, Kubernetes, and Azure DevOps.",
  ],
  p5: "Tech Stack: Python | FastAPI | Azure OpenAI | FAISS | Angular | React | TypeScript | C#/.NET | Docker",
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "RAG systems with FAISS vector search and Azure OpenAI",
    "Full-stack platforms in Angular, React, Python, and C#/.NET",
    "Real-time ML pipelines with anomaly detection and WebSockets",
    "Automotive tooling — HIL automation, ECU integration, serial protocols",
    "APIs, vector databases, and CI/CD on Azure and Docker",
  ],
  logos: [
    {
      name: "Python",
      iconifyClassName: "logos:python",
      id: "1",
    },
    {
      name: "FastAPI",
      iconifyClassName: "simple-icons:fastapi",
      id: "2",
    },
    {
      name: "TypeScript",
      iconifyClassName: "logos:typescript-icon",
      id: "3",
    },
    {
      name: "React",
      iconifyClassName: "logos:react",
      id: "4",
    },
    {
      name: "Angular",
      iconifyClassName: "logos:angular-icon",
      id: "5",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "6",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs-icon",
      id: "7",
    },
    {
      name: "C#",
      iconifyClassName: "logos:c-sharp",
      id: "8",
    },
    {
      name: "Docker",
      iconifyClassName: "logos:docker-icon",
      id: "9",
    },
    {
      name: "Azure",
      iconifyClassName: "logos:microsoft-azure",
      id: "10",
    },
    {
      name: "Git",
      iconifyClassName: "logos:git-icon",
      id: "11",
    },
    {
      name: "Tailwind",
      iconifyClassName: "logos:tailwindcss-icon",
      id: "12",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb-icon",
      id: "13",
    },
    {
      name: "PostgreSQL",
      iconifyClassName: "logos:postgresql",
      id: "14",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "15",
    },
    {
      name: "HTML5",
      iconifyClassName: "logos:html-5",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "ragpipe",
    desc: `Production-grade modular RAG framework. Pluggable chunkers, embedders, retrievers, rerankers, and generators, with hybrid search and local-first inference.`,
    feature: `Token, recursive, semantic, and contextual chunking
FAISS, BM25, and hybrid retrieval
Cross-encoder reranking and evaluation metrics`,
    tech: `Tech Stack: Python | FAISS | OpenAI | Sentence Transformers`,
    img: "https://opengraph.githubassets.com/1/shivamongit/ragpipe",
    link: "https://github.com/shivamongit/ragpipe",
    github: "https://github.com/shivamongit/ragpipe",
  },
  {
    id: 2,
    title: "docmind",
    desc: `RAG-powered document intelligence. Upload PDFs, DOCX, or text, then ask questions and get cited answers from a FAISS index.`,
    feature: `Document upload and chunking
Cited answers with GPT-4o
FAISS vector search`,
    tech: `Tech Stack: React | TypeScript | FastAPI | FAISS | OpenAI`,
    img: "https://opengraph.githubassets.com/1/shivamongit/docmind",
    link: "https://github.com/shivamongit/docmind",
    github: "https://github.com/shivamongit/docmind",
  },
  {
    id: 3,
    title: "synth-ui",
    desc: `AI-powered UI component generator. Describe a component in plain English and get production-ready React and TypeScript with a live preview.`,
    feature: `Natural-language component prompts
Live preview
React + TypeScript output`,
    tech: `Tech Stack: React | TypeScript | Tailwind | FastAPI | Zustand`,
    img: "https://opengraph.githubassets.com/1/shivamongit/synth-ui",
    link: "https://github.com/shivamongit/synth-ui",
    github: "https://github.com/shivamongit/synth-ui",
  },
  {
    id: 4,
    title: "pulse",
    desc: `Real-time analytics dashboard. Ingest event streams, detect anomalies with Isolation Forest, and visualize metrics as they arrive.`,
    feature: `Streaming metrics over WebSockets
ML anomaly detection
Interactive live charts`,
    tech: `Tech Stack: Angular | TypeScript | FastAPI | scikit-learn | RxJS`,
    img: "https://opengraph.githubassets.com/1/shivamongit/pulse",
    link: "https://github.com/shivamongit/pulse",
    github: "https://github.com/shivamongit/pulse",
  },
  {
    id: 5,
    title: "Nexus Synth",
    desc: `Browser-based polysynth. Dual oscillators, unison, a multimode filter, envelopes, LFO, an FX rack, a 16-step sequencer, and a live scope and spectrum analyzer.`,
    feature: `Pure Web Audio API
Step sequencer
Real-time scope and spectrum`,
    tech: `Tech Stack: TypeScript | Web Audio API`,
    img: "https://opengraph.githubassets.com/1/shivamongit/nexus-synth",
    link: "https://nexus-synth.onrender.com",
    github: "https://github.com/shivamongit/nexus-synth",
  },
  {
    id: 6,
    title: "MyGlamm Clone",
    desc: `Full-stack clone of MyGlamm, a direct-to-consumer beauty storefront, with authentication, catalog browsing, cart, and checkout.`,
    feature: `Sign-in / Sign-up
Search and product browsing
Add to cart and checkout`,
    tech: `Tech Stack: HTML | Bootstrap | EJS | Express | MongoDB`,
    img: "https://user-images.githubusercontent.com/60641065/153717916-5e7d33cd-0f3e-4b7c-8c15-630b52054564.png",
    link: "https://github.com/shivamongit/MyGlamm_backend_clone",
    github: "https://github.com/shivamongit/MyGlamm_backend_clone",
  },
];

// Social Media Links
export const links = [
  "https://www.instagram.com/shivam_.sk/",
  "https://www.linkedin.com/in/shivamshasheesh/",
  "https://api.whatsapp.com/send/?phone=9871031429&text&app_absent=0",
  "mailto:shivam.akka@outlook.com",
  "https://github.com/shivamongit",
  "https://twitter.com/shivamshasheesh",
];
