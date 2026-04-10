import * as React from "react"
import "./background.scss"

const pressFeatures = [
  {
    outlet: "Northeastern COE News",
    outletShort: "Northeastern COE",
    url: "https://coe.northeastern.edu/news/building-reliable-systems-through-experience/",
    quote: "Working on systems at this scale required careful attention to performance, fault tolerance, and maintainability.",
    label: "Building Reliable Systems Through Experience",
  },
]

const Background = () => (
  <section className="section background">
    <div className="section__title">About</div>
    <div className="section__content">
      <p>
        Backend engineer with <strong>2+ years of industry experience</strong> across high-scale systems, cloud-native infrastructure, and AI-driven automation. Currently pursuing a <strong>Master's in Software Engineering Systems (GPA 3.7) at Northeastern University</strong>, expected May 2026.
      </p>
      <p>
        At <strong>LabCorp</strong>, I built a Spring Batch pipeline processing <strong>70M+ records/day</strong> and an AI automation service using AWS Lambda and Amazon Bedrock that deflected <strong>~40% of routine support emails</strong>. Before that, at <strong>ThoughtWorks</strong>, I shipped <strong>25+ production features</strong> on microservices with Java, Spring Boot, and gRPC — reducing incident detection time by <strong>40%</strong> and improving release speed by <strong>30%</strong> through Kubernetes and TDD practices (90%+ coverage).
      </p>
      <p>
        I'm most at home designing distributed systems, cloud infrastructure on AWS, and high-throughput data pipelines — but I also enjoy building end-to-end products, as my hackathon and side projects show.
      </p>
      <p>
        Outside of engineering, I read a lot of non-fiction, hike when Boston's weather cooperates, and I'm always up for a conversation about distributed systems, developer productivity, or impactful tech.
      </p>

      {/* Press / Featured */}
      <div className="background__press">
        {pressFeatures.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="background__press-card"
          >
            <span className="background__press-card__outlet">{item.outletShort}</span>
            <p className="background__press-card__quote">"{item.quote}"</p>
            <span className="background__press-card__cta">Read article →</span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Background
