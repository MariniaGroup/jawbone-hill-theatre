import { useMemo, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Rahab Mitchell', href: '#director' },
  { label: 'Contact', href: '#contact' },
]

const galleryImages = [
  '/jawbone/IMG_1709.jpg',
  '/jawbone/IMG_1710.jpg',
  '/jawbone/IMG_20231215_190803759_MP.jpg',
  '/jawbone/IMG_20231215_193807936.jpg',
  '/jawbone/IMG_20231215_193813457_MP.jpg',
  '/jawbone/IMG_20231216_190827654.jpg',
  '/jawbone/IMG_20231216_19133196.jpg',
  '/jawbone/IMG_20231216_201749077.jpg',
  '/jawbone/IMG_20231216_201823858.jpg',
  '/jawbone/IMG_20231216_201923211_MP.jpg',
  '/jawbone/IMG_20231216_201925483_BURST000_COVER_TOP.jpg',
  '/jawbone/IMG_20231216_202157629.jpg',
  '/jawbone/IMG-5833.jpg',
  '/jawbone/IMG-5834.jpg',
  '/jawbone/IMG-5835.jpg',
  '/jawbone/IMG-5836.jpg',
  '/jawbone/IMG-5837.jpg',
  '/jawbone/IMG-5838.jpg',
  '/jawbone/IMG-5840.jpg',
  '/jawbone/IMG-5841.jpg',
  '/jawbone/IMG-5842.jpg',
  '/jawbone/IMG-5843.jpg',
  '/jawbone/IMG-5844.jpg',
  '/jawbone/IMG-5845.jpg',
]
const rahabImage = "/jawbone/Rahab_Mitchell.jpg";
function SiteImage({ src, alt, className = '', overlay = false }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className={`image-fallback ${className}`}>
        <p>Missing image</p>
        <span>{src}</span>
      </div>
    )
  }

  return (
    <div className={`site-image ${className}`}>
      <img src={src} alt={alt} onError={() => setErrored(true)} />
      {overlay ? <div className="image-overlay" /> : null}
    </div>
  )
}

function HeroVideo({ src, className = '' }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className={`image-fallback ${className}`}>
        <p>Missing video</p>
        <span>{src}</span>
      </div>
    )
  }

  return (
    <div className={`site-image ${className}`}>
      <video autoPlay muted loop playsInline onError={() => setErrored(true)}>
        <source src={src} type="video/mp4" />
      </video>
      <div className="image-overlay" />
    </div>
  )
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? 'section-heading center' : 'section-heading'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand-mark" onClick={() => setMenuOpen(false)}>
            <div className="brand-logo-wrap">
              <img
                src="/jawbone/Jawbone_Hill_Logo_New.png"
                alt="Jawbone Hill Theatre logo"
                className="brand-logo"
              />
            </div>
            <div>
              <div className="brand-title">Jawbone Hill Theatre</div>
              <div className="brand-subtitle">501(c)(3) Nonprofit Theatre Organization</div>
            </div>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta desktop-only" href="#contact">
            Book or Partner
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {menuOpen ? (
          <div className="mobile-nav">
            <div className="container mobile-nav-inner">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a className="header-cta" href="#contact" onClick={() => setMenuOpen(false)}>
                Book or Partner
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-pill">Official 501(c)(3) nonprofit theatre organization</div>
              <h1>
                Theatre that inspires,
                <span> educates, and connects.</span>
              </h1>
              <p>
                Jawbone Hill Theatre creates engaging live performances, community storytelling
                experiences, arts education, and library-based workshops that bring theatre to
                audiences of all ages.
              </p>

              <div className="hero-actions">
                <a href="#programs" className="button primary">
                  Explore Programs
                </a>
                <a href="#director" className="button secondary">
                  Meet Rahab Mitchell
                </a>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Live Performances</h3>
                  <p>Plays and productions that entertain, challenge, and bring audiences together.</p>
                </div>
                <div className="stat-card">
                  <h3>Arts Education</h3>
                  <p>Workshops that build confidence, teamwork, creativity, and expression.</p>
                </div>
                <div className="stat-card">
                  <h3>Community Programs</h3>
                  <p>Library and outreach experiences that expand access to the performing arts.</p>
                </div>
              </div>
            </div>

            <div className="hero-visual-wrap">
              <HeroVideo
                src="/jawbone/JHT_logo_sparkles.mp4"
                className="hero-banner"
              />
              <div className="hero-callout">
                <p className="callout-label">Based in Inglewood, California</p>
                <h3>Community-centered theatre for stage, story, and creative learning</h3>
                <p>
                  Jawbone Hill Theatre combines performance, education, and outreach to create a
                  vibrant creative home for audiences, students, and families.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-soft">
          <div className="container two-column-layout">
            <div>
              <SectionHeading
                eyebrow="About Jawbone Hill Theatre"
                title="A nonprofit theatre rooted in access, artistic excellence, and community growth."
                text="Jawbone Hill Theatre is a community-focused performing arts organization committed to making theatre affordable, inclusive, and enriching. Through performances, workshops, outreach, and community programs, the organization uses theatre as a catalyst for creativity, empowerment, and cultural connection."
              />

              <div className="stacked-cards">
                <article className="content-card">
                  <h3>Mission</h3>
                  <p>
                    Jawbone Hill Theatre is dedicated to enriching communities and inspiring
                    creativity through the transformative power of theatre arts by providing
                    high-quality performances, expanding access to theatre education, fostering
                    inclusion, and creating meaningful community engagement opportunities.
                  </p>
                </article>
                <article className="content-card">
                  <h3>Vision</h3>
                  <p>
                    Jawbone Hill Theatre envisions a world where theatre is a bridge to
                    understanding, creativity, and opportunity for all, while becoming a recognized
                    leader in arts accessibility, creative development, and theatrical excellence.
                  </p>
                </article>
              </div>
            </div>

            <SiteImage
              src="/jawbone/IMG_20231216_201823858.jpg"
              alt="Jawbone Hill Theatre community performance"
              className="feature-image tall"
            />
          </div>
        </section>

        <section id="programs" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Programs & Experiences"
              title="Performance, training, and storytelling pathways for the community."
              text="Jawbone Hill Theatre creates multiple points of entry into the arts, from mainstage productions to skills-based theatre education, puppet workshops, and digital cinema development."
              center
            />

            <div className="program-grid">
              <article className="program-card">
                <SiteImage src="/jawbone/IMG_20231216_19133196.jpg" alt="Mainstage productions" className="program-image" />
                <div className="program-copy">
                  <h3>Mainstage Productions</h3>
                  <p>
                    A diverse repertoire of plays and theatre pieces designed to entertain,
                    educate, and reflect a rich range of voices and perspectives.
                  </p>
                </div>
              </article>

              <article className="program-card">
                <SiteImage src="/jawbone/IMG-5842.jpg" alt="Theatre workshops" className="program-image" />
                <div className="program-copy">
                  <h3>Theatre Workshops</h3>
                  <p>
                    Acting, playwriting, puppet-making, and production experiences that build
                    creativity, public speaking, teamwork, and confidence.
                  </p>
                </div>
              </article>

              <article className="program-card">
                <SiteImage src="/jawbone/IMG_20231215_190803759_MP.jpg" alt="Storytelling and digital productions" className="program-image" />
                <div className="program-copy">
                  <h3>Storytelling & Digital Projects</h3>
                  <p>
                    Original stage works and community storytelling projects adapted and extended
                    for broader audiences and new creative opportunities.
                  </p>
                </div>
              </article>
            </div>

            <div className="mini-grid">
              <div className="mini-card">
                <h4>Public speaking</h4>
                <p>Strengthens voice, confidence, and communication both on stage and beyond.</p>
              </div>
              <div className="mini-card">
                <h4>Creative collaboration</h4>
                <p>Builds teamwork, listening, and problem-solving through ensemble work.</p>
              </div>
              <div className="mini-card">
                <h4>Community impact</h4>
                <p>Creates shared cultural experiences that bring people together through the arts.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section section-soft">
          <div className="container">
            <SectionHeading
              eyebrow="Gallery"
              title="Moments from the stage, rehearsal room, and community experience."
              text="This gallery points to your Camp Nelson production photos and community sock puppet workshop images so you can keep growing the site as new events are added."
              center
            />

            <div className="gallery-grid">
              {galleryImages.map((src, index) => (
                <SiteImage
                  key={`${src}-${index}`}
                  src={src}
                  alt={`Jawbone Hill Theatre gallery image ${index + 1}`}
                  className={index % 5 === 0 ? 'gallery-item gallery-item-wide' : 'gallery-item'}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="director" className="section">
          <div className="container two-column-layout reverse-mobile">
            <SiteImage
              src={rahabImage}
              alt="Rahab Mitchell"
              className="feature-image tall"
            />

            <div>
              <SectionHeading
                eyebrow="Theatre Director"
                title="Rahab Mitchell"
                text="Rahab Mitchell is a theatre artist, educator, writer, and co-founder of Jawbone Hill Theatre. Her background includes performance, storytelling, literacy-centered library programming, television production, and community arts leadership."
              />

              <div className="director-copy">
                <p>
                  Raised in North Little Rock, Arkansas, Rahab Mitchell developed an early love for
                  oratory, history, music, movement, and the fine arts. She later studied
                  Journalism and Mass Communication at New York University and also attended Essex
                  County College, where she studied Social Science and Criminal Justice.
                </p>
                <p>
                  After returning to Los Angeles, she performed a one-woman show on the life of
                  Zora Neale Hurston and deepened her work in African American folklore and
                  storytelling. She also served as a contract artist with the Los Angeles County
                  Library system, performing for children and families through literacy-centered
                  theatrical programming.
                </p>
                <p>
                  Her experience also includes teaching, tutoring, special education reading
                  support, veterinary care, cable television production, and visual art across
                  multiple mediums.
                </p>
              </div>

              <div className="mini-grid two-up">
                <div className="mini-card">
                  <h4>Artistic leadership</h4>
                  <p>Shapes productions, educational programs, and overall creative direction.</p>
                </div>
                <div className="mini-card">
                  <h4>Community engagement</h4>
                  <p>Builds library and community-based arts experiences that welcome all ages.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section support-strip">
          <div className="container support-layout">
            <div>
              <p className="eyebrow">Support Jawbone Hill Theatre</p>
              <h2>Invest in community arts, storytelling, and creative development.</h2>
              <p className="section-text">
                As a 501(c)(3) nonprofit, Jawbone Hill Theatre can grow its impact through
                donations, sponsorships, partnerships, workshops, and volunteer support.
              </p>
            </div>
            <div className="support-cards">
              <div className="mini-card">
                <h4>Community partnerships</h4>
                <p>Collaborate with schools, libraries, local organizations, and arts supporters.</p>
              </div>
              <div className="mini-card">
                <h4>Youth and adult programs</h4>
                <p>Help expand workshop access and theatre education opportunities.</p>
              </div>
              <div className="mini-card">
                <h4>Production growth</h4>
                <p>Support new performances, digital cinema projects, and artistic development.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-layout">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Book, partner, donate, or connect with Jawbone Hill Theatre."
                text="The contact section is ready to deploy now. You can replace the placeholder details with the official organization email, phone number, address, donation link, ticketing page, and social media profiles anytime."
              />

              <div className="contact-cards">
                <div className="contact-card">
                  <h4>Email</h4>
                  <p>info@jawbonehilltheatre.org</p>
                </div>
                <div className="contact-card">
                  <h4>Phone</h4>
                  <p>(800) 292-4716 ext. 89</p>
                </div>
                <div className="contact-card">
                  <h4>Location</h4>
                  <p>Inglewood, California</p>
                </div>
              </div>
            </div>

            <div className="form-shell">
              <h3>Quick inquiry form</h3>
              <p>
                This front-end form is styled and ready. Later we can wire it to Formspree, AWS
                Lambda, or another contact workflow.
              </p>
              <form className="contact-form">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="email" placeholder="Email address" className="full-width" />
                <input type="text" placeholder="Subject" className="full-width" />
                <textarea placeholder="How can we help?" className="full-width" rows="6" />
                <button type="button" className="button primary full-width">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {year} Jawbone Hill Theatre. All rights reserved.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#director">Rahab Mitchell</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
