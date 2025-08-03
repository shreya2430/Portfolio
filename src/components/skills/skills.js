import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Java", "C++", "Python", "TypeScript", "MySQL", "SQL", "NoSQL"],
  "backendFrameworksTitle": "Backend Development",
  "backendFrameworks": ["Spring Boot", "REST API", "gRPC", "Spring Batch", "Node.js"],
  "frontendFrameworksTitle": "Frontend Development",
  "frontendFrameworks": ["HTML5", "CSS3", "SCSS", "JavaScript", "React", "Tailwind CSS", "Shadcn/ui", "Bootstrap"],
  "toolsTitle": "Data Engineering",
  "tools": ["Azure Databricks", "Azure Data Factory", "Synapse Analytics", "Azure DevOps"],
  "designTitle": "Cloud & Devops",
  "design": ["AWS (Lambda, DynamoDB, S3, OpenSearch)", "Docker", "Kubernetes", "Git", "CI/CD", "Grafana", "Prometheus"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <span className="skillz__category__label">{skillsData.languagesTitle}:</span>
          <span className="skillz__category__items">{skillsData.languages.join(", ")}</span>
        </div>

        <div className="skillz__category">
          <span className="skillz__category__label">{skillsData.backendFrameworksTitle}:</span>
          <span className="skillz__category__items">{skillsData.backendFrameworks.join(", ")}</span>
        </div>

        <div className="skillz__category">
          <span className="skillz__category__label">{skillsData.frontendFrameworksTitle}:</span>
          <span className="skillz__category__items">{skillsData.frontendFrameworks.join(", ")}</span>
        </div>

        <div className="skillz__category">
          <span className="skillz__category__label">{skillsData.toolsTitle}:</span>
          <span className="skillz__category__items">{skillsData.tools.join(", ")}</span>
        </div>

        <div className="skillz__category">
          <span className="skillz__category__label">{skillsData.designTitle}:</span>
          <span className="skillz__category__items">{skillsData.design.join(", ")}</span>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
