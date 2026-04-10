import * as React from "react"
import "./beyond.scss"

const beyondCards = [
  {
    icon: "🎓",
    title: "Teaching Assistant",
    org: "Northeastern University",
    period: "Jan 2026 – Present",
    detail:
      "TA for Enterprise Software Design (CSYE 6220) and Web Development Tools & Methods (INFO 6250) — running lab sessions, office hours, and helping students navigate system design, debugging, and backend architecture. Watching someone go from confused to confident on a tricky Spring Boot problem is one of the most rewarding parts of my week.",
  },
  {
    icon: "💻",
    title: "LeetCode Operations Lead",
    org: "Husky Systers Code · Northeastern",
    period: "2025 – Present",
    detail:
      "Design and lead weekly DSA problem-solving sessions for students in tech at Northeastern. It's not just about solving problems — it's about creating a space where people feel comfortable saying 'I don't get this yet' and then working through it together.",
  },
  {
    icon: "🚀",
    title: "Hackathon Builder",
    org: "Frontiers: Gen-AI Hackathon",
    period: "Mar 2026",
    detail:
      "Love the energy of building something from zero under time pressure. Most recently shipped DreamChaserAI end-to-end in ~9 hours — an AI platform helping international students navigate grad admissions, complete with backend API, vector search, and PDF export.",
  },
  {
    icon: "🌟",
    title: "Community & Volunteering",
    org: "Various Organizations",
    period: "2024 – Present",
    detail:
      "Actively involved in the broader tech community: Panelist at Northeastern's Co-op Info Session and MGEN Career Fair · Volunteer at AI Summit by MIT · TieCon Boston · Google Developer Group (GDG) events · and more. Passionate about making the industry more accessible and welcoming for everyone.",
    highlights: ["AI Summit by MIT", "TieCon Boston", "GDG Events", "MGEN Career Fair", "NEU Co-op Panel"],
  },
]

const Beyond = () => (
  <section className="section beyond">
    <div className="section__title">Beyond Code</div>
    <div className="section__content beyond__content">
      <p className="beyond__intro">
        I believe great engineers don't just write code — they lift others up along the way.
      </p>

      <div className="beyond__cards">
        {beyondCards.map((item, idx) => (
          <div className="beyond__card" key={idx}>
            <div className="beyond__card__icon-wrap">
              <span className="beyond__card__icon">{item.icon}</span>
            </div>
            <div className="beyond__card__body">
              <div className="beyond__card__header">
                <div>
                  <div className="beyond__card__title">{item.title}</div>
                  <div className="beyond__card__org">{item.org}</div>
                </div>
                {item.period && (
                  <span className="beyond__card__period">{item.period}</span>
                )}
              </div>
              <p className="beyond__card__detail">{item.detail}</p>
              {item.highlights && (
                <div className="beyond__card__tags">
                  {item.highlights.map((tag, i) => (
                    <span key={i} className="beyond__card__tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Beyond
