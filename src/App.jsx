import { useEffect, useState } from "react";

const members = [
  ["sela.png", "Heng Chansela", "Founder / Project Leader"],
  ["seth.png", "Rith Keoviseth", "Team Leader / Manager"],
  ["nha.png", "Manh Puthipanha", "Frontend Developer"],
  ["ysal.gif", "Touch Suvisal", "Backend Developer"],
  ["reach.png", "Vang Yuthreach", "Database Designer"],
  ["vuttey.png", "Hak Vuttey", "System Analyst"],
  ["niza.png", "Sopheak Niza", "Web Developer"],
  ["yenat.gif", "Sokny Enat", "DevOps"],
  ["naro.png", "Yous Soknaro", "UI/UX Designer"],
  ["ysoon.gif", "Coming Soon", "New team member"],
];

const technologies = [
  ["languages", "html5/html5-original.svg", "HTML5"],
  ["languages", "css3/css3-original.svg", "CSS3"],
  ["languages", "javascript/javascript-original.svg", "JavaScript"],
  ["languages", "java/java-original.svg", "Java"],
  ["languages", "csharp/csharp-original.svg", "C#"],
  ["framework", "bootstrap/bootstrap-original.svg", "Bootstrap"],
  ["database", "mysql/mysql-original.svg", "MySQL"],
  ["database", "postgresql/postgresql-original.svg", "PostgreSQL"],
  ["database", "microsoftsqlserver/microsoftsqlserver-original.svg", "SQL Server"],
  ["mobile", "flutter/flutter-original.svg", "Flutter"],
  ["mobile", "kotlin/kotlin-original.svg", "Kotlin"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Amnot home" onClick={closeMenu}>
            <span className="brand-mark"><img src="/images/logo.png" alt="" /></span>
            <span>Amnot</span>
          </a>
          <button
            className="menu-button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#team" onClick={closeMenu}>Team</a></li>
            <li><a href="#expertise" onClick={closeMenu}>Expertise</a></li>
            <li><a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Creative technology team</div>
              <h1>Ideas into <span>impactful</span> digital products.</h1>
              <p className="hero-copy">We are Amnot — a multidisciplinary team crafting elegant websites, reliable systems, and memorable digital experiences.</p>
              <div className="hero-actions">
                <a className="button" href="#team">Meet the team <span>→</span></a>
                <a className="button secondary" href="#services">Explore our work</a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orb"></div>
              <div className="logo-panel"><img src="/images/logo.png" alt="" /></div>
              <div className="floating-card">
                <div className="avatar-stack">
                  <img src="/images/member/sela.png" alt="" />
                  <img src="/images/member/seth.png" alt="" />
                  <img src="/images/member/nha.png" alt="" />
                </div>
                <div><strong>10 minds</strong><span>One vision</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-heading">
              <h2>Built with purpose, designed for people.</h2>
              <p>From the first sketch to final deployment, we turn complex challenges into clear, useful solutions.</p>
            </div>
            <div className="service-grid">
              <article className="service-card"><div className="service-number">01</div><h3>Web Development</h3><p>Fast, accessible websites and applications built for real-world performance.</p></article>
              <article className="service-card"><div className="service-number">02</div><h3>Product &amp; UI/UX</h3><p>Human-centered interfaces that make every interaction feel simple and intentional.</p></article>
              <article className="service-card"><div className="service-number">03</div><h3>Systems &amp; Data</h3><p>Scalable architecture, database design, and systems engineering for lasting growth.</p></article>
            </div>
          </div>
        </section>

        <section className="team" id="team">
          <div className="container">
            <div className="section-heading">
              <h2>The people behind Amnot.</h2>
              <p>A focused team of designers, developers, analysts, and builders.</p>
            </div>
            <div className="team-grid">
              {members.map(([image, name, role]) => (
                <article className="member" key={name}>
                  <img src={`/images/member/${image}`} alt={name} />
                  <div className="member-info"><h3>{name}</h3><p>{role}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="expertise" id="expertise">
          <div className="container">
            <div className="section-heading">
              <h2>Technology we use.</h2>
              <p>Modern tools selected for the needs of every product, platform, and team.</p>
            </div>
            <div className="filters" aria-label="Filter technologies">
              {["all", "languages", "framework", "database", "mobile"].map((item) => (
                <button
                  key={item}
                  className={`filter${category === item ? " active" : ""}`}
                  onClick={() => setCategory(item)}
                >
                  {item === "all" ? "All" : item[0].toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <div className="tech-grid">
              {technologies.map(([techCategory, icon, name]) => (
                <article
                  className={`tech${category !== "all" && category !== techCategory ? " hidden" : ""}`}
                  key={name}
                >
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} alt="" />
                  <h3>{name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand"><img src="/images/logo.png" alt="" />Amnot អំណត់</div>
              <p>Thoughtful technology, made by a team that cares about the details.</p>
            </div>
            <div>
              <h3>Explore</h3>
              <a href="#services">Services</a><a href="#team">Our team</a><a href="#expertise">Expertise</a>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="mailto:hengchansela168@gmail.com">hengchansela168@gmail.com</a>
              <a href="tel:+85511779155">+855 117 791 55</a>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>
          <div className="footer-bottom">© 2026 Amnot អំណត់. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}

export default App;
