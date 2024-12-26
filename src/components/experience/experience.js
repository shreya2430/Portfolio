import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Software Engineer",
    "url": "https://www.goldmansachs.com/",
    "time": "Dec 2024 - Present",
    "position": "Goldman Sachs"
  },
  {
    "company": "Software Engineer Intern",
    "url": "https://www.datarobot.com/",
    "time": "May 2024 - Aug 2024",
    "position": "DataRobot"
  },
  {
    "company": "Software Engineer Intern",
    "url": "https://addgene.org/",
    "time": "May 2023 - Dec 2023",
    "position": "Addgene"
  },
  {
    "company": "Graduate Teaching Assistant",
    "url": "https://www.khoury.northeastern.edu/",
    "time": "Jan 2023 - May 2024",
    "position": "Khoury College of Computer Sciences"
  },
  {
    "company": "Data Engineer",
    "url": "https://quantiphi.com/",
    "time": "Aug 2021 - Jun 2022",
    "position": "Quantiphi Analytics"
  },
  {
    "company": "Software Engineer Intern",
    "url": "https://www.veritas.com/",
    "time": "Aug 2020 - Mar 2021",
    "position": "Veritas Technologies"
  },
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
