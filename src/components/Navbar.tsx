export default function Navbar() {
  return (
    <nav>
      <a className="nav-logo" href="#">PPP</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a className="nav-resume" href="/Pothan_CV.pdf" download="Pothan_Prathap_Puppala_CV.pdf">↓ Resume</a>
    </nav>
  );
}
