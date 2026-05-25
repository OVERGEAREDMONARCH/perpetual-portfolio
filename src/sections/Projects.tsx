export default function Projects() {
  const projects = [
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
  ]

  return (
    <div className="wrap" id="projects">
      <p className="sec-label reveal">03 — projects</p>
      <h2 className="sec-title reveal"><strong>Selected</strong> <em>work.</em></h2>

      <div className="proj-grid">
        {projects.map((p, i) => (
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
              {p.tags.map(([c, label]) => (
                <span key={label} className={`t t-${c}`}>{label}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
