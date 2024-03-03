import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Khoury College of Computer Sciences",
    "url": "https://www.khoury.northeastern.edu/",
    "time": "Jan 2023 - Present",
    "position": "Graduate Teaching Assistant, Programming in C++"
  },
  {
    "company": "Addgene",
    "url": "https://addgene.org/",
    "time": "May 2023 - Dec 2023",
    "position": "Software Engineer Intern, Backend"
  },
  {
    "company": "Quantiphi Analytics",
    "url": "https://quantiphi.com/",
    "time": "Aug 2021 - Jun 2022",
    "position": "Data Engineer"
  },
  {
    "company": "Veritas Technologies",
    "url": "https://www.veritas.com/",
    "time": "Aug 2020 - Mar 2021",
    "position": "Software Engineer Intern, Systems"
  },
  {
    "company": "Pune Institute of Computer Technology",
    "url": "https://pict.edu/",
    "time": "Dec 2019 - May 2021",
    "position": "Teaching Assistant, Object Oriented Design"
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
