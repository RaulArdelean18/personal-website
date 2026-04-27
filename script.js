const data = {
  meta: {
    title: "Raul Ardelean",
    description: "CS student targeting Software Engineering and Low-Latency Systems."
  },
  nav: [
    { label: "Home",     href: "#home" },
    { label: "Journey",  href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Skills",   href: "#skills" },
    { label: "Contact",  href: "#contact" }
  ],
  hero: {
    eyebrow: "B.Sc. Computer Science · Babeș-Bolyai University",
    name: "Raul Ardelean",
    summary: "CS student at UBB and algorithmic problem setter targeting Low-Latency Software Engineering and Software Engineering.",
    targets: ["Low-Latency Systems", "Software Engineering"],
    ctas: [
      { label: "Say Hello",    href: "mailto:raulardelean10@gmail.com", primary: true },
      { label: "Open Resume",  href: "./Raul-Ardelean-CV.pdf",          primary: false }
    ],
    socials: [
      { label: "GitHub",   href: "https://github.com/RaulArdelean18" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/raul-ardelean/" }
    ]
  },
  journey: [
    {
      year: "2025 – now",
      type: "edu",
      typeLabel: "Education",
      title: "Babeș-Bolyai University",
      sub: "B.Sc. Computer Science · Cluj-Napoca",
      points: [
        "Honourable Mention – RCPC",
        "11th in Cluj-Napoca & 61st globally — 41st Cloudflight Coding Contest (CCC)",
        "Scientific Committee – Romanian National Olympiad in Informatics",
        "Scientific Committee – International Informatics Olympiad in Teams (IIOT)",
        "Scientific Committee – Grigore Moisil Inter-County Mathematics and Informatics Contest",
        "Competitive Programming Mentor at Centrul de Excelenta Maramures"
      ]
    },
    {
      year: "2021 – 2025",
      type: "edu",
      typeLabel: "Education",
      title: "Vasile Lucaciu National College",
      sub: "Mathematics & Computer Science · Baia Mare",
      points: [
        "Built a strong competitive programming background",
        "Qualified twice for the National Olympiad in Informatics",
        "National stage – AcadNet Software Interoperability",
        "Honourable Mention – Grigore Moisil Inter-County Mathematics and Informatics Contest"
      ]
    }
  ],
  projects: [
    {
      year: "Mar 2026",
      title: "Polen — ONI 9th Grade Problem",
      desc: "Created an official problem used in the 9th grade contest set at the Romanian National Olympiad in Informatics. Built the complete contest package: C++ official solution, statements, editorial, test generator, validators, and subtask-based test design. Focused on algorithmic correctness, edge-case coverage, and performance-aware input generation.",
      stack: ["C++","Bash/WSL Automation", "Problem Design", "Test Generation", "Validators", "IOI-style subtasks"],
      links: [{ label: "GitHub", href: "https://github.com/RaulArdelean18/ONI" }]
    },
    {
      year: "Feb 2026 - Apr 2026",
      title: "Municipal Internal Support Portal",
      desc: "Hackathon project built with a teammate: internal AI support portal featuring ticket management, embedded document search, and a conversational assistant. Demonstrates rapid product delivery and full-stack implementation skills.",
      stack: ["React 19", "Supabase", "Flowise", "Google Gemini", "Zustand", "Tailwind CSS", "Streamlit", "Vitest"],
      links: [{ label: "GitHub", href: "https://github.com/Grupare-fractionala/Hackaton" }]
    }
  ],
  skills: [
    "C/C++",
    "Python",
    "SQL",
    "Algorithms",
    "Data Structures",
    "Low-Latency Systems",
    "Complexity Analysis",
    "Graph Theory",
    "Competitive Programming",
    "Test Generation"
  ],
  contact: [
    { label: "Email",     href: "mailto:raulardelean10@gmail.com" },
    { label: "GitHub",    href: "https://github.com/RaulArdelean18" },
    { label: "LinkedIn",  href: "https://www.linkedin.com/in/raul-ardelean/" },
    { label: "Instagram", href: "https://www.instagram.com/_raul_ardelean/" }
  ]
};

// ── SVG icons ──
const icons = {
  github: `<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.527 2.865 8.367 6.839 9.722.5.096.682-.221.682-.492 0-.244-.009-.89-.014-1.747-2.782.616-3.369-1.373-3.369-1.373-.455-1.183-1.11-1.498-1.11-1.498-.908-.635.069-.623.069-.623 1.004.072 1.532 1.054 1.532 1.054.893 1.568 2.341 1.115 2.91.853.091-.664.349-1.116.635-1.373-2.221-.259-4.555-1.137-4.555-5.061 0-1.118.389-2.032 1.029-2.748-.103-.26-.446-1.302.098-2.714 0 0 .839-.275 2.75 1.049A9.303 9.303 0 0 1 12 6.837c.85.004 1.706.118 2.505.346 1.91-1.324 2.748-1.049 2.748-1.049.546 1.412.203 2.454.1 2.714.641.716 1.028 1.63 1.028 2.748 0 3.935-2.338 4.799-4.566 5.053.359.318.678.946.678 1.907 0 1.377-.012 2.487-.012 2.825 0 .273.18.593.688.491C19.138 20.612 22 16.774 22 12.248 22 6.589 17.523 2 12 2Z" fill="currentColor"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.5 3.73 3.5 4.69c0 .94.65 1.69 1.71 1.69h.02c1.1 0 1.77-.75 1.77-1.69C6.98 3.73 6.33 3 5.25 3ZM20.5 13.06c0-3.37-1.77-4.94-4.13-4.94-1.9 0-2.75 1.07-3.23 1.82V8.5H9.76c.04.95 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.69.12-.94.27-.69.9-1.4 1.96-1.4 1.38 0 1.93 1.07 1.93 2.65V20h3.35v-6.94Z" fill="currentColor"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.5a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" fill="currentColor"/></svg>`,
  email: `<svg viewBox="0 0 24 24"><path d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Zm0 1.5v.19l8 5.34 8-5.34V8H4Zm16 8v-6.66l-7.58 5.06a.75.75 0 0 1-.84 0L4 9.34V16h16Z" fill="currentColor"/></svg>`,
  resume: `<svg viewBox="0 0 24 24"><path d="M7 2.75h7.25c.2 0 .39.08.53.22l4.25 4.25c.14.14.22.33.22.53V20A1.25 1.25 0 0 1 18 21.25H7A1.25 1.25 0 0 1 5.75 20V4A1.25 1.25 0 0 1 7 2.75Zm7 1.81V8h3.44L14 4.56ZM7.25 4.25v15.5h10.5V9.5H13.5a1 1 0 0 1-1-1V4.25H7.25Zm2.5 8.25h5.5V14h-5.5v-1.5Zm0 3h5.5V17h-5.5v-1.5Zm0-6h3V11h-3V9.5Z" fill="currentColor"/></svg>`
};

const getIcon = (label) => icons[label.toLowerCase()] || "";
const newTab = (href) => /^https?:\/\//.test(href) || href.endsWith(".pdf") ? ' target="_blank" rel="noreferrer"' : "";
const initials = (name) => name.split(" ").filter(Boolean).slice(0,2).map(w => w[0]).join("").toUpperCase();

const renderTimeline = () => {
  document.getElementById("timeline").innerHTML = data.journey
    .map(({ year, type, typeLabel, title, sub, points }) => `
      <div class="timeline-entry">
        <div class="timeline-top">
          <span class="timeline-year">${year}</span>
          <span class="timeline-type ${type}">${typeLabel}</span>
        </div>
        <h3 class="timeline-title">${title}</h3>
        <p class="timeline-sub">${sub}</p>
        <ul class="timeline-points">
          ${points.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    `).join("");
};

// ── Render ──
document.title = data.meta.title;
document.querySelector('meta[name="description"]')?.setAttribute("content", data.meta.description);

// Brand
document.getElementById("brand").textContent = "Raul";

// Nav
document.getElementById("site-nav").innerHTML = data.nav
  .map(({ label, href }) => `<a href="${href}">${label}</a>`).join("");

// Hero
document.getElementById("hero-eyebrow").textContent = data.hero.eyebrow;
document.getElementById("hero-name").textContent = data.hero.name;
document.getElementById("hero-summary").textContent = data.hero.summary;

document.getElementById("hero-targets").innerHTML = data.hero.targets
  .map(t => `<span class="target-pill">${t}</span>`).join("");

document.getElementById("hero-actions").innerHTML = data.hero.ctas
  .map(({ label, href, primary }) =>
    `<a class="btn${primary ? " btn-primary" : ""}" href="${href}"${newTab(href)}>${label}</a>`
  ).join("");

document.getElementById("hero-socials").innerHTML = data.hero.socials
  .map(({ label, href }) =>
    `<a class="social-link" href="${href}" aria-label="${label}" title="${label}"${newTab(href)}>${getIcon(label)}</a>`
  ).join("");

// Journey
renderTimeline();

// Projects
document.getElementById("projects-list").innerHTML = data.projects
  .map(({ year, title, desc, stack, links }) => `
    <div class="project-entry">
      <p class="project-year">${year}</p>
      <div class="project-body">
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${desc}</p>
        <div class="project-stack">${stack.map(s => `<span class="stack-tag">${s}</span>`).join("")}</div>
        <div class="project-links">${links.map(({ label, href }) => `<a class="project-link" href="${href}"${newTab(href)}>${label}</a>`).join("")}</div>
      </div>
    </div>
  `).join("");

// Skills
const skillTags = document.getElementById("skill-tags");
if (skillTags) {
  skillTags.innerHTML = data.skills
    .map((skill) => `<span class="skill-pill">${skill}</span>`)
    .join("");
}

// Contact
document.getElementById("contact-links").innerHTML = data.contact
  .map(({ label, href }) =>
    `<a class="contact-link" href="${href}"${newTab(href)}>${getIcon(label)} ${label}</a>`
  ).join("");

// Footer
document.getElementById("footer-name").textContent = data.hero.name;
document.getElementById("footer-summary").textContent = data.meta.description;
document.getElementById("footer-copy").textContent =
  `© ${new Date().getFullYear()} ${data.hero.name}. All rights reserved.`;

// Sticky header shadow + scroll-up
const header = document.getElementById("site-header");
const scrollupEl = document.getElementById("scrollup");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 4);
  scrollupEl.classList.toggle("show-scroll", y > 300);
}, { passive: true });
