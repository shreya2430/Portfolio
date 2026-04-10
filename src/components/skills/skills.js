import * as React from "react"
import "./skills.scss"

const skillsData = [
  {
    category: "Languages",
    items: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "C++"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Spring Batch",
      "gRPC",
      "REST APIs",
      "Microservices",
      "Node.js",
      "FastAPI",
    ],
  },
  {
    category: "Cloud & Infra",
    items: [
      "AWS Lambda",
      "EC2",
      "S3",
      "RDS",
      "DynamoDB",
      "OpenSearch",
      "Bedrock",
      "CloudWatch",
      "Azure Data Factory",
      "Azure Databricks",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Packer",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "DynamoDB",
      "SQL Server",
    ],
  },
  {
    category: "Testing & Observability",
    items: ["JUnit", "Mockito", "TDD", "Grafana", "Prometheus"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
]

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        {skillsData.map((group, idx) => (
          <div className="skillz__group" key={idx}>
            <span className="skillz__category__label">{group.category}</span>
            <div className="skillz__pills">
              {group.items.map((item, i) => (
                <span className="skillz__pill" key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
