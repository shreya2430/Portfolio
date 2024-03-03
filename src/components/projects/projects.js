import * as React from "react"
import Parser from 'html-react-parser';
import "./projects.scss"

const projectsData = [
  {
    "name": "Kitchen Chronicles",
    "url": "https://leafy-gumption-a6a15e.netlify.app/",
    "description": "I built and launched the Kitchen Chronicles web app to showcase my expertise across modern frameworks. I crafted an intuitive UI with React.js featuring smooth search and pagination. Leveraging MongoDB and Express.js, I developed a scalable cloud database and REST API backend enabling secure access to recipe data. To manage complex state, I applied Redux Hooks for seamless data flow. For UX, my responsive design enabled mobile and desktop ease-of-use. By integrating JWT authentication, I enabled key feature protection, applying industry security norms. Deployed on Netlify and Render, this project highlights my adeptness with high-performance stacks to construct consumer web apps with appealing design, protected access, and optimized data loading. <br> <a class='small' href='https://github.com/amoddhopavkar2/kitchen-chronicles-react-app'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "MongoDB"},
      {"thing": "Node.js"},
      {"thing": "React.js"},
      {"thing": "Express.js"},
      {"thing": "Redux"},
      {"thing": "Redux Hooks"},
      {"thing": "JWT Authentication"},
      {"thing": "REST APIs"},
    ]
  },
  {
    "name": "Inventory Management System",
    "description": "I engineered an Inventory Management web application using a robust cloud technology stack. Developing the front-end UI with React.js allowed me to create highly responsive and intuitive inventory dashboards. By leveraging Node.js with Express.js for the back-end APIs, I provided robust real-time inventory tracking and order management functionalities. Further, hosting the PostgreSQL database on Amazon RDS optimized infrastructure scalability and reliability. My expertise across the full-stack along with the leveraging of AWS's managed database services led to an Inventory Management System with enterprise-grade performance levels. This project highlights my systems design capabilities spanning UI development, cloud APIs, and choice of efficient data persistence layers.",
    "used": [
      {"thing": "Node.js"},
      {"thing": "Express.js"},
      {"thing": "React.js"},
      {"thing": "Amazon Web Services (AWS)"},
      {"thing": "AWS - RDS"},
      {"thing": "PostgreSQL"},
    ]
  },
  {
    "name": "MoneyMagnet: Stock Market Portfolio Management & Simulation",
    "description": "I developed a Java-based desktop application following the MVC design pattern, enabling advanced portfolio management and simulation. I engineered a user-friendly platform that offers real-time stock portfolio management, providing investors with invaluable insights and tools for informed decision-making. I seamlessly integrated the Alphavantage API into the application, ensuring access to precise and up-to-date stock data, enhancing the overall functionality and accuracy of portfolio management. I facilitated data-driven investment strategies by creating a dynamic interface that allows users to track their investments, assess market trends, and optimize their portfolios.",
    "used": [
      {"thing": "Java"},
      {"thing": "Maven"},
      {"thing": "Java - Swing"},
      {"thing": "REST APIs"},
      {"thing": "Model View Controller (MVC)"},
      {"thing": "Pair Programming"},
      {"thing": "Software Design Patterns"},
      {"thing": "API Integration & Testing"},
    ]
  },
  {
    "name": "Packet Tracer for the Distributed Replicated Block Device (DRBD)",
    "description": "As part of my collaboration with Veritas, I enhanced the open-source Distributed Replicated Block Device by creating a custom packet tracer within its kernel module to collect invaluable performance data. By programming the module in C and integrating debugging tools, I gained deep visibility into packet-level operations, enabling a 22% boost in platform performance. Further, by applying a Binary Classifier machine learning model to identify potential outages from packet patterns, I reduced active downtime by 36%. My kernel programming and ML innovations unlocked actionable analytics, optimized reliability, and highlighted impactful innovation on a widely adopted open-source project.",
    "used": [
      {"thing": "Kernel Programming"},
      {"thing": "C"},
      {"thing": "Open-Source"},
      {"thing": "CScope"},
      {"thing": "Machine Learning"},
      {"thing": "Binary Classifier"},
    ]
  },
  {
    "name": "COVID-19 Face Mask & Temperature Detection System",
    "description": "The COVID-19 Face Mask & Temperature Detection System uses OpenCV and Python for real-time enforcement of COVID safety protocols. The system leverages computer vision to detect if people are wearing masks over their mouths and noses. Additionally, it estimates facial skin temperature to identify potential fevers. If mask or fever violations are detected, alerts are triggered for administrative intervention. Built using OpenCV and PyTorch libraries, this system enables automated compliance monitoring to minimize virus transmission by instantly flagging risky cases for further screening. The key benefits are rapid detection capabilities, minimization of human oversight needs, and scalable deployment options for diverse locations. Overall, the system combines efficiency and public health safeguarding to enforce safety amid the challenges of an ongoing pandemic.",
    "used": [
      {"thing": "Python"},
      {"thing": "OpenCV"},
      {"thing": "Pytorch"},
      {"thing": "Computer Vision"},
    ]
  },
  {
    "name": "Automated Credit Risk Analysis",
    "description": "The Automated Credit Risk Analysis system utilizes a Random Forest Classifier machine learning model to automate credit risk assessment, eliminating the need for manual verification. Developed in Python using libraries like Pandas, NumPy and Scikit-Learn, the system extracts applicant financial data, builds a classification algorithm with decision trees, and predicts likely loan defaults with up to 95% accuracy. Core benefits are faster loan approvals, lowered risk, and quick auto-generation of credit analysis reports for stakeholders. This system accelerates processes through data-based automation, allowing human efforts to focus on higher complexity tasks.",
    "used": [
      {"thing": "Python"},
      {"thing": "Numpy"},
      {"thing": "Pandas"},
      {"thing": "Machine Learning"},
      {"thing": "Random Forest Classifier"},
      {"thing": "Scikit-Learn"},
      {"thing": "Decision Trees"},
    ]
  },
  {
    "name": "Online Library Management System",
    "description": "The Online Library Management System is a full-stack web application developed to digitize and automate a university library's book management operations. Core functionalities include tracking current inventory across catalogues, issuing and returning books, along with member and subscription management. Built using MongoDB, Express.js, AngularJS, Node.js and REST APIs, this system enables seamless book record-keeping, transaction logs, real-time book availability checks, and analytics reports to optimize library collections. Key benefits are automation of manual processes, improved accuracy of book histories, and enhanced accessibility to students and librarians by providing self-service online interfaces.",
    "used": [
      {"thing": "MongoDB"},
      {"thing": "AngularJS"},
      {"thing": "Express.js"},
      {"thing": "Node.js"},
      {"thing": "REST APIs"},
    ]
  },
  {
    "name": "Smart Tax Rebate Calculator",
    "description": "The Smart Tax Rebate Calculator is a web application that streamlines tax computations for products by automatically calculating federal, state, and local tax rates using integrated databases. Its key innovation is the intelligent computation of applicable tax rebates for each product based on rebate histories to maximize deductions. By leveraging rebate analytics and automated rate calculations, this application reduces manual computation work by over 50+ hours each cycle, enabling finance teams to focus on value-add analysis. The tool provides accurate, automated tax calculations while optimizing eligible tax rebates.",
    "used": [
      {"thing": "MySQL"},
      {"thing": "HTML"},
      {"thing": "CSS"},
      {"thing": "Bootstrap"},
    ]
  },
  {
    "name": "Twitter Bot",
    "description": "I leveraged my expertise in API integration to create an intelligent Twitter Bot. Using the Twitter API and tweepy library, I designed a convenient bot interface accepting keyword and tweet count inputs. Integrating seamlessly via secure API keys, my programmatic solution identifies the latest relevant tweets and efficiently likes them on the user's behalf.",
    "used": [
      {"thing": "Python"},
      {"thing": "API Integration"},
      {"thing": "API Testing"},
    ]
  },
]

const Projects = () => (
  <section className="section other-projects">
    <div className="section__title">Projects</div>
    <div className="section__content">
      {
        projectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default Projects
