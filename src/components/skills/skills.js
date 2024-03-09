import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Python", "Java", "C/ C++", "Javascript", "Typescript", "MySQL", "PostgreSQL", "Cassandra", "MongoDB"],
  "frameworksTitle": "Web Development",
  "frameworks": ["React", "Node", "Angular", "Express", "Flask", "Django", "REST APIs"],
  "toolsTitle": "Data Engineering",
  "tools": ["Hadoop MapReduce", "Apache Spark", "Apache Airflow", "Apache Kafka", "PySpark", "ETL Pipelines", "Data Warehousing"],
  "designTitle": "Cloud & Devops",
  "design": ["Amazon Web Services", "Google Cloud Platform", "Docker", "Kubernetes", "Github Actions", "Ansible", "Terraform", "Jenkins", "CI/ CD"],
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
