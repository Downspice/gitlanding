/**
 * Joseph Awer (@Downspice) — Git Profile Landing Page Interactive Controller
 * Features: Typewriter, Real-time GitHub API Sync, Interactive CLI,
 * Profile README Generator & 1-Click Copy, Bento Filter, Toast feedback.
 */

// 1. PROFILE README RAW MARKDOWN TEMPLATE
const GITHUB_PROFILE_README = `<div align="center">
  <!-- ANIMATED HERO BANNER -->
  <a href="https://github.com/Downspice">
    <img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/hero-banner.svg" width="100%" alt="Joseph Awer (@Downspice) - Full-Stack TypeScript Engineer" />
  </a>
</div>

<br/>

<!-- ANIMATED LASER DIVIDER -->
<img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/animated-divider.svg" width="100%" alt="Divider" />

<br/>

### 💫 About Joseph Awer

\`\`\`typescript
const engineer = {
  name: "Joseph Awer",
  handle: "@Downspice",
  location: "Global 🌍",
  currentFocus: ["awer-ticketing", "awer-hr-backend", "enterprise microservices"],
  coreStack: {
    language: "TypeScript (85%+)",
    frontend: ["React.js", "Next.js", "Tailwind CSS", "Zustand"],
    backend: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Docker"],
    architecture: ["Clean Architecture", "RESTful APIs", "Microservices", "RBAC"]
  },
  mission: "Architecting resilient, type-safe digital platforms with exceptional user experience"
};
\`\`\`

<br/>

<!-- ANIMATED STATS BENTO -->
<div align="center">
  <img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/stats-bento.svg" width="100%" alt="Downspice GitHub Analytics" />
</div>

<br/>

<!-- ANIMATED LASER DIVIDER -->
<img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/animated-divider.svg" width="100%" alt="Divider" />

<br/>

### 🛠️ Technical Arsenal

<div align="center">
  <img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/tech-matrix.svg" width="100%" alt="Technical Skills Matrix" />
</div>

<br/>

<!-- ANIMATED LASER DIVIDER -->
<img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/animated-divider.svg" width="100%" alt="Divider" />

<br/>

### 🚀 Highlighted Repositories & Systems

<div align="center">
  <img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/projects-bento.svg" width="100%" alt="Featured Repositories" />
</div>

<br/>

<!-- ANIMATED LASER DIVIDER -->
<img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/animated-divider.svg" width="100%" alt="Divider" />

<br/>

### 💬 Connect & Collaborate

<div align="center">
  <a href="https://github.com/Downspice">
    <img src="https://raw.githubusercontent.com/Downspice/Downspice/main/assets/social-bar.svg" width="100%" alt="Connect with Downspice" />
  </a>
</div>

<br/>

<div align="center">
  <sub>⚡ Designed with type safety &amp; vector precision. Star or fork to support!</sub>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  // Populate raw markdown view
  const rawCodeElem = document.getElementById('raw-markdown-code');
  if (rawCodeElem) {
    rawCodeElem.textContent = GITHUB_PROFILE_README;
  }

  initTypewriter();
  initTerminal();
  initTabsAndCopy();
  initCategoryFilters();
  fetchLiveGitHubStats();
});

/* ==========================================================================
   2. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'Full-Stack TypeScript Engineer',
    'Enterprise Systems Architect',
    'Node.js & React Developer',
    'Open Source & Accessibility Creator'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      el.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   3. INTERACTIVE TERMINAL
   ========================================================================== */
function initTerminal() {
  const termBody = document.getElementById('terminal-body');
  const termInput = document.getElementById('terminal-input');
  const clearBtn = document.getElementById('clear-term-btn');
  const pillBtns = document.querySelectorAll('.pill-btn');

  if (!termInput || !termBody) return;

  const commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<div class="term-dim">Available commands:</div>
  <span class="term-highlight">about</span>      - Quick bio and background
  <span class="term-highlight">skills</span>     - Technical competencies and tools
  <span class="term-highlight">repos</span>      - Top public repositories
  <span class="term-highlight">stats</span>      - GitHub analytics overview
  <span class="term-highlight">contact</span>    - Ways to get in touch
  <span class="term-highlight">readme</span>     - How to use the GitHub Profile README
  <span class="term-highlight">clear</span>      - Clear terminal screen
  <span class="term-highlight">sudo</span>       - Root access test
`,
    about: () => `
<div class="term-success">● Joseph Awer (Downspice)</div>
  Full-Stack Software Engineer with deep focus on TypeScript ecosystems.
  Passionate about clean architecture, scalable APIs, and impactful UX.
  Location: Active Globally 🌍
  GitHub: <a href="https://github.com/Downspice" target="_blank" class="term-highlight">github.com/Downspice</a>
`,
    skills: () => `
<div class="term-success">⚡ Technical Arsenal:</div>
  • Languages:  TypeScript (Primary), JavaScript (ESNext), C#, C++, SQL, HTML/CSS
  • Frontend:   React.js, Next.js, Tailwind CSS, Vite, Redux, Zustand
  • Backend:    Node.js, Express, PostgreSQL, Prisma, REST, Microservices
  • DevOps:     Git, GitHub Actions, Docker, Linux/Unix shell
`,
    repos: () => `
<div class="term-success">📦 Featured Projects:</div>
  1. <span class="term-highlight">awer-ticketing</span>          - Full-stack event & issue ticketing system [TypeScript]
  2. <span class="term-highlight">awer-hr-backend</span>         - Enterprise HRMS backend & auth platform [TypeScript]
  3. <span class="term-highlight">ug-alumnisphere</span>        - Alumni mentoring & community portal [TypeScript/React]
  4. <span class="term-highlight">advisory-portal</span>         - Automated advisory & scheduling portal [TypeScript]
  5. <span class="term-highlight">alphaworld</span>              - Accessibility game for dyslexic learners [C#]
`,
    stats: () => `
<div class="term-success">📊 GitHub Profile Summary (@Downspice):</div>
  • Public Repositories: 37
  • TypeScript Projects: 28+ (~85% of total codebase)
  • GitHub Member Since: July 2020
  • Current Status: Available for High-Impact Projects
`,
    contact: () => `
<div class="term-success">📬 Connect with Joseph:</div>
  • GitHub:   https://github.com/Downspice
  • Email:    67798618+Downspice@users.noreply.github.com
  • CLI:      npx downspice
`,
    readme: () => `
<div class="term-success">📋 GitHub Profile README:</div>
  To display the aesthetic profile README on your GitHub:
  1. Create a public repo named 'Downspice'
  2. Add a README.md file
  3. Copy the markdown using the 'Copy Profile README' button below!
`,
    sudo: () => `
<div class="term-error">Permission denied: You are already in super-user developer mode.</div>
`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    commandHistory.push(rawCmd);
    historyIndex = commandHistory.length;

    // Append user input line
    const userLine = document.createElement('div');
    userLine.className = 'term-line';
    userLine.innerHTML = `<span class="term-prompt-symbol">downspice@git:~$</span> <span>${escapeHtml(rawCmd)}</span>`;
    termBody.appendChild(userLine);

    if (cmd === 'clear') {
      termBody.innerHTML = '';
    } else if (commands[cmd]) {
      const responseLine = document.createElement('div');
      responseLine.className = 'term-line';
      responseLine.innerHTML = commands[cmd]();
      termBody.appendChild(responseLine);
    } else {
      const errorLine = document.createElement('div');
      errorLine.className = 'term-line term-error';
      errorLine.innerHTML = `command not found: ${escapeHtml(cmd)}. Type <span class="term-highlight">help</span> for a list of commands.`;
      termBody.appendChild(errorLine);
    }

    termBody.scrollTop = termBody.scrollHeight;
  }

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(termInput.value);
      termInput.value = '';
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        termInput.value = commandHistory[historyIndex] || '';
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        termInput.value = commandHistory[historyIndex] || '';
      } else {
        historyIndex = commandHistory.length;
        termInput.value = '';
      }
      e.preventDefault();
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      termBody.innerHTML = '';
      termInput.focus();
    });
  }

  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-command');
      if (cmd) {
        executeCommand(cmd);
        termInput.focus();
      }
    });
  });
}

/* ==========================================================================
   4. TABS, CLIPBOARD & TOAST
   ========================================================================== */
function initTabsAndCopy() {
  const btnPreview = document.getElementById('btn-tab-preview');
  const btnRaw = document.getElementById('btn-tab-raw');
  const visualView = document.getElementById('readme-visual-view');
  const rawView = document.getElementById('readme-raw-view');
  const copyReadmeBtn = document.getElementById('copy-readme-btn');
  const copyCloneBtn = document.getElementById('copy-git-clone-btn');
  const cliCard = document.getElementById('cli-card');

  // Tab switching
  if (btnPreview && btnRaw && visualView && rawView) {
    btnPreview.addEventListener('click', () => {
      btnPreview.classList.add('active');
      btnRaw.classList.remove('active');
      visualView.classList.remove('hidden');
      rawView.classList.add('hidden');
    });

    btnRaw.addEventListener('click', () => {
      btnRaw.classList.add('active');
      btnPreview.classList.remove('active');
      rawView.classList.remove('hidden');
      visualView.classList.add('hidden');
    });
  }

  // Copy Profile README
  if (copyReadmeBtn) {
    copyReadmeBtn.addEventListener('click', () => {
      copyToClipboard(GITHUB_PROFILE_README, 'Profile README markdown copied!');
      const textSpan = document.getElementById('copy-readme-text');
      if (textSpan) {
        const originalText = textSpan.textContent;
        textSpan.textContent = 'Copied to Clipboard! ✓';
        setTimeout(() => {
          textSpan.textContent = originalText;
        }, 2500);
      }
    });
  }

  // Copy git clone
  if (copyCloneBtn) {
    copyCloneBtn.addEventListener('click', () => {
      const cmd = copyCloneBtn.getAttribute('data-clipboard') || 'git clone https://github.com/Downspice/portfolio.git';
      copyToClipboard(cmd, 'git clone command copied!');
      const textSpan = document.getElementById('clone-btn-text');
      if (textSpan) {
        textSpan.textContent = 'Copied command! ✓';
        setTimeout(() => {
          textSpan.textContent = 'git clone portfolio.git';
        }, 2200);
      }
    });
  }

  // Copy CLI npx card
  if (cliCard) {
    cliCard.addEventListener('click', () => {
      copyToClipboard('npx downspice', 'npx downspice copied to clipboard!');
      const indicator = document.getElementById('cli-copy-indicator');
      if (indicator) {
        indicator.textContent = '✓';
        setTimeout(() => {
          indicator.textContent = '📋';
        }, 2000);
      }
    });
  }
}

function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(message))
      .catch(() => fallbackCopy(text, message));
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(message);
  } catch (err) {
    console.error('Could not copy text', err);
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   5. REPOSITORY CATEGORY FILTERS
   ========================================================================== */
function initCategoryFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const repoCards = document.querySelectorAll('.repo-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      repoCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. LIVE GITHUB STATS FETCHER (WITH OFFLINE FALLBACK)
   ========================================================================== */
async function fetchLiveGitHubStats() {
  try {
    const res = await fetch('https://api.github.com/users/Downspice');
    if (!res.ok) return;

    const data = await res.json();
    if (data && typeof data.public_repos === 'number') {
      const reposElem = document.getElementById('stat-repos');
      const followersElem = document.getElementById('stat-followers');

      if (reposElem) reposElem.textContent = data.public_repos;
      if (followersElem) followersElem.textContent = data.followers;
    }
  } catch (err) {
    // Graceful offline fallback: static counters remain active
    console.info('Using static GitHub metrics fallback.');
  }
}

/* Helper to escape HTML */
function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
