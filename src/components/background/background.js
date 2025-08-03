import * as React from "react"

const backgroundData = {
  title: "Background",
  part1: "I'm a Software Developer with 2+ years of experience across backend development, cloud systems, and data engineering. I've worked on high-scale healthcare systems at LabCorp processing 70+ million records daily, while pursuing my Master's in Software Engineering Systems at Northeastern University.",
  part2: "Previously, I worked as a Java Application Developer at ThoughtWorks, building scalable applications with Spring Boot and gRPC, achieving 90%+ test coverage and improving deployment efficiency by 30% through Kubernetes optimization.",
  part2_5: "I also have experience as a Data Engineer at MAQ Software, where I built optimized ETL pipelines on Azure, resulting in 50% faster execution and significant cost savings.",
  part3: "I love building backend systems that solve real-world problems, especially using Java, Spring Boot, AWS, and Kubernetes. I'm passionate about clean code, test-driven development, and delivering production-ready systems with performance and reliability in mind.",
  part4: "Outside of tech, I enjoy reading non-fiction, cooking, hiking, and exploring new cities. Always happy to connect with folks interested in distributed systems, developer productivity, and impactful tech."
};

const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>{backgroundData.part1}</p>
      <p>{backgroundData.part2}</p>
      <p>{backgroundData.part2_5}</p>
      <p>{backgroundData.part3}</p>
      <p>{backgroundData.part4}</p>
    </div>
  </section>
)

export default Background