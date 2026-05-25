export default function Nav() {
  return (
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
  )
}
