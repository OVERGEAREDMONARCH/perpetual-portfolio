export default function Hero() {
  return (
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
  )
}
