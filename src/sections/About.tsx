export default function About() {
  return (
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
              Currently sharpening my skills in <strong>full-stack development</strong> — building backends that handle real load, frontends that feel intuitive, and the connective tissue between them.
            </p>
            <p>
              Outside of code: curious about system design, interested in building tools that open access, and always looking for the next hard problem worth solving.
            </p>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="badge-stack">
            {[
              ['Degree Programme', 'Software Dev'],
              ['Focus Area', 'Full Stack'],
              ['Status', 'Open to Work'],
              ['Works best', 'In the details'],
              ['Learning mode', 'Always on'],
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
  )
}
