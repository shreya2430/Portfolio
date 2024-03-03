import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "I am a Masters in Computer Science student at ",
  part2: "Northeastern University",
  line2: "My expertise spans developing scalable systems, optimizing data processes, and leveraging cloud technologies (AWS, GCP) to drive efficiency and innovation. I consistently stay abreast of the latest developments in my field, diligently seeking opportunities to learn and explore emerging technologies.",
  line3Part1: "When I'm not in front of a computer screen",
  line3Part2: ", you'll likely find me reading a non-fiction book, exploring new trails or out on a run.",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <strong>{backgroundData.part2}</strong>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
      </p>
    </div>
  </section>
)

export default Background
