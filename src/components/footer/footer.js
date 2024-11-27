import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:amoddhopavkar2@gmail.com"
  },
  {
    "title": "github",
    "url": "https://github.com/amoddhopavkar2"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/amoddho2/"
  },
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="top">
        <span>Developed by&nbsp;</span>
      </div>
      <div className="bottom">
        <span>Amod Dhopavkar</span>
        <img className="emoji" src="./images/emojis/rockon.png" alt="emoji"/>
          <span>2024</span>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
