import * as React from "react"
import "./experience.scss"

const experienceData = [
  {
    company: "Labcorp",
    url: "https://www.labcorp.com/",
    time: "May 2025 – Aug 2025",
    position: "Software Engineering Intern · Backend Developer",
    location: "Boston, MA",
    bullets: [
      "Built a fault-tolerant data reconciliation pipeline using Java and Spring Batch, processing 70M+ records/day from Amazon S3, querying OpenSearch APIs to detect missing order IDs with retry logic and resilient exception handling.",
      "Contributed to an AWS-managed order processing platform with Java and Spring Boot, supporting high-volume laboratory workflows with clean code practices and comprehensive unit and integration tests.",
      "Developed an AI-driven automation service using Node.js, AWS Lambda, DynamoDB, and Amazon Bedrock (LLMs), classifying queries and deflecting ~40% of routine support emails.",
      "Implemented monitoring and alerting with CloudWatch health checks and custom metrics for system performance tracking, data accuracy, and reduced MTTD.",
    ],
  },
  {
    company: "Thoughtworks",
    url: "https://www.thoughtworks.com/",
    time: "Sep 2022 – Aug 2024",
    position: "Consultant · Java Application Developer",
    location: "Bengaluru, India",
    bullets: [
      "Engineered high-availability microservices using Java, Spring Boot, and gRPC, designing scalable distributed systems with service discovery, API gateway patterns, and reliable inter-service communication.",
      "Delivered 25+ production features end-to-end, collaborating with cross-functional teams on architecture decisions, code reviews, and performance tuning.",
      "Built observability stack with Grafana and Prometheus, reducing incident detection time by 40% across production services.",
      "Containerized applications with Docker and Kubernetes via CI/CD pipelines, improving release speed by 30%. Practiced TDD achieving 90%+ code coverage with JUnit and Mockito.",
    ],
  },
  {
    company: "MAQ Software",
    url: "https://maqsoftware.com/",
    time: "Sep 2021 – Aug 2022",
    position: "Associate Software Engineer · Data Engineer",
    location: "Hyderabad, India",
    bullets: [
      "Built end-to-end data pipelines using Azure Data Factory, Databricks, Data Lake Storage, and SQL Server — implementing ingestion, transformation, and scheduled workflow orchestration for large-scale processing.",
      "Optimized cluster performance by migrating to job clusters and applying data partitioning, Z-order indexing, and memory tuning, achieving 50% faster execution and reduced infrastructure costs.",
    ],
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {experienceData.map((data, idx) => (
          <div className="job" key={idx}>
            <div className="time-place">
              <div className="job__company">
                <a href={data.url} target="_blank" rel="noreferrer">
                  {data.company}
                </a>
                {data.location && (
                  <span className="job__location"> · {data.location}</span>
                )}
              </div>
              <div className="job__time">{data.time}</div>
            </div>
            <div className="job__position">{data.position}</div>
            {data.bullets && (
              <ul className="job__bullets">
                {data.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
