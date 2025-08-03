import * as React from "react"
import "./experience.scss"

const experienceData = [
  {
    "company": "LabCorp",
    "url": "https://www.labcorp.com/",
    "time": "May 2025 - Aug 2025",
    "position": "Software Engineer Intern"
  },
  {
    "company": "ThoughtWorks",
    "url": "https://www.thoughtworks.com/",
    "time": "Sept 2022 - Aug 2024",
    "position": "Application Developer"
  },
  {
    "company": "MAQ Software",
    "url": "https://maqsoftware.com/",
    "time": "Sept 2021 - Aug 2022",
    "position": "Data Engineer Intern"
  }
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
)

export default Experience
