import { useEffect, useState } from 'react'
import selaPhoto from './assets/member/sela.png'
import sethPhoto from './assets/member/seth.png'
import nhaPhoto from './assets/member/nha.png'
import salPhoto from './assets/member/sal.png'
import reachPhoto from './assets/member/reach.png'
import nizaPhoto from './assets/member/niza.png'
import enatPhoto from './assets/member/enat.gif'
import naroPhoto from './assets/member/naro.png'
import './App.css'

const members = [
  [nhaPhoto, 'Manh Puthipanha', 'Frontend Developer', 'Builds the screens and interactions people use every day.'],
  [sethPhoto, 'Rith Keoviseth', 'Backend Developer', 'Works on server-side features and application logic.'],
  [reachPhoto, 'Vang Yuthreach', 'Database Designer', 'Organizes data structures for reliable storage and access.'],
  [enatPhoto, 'Sokny Enat', 'DevOps', 'Supports deployment workflows and the systems behind releases.'],
  [naroPhoto, 'Yous Soknaro', 'UI/UX Designer', 'Shapes clear, accessible experiences around user needs.'],
]

const leaders = [
  {
    image: selaPhoto,
    name: 'Heng Chansela',
    role: 'Founder',
    focus: 'Vision & project direction',
    bio: 'Guides Amnot’s direction and keeps the team focused on building useful digital products.',
  },
  {
    image: salPhoto,
    name: 'Touch Suvisal',
    role: 'Team Leader',
    focus: 'Team coordination',
    bio: 'Coordinates the team’s work and helps turn project goals into clear next steps.',
  },
  {
    image: nizaPhoto,
    name: 'Sopheak Niza',
    role: 'Co-Leader',
    focus: 'Web development',
    bio: 'Supports team planning and contributes web development experience to our projects.',
  },
]

const technologies = [
  ['languages', 'html5/html5-original.svg', 'HTML5'],
  ['languages', 'css3/css3-original.svg', 'CSS3'],
  ['languages', 'javascript/javascript-original.svg', 'JavaScript'],
  ['languages', 'java/java-original.svg', 'Java'],
  ['languages', 'php/php-original.svg', 'PHP'],
  ['languages', 'csharp/csharp-original.svg', 'C#'],
  ['framework', 'react/react-original.svg', 'React'],
  ['framework', 'nodejs/nodejs-original.svg', 'Node.js'],
  ['framework', 'spring/spring-original.svg', 'Spring Boot'],
  ['framework', 'bootstrap/bootstrap-original.svg', 'Bootstrap'],
  ['database', 'mysql/mysql-original.svg', 'MySQL'],
  ['database', 'postgresql/postgresql-original.svg', 'PostgreSQL'],
  ['database', 'oracle/oracle-original.svg', 'Oracle'],
  ['database', 'microsoftsqlserver/microsoftsqlserver-original.svg', 'SQL Server'],
  ['mobile', 'flutter/flutter-original.svg', 'Flutter'],
  ['mobile', 'kotlin/kotlin-original.svg', 'Kotlin'],
]

function ImageWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false)
  const fallback = alt
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (failed || !src) {
    return (
      <div className={`portrait-fallback ${className || ''}`} role="img" aria-label={alt}>
        <span>{fallback}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(event) => {
        event.currentTarget.onerror = null
        setFailed(true)
      }}
    />
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [category, setCategory] = useState('all')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Amnot home" onClick={closeMenu}>
            <span className="brand-mark"><img src="/logo.png" alt="" /></span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#team" onClick={closeMenu}>Team</a></li>
            <li><a href="#expertise" onClick={closeMenu}>Expertise</a></li>
            <li><a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Creative technology team</div>
              <h1>Ideas into <span>impactful</span> digital products.</h1>
              <p className="hero-copy">
                We are Amnot — a multidisciplinary team crafting elegant websites,
                reliable systems, and memorable digital experiences.
              </p>
              <div className="hero-actions">
                <a className="button" href="#team">Meet the team <span>→</span></a>
                <a className="button secondary" href="#services">Explore our work</a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orb" />
              <div className="logo-panel"><img src="/logo.png" alt="" /></div>
              <div className="floating-card">
                <div className="avatar-stack">
                  <ImageWithFallback src={selaPhoto} alt="Heng Chansela" />
                  <ImageWithFallback src={sethPhoto} alt="Rith Keoviseth" />
                  <ImageWithFallback src={nhaPhoto} alt="Manh Puthipanha" />
                </div>
                <div><strong>8 minds</strong><span>One vision</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="team-heading services-heading">
              <div>
                <p className="team-kicker">What we do</p>
                <h2>Built with purpose,<br /><span>designed for people.</span></h2>
                <div className="services-tags" aria-label="Our process">
                  <span>Strategy</span>
                  <span>Design</span>
                  <span>Development</span>
                </div>
              </div>
              <div className="team-heading-copy">
                <span>OUR SERVICES</span>
                <p>From first sketch to final deployment, we turn complex challenges into clear, useful solutions.</p>
              </div>
            </div>
            <div className="service-grid">
              <article className="service-card">
                <span className="service-icon" aria-hidden="true">&lt;/&gt;</span>
                <p className="service-label">Build</p>
                <h3>Web Development</h3>
                <p>Fast, accessible websites and applications built for real-world performance.</p>
                <span className="service-detail">Frontend · Backend · Responsive design</span>
              </article>
              <article className="service-card">
                <span className="service-icon service-icon-design" aria-hidden="true">✳</span>
                <p className="service-label">Design</p>
                <h3>Product &amp; UI/UX</h3>
                <p>Human-centered interfaces that make every interaction feel simple and intentional.</p>
                <span className="service-detail">Research · User flows · Interface design</span>
              </article>
              <article className="service-card">
                <span className="service-icon service-icon-data" aria-hidden="true">⌘</span>
                <p className="service-label">Engineer</p>
                <h3>Systems &amp; Data</h3>
                <p>Scalable architecture, database design, and systems engineering for lasting growth.</p>
                <span className="service-detail">Databases · APIs · Deployment</span>
              </article>
            </div>
          </div>
        </section>

        <section className="team" id="team">
          <div className="container">
            <div className="team-heading">
              <div>
                <p className="team-kicker">Our people</p>
                <h2>Built by people,<br /><span>powered by purpose.</span></h2>
              </div>
              <div className="team-heading-copy">
                <span>01 — TEAM</span>
                <p>A focused team of designers, developers, analysts, and builders creating thoughtful digital experiences.</p>
              </div>
            </div>
            <div className="leadership-grid" aria-label="Team leadership">
              {leaders.map((leader) => (
                <article className="leader-card" key={leader.name}>
                  <div className="leader-image">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                    />
                  </div>
                  <div className="leader-info">
                    <div>
                      <p>{leader.role}</p>
                      <h3>{leader.name}</h3>
                      <span className="leader-focus">{leader.focus}</span>
                      <p className="leader-bio">{leader.bio}</p>
                    </div>
                    <span className="leader-arrow" aria-hidden="true">↗</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="crew-heading">
              <p>More of the crew</p>
              <span />
            </div>
            <div className="team-grid">
              {members.map(([image, name, role, bio]) => (
                <article className="member" key={name}>
                  <div className="member-photo">
                    <ImageWithFallback src={image} alt={name} />
                  </div>
                  <div className="member-info">
                    <h3>{name}</h3>
                    <p>{role}</p>
                    <span>{bio}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="expertise" id="expertise">
          <div className="container">
            <div className="expertise-heading">
              <div>
                <p className="expertise-kicker">Our toolkit</p>
                <h2>Tools to make<br /><span>ideas real.</span></h2>
              </div>
              <p className="expertise-intro">
                We choose practical, proven technologies to design, build, and support digital products.
              </p>
            </div>
            <div className="filters" aria-label="Filter technologies">
              {['all', 'languages', 'framework', 'database', 'mobile'].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`filter${category === item ? ' active' : ''}`}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item === 'all' ? 'All' : item[0].toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <div className="tech-grid" key={category}>
              {technologies
                .filter(([techCategory]) => category === 'all' || category === techCategory)
                .map(([techCategory, icon, name], index) => (
                <article
                  className="tech"
                  key={name}
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <div className="tech-icon">
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} alt="" />
                  </div>
                  <div className="tech-copy">
                    <h3>{name}</h3>
                    <span>{techCategory}</span>
                  </div>
                  <span className="tech-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-cta">
            <div>
              <span>HAVE A PROJECT IN MIND?</span>
              <h2>Let&apos;s make something meaningful.</h2>
            </div>
            <a href="mailto:hengchansela168@gmail.com">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-brand"><img src="/logo.png" alt="" /><span>Amnot អំណត់</span></div>
              <p>Thoughtful technology, made by a team that cares about the details.</p>
            </div>
            <div className="footer-links">
              <h3>Explore</h3>
              <a href="#services">Services</a><a href="#team">Our team</a><a href="#expertise">Expertise</a>
            </div>
            <div className="footer-contact">
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
  )
}

export default App
