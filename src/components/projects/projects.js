import * as React from "react"
import "./projects.scss"

const projectsData = [
  {
    "name": "Parkbnb",
    // "url": "https://amoddhopavkar-kitchenchronicles.netlify.app/search",
    "description": [
      "Designed and developed a full-stack (Java, SpringBoot, React, PostgreSQL) web application which is designed to simplify parking reservations",
      "This application improve efficiency for rentees and renters, and provide a seamless user experience.",
      "It addresses challenges in urban and high-traffic areas, offering features like parking spot search, geolocation services, secure payments, and user reviews.",
    ],
    "githubUrl": "https://github.com/shreya2430/Parkbnb",
    "used": [
      {"thing": "Java"},
      {"thing": "SpringBoot"},
      {"thing": "React"},
      {"thing": "PostgreSQL"},
      {"thing": "Google Maps API"},
      {"thing": "Stripe payments"},
    ]
  },
  {
    "name": "TrueVoice",
    "description": [
      "TrueVoice is a user-friendly platform that revolutionizes how businesses collect and showcase customer testimonials. ",
      "This intuitive solution streamlines the process of gathering authentic video and text testimonials, allowing companies to effortlessly capture the genuine voices of their satisfied customers.",
      "With its easy-to-use interface, customizable collection forms, and seamless website integration, TrueVoice empowers businesses to leverage powerful social proof, build trust, and boost conversions."
    ],
    "githubUrl": "https://github.com/shreya2430/TrueVoices",
    "used": [
      {"thing": "MongoDB"},
      {"thing": "Node.js"},
      {"thing": "React"},
      {"thing": "Stripe"},
      {"thing": "Vite PWA"},
    ]
  },
  {
    "name": "PresenceHub - Attendance Management System",
    "description": [
      "Built a full-stack web-based Attendance Management System designed for educational institutions to streamline student attendance tracking.",
      "The application provides role-based functionalities for Admins, Faculty, and Students, including QR-based attendance marking, detailed reporting, and secure authentication.",
    ],
    "githubUrl": "https://github.com/shreya2430/PresenceHub",
    "used": [
      {"thing": "Spring Boot"},
      {"thing": "MYSQL"},
      {"thing": "JSP,"},
      {"thing": "Bootstrap"},
      {"thing": "AJAX"},
    ]
  },
  {
    "name": "Monte Carlo Tree Search Games – TicTacToe & Checkers",
    "description": [
      "This project implements TicTacToe and Checkers using the Monte Carlo Tree Search (MCTS) algorithm.",
      "It includes complete game logic, a GUI built with Java Swing, benchmarking tools, and analysis of performance based on iteration counts.",
    ],
    "githubUrl": "https://github.com/shreya2430/TicTacToe-and-Checkers-using-MCTS",
    "used": [
      {"thing": "Java"},
      {"thing": "Java - Swing"},
      {"thing": "JUnit"},
      {"thing": "MCTS Algorithm"},
      {"thing": "Benchmarking Tools"},
    ]
  },
]


const Projects = () => {
  return (
    <section className="section other-projects">
      <div className="section__title">Projects</div>
      <div className="section__content">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project__name">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
              ) : (
                <span>{project.name}</span>
              )}
            </div>
            <ul className="project__description">
              {project.description.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
            {project.githubUrl && (
              <p>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="small">
                  👨🏻‍💻 Github Source Code 👨🏻‍💻
                </a>
              </p>
            )}
            <div className="project__used">
              {project.used.map((item, itemIndex) => (
                <span key={itemIndex} className="project__used__item">{item.thing}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects