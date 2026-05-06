import { useEffect, useMemo, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Shows', href: '#shows' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Programs', href: '#programs' },
  { label: 'Schools', href: '#schools' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Audition', href: '#audition' },
  { label: 'Advertise', href: '#advertise' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const galleryImages = [
  '/jawbone/box_truck.png',
  '/jawbone/conference_booth.png',
  '/jawbone/costumes1.png',
  '/jawbone/crew_backstage.png',
  '/jawbone/drama_workshop1.png',
  '/jawbone/Grand_Finale.png',
  '/jawbone/lighting1.png',
  '/jawbone/outdoor_tent.png',
  '/jawbone/outdoor_tent_and_staff3.png',
  '/jawbone/set_building1.png',
  '/jawbone/staff_at_booth.png',
  '/jawbone/staff_at_booth2.png',
  '/jawbone/staff_at_outdoor_tent.png',
  '/jawbone/IMG_1709.jpg',
  '/jawbone/IMG_1710.jpg',
  '/jawbone/IMG_20231215_190803759_MP.jpg',
  '/jawbone/IMG_20231215_193807936.jpg',
  '/jawbone/IMG_20231215_193813457_MP.jpg',
  '/jawbone/IMG_20231216_190827654.jpg',
  '/jawbone/IMG_20231216_191133196.jpg',
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
  const [leadPopupOpen, setLeadPopupOpen] = useState(false)
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('jawboneLeadPopupShown')

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setLeadPopupOpen(true)
        sessionStorage.setItem('jawboneLeadPopupShown', 'true')
      }, 1800)

      return () => clearTimeout(timer)
    }
  }, [])

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
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
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
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
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
        <section id="home" className="hero-section hero-section-centered">
          <div className="hero-background">
            <HeroVideo
              src="/jawbone/JHT_logo_sparkles.mp4"
              className="hero-background-video"
            />
          </div>

          <div className="container hero-center-content">
            <div className="hero-logo-feature hero-logo-video-feature">
              <HeroVideo
                src="/jawbone/JHT_Logo4.mp4"
                className="hero-logo-video"
              />
            </div>

            <div className="hero-pill">Official 501(c)(3) Nonprofit Theatre Organization</div>

            <h1>
              Theatre that inspires, educates, and connects.
            </h1>

            <p>
              Jawbone Hill Theatre brings live performance, storytelling, visual arts, and
              theatre-based learning experiences to schools, libraries, and communities.
            </p>

            <div className="hero-actions hero-actions-centered">
              <a href="#schools" className="button primary">
                Theatre in Schools Program
              </a>
              <button
                type="button"
                className="button secondary"
                onClick={() => setLeadPopupOpen(true)}
              >
                Request Program Information
              </button>
            </div>

            <div className="hero-school-highlight">
              <p className="callout-label">Now developing school partnerships</p>
              <h3>Charter School Arts & VAPA Program</h3>
              <p>
                A school-based theatre and visual arts program designed to support student voice,
                literacy, confidence, creativity, collaboration, and final showcase experiences.
              </p>
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

              <p className="section-text">
                Jawbone Hill Theatre was co-founded by Rahab Mitchell and Shani Sambrano to expand access to theatre, storytelling, arts education, and community-based creative programming.
              </p>

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
        <section id="shows" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Upcoming Shows"
              title="Upcoming productions, showcases, and community events."
              text="Jawbone Hill Theatre is preparing future performances, student showcases, workshops, and community storytelling events. Upcoming show dates, venues, ticket links, and audition announcements will be posted here."
              center
            />

            <div className="shows-grid">
              <article className="show-card featured-show-card">
                <p className="show-status">Coming Soon</p>
                <h3>Next Mainstage Production</h3>
                <p>
                  Details for Jawbone Hill Theatre’s next production will be announced soon,
                  including show dates, venue information, ticket availability, cast details,
                  and playbill advertising opportunities.
                </p>
                <a href="#tickets" className="button primary">
                  Ticket Info Coming Soon
                </a>
              </article>

              <article className="show-card">
                <p className="show-status">School Program</p>
                <h3>Student Showcase Events</h3>
                <p>
                  Future school-based programs may include final student showcases featuring
                  theatre, storytelling, spoken word, visual arts, and performance-based literacy projects.
                </p>
                <a href="#schools" className="button secondary">
                  Explore School Programs
                </a>
              </article>

              <article className="show-card">
                <p className="show-status">Community Events</p>
                <h3>Workshops & Storytelling Events</h3>
                <p>
                  Community workshops, library programs, puppetry events, and storytelling experiences
                  will be added as dates and partner locations are confirmed.
                </p>
                <a href="#contact" className="button secondary">
                  Partner With Us
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="tickets" className="section section-soft">
          <div className="container two-column-layout">
            <div>
              <SectionHeading
                eyebrow="Tickets"
                title="Reserve tickets for future Jawbone Hill Theatre events."
                text="Ticketing will open when upcoming productions, showcases, workshops, or community events are scheduled. Visitors will be able to select an event, reserve seats, and purchase tickets through a secure ticketing or payment portal."
              />

              <div className="stacked-cards">
                <article className="content-card">
                  <h3>Ticket Portal Coming Soon</h3>
                  <p>
                    Online ticket purchasing will be added when the next production or event is announced.
                    Until then, visitors may join the interest list or contact Jawbone Hill Theatre for
                    performance, partnership, and event information.
                  </p>
                </article>

                <article className="content-card">
                  <h3>Group Tickets & School Events</h3>
                  <p>
                    Schools, community organizations, and groups may contact Jawbone Hill Theatre about
                    future group attendance, school showcases, student performances, and community events.
                  </p>
                </article>
              </div>
            </div>

            <div className="form-shell portal-form-shell">
              <h3>Ticket Interest Form</h3>
              <p>
                Join the interest list to be notified when tickets become available for upcoming shows,
                workshops, showcases, or community events.
              </p>

              <form className="contact-form">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="email" placeholder="Email address" className="full-width" />
                <input type="tel" placeholder="Phone number" className="full-width" />

                <select className="full-width" defaultValue="">
                  <option value="" disabled>Ticket interest</option>
                  <option value="mainstage">Mainstage productions</option>
                  <option value="student-showcase">Student showcases</option>
                  <option value="workshops">Workshops</option>
                  <option value="library-events">Library or community events</option>
                  <option value="group-tickets">Group tickets</option>
                  <option value="sponsorship">Sponsorship or VIP tickets</option>
                </select>

                <textarea
                  placeholder="Tell us what type of event you are interested in attending."
                  className="full-width"
                  rows="6"
                />

                <button type="button" className="button primary full-width">
                  Join Ticket Interest List
                </button>

                <p className="form-note full-width">
                  Ticketing connection coming soon. For immediate event inquiries, please email info@jawbonehilltheatre.org.
                </p>
              </form>
            </div>
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
                <SiteImage src="/jawbone/IMG_20231216_191133196.jpg" alt="Mainstage productions" className="program-image" />
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
        <section id="schools" className="section section-gold">
          <div className="container">
            <SectionHeading
              eyebrow="Theatre in Schools"
              title="Charter School Arts & VAPA Program"
              text="Jawbone Hill Theatre partners with charter schools, arts academies, libraries, and community programs to bring theatre, storytelling, visual arts, and performance-based literacy experiences to students."
              center
            />

            <div className="program-grid">
              <article className="program-card">
                <div className="program-copy">
                  <h3>In-School Theatre & Visual Arts Program</h3>
                  <p>
                    A semester-based program designed to help schools strengthen student voice,
                    literacy, collaboration, confidence, and creative expression through theatre
                    and visual arts instruction.
                  </p>
                  <ul className="feature-list">
                    <li>16-week theatre and visual arts curriculum</li>
                    <li>Aligned with VAPA, literacy, SEL, and arts integration goals</li>
                    <li>Includes storytelling, monologues, improvisation, spoken word, visual expression, and a final student showcase</li>
                    <li>Designed for charter schools, arts academies, and enrichment programs</li>
                  </ul>
                </div>
              </article>

              <article className="program-card">
                <div className="program-copy">
                  <h3>Workshops & School Performances</h3>
                  <p>
                    Flexible school and library programs can be customized for grade level,
                    school theme, cultural celebration, literacy goals, or community event.
                  </p>
                  <ul className="feature-list">
                    <li>One-day theatre and storytelling workshops</li>
                    <li>After-school enrichment programs</li>
                    <li>Student productions and showcase support</li>
                    <li>Teacher professional development for arts integration</li>
                  </ul>
                </div>
              </article>
            </div>

            <div className="mini-grid">
              <div className="mini-card">
                <h4>Student Voice</h4>
                <p>Students build confidence through storytelling, public speaking, character work, and performance.</p>
              </div>
              <div className="mini-card">
                <h4>Literacy Through Performance</h4>
                <p>Theatre supports reading comprehension, vocabulary, fluency, writing, and interpretation of text.</p>
              </div>
              <div className="mini-card">
                <h4>Creative Collaboration</h4>
                <p>Students learn teamwork, listening, problem-solving, empathy, and ensemble-building.</p>
              </div>
            </div>

            <div className="school-intake-card" id="school-intake">
              <div>
                <p className="eyebrow">School Partnership Intake</p>
                <h3>Invite Jawbone Hill Theatre to your school</h3>
                <p>
                  Use the form below to tell us about your school, grade levels, and program interests.
                  We will follow up with next steps, program options, and availability.
                </p>
              </div>

              <form className="intake-form">
                <input type="text" name="schoolName" placeholder="School or organization name" />
                <input type="text" name="contactName" placeholder="Contact person" />
                <input type="email" name="email" placeholder="Email address" />
                <input type="tel" name="phone" placeholder="Phone number" />
                <input type="text" name="city" placeholder="City" />
                <select name="programInterest" defaultValue="">
                  <option value="" disabled>Program interest</option>
                  <option value="in-school">In-school theatre & visual arts program</option>
                  <option value="after-school">After-school enrichment</option>
                  <option value="workshop">One-day workshop</option>
                  <option value="performance">School performance</option>
                  <option value="professional-development">Teacher professional development</option>
                  <option value="custom">Custom program</option>
                </select>
                <textarea name="message" placeholder="Tell us about your students, grade levels, timeline, and goals." rows="5"></textarea>
                <button type="button" className="primary-button">
                  Submit Interest Form
                </button>
                <p className="form-note">
                  Form connection coming soon. For immediate inquiries, please email info@jawbonehilltheatre.org.
                </p>
              </form>
            </div>

            <div className="donation-card">
              <div>
                <p className="eyebrow">Support Student Theatre</p>
                <h3>Help bring theatre, storytelling, and arts education to more students.</h3>
                <p>
                  We are preparing a secure donation portal for supporters of our school theatre programs.
                </p>
              </div>
              <a className="secondary-button" href="#contact">
                Donation Portal Coming Soon
              </a>
            </div>
          </div>
        </section>
        <section id="volunteer" className="section">
          <div className="container two-column-layout">
            <div>
              <SectionHeading
                eyebrow="Volunteer Portal"
                title="Help bring theatre, storytelling, and arts education to the community."
                text="Jawbone Hill Theatre welcomes volunteers who want to support productions, school programs, workshops, playbills, front-of-house operations, community outreach, and nonprofit events."
              />

              <div className="stacked-cards">
                <article className="content-card">
                  <h3>Ways to Volunteer</h3>
                  <p>
                    Volunteers may help with ushering, check-in, backstage support, event setup,
                    school showcases, workshop preparation, photography, videography, lighting,
                    audio, set design, set building, props, costumes, playbill distribution,
                    community outreach, fundraising events, and administrative support.
                  </p>
                </article>

                <article className="content-card">
                  <h3>Who Can Register?</h3>
                  <p>
                    Students, parents, educators, artists, retirees, theatre lovers, community members,
                    and supporters of arts education are welcome to submit a volunteer interest form.
                    Youth volunteers may require parent or guardian permission.
                  </p>
                </article>

                <article className="content-card">
                  <h3>Production & Creative Support</h3>
                  <p>
                    Jawbone Hill Theatre also welcomes volunteers with creative and technical skills,
                    including photography, videography, lighting, audio, set design, set building,
                    props, costumes, stage management, and behind-the-scenes production support.
                  </p>
                </article>
              </div>
            </div>

            <div className="form-shell portal-form-shell">
              <h3>Volunteer Registration</h3>
              <p>
                Register your interest in volunteering with Jawbone Hill Theatre. A team member will
                follow up when volunteer opportunities are available.
              </p>

              <form className="contact-form">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="email" placeholder="Email address" className="full-width" />
                <input type="tel" placeholder="Phone number" />
                <input type="text" placeholder="City" />

                <select className="full-width" defaultValue="">
                  <option value="" disabled>Volunteer area of interest</option>
                  <option value="front-of-house">Front-of-house / ushering</option>
                  <option value="events">Event setup and support</option>
                  <option value="school-programs">School programs and showcases</option>
                  <option value="backstage">Backstage / production support</option>
                  <option value="photography">Photography</option>
                  <option value="videography">Videography</option>
                  <option value="lighting">Lighting</option>
                  <option value="audio">Audio / sound support</option>
                  <option value="set-design">Set design</option>
                  <option value="set-building">Set building</option>
                  <option value="props">Props</option>
                  <option value="costumes">Costumes / wardrobe</option>
                  <option value="playbill">Playbill distribution or ad support</option>
                  <option value="outreach">Community outreach</option>
                  <option value="admin">Administrative support</option>
                  <option value="fundraising">Fundraising or sponsorship support</option>
                </select>

                <select className="full-width" defaultValue="">
                  <option value="" disabled>Availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="evenings">Evenings</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>

                <textarea
                  placeholder="Tell us about your skills, interests, experience, and availability."
                  className="full-width"
                  rows="6"
                />

                <button type="button" className="button primary full-width">
                  Submit Volunteer Registration
                </button>

                <p className="form-note full-width">
                  Form connection coming soon. For immediate volunteer inquiries, please email info@jawbonehilltheatre.org.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section id="audition" className="section section-soft">
          <div className="container two-column-layout reverse-mobile">
            <div className="form-shell portal-form-shell">
              <h3>Audition Submission Portal</h3>
              <p>
                Actors, performers, storytellers, teaching artists, and community artists may submit
                interest for future productions, workshops, school showcases, and theatre education programs.
              </p>

              <form className="contact-form">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="email" placeholder="Email address" className="full-width" />
                <input type="tel" placeholder="Phone number" />
                <input type="text" placeholder="City" />

                <select className="full-width" defaultValue="">
                  <option value="" disabled>Submission type</option>
                  <option value="actor">Actor / performer</option>
                  <option value="storyteller">Storyteller / spoken word artist</option>
                  <option value="singer">Singer / musical performer</option>
                  <option value="dancer">Dancer / movement artist</option>
                  <option value="puppeteer">Puppeteer</option>
                  <option value="teaching-artist">Teaching artist</option>
                  <option value="crew">Production crew / backstage</option>
                </select>

                <input type="url" placeholder="Audition reel link: YouTube, Vimeo, Google Drive, etc." className="full-width" />
                <input type="url" placeholder="Headshot or photo link" className="full-width" />
                <input type="url" placeholder="Resume, portfolio, or website link" className="full-width" />

                <label className="file-upload-label full-width">
                  Upload audition reel or video file
                  <input type="file" accept="video/*" />
                </label>

                <label className="file-upload-label full-width">
                  Upload headshot or performance photo
                  <input type="file" accept="image/*" />
                </label>

                <label className="file-upload-label full-width">
                  Upload resume or performer bio
                  <input type="file" accept=".pdf,.doc,.docx,image/*" />
                </label>

                <textarea
                  placeholder="Tell us about your theatre, acting, storytelling, music, dance, teaching, or production experience."
                  className="full-width"
                  rows="6"
                />

                <button type="button" className="button primary full-width">
                  Submit Audition Materials
                </button>

                <p className="form-note full-width">
                  Upload connection coming soon. For immediate audition inquiries, please email info@jawbonehilltheatre.org.
                </p>
              </form>
            </div>

            <div>
              <SectionHeading
                eyebrow="Auditions"
                title="Submit materials for future productions, showcases, and community storytelling projects."
                text="Jawbone Hill Theatre is building a creative network of actors, performers, storytellers, teaching artists, and production collaborators for future shows, school programs, workshops, and community arts events."
              />

              <div className="mini-grid two-up">
                <div className="mini-card">
                  <h4>Performers</h4>
                  <p>
                    Submit interest for acting, storytelling, spoken word, movement, singing,
                    puppetry, community theatre productions, and showcase opportunities.
                  </p>
                </div>

                <div className="mini-card">
                  <h4>Teaching Artists</h4>
                  <p>
                    Artists with school, youth arts, theatre education, literacy, or community
                    programming experience may connect for future school-based programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="advertise" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Playbill Advertising"
              title="Advertise your business in Jawbone Hill Theatre playbills."
              text="Local businesses, sponsors, community organizations, and supporters may reserve advertising space in future playbills, event programs, and digital theatre materials."
              center
            />

            <div className="ad-pricing-grid">
              <article className="ad-price-card">
                <p className="ad-size">Business Card</p>
                <h3>$50</h3>
                <p>Best for small businesses, family messages, artists, and local supporters.</p>
                <span>Approx. 3.5” x 2”</span>
              </article>

              <article className="ad-price-card">
                <p className="ad-size">Quarter Page</p>
                <h3>$75</h3>
                <p>A strong entry-level ad for local businesses and community organizations.</p>
                <span>Approx. 2.5” x 4” or equivalent</span>
              </article>

              <article className="ad-price-card featured-ad-card">
                <p className="ad-size">Half Page</p>
                <h3>$125</h3>
                <p>Recommended for businesses that want stronger visibility in the playbill.</p>
                <span>Approx. 5” x 4”</span>
              </article>

              <article className="ad-price-card">
                <p className="ad-size">Full Page</p>
                <h3>$200</h3>
                <p>Best for sponsors, featured partners, and businesses wanting maximum visibility.</p>
                <span>Approx. 5” x 8”</span>
              </article>

              <article className="ad-price-card">
                <p className="ad-size">Premium Sponsor Page</p>
                <h3>$300</h3>
                <p>Premium placement for major sponsors, subject to availability by production.</p>
                <span>Placement confirmed before payment</span>
              </article>
            </div>

            <div className="two-column-layout ad-portal-layout">
              <div>
                <div className="stacked-cards">
                  <article className="content-card">
                    <h3>How Playbill Advertising Works</h3>
                    <p>
                      Businesses submit an ad request, choose an ad size, upload artwork, and receive
                      confirmation when a production or community event is accepting ads. Payment links
                      will be provided once an upcoming show is scheduled and ad space is confirmed.
                    </p>
                  </article>

                  <article className="content-card">
                    <h3>Artwork Guidelines</h3>
                    <p>
                      Preferred ad files include high-resolution PDF, PNG, or JPG. Artwork should be clear,
                      print-ready, and submitted before the production deadline. If needed, sponsors may
                      submit a logo, text, and contact information for basic layout assistance.
                    </p>
                  </article>

                  <article className="content-card">
                    <h3>Payment Notice</h3>
                    <p>
                      Online payment will open when a production is actively accepting playbill ads.
                      Until then, businesses may submit interest and upload artwork for review.
                    </p>
                  </article>
                </div>
              </div>

              <div className="form-shell portal-form-shell">
                <h3>Playbill Ad Submission</h3>
                <p>
                  Submit your business information and preferred ad size. Payment instructions will be
                  sent when an upcoming production is accepting playbill ads.
                </p>

                <form className="contact-form">
                  <input type="text" placeholder="Business or organization name" className="full-width" />
                  <input type="text" placeholder="Contact person" />
                  <input type="email" placeholder="Email address" />
                  <input type="tel" placeholder="Phone number" className="full-width" />
                  <input type="url" placeholder="Business website or social media link" className="full-width" />

                  <select className="full-width" defaultValue="">
                    <option value="" disabled>Select ad size</option>
                    <option value="business-card">Business Card - $50</option>
                    <option value="quarter-page">Quarter Page - $75</option>
                    <option value="half-page">Half Page - $125</option>
                    <option value="full-page">Full Page - $200</option>
                    <option value="premium">Premium Sponsor Page - $300</option>
                  </select>

                  <label className="file-upload-label full-width">
                    Upload ad artwork: PDF, PNG, or JPG
                    <input type="file" accept=".pdf,image/png,image/jpeg" />
                  </label>

                  <label className="file-upload-label full-width">
                    Upload logo or supporting image
                    <input type="file" accept="image/*" />
                  </label>

                  <textarea
                    placeholder="Tell us what you are advertising, preferred show/event, and any notes for the playbill."
                    className="full-width"
                    rows="6"
                  />

                  <button type="button" className="button primary full-width">
                    Submit Advertising Interest
                  </button>

                  <button type="button" className="button secondary full-width">
                    Payment Portal Coming Soon
                  </button>

                  <p className="form-note full-width">
                    Payment will be accepted only after ad space is confirmed for an upcoming production.
                    For immediate advertising inquiries, please email info@jawbonehilltheatre.org.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="section section-soft">
          <div className="container">
            <SectionHeading
              eyebrow="Gallery"
              title="Moments from the stage, rehearsal room, and community experience."
              text="Explore photos from Jawbone Hill Theatre productions, rehearsals, workshops, storytelling events, and community arts experiences."
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
              <div className="leadership-links">
                <a className="button secondary" href="#director">
                  Theatre Director: Rahab Mitchell
                </a>
                <a
                  className="button secondary"
                  href="https://about.me/shani_sambrano/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Executive Director: Shani Sambrano
                </a>
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
                text="Contact Jawbone Hill Theatre to learn more about performances, school partnerships, theatre workshops, volunteer opportunities, auditions, playbill advertising, donations, and community arts programming."
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
              <h3>Quick Inquiry Form</h3>
              <p>
                Use this form to request information about performances, school partnerships,
                volunteer opportunities, auditions, playbill advertising, donations, or community programs.
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
      {leadPopupOpen ? (
        <div className="lead-popup-backdrop">
          <div className="lead-popup">
            <button
              type="button"
              className="lead-popup-close"
              onClick={() => setLeadPopupOpen(false)}
              aria-label="Close popup"
            >
              ×
            </button>

            <p className="eyebrow">School Partnership Inquiry</p>
            <h2>Bring theatre and visual arts to your school.</h2>
            <p>
              Jawbone Hill Theatre is developing school partnerships for charter schools,
              arts academies, libraries, and community programs interested in theatre-based
              learning, storytelling, visual arts, and student showcase experiences.
            </p>

            <form className="lead-popup-form">
              <input type="text" placeholder="School or organization name" />
              <input type="text" placeholder="Contact person" />
              <input type="email" placeholder="Email address" />
              <input type="tel" placeholder="Phone number" />
              <select defaultValue="">
                <option value="" disabled>Program interest</option>
                <option value="charter-school">Charter School Arts & VAPA Program</option>
                <option value="after-school">After-school enrichment</option>
                <option value="workshop">One-day theatre workshop</option>
                <option value="library">Library or community program</option>
                <option value="custom">Custom school partnership</option>
              </select>
              <textarea
                rows="4"
                placeholder="Tell us about your school, grade levels, timeline, and goals."
              />
              <button type="button" className="button primary full-width">
                Submit Inquiry
              </button>
              <p className="form-note">
                Form connection coming soon. For immediate inquiries, please email info@jawbonehilltheatre.org.
              </p>
            </form>
          </div>
        </div>
      ) : null}
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {year} Jawbone Hill Theatre, a 501(c)(3) nonprofit organization. Website support by Marinia Group.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#shows">Shows</a>
            <a href="#tickets">Tickets</a>
            <a href="#schools">Schools</a>
            <a href="#volunteer">Volunteer</a>
            <a href="#audition">Audition</a>
            <a href="#advertise">Advertise</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
