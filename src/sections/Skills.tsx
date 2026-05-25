export default function Skills() {
  return (
    <div className="wrap" id="skills">
      <p className="sec-label reveal">02 — skills</p>
      <h2 className="sec-title reveal"><strong>The stack</strong> <em>I work in.</em></h2>

      <div className="skills-mosaic reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="sk sk-featured">
          <div className="sk-num">01</div>
          <div className="sk-name">Full-Stack Web Development</div>
          <div className="sk-tags" style={{ flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              <span className="t t-dark">React</span>
              <span className="t t-dark">Node.js</span>
              <span className="t t-dark">Express</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              <span className="t t-dark">REST APIs</span>
              <span className="t t-dark">TypeScript</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
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
  )
}
