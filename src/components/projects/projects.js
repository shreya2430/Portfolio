import * as React from "react"
import { useState } from "react"
import "./projects.scss"
import parkbnb from "../../img/projects/parkbnb.png"
import trueVoices from "../../img/projects/trueVoices.png"
import presenceHub from "../../img/projects/presenceHub.png"
import mcts from "../../img/projects/mcts.png"
import placeholder from "../../img/projects/image.png"
import dreamchaserImg from "../../img/projects/dreamchaser.png"
import awsCloudImg from "../../img/projects/awsCloud.jpeg"
import vericodeImg from "../../img/projects/vericode.png"
import bigdataIndexing from "../../img/projects/big_data_indexing_placeholder.svg"
const projectsData = [
  // ── 1 ──────────────────────────────────────────────────
  {
    name: "DreamChaserAI",
    tag: "Hackathon · Gen-AI",
    description: [
      "AI-powered platform helping international students navigate US grad admissions — generates personalized university shortlists (Dream / Ideal / Safe) and tailored Statements of Purpose using Google Gemini.",
      "Users answer 7 personalized questions based on their selected program; the SOP is then refined via an AI chat editor and exported as a PDF.",
      "Built end-to-end in ~9 hours at the Frontiers: Gen-AI Hackathon with a team of four. My role: backend development and system integration.",
    ],
    role: "Backend & System Integration",
    githubUrl: "https://github.com/shreya2430/DreamChaserAI",
    liveUrl: "https://dream-chaser-ai.vercel.app/",
    demoUrl: "https://www.youtube.com/watch?v=INpX8Y_hdts",
    used: [
      { thing: "FastAPI" },
      { thing: "Python" },
      { thing: "Google Gemini API" },
      { thing: "MongoDB" },
      { thing: "JWT Auth" },
      { thing: "React" },
      { thing: "Tailwind CSS" },
    ],
    image: dreamchaserImg,
    featured: true,
  },
  // ── 2 ──────────────────────────────────────────────────
  {
    name: "Cloud-Native App on AWS",
    tag: "Backend · Cloud · DevOps",
    description: [
      "Production-grade cloud-native web application on AWS with complete infrastructure automation, demonstrating modern DevOps practices, auto-scaling architecture, and security best practices.",
      "Spring Boot REST API with PostgreSQL, S3 image uploads, email verification via SNS/Lambda, CloudWatch monitoring, and 90%+ test coverage (JUnit, Mockito) following TDD.",
      "Terraform-provisioned infrastructure: custom VPC with Multi-AZ subnets, ALB with SSL/TLS, Auto Scaling Groups (2–6 instances), Route 53 DNS, KMS encryption, and Secrets Manager — zero hardcoded credentials.",
      "Serverless email verification pipeline: Lambda processes SNS events, DynamoDB tracks delivery status, SendGrid handles dispatch. Full CI/CD via GitHub Actions + Packer (zero-downtime, <15 min provisioning).",
    ],
    role: "Full-stack — Infrastructure, Backend, Serverless",
    githubUrl: "https://github.com/shreya2430/lambda-email-verification",
    architectureUrl: "https://shreya2430.github.io/aws-cloud-architecture/",
    used: [
      { thing: "Java" },
      { thing: "Spring Boot" },
      { thing: "Terraform" },
      { thing: "AWS (EC2, RDS, S3, Lambda, SNS, DynamoDB)" },
      { thing: "GitHub Actions" },
      { thing: "Packer" },
      { thing: "JUnit / Mockito" },
    ],
    image: awsCloudImg,
    featured: true,
  },
  // ── 3 ──────────────────────────────────────────────────
  {
    name: "Parkbnb",
    tag: "Full-Stack · OOD · Tech Lead",
    description: [
      "Designed the overall system architecture as Tech Lead — backend services, PostgreSQL schema, and REST API flows — for a parking reservation platform serving both renters and rentees.",
      "Implemented Stripe payment integration with error handling and receipt generation; built geolocation services with Google Maps API for nearby spot discovery.",
      "Applied OOD design patterns (Singleton, Factory, Service Layer) with SOLID principles for a modular, scalable backend; collaborated with PM on milestones and task assignments.",
    ],
    role: "Tech Lead & System Architect",
    githubUrl: "https://github.com/shreya2430/Parkbnb",
    demoUrl: "https://youtu.be/YzQBu4qa0bY",
    used: [
      { thing: "Java" },
      { thing: "Spring Boot" },
      { thing: "React" },
      { thing: "PostgreSQL" },
      { thing: "Google Maps API" },
      { thing: "Stripe" },
    ],
    image: parkbnb,
  },
  // ── 4 ──────────────────────────────────────────────────
  {
    name: "TrueVoice",
    tag: "Full-Stack · PWA",
    description: [
      "Platform for collecting and showcasing customer testimonials — video and text — with customizable collection forms, an approval workflow, and embeddable widgets.",
      "Built backend services for testimonial management and Stripe payment handling; implemented PWA features (offline caching via Vite PWA plugin) and i18n supporting English, Hindi, and French.",
    ],
    role: "Backend, Payments, PWA, i18n",
    githubUrl: "https://github.com/shreya2430/TrueVoices",
    demoUrl: "https://youtu.be/xq1ur4N1cmg",
    used: [
      { thing: "Node.js" },
      { thing: "MongoDB" },
      { thing: "React" },
      { thing: "TypeScript" },
      { thing: "Stripe" },
      { thing: "Redux" },
      { thing: "Vite PWA" },
    ],
    image: trueVoices,
  },
  // ── 5 ──────────────────────────────────────────────────
  {
    name: "Vericode",
    tag: "Backend · Design Patterns",
    description: [
      "Code review platform where developers submit PRs, get automated multi-layer analysis (lint, style, security), and receive structured peer feedback — every subsystem grounded in a Gang of Four design pattern.",
      "Features a strict PR lifecycle (Draft → In Review → Merged), line-level comments, full audit trail with undo support, and support for Java, Python, and JavaScript codebases.",
      "Each subsystem maps a GoF pattern directly to a real engineering workflow: strategy for multi-language lint rules, observer for state-change notifications, command for undoable review actions, and more.",
    ],
    role: "Full-Stack Development",
    githubUrl: "https://github.com/shreya2430/Vericode",
    used: [
      { thing: "Java" },
      { thing: "Spring Boot" },
      { thing: "React" },
      { thing: "GoF Design Patterns" },
      { thing: "REST API" },
    ],
    image: vericodeImg,
    featured: true,
  },
  // ── 6 ──────────────────────────────────────────────────
  {
    name: "Advanced Big Data Indexing System",
    tag: "Backend · Distributed Systems",
    description: [
      "Distributed REST API with JSON Schema validation, Redis for ETag-based key-value storage, and Elasticsearch for parent-child search indexing with nested aggregations.",
      "Implemented RabbitMQ message queue for asynchronous indexing, Google OAuth 2.0 with RS256 JWT verification, and CRUD with merge/PATCH support and cascaded deletes across store and index.",
    ],
    role: "Backend Development",
    githubUrl: "https://github.com/shreya2430/BigDataApplication",
    used: [
      { thing: "Node.js" },
      { thing: "Redis" },
      { thing: "Elasticsearch" },
      { thing: "RabbitMQ" },
      { thing: "Google OAuth 2.0" },
      { thing: "JWT (RS256)" },
    ],
    image: bigdataIndexing,
  },
  // ── 7 ──────────────────────────────────────────────────
  {
    name: "TicTacToe & Checkers with MCTS",
    tag: "Algorithms · AI",
    description: [
      "Implemented Monte Carlo Tree Search (UCB1 node selection, simulation, backpropagation) for TicTacToe and simplified Checkers from scratch in Java.",
      "Built a benchmarking suite with three difficulty levels (Easy / Medium / Hard) and a Java Swing GUI to visualize AI gameplay and performance across iteration counts.",
    ],
    role: "Solo Project",
    githubUrl: "https://github.com/shreya2430/TicTacToe-and-Checkers-using-MCTS",
    demoUrl: "https://www.youtube.com/shorts/nI6_HpAzkNE",
    used: [
      { thing: "Java" },
      { thing: "Java Swing" },
      { thing: "MCTS Algorithm" },
      { thing: "JUnit" },
    ],
    image: mcts,
  },
  // ── 8 ──────────────────────────────────────────────────
  {
    name: "PresenceHub",
    tag: "Backend · Spring Boot",
    description: [
      "Full-stack attendance management system with role-based access for Admin, Faculty, and Students. QR code-based attendance marking (ZXing), PDF report exports (iText), and dynamic dashboards.",
      "JWT stored in HttpOnly cookies + localStorage; APIs secured with @PreAuthorize; AJAX-powered UI for real-time updates without full page reloads.",
    ],
    role: "Full-Stack Development",
    githubUrl: "https://github.com/shreya2430/PresenceHub",
    used: [
      { thing: "Spring Boot" },
      { thing: "Hibernate" },
      { thing: "MySQL" },
      { thing: "JSP" },
      { thing: "JWT Auth" },
      { thing: "ZXing" },
      { thing: "iText PDF" },
    ],
    image: presenceHub,
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isClient, setIsClient] = useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const openModal = project => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = ""
  }

  React.useEffect(() => {
    const handleKey = e => {
      if (e.key === "Escape") closeModal()
    }
    if (selectedProject) window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedProject])

  if (!isClient) return null

  return (
    <>
      <section className="section other-projects">
        <div className="section__title">Projects</div>
        <div className="section__content projects-grid">
          {projectsData.map((project, index) => (
            <div
              className={`project project-card${project.featured ? " project-card--featured" : ""}`}
              key={index}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && openModal(project)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                {project.tag && (
                  <span className="project-tag">{project.tag}</span>
                )}
              </div>
              <div className="project-content">
                <div className="project__name">{project.name}</div>
                <p className="project__summary">{project.description[0]}</p>
                <div className="project__used">
                  {project.used.slice(0, 4).map((item, i) => (
                    <span key={i} className="project__used__item">
                      {item.thing}
                    </span>
                  ))}
                  {project.used.length > 4 && (
                    <span className="project__used__item project__used__more">
                      +{project.used.length - 4}
                    </span>
                  )}
                </div>
                <div className="project-links" onClick={e => e.stopPropagation()}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link--github"
                      title="GitHub"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link--live"
                      title="Live Demo"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                      </svg>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link--demo"
                      title="Demo Video"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                  )}
                  {project.architectureUrl && (
                    <a
                      href={project.architectureUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link--arch"
                      title="Architecture"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="project-modal"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.name}
          >
            <div
              className="modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeModal} aria-label="Close">
                ×
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="modal-image"
              />
              <div className="modal-body">
                {selectedProject.tag && (
                  <span className="modal-tag">{selectedProject.tag}</span>
                )}
                <h3 className="modal-title">{selectedProject.name}</h3>
                {selectedProject.role && (
                  <p className="modal-role">
                    <strong>Role:</strong> {selectedProject.role}
                  </p>
                )}
                <ul className="modal-description">
                  {selectedProject.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className="modal-tech-stack">
                  {selectedProject.used.map((item, i) => (
                    <span key={i} className="modal-tech-tag">
                      {item.thing}
                    </span>
                  ))}
                </div>
                <div className="modal-actions">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-btn btn-github"
                    >
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-btn btn-live"
                    >
                      Live Site
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-btn btn-demo"
                    >
                      Watch Demo
                    </a>
                  )}
                  {selectedProject.architectureUrl && (
                    <a
                      href={selectedProject.architectureUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-btn btn-arch"
                    >
                      Architecture
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Projects
