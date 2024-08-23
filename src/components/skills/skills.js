import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Python", "Java", "Javascript", "C++", "MySQL", "Scala", "SQL", "NoSQL"],
  "frameworksTitle": "Web Development",
  "frameworks": ["React", "Node", "Express", "Django", "Flask", "Streamlit", "RESTful APIs", "GraphQL"],
  "toolsTitle": "Data Engineering",
  "tools": ["Spark", "Airflow", "MapReduce", "ETL", "Kafka"],
  "designTitle": "Cloud & Devops",
  "design": ["Amazon Web Services", "Google Cloud Platform", "Docker", "Kubernetes", "CI/ CD Pipelines"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
