/**
 * Joseph Awer (@Downspice) — Git Profile Landing Page Interactive Controller
 * Features: Typewriter, Real-time GitHub API Sync, Interactive CLI,
 * Profile README Generator & 1-Click Copy, Bento Filter, Toast feedback.
 */

// 1. PROFILE README RAW MARKDOWN TEMPLATE
const GITHUB_PROFILE_README = `# Hi there, I'm Joseph Awer 👋 
### Full-Stack TypeScript Engineer • Scalable Systems Architect

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24,15,36,20&height=200&section=header&text=Joseph%20Awer%20(@Downspice)&fontSize=38&fontAlign=50&fontAlignY=45&fontColor=ffffff&desc=Building%20Robust%20Cloud%20Platforms%20%26%20Type-Safe%20Ecosystems&descSize=18&descAlign=50&descAlignY=70" width="100%" alt="Header Banner" />
</p>

<p align="center">
  <a href="https://github.com/Downspice">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=19&pause=1000&color=64D2FF&center=true&vCenter=true&width=550&lines=Full-Stack+TypeScript+Engineer;Architecting+Scalable+Cloud+Microservices;Building+Enterprise+HR+%26+Ticketing+Platforms;Accessibility+Advocate+%26+Open+Source+Builder" alt="Typing SVG" />
  </a>
</p>

---

### 💫 About Me

- 🔭 Currently building and architecting **[awer-ticketing](https://github.com/Downspice/awer-ticketing)** & modern enterprise platforms.
- ⚡ 28+ of my 37 GitHub repositories are built with **TypeScript** — obsessed with end-to-end type safety, clean code, and solid system design.
- 🎯 Created **[alphaworld](https://github.com/Downspice/alphaworld)**, an accessibility-first project designed to help dyslexic children learn alphabets with special UI principles.
- 💬 Ask me about **TypeScript**, **Next.js**, **Node.js REST/GraphQL architectures**, and **Microservices**.
- 📫 Reach me on GitHub: [@Downspice](https://github.com/Downspice)

---

### 📊 GitHub Analytics & Streak

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Downspice&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117" alt="Downspice's GitHub Stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Downspice&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117" alt="Top Languages" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Downspice&theme=tokyonight&hide_border=true&background=0D1117" alt="Downspice's GitHub Streak" />
</p>

---

### 🛠️ Technical Arsenal

| Domain | Technologies |
| :--- | :--- |
| **Languages** | \`TypeScript\`, \`JavaScript (ESNext)\`, \`C#\`, \`C++\`, \`SQL\`, \`HTML5/CSS3\` |
| **Frontend** | \`React.js\`, \`Next.js\`, \`Tailwind CSS\`, \`Vite\`, \`Zustand\`, \`Redux Toolkit\` |
| **Backend & Cloud** | \`Node.js\`, \`Express.js\`, \`PostgreSQL\`, \`Prisma ORM\`, \`RESTful APIs\`, \`JWT Auth\` |
| **DevOps & Tooling** | \`Git\`, \`GitHub Actions\`, \`Docker\`, \`Linux CLI\`, \`Vitest\`, \`Postman\` |

---

### 🚀 Highlighted Repositories

- 🎫 **[awer-ticketing](https://github.com/Downspice/awer-ticketing)** — Production-grade event and customer ticketing engine with real-time lifecycle status.
- 👥 **[awer-hr-backend](https://github.com/Downspice/awer-hr-backend)** — Enterprise HR and employee directory backend service with role-based access control.
- 🎓 **[ug-alumnisphere](https://github.com/Downspice/ug-alumnisphere-frontend)** — Community mentoring and alumni networking platform.
- 🧭 **[advisory-portal](https://github.com/Downspice/advisory-portal)** — Interactive advisory management portal with automated scheduling.
- 🎮 **[alphaworld](https://github.com/Downspice/alphaworld)** — Accessible learning game tailored for dyslexic children.

---

<p align="center">
  <sub>⭐ Designed with love & type safety. Feel free to connect or star my repos!</sub>
</p>
`;

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
