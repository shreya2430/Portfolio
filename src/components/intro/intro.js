import * as React from "react"
import "./intro.scss"

// ─────────────────────────────────────────────────────────
// 📸 TO ADD MORE PHOTOS:
//   1. Drop the image into  src/img/beyond/
//   2. Add an import line below
//   3. Add an entry to carouselPhotos
// ─────────────────────────────────────────────────────────
import hscPhoto       from "../../img/beyond/ShreyaHSC (1).jpeg"
import labcorpPhoto   from "../../img/beyond/ShreyaWanishaLabcorp.jpeg"
import hackathonPhoto from "../../img/beyond/grp picture - hakathon.jpeg"
import neuPhoto       from "../../img/beyond/shreyaNEU.jpeg"
import volunteerPhoto from "../../img/beyond/shreyaWanishaVolunteer.jpeg"
import hikePhoto      from "../../img/beyond/shreyaHike.jpeg"

const carouselPhotos = [
  { src: neuPhoto,       caption: "Master's in Software Engineering Systems", org: "Northeastern University · Boston" },
  { src: labcorpPhoto,   caption: "Software Engineering Intern",              org: "LabCorp · Boston, MA" },
  { src: hackathonPhoto, caption: "Team DreamChaserAI — shipped in 9 hrs",   org: "Frontiers Gen-AI Hackathon" },
  { src: hscPhoto,       caption: "Leading weekly DSA sessions",              org: "Husky Systers Code" },
  { src: volunteerPhoto, caption: "Giving back to the community",             org: "Volunteering" },
  { src: hikePhoto,      caption: "My first Trail",                           org: "Life outside the IDE" },
]

const stats = [
  { value: "2+",   label: "Yrs Industry" },
  { value: "70M+", label: "Records/Day" },
  { value: "25+",  label: "Prod Features" },
  { value: "90%+", label: "Test Coverage" },
]

// ── Carousel ──────────────────────────────────────────────
const PhotoCarousel = ({ photos }) => {
  const [current,  setCurrent]  = React.useState(0)
  const [paused,   setPaused]   = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => { setIsClient(true) }, [])

  React.useEffect(() => {
    if (!isClient || paused) return
    const t = setInterval(() => setCurrent(c => (c + 1) % photos.length), 4500)
    return () => clearInterval(t)
  }, [isClient, paused, photos.length])

  const go = idx => { setPaused(true); setCurrent((idx + photos.length) % photos.length) }

  if (!isClient) return null

  return (
    <div
      className="intro__carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {photos.map((photo, idx) => (
        <div
          key={idx}
          className={`intro__carousel__slide${idx === current ? " active" : ""}`}
        >
          {/* Blurred background — same photo, fills the gap naturally */}
          <img src={photo.src} alt="" className="intro__carousel__slide__bg" aria-hidden="true" />
          {/* Foreground — full photo, no crop */}
          <img src={photo.src} alt={photo.caption} className="intro__carousel__slide__fg" />
          <div className="intro__carousel__caption">
            <span className="intro__carousel__caption__org">{photo.org}</span>
            <p className="intro__carousel__caption__text">{photo.caption}</p>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="intro__carousel__btn intro__carousel__btn--prev" onClick={() => go(current - 1)} aria-label="Previous">‹</button>
      <button className="intro__carousel__btn intro__carousel__btn--next" onClick={() => go(current + 1)} aria-label="Next">›</button>

      {/* Dots */}
      <div className="intro__carousel__dots">
        {photos.map((_, idx) => (
          <button
            key={idx}
            className={`intro__carousel__dot${idx === current ? " active" : ""}`}
            onClick={() => go(idx)}
            aria-label={`Photo ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Intro ─────────────────────────────────────────────────
const Intro = () => {
  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Shreya_Wanisha_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="intro">
      <div className="intro__inner">

        {/* ── Left: text ───────────────────────────── */}
        <div className="intro__text">
          <h1 className="intro__name">Shreya Wanisha</h1>

          <h2 className="intro__role">
            Backend Engineer
            <span className="intro__role__dot" />
            <span className="intro__role__suffix">Builder · Mentor</span>
          </h2>

          <p className="intro__tagline">
            I architect backend systems that handle millions of records, design cloud infrastructure that holds up under pressure, and occasionally ship a full-stack AI product in a weekend.
          </p>

          {/* Stats */}
          <div className="intro__stats">
            {stats.map((s, i) => (
              <div className="intro__stat" key={i}>
                <span className="intro__stat__value">{s.value}</span>
                <span className="intro__stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="intro__ctas">
            <button className="intro__btn intro__btn--primary" onClick={downloadResume}>
              Download Resume
            </button>
            <a href="mailto:shreyawanisha1221@gmail.com" className="intro__btn intro__btn--secondary">
              Get in Touch
            </a>
            <a href="https://github.com/shreya2430" target="_blank" rel="noreferrer" className="intro__icon-btn" title="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/shreya-wanisha/" target="_blank" rel="noreferrer" className="intro__icon-btn" title="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* Open to Work — right below CTAs for visibility */}
          <div className="intro__open-badge">
            <span className="intro__open-badge__dot" />
            Open to Full-Time Roles
          </div>
        </div>

        {/* ── Right: photo carousel ─────────────────── */}
        <div className="intro__right">
          <PhotoCarousel photos={carouselPhotos} />
        </div>

      </div>
    </header>
  )
}

export default Intro
