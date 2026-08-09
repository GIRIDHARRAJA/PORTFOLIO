/* ==========================================================================
   GIRIDHARRAJA T - AI & SOFTWARE ENGINEER PORTFOLIO JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- GIRIDHARRAJA T'S REAL SKILLS DATA ---
  const SKILLS_DATA = [
    { name: 'Python', category: 'languages', percent: 90, icon: 'fa-brands fa-python' },
    { name: 'Java (Basics)', category: 'languages', percent: 75, icon: 'fa-brands fa-java' },
    { name: 'HTML5', category: 'web', percent: 88, icon: 'fa-brands fa-html5' },
    { name: 'CSS3', category: 'web', percent: 85, icon: 'fa-brands fa-css3-alt' },
    { name: 'Basic SQL', category: 'web', percent: 80, icon: 'fa-solid fa-database' },
    { name: 'REST API', category: 'web', percent: 82, icon: 'fa-solid fa-network-wired' },
    { name: 'Git & GitHub', category: 'tools', percent: 88, icon: 'fa-brands fa-github' },
    { name: 'Visual Studio Code', category: 'tools', percent: 92, icon: 'fa-solid fa-code' },
    { name: 'Eclipse IDE', category: 'tools', percent: 78, icon: 'fa-solid fa-laptop-code' },
    { name: 'GitHub Copilot', category: 'tools', percent: 85, icon: 'fa-solid fa-robot' },
    { name: 'Power BI', category: 'tools', percent: 82, icon: 'fa-solid fa-chart-pie' },
    { name: 'Computer Vision & NLP', category: 'languages', percent: 85, icon: 'fa-solid fa-brain' }
  ];

  // --- GIRIDHARRAJA T'S REAL PROJECTS DATA ---
  const PROJECTS_DATA = [
    {
      id: 'ai-video-detection',
      title: 'AI-Based Video Detection System',
      category: 'ai',
      badge: 'Computer Vision / AI (Team Project)',
      image: 'assets/images/project_ai_analytics.png',
      desc: 'Developed an AI-based object detection system for real-time video streams using computer vision frame analysis.',
      highlights: [
        'Applied computer vision techniques for frame-by-frame stream analysis',
        'Implemented real-time object detection and spatial classification model',
        'Optimized detection pipeline for minimal frame processing latency'
      ],
      tech: ['Python', 'Computer Vision', 'OpenCV', 'Machine Learning', 'AI'],
      demoLink: 'https://github.com/GIRIDHARRAJA',
      githubLink: 'https://github.com/GIRIDHARRAJA'
    },
    {
      id: 'role-portfolio-guidance',
      title: 'AI-Based Portfolio & Skill Gap Guidance System',
      category: 'ai',
      badge: 'NLP & Semantic Similarity (Team Project)',
      image: 'assets/images/project_cloud_saas.png',
      desc: 'Developed an AI-powered role matching system utilizing Natural Language Processing (NLP) to detect skill gaps.',
      highlights: [
        'Built semantic similarity matching model for job role qualification mapping',
        'Generated automated personalized candidate portfolio recommendations',
        'Identified key missing technical competencies and guided skill acquisition'
      ],
      tech: ['Python', 'NLP', 'Semantic Matching', 'AI', 'SQL', 'HTML/CSS'],
      demoLink: 'https://github.com/GIRIDHARRAJA',
      githubLink: 'https://github.com/GIRIDHARRAJA'
    },
    {
      id: 'blockchain-dapp-research',
      title: 'Blockchain & Smart Contracts DApp Workflow',
      category: 'web',
      badge: 'Blockchain & Smart Contracts',
      image: 'assets/images/project_ai_analytics.png',
      desc: 'Inplant Training project at Spotknack Tech Solutions studying decentralized applications and smart contracts.',
      highlights: [
        'Learned fundamental blockchain architecture and decentralization principles',
        'Gained hands-on exposure to smart contract logic and execution workflows',
        'Explored DApp front-end web integration patterns'
      ],
      tech: ['Blockchain', 'Smart Contracts', 'DApps', 'Web3', 'Git'],
      demoLink: 'https://github.com/GIRIDHARRAJA',
      githubLink: 'https://github.com/GIRIDHARRAJA'
    }
  ];

  // --- THEME SWITCHER ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'light') {
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
    }
  }
  setTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  });

  // --- NAVBAR SCROLL EFFECT & MOBILE MENU ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
    });
  });

  // --- TYPEWRITER EFFECT ---
  const typewriterElement = document.getElementById('typewriter-text');
  const titles = [
    'AI-Based Video Detection Systems.',
    'NLP Role Matching & Skill Gap Engines.',
    'Clean Python & Java Applications.',
    'Smart Web & Database Solutions.'
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeEffect() {
    const currentTitle = titles[titleIndex];
    if (isDeleting) {
      typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typeSpeed = 1800; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }
  typeEffect();

  // --- STATS COUNTER ANIMATION ---
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let statsTriggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsTriggered) {
        statsTriggered = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          let count = 0;
          const step = 1;
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              stat.textContent = target;
              clearInterval(timer);
            } else {
              stat.textContent = count;
            }
          }, 200);
        });
      }
    });
  }, { threshold: 0.5 });

  const heroSection = document.getElementById('hero');
  if (heroSection) observer.observe(heroSection);

  // --- RENDER SKILLS & FILTER ---
  const skillsContainer = document.getElementById('skills-container');
  const skillTabs = document.querySelectorAll('.skill-tab');

  function renderSkills(category = 'all') {
    skillsContainer.innerHTML = '';
    const filtered = category === 'all' 
      ? SKILLS_DATA 
      : SKILLS_DATA.filter(s => s.category === category);

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card glass-card hover-lift';
      card.innerHTML = `
        <div class="skill-header">
          <div class="skill-name-group">
            <i class="${skill.icon} skill-icon"></i>
            <span>${skill.name}</span>
          </div>
          <span class="skill-percent">${skill.percent}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${skill.percent}%;"></div>
        </div>
      `;
      skillsContainer.appendChild(card);
    });
  }

  renderSkills();

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderSkills(tab.getAttribute('data-category'));
    });
  });

  // --- RENDER PROJECTS & FILTER ---
  const projectsContainer = document.getElementById('projects-container');

  function renderProjects() {
    projectsContainer.innerHTML = '';
    PROJECTS_DATA.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card glass-card hover-lift';
      card.innerHTML = `
        <div class="project-img-wrapper">
          <img src="${project.image}" alt="${project.title}" class="project-img">
          <div class="project-overlay">
            <button class="btn btn-sm btn-primary modal-trigger-btn" data-id="${project.id}">
              <i class="fa-solid fa-eye"></i> Details
            </button>
            <a href="${project.githubLink}" target="_blank" class="btn btn-sm btn-outline">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div class="project-body">
          <span class="project-badge">${project.badge}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.desc}</p>
          <div class="tech-tags">
            ${project.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      `;
      projectsContainer.appendChild(card);
    });

    // Attach Modal Listeners
    document.querySelectorAll('.modal-trigger-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pId = e.currentTarget.getAttribute('data-id');
        openProjectModal(pId);
      });
    });
  }

  renderProjects();

  // --- PROJECT MODAL LOGIC ---
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(id) {
    const project = PROJECTS_DATA.find(p => p.id === id);
    if (!project) return;

    document.getElementById('modal-badge').textContent = project.badge;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-img').src = project.image;
    document.getElementById('modal-desc').textContent = project.desc;
    
    const highlightsUl = document.getElementById('modal-highlights');
    highlightsUl.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join('');

    const techBox = document.getElementById('modal-tech');
    techBox.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');

    document.getElementById('modal-github-btn').href = project.githubLink;

    projectModal.classList.add('active');
  }

  modalCloseBtn.addEventListener('click', () => {
    projectModal.classList.remove('active');
  });

  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) projectModal.classList.remove('active');
  });

  // --- RESUME MODAL LOGIC ---
  const resumeModal = document.getElementById('resume-modal');
  const resumeModalBtn = document.getElementById('resume-modal-btn');
  const resumeCloseBtn = document.getElementById('resume-close-btn');
  const closeResumeBtn = document.getElementById('close-resume-btn');
  const downloadResumeBtn = document.getElementById('download-resume-btn');

  resumeModalBtn.addEventListener('click', () => {
    resumeModal.classList.add('active');
  });

  [resumeCloseBtn, closeResumeBtn].forEach(btn => {
    btn.addEventListener('click', () => {
      resumeModal.classList.remove('active');
    });
  });

  downloadResumeBtn.addEventListener('click', () => {
    showToast('Giridharraja T Resume PDF download initiated!', 'info');
  });

  // --- BACKGROUND PARTICLES CANVAS ---
  const bgCanvas = document.getElementById('bg-canvas');
  const bgCtx = bgCanvas.getContext('2d');
  let bgParticles = [];

  function resizeBgCanvas() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
  }
  resizeBgCanvas();
  window.addEventListener('resize', resizeBgCanvas);

  class BgParticle {
    constructor() {
      this.x = Math.random() * bgCanvas.width;
      this.y = Math.random() * bgCanvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > bgCanvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > bgCanvas.height) this.vy *= -1;
    }
    draw() {
      bgCtx.beginPath();
      bgCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      bgCtx.fillStyle = 'rgba(6, 182, 212, 0.4)';
      bgCtx.fill();
    }
  }

  for (let i = 0; i < 50; i++) bgParticles.push(new BgParticle());

  function animateBgCanvas() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    for (let i = 0; i < bgParticles.length; i++) {
      bgParticles[i].update();
      bgParticles[i].draw();
      for (let j = i + 1; j < bgParticles.length; j++) {
        const dx = bgParticles[i].x - bgParticles[j].x;
        const dy = bgParticles[i].y - bgParticles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          bgCtx.beginPath();
          bgCtx.moveTo(bgParticles[i].x, bgParticles[i].y);
          bgCtx.lineTo(bgParticles[j].x, bgParticles[j].y);
          bgCtx.strokeStyle = `rgba(139, 92, 246, ${0.15 - dist / 1200})`;
          bgCtx.lineWidth = 0.8;
          bgCtx.stroke();
        }
      }
    }
    requestAnimationFrame(animateBgCanvas);
  }
  animateBgCanvas();

  // --- INTERACTIVE LAB CANVAS ---
  const labCanvas = document.getElementById('lab-canvas');
  const labCtx = labCanvas.getContext('2d');
  let labParticles = [];

  function resizeLabCanvas() {
    labCanvas.width = labCanvas.parentElement.clientWidth;
    labCanvas.height = labCanvas.parentElement.clientHeight;
  }
  resizeLabCanvas();
  window.addEventListener('resize', resizeLabCanvas);

  let mouseX = -1000, mouseY = -1000;
  labCanvas.addEventListener('mousemove', (e) => {
    const rect = labCanvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  labCanvas.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  const speedInput = document.getElementById('particle-speed');
  const countInput = document.getElementById('particle-count');
  const colorSelect = document.getElementById('particle-color');
  const resetLabBtn = document.getElementById('reset-lab-btn');

  function getParticleColor(theme, i) {
    if (theme === 'cyan') return 'rgba(6, 182, 212, 0.8)';
    if (theme === 'violet') return 'rgba(139, 92, 246, 0.8)';
    if (theme === 'emerald') return 'rgba(16, 185, 129, 0.8)';
    return `hsl(${(i * 15) % 360}, 80%, 60%)`;
  }

  function initLabParticles() {
    labParticles = [];
    const count = parseInt(countInput.value);
    for (let i = 0; i < count; i++) {
      labParticles.push({
        x: Math.random() * labCanvas.width,
        y: Math.random() * labCanvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 2
      });
    }
  }
  initLabParticles();

  countInput.addEventListener('input', initLabParticles);
  resetLabBtn.addEventListener('click', initLabParticles);

  function animateLabCanvas() {
    labCtx.fillStyle = 'rgba(5, 8, 17, 0.2)';
    labCtx.fillRect(0, 0, labCanvas.width, labCanvas.height);

    const mult = parseFloat(speedInput.value) / 3;
    const colorTheme = colorSelect.value;

    labParticles.forEach((p, index) => {
      p.x += p.vx * mult;
      p.y += p.vy * mult;

      if (p.x < 0 || p.x > labCanvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > labCanvas.height) p.vy *= -1;

      // Mouse attraction
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.x += (dx / dist) * 2;
        p.y += (dy / dist) * 2;
      }

      labCtx.beginPath();
      labCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      labCtx.fillStyle = getParticleColor(colorTheme, index);
      labCtx.shadowBlur = 8;
      labCtx.shadowColor = getParticleColor(colorTheme, index);
      labCtx.fill();
    });

    requestAnimationFrame(animateLabCanvas);
  }
  animateLabCanvas();

  // --- INTERACTIVE CLI TERMINAL DRAWER ---
  const terminalDrawer = document.getElementById('terminal-drawer');
  const terminalTrigger = document.getElementById('terminal-trigger');
  const terminalClose = document.getElementById('terminal-close');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  terminalTrigger.addEventListener('click', () => {
    terminalDrawer.classList.toggle('open');
    if (terminalDrawer.classList.contains('open')) {
      terminalInput.focus();
    }
  });

  terminalClose.addEventListener('click', () => {
    terminalDrawer.classList.remove('open');
  });

  const COMMANDS = {
    help: 'Available commands: skills, projects, education, certs, objective, contact, clear, date',
    skills: 'Technical Skills: Python, Java (Basics), HTML, CSS, Basic SQL, Git & GitHub, VS Code, Eclipse IDE, GitHub Copilot, Power BI, REST API.',
    projects: 'Projects: 1. AI-Based Video Detection System (Computer Vision) | 2. AI-Based Role Optimized Portfolio & Skill Gap Guidance System (NLP).',
    education: 'B.E. AI & ML (2024-2027) Velalar College of Eng. & Tech (CGPA 7.2) | HSC: 69.9% | SSLC: Pass',
    certs: '🏆 1st Prize Prompt Event | 🥈 2nd Prize Ideathon | 📜 Power BI Course | 📜 REST API Course',
    objective: 'Career Objective: Seeking an entry-level Software Engineer position where I can apply Python, Java, HTML, CSS, and AI to build efficient software solutions.',
    contact: 'Email: giridharraja98181@gmail.com | Phone: +91 9586333365 | Location: Erode | GitHub: github.com/GIRIDHARRAJA',
    date: () => new Date().toUTCString()
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.value.trim().toLowerCase();
      terminalInput.value = '';
      if (!cmd) return;

      appendTermLine(`giridhar@ai-workstation:~$ ${cmd}`, 'cmd');

      if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
        return;
      }

      if (COMMANDS[cmd]) {
        const res = typeof COMMANDS[cmd] === 'function' ? COMMANDS[cmd]() : COMMANDS[cmd];
        appendTermLine(res, 'out');
      } else {
        appendTermLine(`bash: command not found: '${cmd}'. Type 'help' for available commands.`, 'out');
      }

      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });

  function appendTermLine(text, type) {
    const line = document.createElement('div');
    line.className = `term-line ${type}`;
    line.textContent = text;
    terminalOutput.appendChild(line);
  }

  // --- CONTACT FORM SUBMISSION ---
  const contactForm = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text').textContent;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    showToast(`Thank you, ${name}! Your message has been sent to Giridharraja T.`, 'success');
    contactForm.reset();
  });

  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText).then(() => {
      showToast('Giridharraja\'s email address copied to clipboard!', 'info');
    });
  });

  // --- TOAST NOTIFICATIONS ---
  const toastContainer = document.getElementById('toast-container');
  function showToast(msg, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${msg}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- LIVE FOOTER CLOCK ---
  const liveClock = document.getElementById('live-clock');
  function updateClock() {
    const now = new Date();
    liveClock.innerHTML = `<i class="fa-regular fa-clock"></i> ${now.toUTCString().split(' ')[4]} UTC`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // --- BACK TO TOP ---
  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
