import { useCursorDot } from "./hooks/useCursorDot";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useCursorDot();
  useScrollReveal();

  return (
    <>
      <div className="cursor-dot" id="cursor-dot" />

      <nav>
        <a className="nav-logo" href="#hero">
          Perpetual<span>.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact-sec" className="nav-cta">Contact</a></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="geo-ring" />
        <div className="geo-ring" />
        <div className="geo-ring" />
        <div className="geo-line" />
        <div className="geo-line" />
        <div className="geo-dot-grid" id="dot-grid" />

        <div className="hero-content">
          <div>
            <div className="hero-eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Software Developer</span>
            </div>
            <h1 className="hero-name">
              <strong>Hipekwen-Odidika</strong>
              <em>Perpetual U.</em>
            </h1>
          </div>

          <div className="hero-right-col">
            <p className="hero-tagline">
              I write software that solves problems people actually have.
            </p>
            <p className="hero-desc">
              Developer, student, builder. I'm drawn to the full stack — from designing clean APIs to crafting interfaces that feel right. Precision in code, thoughtfulness in design.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-teal">View Work ↗</a>
              <a href="#contact-sec" className="btn-wire">Let's Talk</a>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-status">
            <div className="status-dot" />
            <span>Available for opportunities</span>
          </div>
          <div className="hero-scroll-hint">scroll to explore</div>
        </div>
      </section>

      <div className="band" />

      <div className="wrap" id="about">
        <div className="about-layout">
          <div className="reveal">
            <p className="sec-label">01 — about</p>
            <h2 className="sec-title">
              <strong>Code</strong> meets<br />
              <em>intention.</em>
            </h2>
            <div className="about-prose">
              <p>
                I'm <strong>Hipekwen-Odidika Perpetual</strong> — a Software Developer who believes the gap between a working program and a well-made one is where craftsmanship lives. I don't just write code that runs; I write code that holds up.
              </p>
              <p className="pull">
                "Good software is invisible — it just works, exactly when it should."
              </p>
              <p>
                Currently sharpening my skills in <strong>full-stack development</strong> — building backends that handle real load, frontends that feel intuitive, and the connective tissue between them. I study every system I touch, because understanding the why makes the what cleaner.
              </p>
              <p>
                Outside of code: curious about system design, interested in building tools that open access, and always looking for the next hard problem worth solving.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="badge-stack">
              {[
                ["Degree Programme", "Software Dev"],
                ["Focus Area", "Full Stack"],
                ["Status", "Open to Work"],
                ["Works best", "In the details"],
                ["Learning mode", "Always on"],
              ].map(([n, v]) => (
                <div className="badge-item" key={n}>
                  <span className="badge-name">{n}</span>
                  <span className="badge-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="band" />

      <div className="wrap" id="skills">
        <p className="sec-label reveal">02 — skills</p>
        <h2 className="sec-title reveal"><strong>The stack</strong> <em>I work in.</em></h2>

        <div className="skills-mosaic reveal" style={{ transitionDelay: "0.1s" }}>
          <div className="sk sk-featured">
            <div className="sk-num">01</div>
            <div className="sk-name">Full-Stack Web Development</div>
            <div className="sk-tags" style={{ flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                <span className="t t-dark">React</span>
                <span className="t t-dark">Node.js</span>
                <span className="t t-dark">Express</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                <span className="t t-dark">REST APIs</span>
                <span className="t t-dark">TypeScript</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                <span className="t t-dark">HTML/CSS</span>
                <span className="t t-dark">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="sk">
            <div className="sk-num">02</div>
            <div className="sk-name">Languages</div>
            <div className="sk-tags">
              <span className="t t-light">Python</span>
              <span className="t t-light">JavaScript</span>
              <span className="t t-sand">Java</span>
              <span className="t t-sand">C</span>
            </div>
          </div>

          <div className="sk">
            <div className="sk-num">03</div>
            <div className="sk-name">Databases</div>
            <div className="sk-tags">
              <span className="t t-light">MySQL</span>
              <span className="t t-light">PostgreSQL</span>
              <span className="t t-sand">MongoDB</span>
            </div>
          </div>

          <div className="sk">
            <div className="sk-num">04</div>
            <div className="sk-name">CS Foundations</div>
            <div className="sk-tags">
              <span className="t t-sand">OOP</span>
              <span className="t t-sand">Data Structures</span>
              <span className="t t-light">Algorithms</span>
              <span className="t t-sand">UML</span>
            </div>
          </div>

          <div className="sk">
            <div className="sk-num">05</div>
            <div className="sk-name">Dev Tools</div>
            <div className="sk-tags">
              <span className="t t-light">Git</span>
              <span className="t t-sand">GitHub</span>
              <span className="t t-sand">Linux</span>
              <span className="t t-gold">VS Code</span>
            </div>
          </div>
        </div>
      </div>

      <div className="band" />

      <div className="wrap" id="projects">
        <p className="sec-label reveal">03 — projects</p>
        <h2 className="sec-title reveal"><strong>Selected</strong> <em>work.</em></h2>

        <div className="proj-grid">
          {[
            {
              n: "01",
              t: "Health Appointment Tracker",
              d: "Web app for managing medical appointments, medication schedules, and health records. Patient-facing dashboard with a clean, accessible UI and a RESTful backend.",
              tags: [["light", "React"], ["light", "Node.js"], ["sand", "MySQL"], ["sand", "REST API"]],
            },
            {
              n: "02",
              t: "Dev Notes — CLI Tool",
              d: "Terminal-based note-taking and snippet manager for developers. Tag-based organisation, fuzzy search, and export support. Built to stay out of the way and just work.",
              tags: [["light", "Python"], ["sand", "CLI"], ["sand", "SQLite"]],
            },
            {
              n: "03",
              t: "Budget Tracker Web App",
              d: "Personal finance dashboard for tracking income, spending categories, and monthly budgets. Data visualisation with charts, CSV import, and recurring transaction support.",
              tags: [["light", "JavaScript"], ["light", "Express"], ["sand", "PostgreSQL"], ["sand", "Chart.js"]],
            },
            {
              n: "04",
              t: "Student Portal System",
              d: "Coursework project: multi-role student portal with timetables, module resources, and grade views. Designed with full UML suite before a single line of code was written.",
              tags: [["light", "Java"], ["sand", "UML"], ["sand", "MySQL"], ["light", "OOP"]],
            },
          ].map((p, i) => (
            <a
              key={p.n}
              href="#"
              className="proj-card reveal"
              style={{ transitionDelay: `${0.05 + i * 0.05}s` }}
            >
              <div className="proj-top">
                <div className="proj-num">{p.n}</div>
                <span className="proj-arrow">↗</span>
              </div>
              <div className="proj-title">{p.t}</div>
              <div className="proj-desc">{p.d}</div>
              <div className="proj-stack">
                {p.tags.map(([k, label]) => (
                  <span key={label} className={`t t-${k}`}>{label}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div id="exp-bg">
        <div className="exp-wrap" id="experience">
          <p className="sec-label reveal">04 — experience</p>
          <h2 className="sec-title reveal"><strong>Journey</strong> <em>so far.</em></h2>

          <div className="timeline-list">
            {[
              {
                date: "2024 — Now",
                type: "Education",
                role: "Software Development Student",
                org: "University — Software Engineering Programme",
                desc: "Studying software design, algorithms, OOP, web development, and databases. Applying every concept in personal projects before the coursework deadline arrives.",
              },
              {
                date: "2024 — Now",
                type: "Projects",
                role: "Independent Project Developer",
                org: "Self-directed",
                desc: "Building full-stack projects from scratch — scoping, designing, building, deploying. Each one teaches something the lecture theatre doesn't.",
              },
              {
                date: "Ongoing",
                type: "Learning",
                role: "Continuous Learning",
                org: "Courses, Docs & Community",
                desc: "Supplementing formal study with freeCodeCamp, LeetCode, and reading engineering blogs. The degree teaches the what; personal study teaches the why and how at scale.",
              },
              {
                date: "Open",
                type: "Next Step",
                role: "Internship or Junior Developer Role",
                org: "— Looking for the right fit —",
                desc: "Ready to contribute, learn fast, and grow inside a real engineering team. Bring a problem — I'll bring the work ethic and the curiosity to figure it out.",
              },
            ].map((it, i) => (
              <div className="tl-item reveal" key={it.role} style={{ transitionDelay: `${0.05 + i * 0.05}s` }}>
                <div className="tl-left">
                  <div className="tl-date">{it.date}</div>
                  <span className="tl-type">{it.type}</span>
                </div>
                <div className="tl-line" />
                <div className="tl-right">
                  <div className="tl-role">{it.role}</div>
                  <div className="tl-org">{it.org}</div>
                  <div className="tl-desc">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact-sec">
        <div className="contact-layout">
          <div className="reveal">
            <p className="sec-label">05 — contact</p>
            <h2 className="sec-title">
              <strong>Start a</strong><br />
              <em>conversation.</em>
            </h2>
            <p className="contact-blurb">
              Whether you have a role, a project, or just want to connect — I'm always glad to hear from people building interesting things. My inbox is never too full for a good conversation.
            </p>
            <div className="contact-btns">
              <a href="mailto:hello@example.com" className="btn-deep">Email Me ↗</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-out">GitHub</a>
            </div>
          </div>

          <div className="contact-right reveal" style={{ transitionDelay: "0.15s" }}>
            <a href="mailto:hello@example.com" className="contact-link-row">
              <span className="cl-name">Email</span>
              <span className="cl-handle">hello@example.com</span>
              <span className="cl-arrow">↗</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link-row">
              <span className="cl-name">GitHub</span>
              <span className="cl-handle">github.com/perpetual</span>
              <span className="cl-arrow">↗</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link-row">
              <span className="cl-name">LinkedIn</span>
              <span className="cl-handle">linkedin.com/in/perpetual</span>
              <span className="cl-arrow">↗</span>
            </a>
            <a href="#" className="contact-link-row">
              <span className="cl-name">CV / Résumé</span>
              <span className="cl-handle">Download PDF</span>
              <span className="cl-arrow">↓</span>
            </a>
          </div>
        </div>
      </div>

      <footer>
        <span>© 2026 Hipekwen-Odidika Perpetual U.</span>
        <span>Software Developer · Built with care</span>
      </footer>
    </>
  );
}
