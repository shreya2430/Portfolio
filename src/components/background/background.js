import * as React from "react"

const backgroundData = {
  title: "Background",
  part1: "I'm a Software Engineer at Goldman Sachs, where I build compliance monitoring systems. After completing my Master's in Computer Science from Northeastern University, I've had the opportunity to work across diverse domains - from healthcare tech at Addgene to data engineering at Quantiphi, and now fintech at Goldman Sachs.",
  part2: "My work focuses on developing scalable backend systems and cloud infrastructure. I enjoy tackling complex problems using technologies like Java, Spring Boot, and Kubernetes, while always keeping an eye on system reliability and performance.",
  part3: "When I'm not coding or exploring new technologies, you'll find me reading non-fiction books, hiking new trails, or out on a run. I believe the best engineering solutions come from a well-balanced mind.",
  part4: "Always excited to connect with fellow tech enthusiasts and discuss innovations in distributed systems, cloud architecture, or financial technology."
};

const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>{backgroundData.part1}</p>
      <p>{backgroundData.part2}</p>
      <p>{backgroundData.part3}</p>
      <p>{backgroundData.part4}</p>
    </div>
  </section>
)

export default Background
