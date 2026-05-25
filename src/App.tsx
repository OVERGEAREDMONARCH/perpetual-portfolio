import CursorDot from "./components/CursorDot";
import Nav from "./components/Nav";
import { useCursorDot } from "./hooks/useCursorDot";
import { useScrollReveal } from "./hooks/useScrollReveal";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  useCursorDot();
  useScrollReveal();

  return (
    <>
      <CursorDot />
      <Nav />
      <Hero />

      <div className="band" />
      <About />
      <div className="band" />
      <Skills />
      <div className="band" />
      <Projects />

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
