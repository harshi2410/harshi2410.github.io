const fs = require('fs');
const path = require('path');

const indexPath = path.resolve('c:/Desktop/harshita-portfolio/index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const projectsSectionStart = '<section class="projects-section container" id="projects">';
const projectsSectionEnd = '<!-- ==========================================================================\n         TECHNICAL ARSENAL';

const startIndex = content.indexOf(projectsSectionStart);
if (startIndex === -1) {
  console.error('Could not find projectsSectionStart');
  process.exit(1);
}

// Find the start of skills section
const endIndex = content.indexOf('<section class="skills-section"', startIndex);
if (endIndex === -1) {
  console.error('Could not find skills section start');
  process.exit(1);
}

const newProjectsSection = `<section class="projects-section container" id="projects">
      <div class="projects-header-row">
        <div>
          <h2 class="section-title">PROJECTS ARCHIVE</h2>
          <p class="section-desc">15 verified full-stack, AI/ML, security, and Salesforce production engineering systems.</p>
        </div>
        <div class="projects-header-actions">
          <!-- View Toggle Switcher -->
          <div class="view-toggle-wrap">
            <button class="view-toggle-btn active" id="viewGridBtn" onclick="switchProjectView('grid')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Compact Grid</span>
            </button>
            <button class="view-toggle-btn" id="viewTableBtn" onclick="switchProjectView('table')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <span>Directory View</span>
            </button>
          </div>
          <a href="https://github.com/harshi2410" target="_blank" rel="noopener noreferrer" class="pill-btn sm gold">
            <span>All on GitHub ↗</span>
          </a>
        </div>
      </div>

      <!-- Filter Pills -->
      <div class="projects-filter-bar">
        <div class="filter-pills-wrap">
          <button class="filter-pill active" data-filter="all" onclick="filterProjects('all')">ALL [15]</button>
          <button class="filter-pill" data-filter="ai" onclick="filterProjects('ai')">AGENTIC AI &amp; ML [5]</button>
          <button class="filter-pill" data-filter="fullstack" onclick="filterProjects('fullstack')">FULL-STACK [5]</button>
          <button class="filter-pill" data-filter="security" onclick="filterProjects('security')">SECURITY [3]</button>
          <button class="filter-pill" data-filter="salesforce" onclick="filterProjects('salesforce')">SALESFORCE [1]</button>
          <button class="filter-pill" data-filter="ui" onclick="filterProjects('ui')">CREATIVE UI [1]</button>
        </div>
        <span class="projects-counter-badge" id="projectCountText">Showing 15 Systems</span>
      </div>

      <!-- Compact 3-Column Bento Grid -->
      <div class="projects-grid" id="projectsGrid">

        <!-- 1. Playfoliyo -->
        <article class="project-card highlight-recruiter" data-category="fullstack">
          <div class="project-image-wrap" onclick="openProjectModal('playfoliyo')">
            <img src="assets/images/playfoliyo.jpg" alt="Playfoliyo Sports Networking Platform">
            <div class="project-badge-corner">01 // MERN Stack</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Sports Tech</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">1. Playfoliyo — "LinkedIn for Sports"</h3>
              <p class="project-desc">Networking platform for athletes with resume builder &amp; discovery feed.</p>
              <div class="project-tags">
                <span class="project-tag">React.js</span>
                <span class="project-tag">Node.js</span>
                <span class="project-tag">MongoDB</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('playfoliyo')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/Playfoliyo_prod" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 2. Kshetra -->
        <article class="project-card highlight-recruiter" data-category="fullstack ai">
          <div class="project-image-wrap" onclick="openProjectModal('kshetra')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #242918, #14170d); display: flex; align-items: center; justify-content: center; color: #a3e635; font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              KSHETRA // GIS
            </div>
            <div class="project-badge-corner">02 // Python • AgriTech</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">AgriTech &amp; GIS</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">2. Kshetra — Land Platform</h3>
              <p class="project-desc">Geospatial satellite intelligence and NDVI vegetation index monitoring.</p>
              <div class="project-tags">
                <span class="project-tag">Python</span>
                <span class="project-tag">GeoPandas</span>
                <span class="project-tag">GIS</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('kshetra')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/Kshetra" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 3. API Rate Limiter -->
        <article class="project-card highlight-recruiter" data-category="security fullstack">
          <div class="project-image-wrap" onclick="openProjectModal('rate_limiter')">
            <img src="assets/images/security-logger.jpg" alt="API Rate Limiting Middleware Security Logger">
            <div class="project-badge-corner">03 // Cyber Defense</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Cybersecurity</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">3. API Rate Limiter &amp; Logger</h3>
              <p class="project-desc">Express security middleware with sliding token bucket and auto IP blocking.</p>
              <div class="project-tags">
                <span class="project-tag">Express.js</span>
                <span class="project-tag">Node.js</span>
                <span class="project-tag">Atomic JSON</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('rate_limiter')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/API-Rate-Limiting-Middleware-Security-Logger" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 4. FlowMetrics -->
        <article class="project-card" data-category="security fullstack">
          <div class="project-image-wrap" onclick="openProjectModal('flowmetrics')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #181d29, #0f121a); display: flex; align-items: center; justify-content: center; color: var(--accent-cyan); font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              FLOWMETRICS
            </div>
            <div class="project-badge-corner">04 // Stream Analytics</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Developer Tooling</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">4. FlowMetrics — Stream Engine</h3>
              <p class="project-desc">High-throughput TypeScript telemetry calculating p95/p99 latency percentiles.</p>
              <div class="project-tags">
                <span class="project-tag">TypeScript</span>
                <span class="project-tag">Node.js</span>
                <span class="project-tag">REST APIs</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('flowmetrics')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/flowmetrics" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 5. VerifyQR -->
        <article class="project-card" data-category="security">
          <div class="project-image-wrap" onclick="openProjectModal('verifyqr')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #241c2b, #120e17); display: flex; align-items: center; justify-content: center; color: #c084fc; font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              VERIFYQR
            </div>
            <div class="project-badge-corner">05 // Cryptography</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Authentication</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">5. VerifyQR — Cryptographic QR</h3>
              <p class="project-desc">Tamper-proof credential verification using asymmetric ECDSA cryptography.</p>
              <div class="project-tags">
                <span class="project-tag">TypeScript</span>
                <span class="project-tag">ECDSA</span>
                <span class="project-tag">Web Workers</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('verifyqr')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/verifyqr" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 6. Disease Diagnosis -->
        <article class="project-card highlight-recruiter" data-category="ai">
          <div class="project-image-wrap" onclick="openProjectModal('disease_diagnosis')">
            <img src="assets/images/disease-diagnosis.jpg" alt="Clinical AI Disease Diagnosis">
            <div class="project-badge-corner">06 // Deep Learning</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Clinical AI</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">6. Disease Diagnosis (CDSS)</h3>
              <p class="project-desc">Medical scan diagnostic system featuring Explainable AI (Grad-CAM heatmaps).</p>
              <div class="project-tags">
                <span class="project-tag">PyTorch</span>
                <span class="project-tag">Grad-CAM</span>
                <span class="project-tag">FastAPI</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('disease_diagnosis')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/Disease-Diagnosis" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 7. Evoke -->
        <article class="project-card is-hidden-archive" data-category="ui fullstack">
          <div class="project-image-wrap" onclick="openProjectModal('evoke')">
            <img src="assets/images/evoke.jpg" alt="Evoke Nightlife Platform">
            <div class="project-badge-corner">07 // Live Netlify</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Creative UI/UX</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">7. Evoke — "We Ignite Nights"</h3>
              <p class="project-desc">Nightlife curation and event ticketing platform with dark luxury editorial aesthetic.</p>
              <div class="project-tags">
                <span class="project-tag">CSS3</span>
                <span class="project-tag">Micro-UI</span>
                <span class="project-tag">Responsive</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('evoke')">
                <span>Specs ↗</span>
              </button>
              <a href="https://evoke-collectives.netlify.app/" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>Live Site ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 8. FleaRaas -->
        <article class="project-card is-hidden-archive" data-category="ui fullstack">
          <div class="project-image-wrap" onclick="openProjectModal('flearaas')">
            <img src="assets/images/flearaas.jpg" alt="FleaRaas Live Festival Platform">
            <div class="project-badge-corner">08 // Live Netlify</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Festival / E-Comm</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">8. FleaRaas — Garba &amp; Bazaar</h3>
              <p class="project-desc">Cultural fest platform with 3D interactive Dandiya visualizers &amp; pass booking.</p>
              <div class="project-tags">
                <span class="project-tag">Interactive UI</span>
                <span class="project-tag">JavaScript</span>
                <span class="project-tag">Netlify</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('flearaas')">
                <span>Specs ↗</span>
              </button>
              <a href="https://flearaas.netlify.app/" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>Live Site ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 9. Customer Churn Prediction -->
        <article class="project-card is-hidden-archive" data-category="ai">
          <div class="project-image-wrap" onclick="openProjectModal('customer_churn')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #1e2920, #0d170f); display: flex; align-items: center; justify-content: center; color: #4ade80; font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              CHURN AI
            </div>
            <div class="project-badge-corner">09 // Scikit-Learn</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Predictive ML</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">9. Customer Churn Predictor</h3>
              <p class="project-desc">Customer retention pipeline calculating churn probabilities and risk drivers.</p>
              <div class="project-tags">
                <span class="project-tag">Python</span>
                <span class="project-tag">Scikit-Learn</span>
                <span class="project-tag">Pandas</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('customer_churn')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/customer_churn_prediction_system" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 10. Lung Cancer Prediction ML -->
        <article class="project-card is-hidden-archive" data-category="ai">
          <div class="project-image-wrap" onclick="openProjectModal('lung_cancer')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #291818, #170d0d); display: flex; align-items: center; justify-content: center; color: #f87171; font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              LUNG CANCER ML
            </div>
            <div class="project-badge-corner">10 // Clinical ML</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Healthcare ML</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">10. Lung Cancer Predictor</h3>
              <p class="project-desc">Clinical predictive model evaluating oncological biomarkers and lifestyle risk factors.</p>
              <div class="project-tags">
                <span class="project-tag">Python</span>
                <span class="project-tag">Random Forest</span>
                <span class="project-tag">ROC-AUC</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('lung_cancer')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/ML_Project" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 11. VetPaw -->
        <article class="project-card is-hidden-archive" data-category="fullstack">
          <div class="project-image-wrap" onclick="openProjectModal('vetpaw')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #242218, #14130d); display: flex; align-items: center; justify-content: center; color: #facc15; font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              VETPAW // CLINIC
            </div>
            <div class="project-badge-corner">11 // Django • Python</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Healthcare SaaS</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">11. VetPaw — Clinic Manager</h3>
              <p class="project-desc">Veterinary clinical CRM for appointments, patient histories, and prescriptions.</p>
              <div class="project-tags">
                <span class="project-tag">Django</span>
                <span class="project-tag">Python</span>
                <span class="project-tag">SQLite</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('vetpaw')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/VetPaw" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 12. RAG Chatbot -->
        <article class="project-card is-hidden-archive" data-category="ai">
          <div class="project-image-wrap" onclick="openProjectModal('rag_chatbot')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #182229, #0d1417); display: flex; align-items: center; justify-content: center; color: #38bdf8; font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              RAG // LLM
            </div>
            <div class="project-badge-corner">12 // LangChain • RAG</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Agentic AI</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">12. RAG Knowledge Chatbot</h3>
              <p class="project-desc">Document question-answering with ChromaDB vector search and hallucination guardrails.</p>
              <div class="project-tags">
                <span class="project-tag">LangChain</span>
                <span class="project-tag">FastAPI</span>
                <span class="project-tag">ChromaDB</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('rag_chatbot')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/rag-chatbot" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 13. Newsiee Chatbot -->
        <article class="project-card is-hidden-archive" data-category="ai">
          <div class="project-image-wrap" onclick="openProjectModal('newsiee')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #201829, #110d17); display: flex; align-items: center; justify-content: center; color: #a855f7; font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              NEWSIEE // NLP
            </div>
            <div class="project-badge-corner">13 // OpenAI NLP</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Conversational AI</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">13. Newsiee — News Chatbot</h3>
              <p class="project-desc">Real-time conversational news ingestion and topic sentiment analysis.</p>
              <div class="project-tags">
                <span class="project-tag">Python</span>
                <span class="project-tag">OpenAI</span>
                <span class="project-tag">NLP</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('newsiee')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/Newsiee-Chatbot" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 14. Salesforce Helpdesk -->
        <article class="project-card is-hidden-archive" data-category="salesforce">
          <div class="project-image-wrap" onclick="openProjectModal('salesforce_helpdesk')">
            <img src="assets/images/salesforce-crm.jpg" alt="Salesforce IT Help Desk">
            <div class="project-badge-corner">14 // Flow Automation</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Salesforce CRM</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">14. IT Helpdesk Automation</h3>
              <p class="project-desc">Automated ticket routing, SLA escalations, and 40% process acceleration.</p>
              <div class="project-tags">
                <span class="project-tag">Flow Builder</span>
                <span class="project-tag">Service Cloud</span>
                <span class="project-tag">CRM</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('salesforce_helpdesk')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/IT-Help-Desk" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- 15. Collab-Cookbook -->
        <article class="project-card is-hidden-archive" data-category="fullstack">
          <div class="project-image-wrap" onclick="openProjectModal('collab_cookbook')">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #292118, #17120d); display: flex; align-items: center; justify-content: center; color: #fb923c; font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.05em;">
              COLLAB // COOKBOOK
            </div>
            <div class="project-badge-corner">15 // MERN Stack</div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category">Web Platform</span>
                <span class="project-date">2026</span>
              </div>
              <h3 class="project-title">15. Collab-Cookbook</h3>
              <p class="project-desc">Collaborative culinary platform with ingredient scaling &amp; recipe forks.</p>
              <div class="project-tags">
                <span class="project-tag">React.js</span>
                <span class="project-tag">Node.js</span>
                <span class="project-tag">MongoDB</span>
              </div>
            </div>
            <div class="project-actions">
              <button class="pill-btn sm primary" onclick="openProjectModal('collab_cookbook')">
                <span>Specs ↗</span>
              </button>
              <a href="https://github.com/harshi2410/Collab-Cookbook" target="_blank" rel="noopener noreferrer" class="pill-btn sm">
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </article>

      </div>

      <!-- Progressive Expansion Toggle -->
      <div class="projects-expand-wrapper" id="projectExpandWrap">
        <button class="pill-btn primary" id="projectExpandBtn" onclick="toggleProjectArchiveExpansion()">
          <span id="expandBtnText">Show All 15 Projects (+9 More)</span>
          <svg class="arrow-icon" id="expandBtnIcon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="transition: transform 0.3s ease;">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>

      <!-- Developer Directory Table View -->
      <div class="projects-directory-view" id="projectsDirectoryView" style="display: none;">
        <div class="directory-table-wrap">
          <table class="directory-table">
            <thead>
              <tr>
                <th style="width: 50px;">#</th>
                <th>System &amp; Architecture</th>
                <th>Domain Category</th>
                <th>Core Stack</th>
                <th>Status / Key Metric</th>
                <th style="text-align: right;">Quick Actions</th>
              </tr>
            </thead>
            <tbody>
              <!-- 1. Playfoliyo -->
              <tr class="directory-row" data-category="fullstack" onclick="openProjectModal('playfoliyo')">
                <td class="dir-num">01</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Playfoliyo</span>
                    <span class="dir-meta">"LinkedIn for Sports" Career Platform</span>
                  </div>
                </td>
                <td><span class="project-category">Sports Tech</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">React 18</span><span class="project-tag">Node.js</span><span class="project-tag">MongoDB</span></div></td>
                <td><span class="dir-status-pill gold">🏆 MERN Stack</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('playfoliyo')">Specs ↗</button><a href="https://github.com/harshi2410/Playfoliyo_prod" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 2. Kshetra -->
              <tr class="directory-row" data-category="fullstack ai" onclick="openProjectModal('kshetra')">
                <td class="dir-num">02</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Kshetra</span>
                    <span class="dir-meta">Geospatial &amp; AgriTech Land Intelligence</span>
                  </div>
                </td>
                <td><span class="project-category">AgriTech &amp; GIS</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">Python</span><span class="project-tag">GeoPandas</span><span class="project-tag">GIS</span></div></td>
                <td><span class="dir-status-pill green">🌱 Satellite NDVI</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('kshetra')">Specs ↗</button><a href="https://github.com/harshi2410/Kshetra" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 3. API Rate Limiter -->
              <tr class="directory-row" data-category="security fullstack" onclick="openProjectModal('rate_limiter')">
                <td class="dir-num">03</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">API Rate Limiter &amp; Logger</span>
                    <span class="dir-meta">Cyber Defense &amp; Token Bucket Middleware</span>
                  </div>
                </td>
                <td><span class="project-category">Cybersecurity</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">Express.js</span><span class="project-tag">Node.js</span><span class="project-tag">Atomic JSON</span></div></td>
                <td><span class="dir-status-pill gold">🛡️ Cyber Sandbox</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('rate_limiter')">Specs ↗</button><a href="https://github.com/harshi2410/API-Rate-Limiting-Middleware-Security-Logger" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 4. FlowMetrics -->
              <tr class="directory-row" data-category="security fullstack" onclick="openProjectModal('flowmetrics')">
                <td class="dir-num">04</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">FlowMetrics</span>
                    <span class="dir-meta">Developer Stream Telemetry &amp; Latency Engine</span>
                  </div>
                </td>
                <td><span class="project-category">Developer Tooling</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">TypeScript</span><span class="project-tag">Node.js</span><span class="project-tag">Streams</span></div></td>
                <td><span class="dir-status-pill cyan">⚡ p95/p99 Telemetry</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('flowmetrics')">Specs ↗</button><a href="https://github.com/harshi2410/flowmetrics" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 5. VerifyQR -->
              <tr class="directory-row" data-category="security" onclick="openProjectModal('verifyqr')">
                <td class="dir-num">05</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">VerifyQR</span>
                    <span class="dir-meta">Cryptographic QR Code Auth System</span>
                  </div>
                </td>
                <td><span class="project-category">Authentication</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">TypeScript</span><span class="project-tag">ECDSA</span><span class="project-tag">Web Workers</span></div></td>
                <td><span class="dir-status-pill violet">🔐 Asymmetric ECDSA</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('verifyqr')">Specs ↗</button><a href="https://github.com/harshi2410/verifyqr" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 6. Disease Diagnosis -->
              <tr class="directory-row" data-category="ai" onclick="openProjectModal('disease_diagnosis')">
                <td class="dir-num">06</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Disease Diagnosis (CDSS)</span>
                    <span class="dir-meta">Clinical AI Decision Support with Grad-CAM</span>
                  </div>
                </td>
                <td><span class="project-category">Clinical AI</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">PyTorch</span><span class="project-tag">Grad-CAM</span><span class="project-tag">FastAPI</span></div></td>
                <td><span class="dir-status-pill violet">🧠 97.8% Accuracy</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('disease_diagnosis')">Specs ↗</button><a href="https://github.com/harshi2410/Disease-Diagnosis" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 7. Evoke -->
              <tr class="directory-row" data-category="ui fullstack" onclick="openProjectModal('evoke')">
                <td class="dir-num">07</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Evoke — "We Ignite Nights"</span>
                    <span class="dir-meta">Nightlife Curation &amp; Ticket Booking</span>
                  </div>
                </td>
                <td><span class="project-category">Creative UI/UX</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">Modern CSS3</span><span class="project-tag">Micro-UI</span></div></td>
                <td><span class="dir-status-pill gold">✦ Live on Netlify</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('evoke')">Specs ↗</button><a href="https://evoke-collectives.netlify.app/" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">Live Site ↗</a></div></td>
              </tr>
              <!-- 8. FleaRaas -->
              <tr class="directory-row" data-category="ui fullstack" onclick="openProjectModal('flearaas')">
                <td class="dir-num">08</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">FleaRaas — Garba &amp; Bazaar</span>
                    <span class="dir-meta">Cultural Festival &amp; Pass Booking System</span>
                  </div>
                </td>
                <td><span class="project-category">Festival / E-Comm</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">3D Dandiya</span><span class="project-tag">Pass Booking</span></div></td>
                <td><span class="dir-status-pill cyan">⚡ Live on Netlify</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('flearaas')">Specs ↗</button><a href="https://flearaas.netlify.app/" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">Live Site ↗</a></div></td>
              </tr>
              <!-- 9. Customer Churn -->
              <tr class="directory-row" data-category="ai" onclick="openProjectModal('customer_churn')">
                <td class="dir-num">09</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Customer Churn Prediction</span>
                    <span class="dir-meta">Predictive Customer Retention ML Pipeline</span>
                  </div>
                </td>
                <td><span class="project-category">Predictive ML</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">Python</span><span class="project-tag">Scikit-Learn</span><span class="project-tag">Pandas</span></div></td>
                <td><span class="dir-status-pill green">📊 88.5% F1-Score</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('customer_churn')">Specs ↗</button><a href="https://github.com/harshi2410/customer_churn_prediction_system" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 10. Lung Cancer -->
              <tr class="directory-row" data-category="ai" onclick="openProjectModal('lung_cancer')">
                <td class="dir-num">10</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Lung Cancer Prediction</span>
                    <span class="dir-meta">Clinical Risk Assessment Random Forest ML</span>
                  </div>
                </td>
                <td><span class="project-category">Healthcare ML</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">Python</span><span class="project-tag">Random Forest</span></div></td>
                <td><span class="dir-status-pill green">🩺 Clinical Classifier</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('lung_cancer')">Specs ↗</button><a href="https://github.com/harshi2410/ML_Project" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 11. VetPaw -->
              <tr class="directory-row" data-category="fullstack" onclick="openProjectModal('vetpaw')">
                <td class="dir-num">11</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">VetPaw</span>
                    <span class="dir-meta">Veterinary Clinic &amp; Medical Record Manager</span>
                  </div>
                </td>
                <td><span class="project-category">Healthcare SaaS</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">Django</span><span class="project-tag">Python</span><span class="project-tag">SQLite</span></div></td>
                <td><span class="dir-status-pill gold">🐾 Django ORM</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('vetpaw')">Specs ↗</button><a href="https://github.com/harshi2410/VetPaw" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 12. RAG Chatbot -->
              <tr class="directory-row" data-category="ai" onclick="openProjectModal('rag_chatbot')">
                <td class="dir-num">12</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">RAG Knowledge Chatbot</span>
                    <span class="dir-meta">Dense Vector Search &amp; Document QA</span>
                  </div>
                </td>
                <td><span class="project-category">Agentic AI</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">LangChain</span><span class="project-tag">FastAPI</span><span class="project-tag">ChromaDB</span></div></td>
                <td><span class="dir-status-pill cyan">🤖 LangChain RAG</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('rag_chatbot')">Specs ↗</button><a href="https://github.com/harshi2410/rag-chatbot" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 13. Newsiee -->
              <tr class="directory-row" data-category="ai" onclick="openProjectModal('newsiee')">
                <td class="dir-num">13</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Newsiee Chatbot</span>
                    <span class="dir-meta">Real-Time News Analysis &amp; NLP Chatbot</span>
                  </div>
                </td>
                <td><span class="project-category">Conversational AI</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">Python</span><span class="project-tag">OpenAI</span><span class="project-tag">NLP</span></div></td>
                <td><span class="dir-status-pill violet">📰 OpenAI Stream</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('newsiee')">Specs ↗</button><a href="https://github.com/harshi2410/Newsiee-Chatbot" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 14. Salesforce Helpdesk -->
              <tr class="directory-row" data-category="salesforce" onclick="openProjectModal('salesforce_helpdesk')">
                <td class="dir-num">14</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Salesforce IT Helpdesk</span>
                    <span class="dir-meta">Enterprise Cloud CRM Case Triage Automation</span>
                  </div>
                </td>
                <td><span class="project-category">Salesforce CRM</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">Flow Builder</span><span class="project-tag">Service Cloud</span></div></td>
                <td><span class="dir-status-pill cyan">☁️ 40% Automation</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('salesforce_helpdesk')">Specs ↗</button><a href="https://github.com/harshi2410/IT-Help-Desk" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
              <!-- 15. Collab-Cookbook -->
              <tr class="directory-row" data-category="fullstack" onclick="openProjectModal('collab_cookbook')">
                <td class="dir-num">15</td>
                <td>
                  <div class="dir-title-cell">
                    <span class="dir-title">Collab-Cookbook</span>
                    <span class="dir-meta">Recipe Collaboration &amp; Community Hub</span>
                  </div>
                </td>
                <td><span class="project-category">Web Platform</span></td>
                <td><div class="dir-stack-tags"><span class="project-tag">React.js</span><span class="project-tag">Node.js</span><span class="project-tag">MongoDB</span></div></td>
                <td><span class="dir-status-pill gold">🍳 MERN Stack</span></td>
                <td><div class="dir-actions-cell"><button class="pill-btn sm primary" onclick="event.stopPropagation(); openProjectModal('collab_cookbook')">Specs ↗</button><a href="https://github.com/harshi2410/Collab-Cookbook" target="_blank" rel="noopener noreferrer" class="pill-btn sm" onclick="event.stopPropagation()">GitHub ↗</a></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>`;

content = content.slice(0, startIndex) + newProjectsSection + '\n\n    ' + content.slice(endIndex);
fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully updated index.html with compact projects archive!');
