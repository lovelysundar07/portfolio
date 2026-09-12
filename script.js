/* =========================================================
   PROJECTS DATA
   ---------------------------------------------------------
   To add a new project, just copy one object below and edit
   the fields. New cards appear automatically — no other code
   needs to change. Order in this array = order on the page.
========================================================= */
const projects = [
  {
    status: "Featured — Hackathon Winner",
    title: "Smart Tomato Crop Advisor",
    description:
      "An ML-powered advisory system for farmers: detects tomato leaf disease from a photo and recommends irrigation based on live weather data.",
    stack: ["Python", "Flask", "Machine Learning", "Python Libraries"],
    features: [
      "CNN image-classification model for leaf disease detection, ~91% validation accuracy",
      "Random Forest model generating a daily LOW / MEDIUM / HIGH irrigation recommendation",
      "Live weather integration for rainfall, humidity and temperature",
      "Bilingual (Tamil/English) Gemini-powered chatbot for farmer queries"
    ],
    demoUrl: "",          // left blank intentionally — not hosted yet
    codeUrl: "https://github.com/lovelysundar07"
  },
  {
    status: "Full-Stack · Deployed",
    title: "Packing List App",
    description:
      "A small full-stack travel packing-list app with user-facing frontend and a persistent database backend.",
    stack: ["React", "Spring Boot", "MongoDB Atlas", "Vercel", "Render"],
    features: [
      "React frontend deployed on Vercel",
      "Spring Boot REST API backend deployed on Render",
      "MongoDB Atlas for persistent cloud data storage"
    ],
    demoUrl: "https://packinglist-six.vercel.app/",
    codeUrl: "https://github.com/lovelysundar07/packinglist.git"
  },
  {
    status: "Frontend + Backend",
    title: "Hospital Management System",
    description:
      "A multi-page, role-based web application with separate portals for Patient, Doctor and Admin.",
    stack: ["React", "Spring Boot", "HTML", "CSS", "JavaScript"],
    features: [
      "Patient dashboard: medicines, dosage timings, treatment history, appointments",
      "Doctor portal: patient list, daily schedule, treatment records",
      "Admin panel: doctor assignment, duty scheduling, WhatsApp notifications via wa.me"
    ],
    demoUrl: "https://hospitalmanagement2006.netlify.app/",
    codeUrl: "https://github.com/lovelysundar07/hospital_management_fresh.git"
  }
];

/* =========================================================
   CERTIFICATIONS DATA
   ---------------------------------------------------------
   Same pattern as projects — copy an object below to add a
   new certificate or workshop.
========================================================= */
const certifications = [
  {
    type: "prize",
    icon: "🏆",
    title: "1st Prize — Web Crafters",
    event: "QMAZE-2K25, State Level Technical Symposium",
    meta: "Dept. of Computer Applications, Ayya Nadar Janaki Ammal College, Sivakasi · 4 Feb 2025"
  },
  {
    type: "prize",
    icon: "🏆",
    title: "1st Prize — Shape Craft",
    event: "QMAZE-2K26, State Level Technical Symposium",
    meta: "Dept. of Computer Applications, Ayya Nadar Janaki Ammal College, Sivakasi · 2 Mar 2026"
  },
  {
    type: "workshop",
    icon: "📜",
    title: "RPA with UiPath",
    event: "Workshop — Participation Certificate",
    meta: "Dept. of Information Technology, VHNSN College, Virudhunagar · 11 Dec 2024"
  },
  {
    type: "workshop",
    icon: "🤖",
    title: "Agentic AI and Prompt Engineering",
    event: "Workshop — Dept. of Information Technology, VHNSN College",
    meta: "Resource persons: Mr. Manikandan, CEO, W3 Digital Solution, Chennai & Mr. Ranganathan, CEO, Menthee Technologies, Chennai · 4 Jul 2026"
  }
];

/* =========================================================
   SKILLS DATA
========================================================= */
const DEVICON = (slug, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "HTML5", icon: DEVICON("html5") },
      { name: "CSS3", icon: DEVICON("css3") },
      { name: "JavaScript", icon: DEVICON("javascript") },
      { name: "Java", icon: DEVICON("java") },
      { name: "Python", icon: DEVICON("python") },
      { name: "C++", icon: DEVICON("cplusplus") },
      { name: "PHP", icon: DEVICON("php") }
    ]
  },
  {
    label: "Frameworks",
    items: [
      { name: "React JS", icon: DEVICON("react") },
      { name: "Spring Boot", icon: DEVICON("spring") },
      { name: "Flask", icon: DEVICON("flask") }
    ]
  },
  {
    label: "ML / DL & Automation",
    items: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "CNN" },
      { name: "Random Forest" },
      { name: "Python Libraries" },
      { name: "n8n" }
    ]
  },
  {
    label: "Database",
    items: [
      { name: "MongoDB", icon: DEVICON("mongodb") },
      { name: "MySQL", icon: DEVICON("mysql") }
    ]
  },
  {
    label: "Networking & Systems",
    items: [
      { name: "Networking" },
      { name: "Operating Systems" },
      { name: "Cisco Packet Tracer" }
    ]
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: DEVICON("git") },
      { name: "VS Code", icon: DEVICON("vscode") },
      { name: "Jupyter", icon: DEVICON("jupyter") },
      { name: "Google Colab" },
      { name: "Spyder" },
      { name: "MS Office" },
      { name: "Antigravity" },
      { name: "Claude" }
    ]
  }
];

/* =========================================================
   RENDER: SKILLS
========================================================= */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = skillGroups
    .map(
      (group) => `
      <div class="skill-group reveal">
        <h4>${group.label}</h4>
        <div class="skill-icons">
          ${group.items
            .map(
              (item) => `
              <span class="skill-icon">
                ${item.icon ? `<img src="${item.icon}" alt="" loading="lazy">` : ""}
                ${item.name}
              </span>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

/* =========================================================
   RENDER: PROJECTS
========================================================= */
function renderProjects() {
  const track = document.getElementById("projectsTrack");
  track.innerHTML = projects
    .map((p) => {
      const demoBtn = p.demoUrl
        ? `<a href="${p.demoUrl}" target="_blank" rel="noopener" class="btn btn-primary">Live Demo</a>`
        : `<span class="btn btn-disabled">Demo coming soon</span>`;
      const codeBtn = p.codeUrl
        ? `<a href="${p.codeUrl}" target="_blank" rel="noopener" class="btn btn-outline">Code</a>`
        : "";
      return `
      <article class="project-card reveal">
        <span class="project-status">${p.status}</span>
        <h3>${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-stack">
          ${p.stack.map((s) => `<span class="stack-tag">${s}</span>`).join("")}
        </div>
        <ul class="project-features">
          ${p.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <div class="project-actions">${demoBtn} ${codeBtn}</div>
      </article>`;
    })
    .join("");
}

/* =========================================================
   RENDER: CERTIFICATIONS
========================================================= */
function renderCertifications() {
  const grid = document.getElementById("certGrid");
  if (!grid) return;

  const groupHtml = (type, label) => {
    const items = certifications.filter((c) => c.type === type);
    if (!items.length) return "";
    return `
      <div class="cert-group">
        <h3 class="cert-group-title">${label}</h3>
        <div class="cert-group-grid">
          ${items
            .map(
              (c) => `
              <div class="cert-card reveal">
                <span class="cert-icon">${c.icon}</span>
                <h4>${c.title}</h4>
                <span class="cert-event">${c.event}</span>
                <p class="cert-meta">${c.meta}</p>
              </div>`
            )
            .join("")}
        </div>
      </div>`;
  };

  grid.innerHTML = groupHtml("prize", "Prizes") + groupHtml("workshop", "Workshops Attended");
}

/* =========================================================
   BACKGROUND ANIMATION — drifting particle network
   Subtle nodes-and-links animation echoing the ML / networking
   theme. Skips entirely if the user prefers reduced motion.
========================================================= */
function initBgAnimation() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const canvas = document.createElement("canvas");
  canvas.id = "bgCanvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let width, height, nodes;
  const LINK_DIST = 150;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(70, Math.floor((width * height) / 22000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(139,92,246,${0.14 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    nodes.forEach((n) => {
      ctx.fillStyle = "rgba(55,230,208,0.55)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  resize();
  window.addEventListener("resize", resize);
  step();
}

/* =========================================================
   SCROLL REVEAL
========================================================= */
function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el) => io.observe(el));
}

/* =========================================================
   MOBILE NAV
========================================================= */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* =========================================================
   TERMINAL TYPING EFFECT
========================================================= */
function initTerminal() {
  const roles = [
    "full-stack developer",
    "ML/DL learner",
    "networking enthusiast",
    "problem solver"
  ];
  const el = document.getElementById("termLine");
  if (!el) return;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}

/* =========================================================
   CONTACT FORM
========================================================= */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.action.includes("YOUR_FORM_ID")) {
      note.textContent =
        "Form isn't connected yet — set up a free Formspree endpoint and paste it into the form's action attribute (see README).";
      note.style.color = "#f5a623";
      return;
    }

    const submitBtn = form.querySelector(".form-submit");
    submitBtn.disabled = true;
    note.style.color = "";
    note.textContent = "Sending...";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        note.textContent = "Message sent — thanks for reaching out!";
        form.reset();
      } else {
        note.textContent = "Something went wrong. Please try emailing directly instead.";
      }
    } catch (err) {
      note.textContent = "Network error — please try emailing directly instead.";
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* =========================================================
   INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCertifications();
  initNav();
  initTerminal();
  initContactForm();
  initBgAnimation();
  initReveal();
});
