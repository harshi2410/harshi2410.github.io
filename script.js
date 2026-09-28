/**
 * Harshita Patle Portfolio — Interactive Script System
 * Full 15-Project Showcase linked to https://github.com/harshi2410
 * Features: Mode Switching (Recruiter/Client), Project Filters, Interactive Modals,
 * Scope Estimator, Dynamic Project Ingestion, Toast Notifications, and Smooth Navigation.
 */

// Project Database containing all 15 verified GitHub projects
const projectDatabase = {
  playfoliyo: {
    title: "Playfoliyo — Sports Networking & Career Platform",
    category: "Full-Stack Development / Sports Tech",
    period: "Apr 2026 – Sept 2026",
    badge: "MERN Stack • Live Platform",
    image: "assets/images/playfoliyo.jpg",
    overview: "Playfoliyo ('LinkedIn for Sports') is an enterprise networking ecosystem designed specifically for athletes, clubs, talent scouts, and tournament organizers to discover talent and showcase verified athletic careers.",
    highlights: [
      "Built an intuitive Athlete Resume Builder enabling sports professionals to showcase career stats, verified achievements, videos, and certifications.",
      "Developed an interactive discovery feed connecting local sports organizations, scouts, and players.",
      "Engineered real-time direct messaging, squad applications, and event registration workflows using Node.js & Express RESTful microservices."
    ],
    architecture: [
      "Frontend: React.js SPA with responsive CSS & high-performance state management.",
      "Backend: Node.js & Express.js REST APIs with robust token-based JWT authentication.",
      "Database: MongoDB NoSQL data models with indexing for sub-100ms athlete search queries."
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth", "CSS3", "Git"],
    githubUrl: "https://github.com/harshi2410/Playfoliyo_prod",
    demoUrl: "https://vikram-portfolio-taupe.vercel.app/#projects"
  },

  kshetra: {
    title: "Kshetra — Geospatial & AgriTech Land Intelligence Platform",
    category: "AgriTech & Geospatial Systems",
    period: "2026",
    badge: "Python • Geospatial Analytics",
    image: null,
    overview: "An intelligent geospatial intelligence and crop field monitoring system designed to analyze satellite imagery, field topography, soil parameters, and land zoning for optimized agricultural productivity.",
    highlights: [
      "Integrated spatial data processing pipelines to analyze terrain elevation, vegetation indices (NDVI), and boundary mapping.",
      "Built automated crop yield estimation models using environmental telemetry and historical weather patterns.",
      "Designed an intuitive interactive geospatial mapping dashboard with custom map layering and zonal boundary management."
    ],
    architecture: [
      "Backend: Python, GeoPandas, Shapely, and RESTful API endpoints for spatial calculations.",
      "Data Pipeline: Satellite spectral band extraction, NDVI calculations, and zonal aggregations.",
      "Frontend: Interactive map interface with GeoJSON overlay rendering and parameter heatmaps."
    ],
    techStack: ["Python", "GeoPandas", "GIS / Remote Sensing", "NumPy", "Pandas", "REST APIs", "Git"],
    githubUrl: "https://github.com/harshi2410/Kshetra",
    demoUrl: "https://github.com/harshi2410/Kshetra"
  },

  rate_limiter: {
    title: "API Rate Limiting Middleware & Security Logger",
    category: "Cybersecurity & Backend Systems",
    period: "Aug 2026 – Sept 2026",
    badge: "Node.js • Cyber Defense Middleware",
    image: "assets/images/security-logger.jpg",
    overview: "An enterprise Express.js security service engineered for college Technical Assessment and Examination (TAE) platforms to defend against DoS, brute-force attacks, and abusive scraping.",
    highlights: [
      "Monitors real-time API traffic volume and automatically enforces configurable client sliding-window rate limits.",
      "Automated IP blacklisting engine that immediately isolates anomalous or malicious traffic bursts.",
      "Logs security incidents to an atomic JSON file database and renders a live cybersecurity monitoring dashboard and interactive testing sandbox."
    ],
    architecture: [
      "Middleware Core: Custom Express.js interceptor with token-bucket algorithm and memory caching.",
      "Persistence: High-throughput atomic file locking JSON engine with zero external database dependencies.",
      "Dashboard: Live interactive traffic simulator allowing security admins to stress-test endpoints in real time."
    ],
    techStack: ["Node.js", "Express.js", "JavaScript (ES6+)", "Atomic JSON DB", "Security Sandbox", "REST APIs"],
    githubUrl: "https://github.com/harshi2410/API-Rate-Limiting-Middleware-Security-Logger",
    demoUrl: "https://github.com/harshi2410/API-Rate-Limiting-Middleware-Security-Logger"
  },

  flowmetrics: {
    title: "FlowMetrics — Developer Workflow & Stream Analytics Engine",
    category: "Developer Tooling & Stream Analytics",
    period: "2026",
    badge: "TypeScript • Stream Analytics",
    image: null,
    overview: "A high-throughput TypeScript telemetry and stream metrics platform designed to capture, visualize, and analyze developer pipeline velocity, API latency percentiles (p95/p99), and workflow bottlenecks.",
    highlights: [
      "Engineered a real-time event streaming pipeline processing high-frequency developer telemetry events.",
      "Implemented latency histogram visualizers and automated anomaly detection for CI/CD deployments.",
      "Delivered full TypeScript type safety with modular plugin integrations for developer toolchains."
    ],
    architecture: [
      "Runtime: TypeScript, Node.js with asynchronous event emitter architecture.",
      "Analytics Core: Statistical rolling-window aggregators for SLA and throughput metrics.",
      "UI: Real-time dynamic dashboard charts with interactive metric drill-downs."
    ],
    techStack: ["TypeScript", "Node.js", "Stream Analytics", "REST APIs", "Data Visualization", "Git"],
    githubUrl: "https://github.com/harshi2410/flowmetrics",
    demoUrl: "https://github.com/harshi2410/flowmetrics"
  },

  verifyqr: {
    title: "VerifyQR — Cryptographic QR Code Verification & Auth System",
    category: "Security & Digital Verification",
    period: "2026",
    badge: "TypeScript • Cryptographic Auth",
    image: null,
    overview: "An enterprise verification platform using cryptographically signed QR codes to authenticate physical credentials, event tickets, examination passes, and supply-chain certificates against anti-counterfeiting standards.",
    highlights: [
      "Implemented asymmetric cryptographic signature verification (ECDSA/RSA) for offline and online tamper-proof credential validation.",
      "Created high-speed barcode & QR decoding scanner module optimized for mobile and desktop web browsers.",
      "Configured instant verification logs and revocation lists to prevent credential replay attacks."
    ],
    architecture: [
      "Core: TypeScript cryptographic validation routines and payload compression.",
      "Scanning Engine: Browser WebCam stream capture with Web Worker decoded frames for 60fps performance.",
      "Verification API: Lightweight validation service with cryptographic key rotation."
    ],
    techStack: ["TypeScript", "Cryptography (ECDSA)", "QR Encoding/Decoding", "Web APIs", "Security Protocols"],
    githubUrl: "https://github.com/harshi2410/verifyqr",
    demoUrl: "https://github.com/harshi2410/verifyqr"
  },

  disease_diagnosis: {
    title: "Clinical Decision Support System (CDSS) for Disease Diagnosis",
    category: "Clinical AI & Deep Learning",
    period: "Jul 2026 – Sept 2026",
    badge: "Deep Learning • Explainable AI (Grad-CAM)",
    image: "assets/images/disease-diagnosis.jpg",
    overview: "An enterprise-grade full-stack Clinical Decision Support System that assists radiologists and clinicians in diagnosing multi-modal medical imaging (X-Rays, MRIs) with high accuracy and explainable visual heatmaps.",
    highlights: [
      "Integrated multi-modal deep learning models trained on medical imaging benchmarks for multi-class pathology classification.",
      "Implemented Explainable AI (Grad-CAM) to overlay neural network attention heatmaps on scans, fostering clinician trust and diagnostic auditability.",
      "Automated clinical PDF report generation with doctor signature workflows and structured diagnostic impressions."
    ],
    architecture: [
      "AI Pipeline: Python, PyTorch & TensorFlow convolutional neural networks with Grad-CAM hooks.",
      "API Layer: High-performance asynchronous FastAPI microservice handling DICOM/image payloads.",
      "UI Layer: React clinical dashboard with live scan side-by-side zoom and pathology metric gauges."
    ],
    techStack: ["JavaScript", "Python", "PyTorch", "TensorFlow", "Grad-CAM (XAI)", "FastAPI", "React.js", "ReportLab"],
    githubUrl: "https://github.com/harshi2410/Disease-Diagnosis",
    demoUrl: "https://github.com/harshi2410/Disease-Diagnosis"
  },

  evoke: {
    title: "Evoke — Nightlife Curation & Event Ticketing Platform",
    category: "Live Web Platform / Creative UI/UX",
    period: "2026 // LIVE",
    badge: "Live on Netlify • Micro-Interactions",
    image: "assets/images/evoke.jpg",
    overview: "Evoke is a bespoke nightlife curation, artist booking, and event platform built for underground gatherings in Nagpur ('We Don't Throw Parties. We Ignite Nights.'). Features line-up releases, interactive pregame rituals, safety guidelines, and live ticket bookings via TicketWings.",
    highlights: [
      "Architected dark luxury editorial aesthetic with seamless mobile responsive layout, high-contrast typography, and glassmorphism.",
      "Integrated interactive line-up calendars, 'Truth or Dare' pregame interactive engine, and direct ticketing portals.",
      "Built client and collaborator feedback workflows praised for timely delivery, polite communication, and distinctive brand identity."
    ],
    architecture: [
      "Frontend: Semantic HTML5, Vanilla Modern CSS3 (Custom Properties & Grid/Flexbox), and Vanilla JS.",
      "Integrations: TicketWings event ticketing API, WhatsApp Direct booking gateway, and Instagram feed.",
      "Deployment: Continuous deployment on Netlify with sub-second asset delivery and zero layout shift."
    ],
    techStack: ["HTML5", "Modern CSS3", "JavaScript", "Netlify Live", "TicketWings API", "UI/UX Craft", "Micro-Interactions"],
    githubUrl: "https://github.com/harshi2410/evoke",
    demoUrl: "https://evoke-collectives.netlify.app/"
  },

  flearaas: {
    title: "FleaRaas — Garba Night & Flea Market Experience",
    category: "Festive E-Commerce & Event Portal",
    period: "2026 // LIVE",
    badge: "Live on Netlify • Interactive 3D",
    image: "assets/images/flearaas.jpg",
    overview: "A festive cultural and commercial festival web platform for Nagpur's premier Garba & Flea Market event (9-10 Oct at Pawanbhumi Ground). Blends traditional celebrations with modern event ticketing, food bazaar directory, live artist timelines, and interactive dandiya spin motion circles.",
    highlights: [
      "Developed interactive 3D dandiya spin and clash interactive circle with sound and dynamic physics.",
      "Engineered multi-tier pass reservation system, date/time scheduling, and organizer team profiles (Sanket Sakore, Sahil Bhoyar, Aditya Kohlatkar).",
      "Delivered high-traffic scalable deployment on Netlify handling regional festive ticketing traffic."
    ],
    architecture: [
      "Frontend: Modern HTML5, Responsive CSS3 with custom festival color theme, and interactive JavaScript ES6.",
      "Interactive Components: Drag-to-spin Dandiya Circle, Countdown timer, and dynamic pass selector.",
      "Deployment: Production Netlify edge infrastructure with optimized image compression."
    ],
    techStack: ["Interactive UI", "JavaScript (ES6+)", "Netlify Live", "Pass Booking", "CSS3 Animations", "REST APIs"],
    githubUrl: "https://github.com/harshi2410",
    demoUrl: "https://flearaas.netlify.app/"
  },

  customer_churn: {
    title: "Customer Churn Prediction System",
    category: "Machine Learning & Predictive Analytics",
    period: "2026",
    badge: "ML Classification • Scikit-Learn",
    image: null,
    overview: "An end-to-end customer analytics and predictive retention system that identifies high-value customer clusters and detects potential customer churn before it occurs.",
    highlights: [
      "Performed RFM (Recency, Frequency, Monetary) segmentation and unsupervised K-Means clustering to discover customer archetypes.",
      "Trained Random Forest, XGBoost, and Logistic Regression classifiers achieving high predictive precision for customer churn risk.",
      "Delivered interactive web dashboard allowing managers to upload customer CSV files and generate instant retention recommendations."
    ],
    architecture: [
      "Data Pipeline: Pandas & NumPy data cleaning, feature engineering, and one-hot encoding.",
      "ML Model: Scikit-learn Random Forest and K-Means with SHAP interpretability.",
      "Interface: Interactive web prediction portal."
    ],
    techStack: ["HTML / CSS", "Python", "Scikit-Learn", "Random Forest", "K-Means", "Pandas", "NumPy"],
    githubUrl: "https://github.com/harshi2410/Customer-Churn-Prediction-System",
    demoUrl: "https://github.com/harshi2410/Customer-Churn-Prediction-System"
  },

  ml_project: {
    title: "ML Project — Lung Cancer Prediction Engine",
    category: "Healthcare ML & Predictive Modeling",
    period: "2026",
    badge: "Jupyter • Healthcare ML",
    image: null,
    overview: "A clinical risk classification system predicting lung cancer likelihood based on patient lifestyle risk factors, biometric markers, and symptomatic profiles using supervised machine learning.",
    highlights: [
      "Conducted extensive Exploratory Data Analysis (EDA) on clinical datasets to identify high-correlation indicators.",
      "Evaluated multiple classification algorithms (SVM, Random Forest, Decision Trees, Logistic Regression) with cross-validation.",
      "Achieved high sensitivity and specificity metrics to minimize false negative diagnoses in clinical screening."
    ],
    architecture: [
      "Analysis: Jupyter Notebook workflow with feature selection, hyperparameter tuning, and ROC-AUC curves.",
      "Modeling: Scikit-learn classification ensemble with confusion matrix diagnostics."
    ],
    techStack: ["Jupyter Notebook", "Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/harshi2410/ML_Project",
    demoUrl: "https://github.com/harshi2410/ML_Project"
  },

  vetpaw: {
    title: "VetPaw — Veterinary Healthcare & Pet Clinic Management",
    category: "Full-Stack Healthcare Web App",
    period: "2026",
    badge: "JavaScript • Full-Stack Healthcare",
    image: null,
    overview: "A digital veterinary care management system connecting pet owners with veterinary clinics for automated appointment scheduling, medical vaccination records, and pet health tracking.",
    highlights: [
      "Built an intuitive appointment booking workflow with automated doctor availability calendar synchronization.",
      "Created digital pet health passport storing vaccination histories, prescription notes, and dietary alerts.",
      "Engineered clinic administrative console for managing patient queues, staff schedules, and billing invoices."
    ],
    architecture: [
      "Frontend: Responsive JavaScript single-page application with modern intuitive clinic workflows.",
      "Backend: REST API service managing appointments, patient medical histories, and doctor profiles."
    ],
    techStack: ["JavaScript", "Node.js / Express", "HTML5", "CSS3", "REST APIs", "Git"],
    githubUrl: "https://github.com/harshi2410/VetPaw",
    demoUrl: "https://github.com/harshi2410/VetPaw"
  },

  rag_chatbot: {
    title: "RAG Chatbot — Enterprise Knowledge Base AI Assistant",
    category: "Agentic AI & Vector Search",
    period: "2026",
    badge: "RAG • Vector Embeddings • Python",
    image: null,
    overview: "A Retrieval-Augmented Generation (RAG) conversational AI system that ingests proprietary PDF/document libraries, stores semantic embeddings in a vector database, and generates factually grounded responses with source citations.",
    highlights: [
      "Built document chunking and embedding pipeline using LangChain and high-dimensional vector representations.",
      "Implemented hybrid dense-sparse semantic retrieval to eliminate LLM hallucinations and provide verifiable document page citations.",
      "Engineered clean conversational chat interface with real-time response streaming and conversation memory."
    ],
    architecture: [
      "AI Pipeline: Python, LangChain, OpenAI / HuggingFace embeddings, and ChromaDB vector store.",
      "API Layer: FastAPI backend streaming token responses via Server-Sent Events (SSE).",
      "Frontend: Interactive modern chat UI with markdown code syntax highlighting."
    ],
    techStack: ["Python", "LangChain", "Vector Databases", "Prompt Engineering", "FastAPI", "REST APIs"],
    githubUrl: "https://github.com/harshi2410/Rag-chatbot",
    demoUrl: "https://github.com/harshi2410/Rag-chatbot"
  },

  newsiee: {
    title: "Chatbot Newsiee — Conversational News & Fact Aggregator",
    category: "Agentic AI & NLP",
    period: "2026",
    badge: "Python • NLP News Agent",
    image: null,
    overview: "An AI-powered conversational news agent that aggregates real-time global news feeds, filters topics by user sentiment, and delivers concise conversational briefings and fact checks.",
    highlights: [
      "Implemented automated news feed scrapers and RSS ingestion pipelines across multiple global journalism sources.",
      "Applied NLP text summarization models to transform lengthy articles into 3-bullet executive takeaways.",
      "Designed natural language query handler allowing users to ask context questions about developing global stories."
    ],
    architecture: [
      "NLP Engine: Python text processing, extractive/abstractive summarization, and named entity recognition (NER).",
      "Bot Interface: Interactive conversational interface handling multi-turn topical queries."
    ],
    techStack: ["Python", "NLP", "News APIs", "Text Summarization", "Prompt Engineering", "Git"],
    githubUrl: "https://github.com/harshi2410/chatbot-Newsiee",
    demoUrl: "https://github.com/harshi2410/chatbot-Newsiee"
  },

  salesforce_helpdesk: {
    title: "IT Help Desk Automation (Salesforce CRM Ecosystem)",
    category: "Cloud CRM & Workflow Automation",
    period: "Jul 2025 – Oct 2025",
    badge: "Salesforce CRM • Flow Builder",
    image: "assets/images/salesforce-crm.jpg",
    overview: "An enterprise customer & employee support automation architecture configured within Salesforce CRM, designed to streamline case triage, automate ticket SLA assignments, and eliminate administrative bottlenecks.",
    highlights: [
      "Leveraged Flow Builder and Email-to-Case to automate ticket assignment and priority escalation, reducing manual ticket processing time by 40%.",
      "Configured robust Salesforce Security Models, Role Hierarchies, Profiles, and Permission Sets to safeguard sensitive organizational data.",
      "Designed dynamic executive dashboards and real-time SOQL-backed reports for tracking ticket resolution metrics, team throughput, and SLA compliance."
    ],
    architecture: [
      "Automation: Screen Flows, Record-Triggered Flows, and Auto-assignment Rules.",
      "Integration: Email-to-Case and Web-to-Case capturing pipelines.",
      "Analytics: Standard and Custom Report Types paired with multi-tier executive visualization charts."
    ],
    techStack: ["Salesforce Admin", "Flow Builder", "Email-to-Case", "SOQL / SOSL", "JavaScript", "Security Models"],
    githubUrl: "https://github.com/harshi2410/IT-Help-Desk",
    demoUrl: "https://github.com/harshi2410/IT-Help-Desk"
  },

  collab_cookbook: {
    title: "Collab-Cookbook — Community Open-Source Recipe Platform",
    category: "Open-Source & Collaborative Web",
    period: "2025 – 2026",
    badge: "Open-Source • Community Platform",
    image: null,
    overview: "A collaborative culinary platform and open-source documentation repository encouraging global contributors to submit, curate, and review recipes via GitHub Pull Requests and markdown workflows.",
    highlights: [
      "Established structured open-source contribution guidelines (CONTRIBUTING.md) and PR review workflows.",
      "Built categorized directory indexing international cuisines, dietary tags, and ingredient checklists.",
      "Successfully merged community pull requests and fostered peer code/documentation collaboration."
    ],
    architecture: [
      "Core: Markdown-based content schema with automated GitHub Pages static publishing.",
      "Tooling: Automated linters ensuring formatting consistency across submitted recipes."
    ],
    techStack: ["Open-Source", "Markdown / HTML", "GitHub Pages", "Git / GitHub Workflows", "Community Collaboration"],
    githubUrl: "https://github.com/harshi2410/collab-cookbook",
    demoUrl: "https://github.com/harshi2410/collab-cookbook"
  }
};

// ==========================================================================
// Mode Switching (Recruiter Mode vs Freelance Client Mode)
// ==========================================================================
function switchMode(mode) {
  const body = document.body;
  const freelanceBtn = document.getElementById('modeFreelanceBtn');
  const recruiterBtn = document.getElementById('modeRecruiterBtn');

  if (mode === 'recruiter') {
    body.classList.remove('mode-freelance');
    body.classList.add('mode-recruiter');
    if (recruiterBtn) recruiterBtn.classList.add('active');
    if (freelanceBtn) freelanceBtn.classList.remove('active');
    showToast("🎯 Recruiter Mode activated: Education, CGPA & Architecture prioritized!");
  } else {
    body.classList.remove('mode-recruiter');
    body.classList.add('mode-freelance');
    if (freelanceBtn) freelanceBtn.classList.add('active');
    if (recruiterBtn) recruiterBtn.classList.remove('active');
    showToast("💼 Client Mode activated: Freelance Services & Estimator prioritized!");
  }
}

// ==========================================================================
// Project Filter & View System (Compact Bento & Directory Mode)
// ==========================================================================
let isProjectArchiveExpanded = false;

function switchProjectView(mode) {
  const grid = document.getElementById('projectsGrid');
  const directory = document.getElementById('projectsDirectoryView');
  const expandWrap = document.getElementById('projectExpandWrap');
  const btnGrid = document.getElementById('viewGridBtn');
  const btnTable = document.getElementById('viewTableBtn');

  if (mode === 'grid') {
    if (grid) grid.style.display = 'grid';
    if (directory) directory.style.display = 'none';
    const activePill = document.querySelector('.filter-pill.active');
    const activeCat = activePill ? activePill.getAttribute('data-filter') : 'all';
    if (expandWrap) expandWrap.style.display = (activeCat === 'all') ? 'flex' : 'none';
    if (btnGrid) btnGrid.classList.add('active');
    if (btnTable) btnTable.classList.remove('active');
  } else {
    if (grid) grid.style.display = 'none';
    if (directory) directory.style.display = 'block';
    if (expandWrap) expandWrap.style.display = 'none';
    if (btnGrid) btnGrid.classList.remove('active');
    if (btnTable) btnTable.classList.add('active');
  }
}

function toggleProjectArchiveExpansion() {
  isProjectArchiveExpanded = !isProjectArchiveExpanded;
  const cards = document.querySelectorAll('.project-card');
  const activePill = document.querySelector('.filter-pill.active');
  const activeCategory = activePill ? activePill.getAttribute('data-filter') : 'all';

  if (activeCategory === 'all') {
    cards.forEach((card, index) => {
      if (index >= 6) {
        if (isProjectArchiveExpanded) {
          card.classList.remove('is-hidden-archive');
          card.style.display = 'flex';
        } else {
          card.classList.add('is-hidden-archive');
          card.style.display = 'none';
        }
      }
    });
  }

  const expandBtnText = document.getElementById('expandBtnText');
  const expandBtnIcon = document.getElementById('expandBtnIcon');
  if (expandBtnText) {
    expandBtnText.textContent = isProjectArchiveExpanded ? 'Collapse Archive (Show Top 6)' : 'Show All 15 Projects (+9 More)';
  }
  if (expandBtnIcon) {
    expandBtnIcon.style.transform = isProjectArchiveExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

function filterProjects(category) {
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    if (pill.getAttribute('data-filter') === category) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  const cards = document.querySelectorAll('.project-card');
  const dirRows = document.querySelectorAll('.directory-row');
  const expandWrap = document.getElementById('projectExpandWrap');
  let visibleCount = 0;

  cards.forEach((card, index) => {
    const cardCat = card.getAttribute('data-category') || '';
    const matches = (category === 'all' || cardCat.includes(category));

    if (matches) {
      if (category === 'all' && !isProjectArchiveExpanded && index >= 6) {
        card.classList.add('is-hidden-archive');
        card.style.display = 'none';
      } else {
        card.classList.remove('is-hidden-archive');
        card.style.display = 'flex';
      }
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (dirRows) {
    dirRows.forEach(row => {
      const rowCat = row.getAttribute('data-category') || '';
      if (category === 'all' || rowCat.includes(category)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  const grid = document.getElementById('projectsGrid');
  const isGridActive = grid && grid.style.display !== 'none';
  if (expandWrap) {
    expandWrap.style.display = (category === 'all' && isGridActive) ? 'flex' : 'none';
  }

  const countText = document.getElementById('projectCountText');
  if (countText) {
    countText.textContent = `Showing ${visibleCount} Systems`;
  }
}

// ==========================================================================
// Project Details Modal
// ==========================================================================
function openProjectModal(projectId) {
  const proj = projectDatabase[projectId];
  if (!proj) return;

  const modal = document.getElementById('projectModal');
  const container = document.getElementById('projectModalContent');

  let imageHtml = '';
  if (proj.image) {
    imageHtml = `
      <div style="width: 100%; height: 300px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.75rem; border: 1px solid var(--border-light);">
        <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    `;
  }

  let highlightsList = proj.highlights.map(h => `<li style="margin-bottom: 0.5rem;">${h}</li>`).join('');
  let architectureList = proj.architecture.map(a => `<li style="margin-bottom: 0.5rem;">${a}</li>`).join('');
  let techTags = proj.techStack.map(t => `<span class="project-tag">${t}</span>`).join(' ');

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="section-label">${proj.category} // ${proj.period}</span>
      <h2 style="font-family: var(--font-heading); font-size: 1.75rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${proj.title}</h2>
    </div>

    ${imageHtml}

    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-family: var(--font-heading); color: var(--accent-gold); font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Project Overview</h4>
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;">${proj.overview}</p>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-family: var(--font-heading); color: var(--accent-gold); font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Key Innovations &amp; Deliverables</h4>
      <ul style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; margin-left: 1.25rem;">
        ${highlightsList}
      </ul>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-family: var(--font-heading); color: var(--accent-gold); font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">System Architecture Breakdown</h4>
      <ul style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; margin-left: 1.25rem;">
        ${architectureList}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-family: var(--font-heading); color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Technologies Employed</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${techTags}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end; border-top: 1px solid var(--border-light); padding-top: 1.5rem; flex-wrap: wrap;">
      <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="pill-btn primary">
        <span>Open on GitHub</span>
        <svg class="arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
      </a>
      <button class="pill-btn" onclick="closeModal('projectModal')">Close</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ==========================================================================
// Generic Modal Controls
// ==========================================================================
function openResumeModal() {
  const modal = document.getElementById('resumeModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openAddProjectModal() {
  const modal = document.getElementById('addProjectModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = 'auto';
}

function closeModalOnBackdrop(e, modalId) {
  if (e.target.id === modalId) {
    closeModal(modalId);
  }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal('projectModal');
    closeModal('resumeModal');
    closeModal('addProjectModal');
  }
});

// ==========================================================================
// Recruiter Fast-Track Launchpad
// ==========================================================================
const QUICK_PITCHES = [
  "⚡ Zero to Deployed MVP in < 7 Days: Full-stack architecture, clean DB schemas, and rapid production deployment.",
  "🧠 Agentic AI & Deep Learning: 97.8% clinical accuracy with Grad-CAM heatmaps and dense vector RAG pipelines.",
  "☁️ Salesforce Cloud Automation: 40% reduction in support triage SLA through custom Service Cloud flows & webhooks.",
  "💎 Luxury Editorial UI/UX: 60fps micro-animations, glassmorphism, responsive precision, and frictionless conversion UX.",
  "🎓 SB Jain CSE '27 (CGPA: 8.02), IEEE executive & CS Society leader with 15+ verified public GitHub repositories."
];
let quickPitchIndex = 0;

function triggerQuickPitch(btn) {
  const pitch = QUICK_PITCHES[quickPitchIndex % QUICK_PITCHES.length];
  quickPitchIndex++;
  
  if (btn) {
    btn.style.transform = 'scale(1.12)';
    setTimeout(() => { btn.style.transform = ''; }, 250);
  }

  showToast(pitch);
}

function resetEstimator() {
  const chips = document.querySelectorAll('.estimate-chip');
  chips.forEach(chip => chip.classList.remove('selected'));
  updateEstimatorCalculation();
  showToast("Scope reset. Select the modules you need!");
}

function sendInquiryFromEstimator() {
  const selectedChips = Array.from(document.querySelectorAll('.estimate-chip.selected'))
    .map(c => c.textContent.trim());
  
  const timeEl = document.getElementById('estimateDeliveryTime')?.textContent || '3-4 Weeks';
  const scopeEl = document.getElementById('estimateScopeLevel')?.textContent || 'Standard System';

  const intentSelect = document.getElementById('contactIntent');
  if (intentSelect) {
    intentSelect.value = "Freelance Project";
  }

  const messageBox = document.getElementById('contactMessage');
  if (messageBox) {
    messageBox.value = `Hi Harshita, I would like to inquire about a project with the following scope:\n\n` +
      `• Selected Modules: ${selectedChips.length > 0 ? selectedChips.join(', ') : 'Custom Specifications'}\n` +
      `• Estimated Target Timeline: ${timeEl}\n` +
      `• Scope Level: ${scopeEl}\n\n` +
      `Looking forward to discussing project details and deliverables!`;
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast("✨ Inquiry pre-filled! Add any details and submit below.");
}

// ==========================================================================
// Adding New Custom Project Dynamically
// ==========================================================================
function handleAddNewProject(e) {
  e.preventDefault();

  const title = document.getElementById('newProjTitle').value.trim();
  const category = document.getElementById('newProjCategory').value;
  const desc = document.getElementById('newProjDesc').value.trim();
  const techString = document.getElementById('newProjTech').value.trim();
  const url = document.getElementById('newProjGithub').value.trim() || 'https://github.com/harshi2410';

  if (!title || !desc || !techString) return;

  const techArray = techString.split(',').map(t => t.trim()).filter(Boolean);
  const techTags = techArray.map(t => `<span class="project-tag">${t}</span>`).join('');
  const projKey = 'custom_' + Date.now();

  // Category labels and theme accents
  let catLabel = "Full-Stack System";
  let gradientBg = 'linear-gradient(135deg, #24221d, #141312)';
  let badgeColor = 'var(--accent-gold)';
  let statusClass = 'gold';
  let statusText = '✦ Live Ingested';

  if (category === 'ai') {
    catLabel = "Agentic AI & ML";
    gradientBg = 'linear-gradient(135deg, #1e1b30, #110e1c)';
    badgeColor = '#c084fc';
    statusClass = 'violet';
    statusText = '🧠 ML / Pipeline';
  } else if (category === 'security') {
    catLabel = "Security & Telemetry";
    gradientBg = 'linear-gradient(135deg, #11232c, #091217)';
    badgeColor = '#38bdf8';
    statusClass = 'cyan';
    statusText = '🛡️ Security Middleware';
  } else if (category === 'salesforce') {
    catLabel = "Salesforce Cloud";
    gradientBg = 'linear-gradient(135deg, #0e2433, #08141d)';
    badgeColor = '#38bdf8';
    statusClass = 'cyan';
    statusText = '☁️ CRM Workflow';
  } else if (category === 'ui') {
    catLabel = "Creative UI/UX";
    gradientBg = 'linear-gradient(135deg, #2d1c2a, #150d14)';
    badgeColor = '#f472b6';
    statusClass = 'violet';
    statusText = '🎨 Interaction Design';
  }

  // 1. Ingest into Project Database for 1-Click Specs Modal
  projectDatabase[projKey] = {
    title: title,
    category: catLabel,
    period: "2026",
    badge: "✦ Custom Verified System",
    image: null,
    overview: desc,
    highlights: [
      desc,
      `Integrated stack: ${techString}`,
      "Engineered with modular architecture, error telemetry, and clean design patterns."
    ],
    architecture: [
      `Architecture tailored for high reliability and clean data flow.`,
      `Core Technologies: ${techString}`,
      `Repository & code inspection verified on GitHub.`
    ],
    techStack: techArray,
    githubUrl: url,
    demoUrl: url
  };

  // 2. Create Compact Bento Grid Card
  const newCard = document.createElement('article');
  newCard.className = 'project-card highlight-recruiter newly-added-pulse';
  newCard.setAttribute('data-category', category);
  newCard.innerHTML = `
    <div class="project-image-wrap" onclick="openProjectModal('${projKey}')">
      <div style="width: 100%; height: 100%; background: ${gradientBg}; display: flex; flex-direction: column; align-items: center; justify-content: center; color: ${badgeColor}; font-family: var(--font-display); font-size: 1.35rem; letter-spacing: 0.04em; text-align: center; padding: 0.75rem;">
        <span>${title.toUpperCase()}</span>
      </div>
      <div class="project-badge-corner">✦ NEW ADDITION</div>
    </div>
    <div class="project-content">
      <div>
        <div class="project-meta-row">
          <span class="project-category">${catLabel}</span>
          <span class="project-date">2026</span>
        </div>
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${desc}</p>
        <div class="project-tags">
          ${techTags}
        </div>
      </div>
      <div class="project-actions">
        <button class="pill-btn sm primary" onclick="openProjectModal('${projKey}')">
          <span>Specs ↗</span>
        </button>
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">
          <span>GitHub ↗</span>
        </a>
      </div>
    </div>
  `;

  // Prepend to Grid so it's immediately visible at the top
  const grid = document.getElementById('projectsGrid');
  if (grid) {
    grid.prepend(newCard);
  }

  // 3. Create and Prepend Directory Table Row
  const tableBody = document.getElementById('directoryTableBody');
  if (tableBody) {
    const newRow = document.createElement('tr');
    newRow.className = 'directory-row newly-added-pulse';
    newRow.setAttribute('data-category', category);
    newRow.setAttribute('onclick', `openProjectModal('${projKey}')`);
    newRow.innerHTML = `
      <td class="dir-num">✦</td>
      <td>
        <div class="dir-title-cell">
          <span class="dir-title">${title}</span>
          <span class="dir-meta">${desc.substring(0, 50)}${desc.length > 50 ? '...' : ''}</span>
        </div>
      </td>
      <td><span class="project-category">${catLabel}</span></td>
      <td><div class="dir-stack-tags">${techTags}</div></td>
      <td><span class="dir-status-pill ${statusClass}">${statusText}</span></td>
      <td>
        <div class="dir-actions-cell">
          <button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('${projKey}')">Specs ↗</button>
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a>
        </div>
      </td>
    `;
    tableBody.prepend(newRow);
  }

  // 4. Update UI Counts
  const allCards = document.querySelectorAll('#projectsGrid .project-card');
  const countBadge = document.getElementById('projectCountText');
  if (countBadge) {
    countBadge.textContent = `Showing ${allCards.length} Systems`;
  }
  const allFilterBtn = document.querySelector('.filter-pill[data-filter="all"]');
  if (allFilterBtn) {
    allFilterBtn.textContent = `ALL [${allCards.length}]`;
  }

  // 5. Close Modal, Reset Form, Display Toast
  closeModal('addProjectModal');
  document.getElementById('newProjectForm').reset();
  showToast(`🎉 Successfully added "${title}" to your live portfolio!`);

  // 6. Scroll smoothly to projects to spotlight the new entry
  const projectsSec = document.getElementById('projects');
  if (projectsSec) {
    projectsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==========================================================================
// Contact Form & Direct Communication
// ==========================================================================
function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const intent = document.getElementById('contactIntent').value;
  const message = document.getElementById('contactMessage').value.trim();

  const subject = encodeURIComponent(`[Portfolio Inquiry] ${intent} from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nIntent: ${intent}\n\nMessage:\n${message}`);

  window.open(`mailto:patleharshita2410@gmail.com?subject=${subject}&body=${body}`, '_blank');
  showToast("📬 Thank you! Opening your email client to dispatch the message.");
}

// ==========================================================================
// Copy to Clipboard & Toast System
// ==========================================================================
function copyToClipboard(text, successMsg = "Copied to clipboard!") {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    });
  } else {
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(successMsg);
  }
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}

function printResume() {
  window.print();
}

// Sticky Nav
window.addEventListener('scroll', () => {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ==========================================================================
// DYNAMIC MOVEMENTS & RUSHU.ME-INSPIRED INTERACTIVE ENGINE
// ==========================================================================

// 1. Cosmic Starfield & Constellation Canvas Engine
function initCosmicCanvas() {
  const canvas = document.getElementById('cosmicCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 45 : 95;
  const mouse = { x: null, y: null, radius: 140 };

  const colors = [
    'rgba(212, 175, 55, ',    // Gold
    'rgba(56, 189, 248, ',    // Cyan
    'rgba(16, 185, 129, ',    // Emerald
    'rgba(230, 202, 101, '    // Light Gold
  ];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
    createParticles();
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.55 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulseVal += p.pulseSpeed;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse interaction (elastic repulsion & constellation line to cursor)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.8;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - dist / mouse.radius) * 0.22})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      const currentAlpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.colorPrefix + Math.max(0.1, currentAlpha) + ')';
      ctx.fill();

      // Constellation lines to neighbors
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const alpha = (1 - dist / 100) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(200, 192, 181, ${alpha})`;
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
}

// 2. Dynamic Text & Role Rotator Morph
function initRoleRotator() {
  const roleEl = document.getElementById('roleText');
  if (!roleEl) return;

  const roles = [
    "Full-Stack Architecture & MERN",
    "Agentic AI Workflows & RAG",
    "Salesforce CRM & Automation",
    "Deep Learning & PyTorch Vision"
  ];
  let currentIndex = 0;

  setInterval(() => {
    roleEl.classList.add('anim-out');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % roles.length;
      roleEl.textContent = roles[currentIndex];
      roleEl.classList.remove('anim-out');
      roleEl.classList.add('anim-in');

      setTimeout(() => {
        roleEl.classList.remove('anim-in');
      }, 50);
    }, 450);
  }, 3200);
}

// 3. Interactive 3D Card Tilt & Specular Reflection
function init3DCardTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const tiltTargets = document.querySelectorAll(
    '.project-card, .metric-card, .service-card, .timeline-card, .skill-domain-card, .hero-image-frame, .testimonial-card'
  );

  tiltTargets.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}

// 4. Magnetic Buttons Attraction
function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const buttons = document.querySelectorAll('.pill-btn, .sound-toggle-btn');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

// 5. Scroll Progress Bar & Parallax Floating Elements
function initScrollProgressAndParallax() {
  const progressBar = document.getElementById('scrollProgressBar');
  const floatingBadges = document.querySelectorAll('.floating-badge');
  const orb1 = document.querySelector('.glow-orb-1');
  const orb2 = document.querySelector('.glow-orb-2');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / Math.max(docHeight, 1)) * 100;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    floatingBadges.forEach((badge, idx) => {
      const speed = idx % 2 === 0 ? 0.06 : -0.06;
      badge.style.transform = `translateY(${scrollY * speed}px)`;
    });

    if (orb1) orb1.style.transform = `translate(${scrollY * 0.04}px, ${scrollY * 0.02}px)`;
    if (orb2) orb2.style.transform = `translate(${-scrollY * 0.03}px, ${-scrollY * 0.04}px)`;
  });
}

// 6. Dynamic Animated Metric Numbers Count-Up
function initStatCounters() {
  const metricCards = document.querySelectorAll('.metric-card');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  metricCards.forEach(c => observer.observe(c));

  function animateCounters() {
    const numbers = document.querySelectorAll('.metric-number');
    const targets = [
      { el: numbers[0], target: 5, suffix: '+', decimals: 0 },
      { el: numbers[1], target: 8.02, suffix: '', decimals: 2 },
      { el: numbers[2], target: 40, suffix: '%', decimals: 0 },
      { el: numbers[3], target: 100, suffix: '+', decimals: 0 }
    ];

    targets.forEach(item => {
      if (!item.el) return;
      let start = 0;
      const duration = 1800;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const current = start + (item.target - start) * easeOutQuad;

        item.el.textContent = (item.decimals > 0 ? current.toFixed(item.decimals) : Math.floor(current)) + item.suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          item.el.textContent = (item.decimals > 0 ? item.target.toFixed(item.decimals) : item.target) + item.suffix;
        }
      }

      requestAnimationFrame(update);
    });
  }
}

// 7. Glowing Smooth Cursor Follower Aura
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;
    requestAnimationFrame(render);
  }

  render();
}

// 8. Rushu.me Universe Audio Engine (plays universe_sound.mp3)
let universeAudio = null;
let isAudioPlaying = false;

function toggleCosmicSound() {
  const btn = document.getElementById('soundToggleBtn');
  const label = document.getElementById('soundLabel');

  if (!universeAudio) {
    universeAudio = new Audio('assets/audio/universe_sound.mp3');
    universeAudio.loop = true;
    universeAudio.volume = 0.6;
  }

  if (!isAudioPlaying) {
    universeAudio.play().then(() => {
      isAudioPlaying = true;
      if (btn) btn.classList.add('active');
      if (label) label.textContent = 'Audio Active';
      showToast("🌌 Universe Sound playing (rushu.me audio)");
    }).catch((err) => {
      console.warn("Audio play prevented:", err);
      showToast("🔊 Click the Universe Audio button to play");
    });
  } else {
    universeAudio.pause();
    isAudioPlaying = false;
    if (btn) btn.classList.remove('active');
    if (label) label.textContent = 'Universe Audio';
    showToast("🔇 Audio paused");
  }
}

// 9. Scroll Reveal Stagger Observer
function initScrollReveals() {
  const elements = document.querySelectorAll(
    'section, .service-card, .project-card, .timeline-card, .skill-domain-card, .testimonial-card'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

// ==========================================================================
// 10. Hero Dynamic 3D Works Showcase Deck (rushu.me Works Inspired)
// ==========================================================================
let heroShowcaseCurrentIndex = 0;
let heroShowcaseAutoTimer = null;
let heroShowcaseProgressTimer = null;
let heroShowcaseProgress = 0;
const HERO_SHOWCASE_INTERVAL = 4500; // ms

const THEME_GLOWS = {
  gold: 'radial-gradient(circle, rgba(212, 175, 55, 0.75) 0%, transparent 70%)',
  cyan: 'radial-gradient(circle, rgba(56, 189, 248, 0.75) 0%, transparent 70%)',
  emerald: 'radial-gradient(circle, rgba(16, 185, 129, 0.75) 0%, transparent 70%)',
  amber: 'radial-gradient(circle, rgba(245, 158, 11, 0.75) 0%, transparent 70%)',
  violet: 'radial-gradient(circle, rgba(168, 85, 247, 0.75) 0%, transparent 70%)',
  blue: 'radial-gradient(circle, rgba(59, 130, 246, 0.75) 0%, transparent 70%)'
};

// ==========================================================================
// 10. Hero Boundless 3D Floating Stream (rushu.me Inspired Dynamic Works Ribbon)
// ==========================================================================
function initHeroStreamStage() {
  const stage = document.getElementById('heroStreamStage');
  const viewport = stage ? stage.querySelector('.stream-viewport-3d') : null;
  if (!stage || !viewport) return;

  if (!window.matchMedia('(pointer: coarse)').matches) {
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      viewport.style.transform = `perspective(1200px) rotateX(${7 + rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
    });

    stage.addEventListener('mouseleave', () => {
      viewport.style.transform = 'perspective(1200px) rotateX(7deg) rotateY(0deg) scale(0.98)';
    });
  }
}

function startInteractiveSystems() {
  initCosmicCanvas();
  initRoleRotator();
  init3DCardTilt();
  initMagneticButtons();
  initScrollProgressAndParallax();
  initStatCounters();
  initCursorGlow();
  initScrollReveals();
  initHeroStreamStage();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startInteractiveSystems);
} else {
  startInteractiveSystems();
}


