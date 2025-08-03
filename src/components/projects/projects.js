import * as React from "react"
import { useState } from "react"
import "./projects.scss"
import parkbnb from "../../img/projects/parkbnb.png"
import trueVoices from "../../img/projects/trueVoices.png"
import presenceHub from "../../img/projects/presenceHub.png"
import mcts from "../../img/projects/mcts.png"

const projectsData = [
  {
    "name": "Parkbnb",
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
    ],
    "image": parkbnb
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
    ],
    "image": trueVoices
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
    ],
    "image": presenceHub
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
    ],
    "image": mcts
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  if (!isClient) {
    return null; // Prevent SSR mismatch
  }

  return (
    <>
      <section className="section other-projects">
        <div className="section__title">Projects</div>
        <div className="section__content projects-grid">
          {projectsData.map((project, index) => (
            <div className="project project-card" key={index}>
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="project-image"
                  onClick={() => openModal(project)}
                />
              </div>
              <div className="project-content">
                <div className="project__name" onClick={() => openModal(project)}>
                  <span className="clickable-name">{project.name}</span>
                </div>
                <ul className="project__description">
                  <li>{project.description[0]}</li>
                </ul>
                {project.githubUrl && (
                  <p>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="small">
                      👨🏻‍💻 Github Source Code 👨🏻‍💻
                    </a>
                  </p>
                )}
                <div className="project__used">
                  {project.used.slice(0, 4).map((item, itemIndex) => (
                    <span key={itemIndex} className="project__used__item">{item.thing}</span>
                  ))}
                  {project.used.length > 4 && (
                    <span className="project__used__item">+{project.used.length - 4} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="project-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>×</button>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name}
                className="modal-image"
              />
              <div className="modal-body">
                <h3 className="modal-title">{selectedProject.name}</h3>
                <ul className="modal-description">
                  {selectedProject.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
                <div className="modal-tech-stack">
                  {selectedProject.used.map((item, itemIndex) => (
                    <span key={itemIndex} className="modal-tech-tag">{item.thing}</span>
                  ))}
                </div>
                <div className="modal-actions">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="modal-btn btn-github"
                  >
                    📂 View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
