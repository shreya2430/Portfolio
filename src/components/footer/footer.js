import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:shreyawanisha1221@gmail.com"
  },
  {
    "title": "github",
    "url": "https://github.com/shreya2430"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/shreya-wanisha/"
  },
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="top">
        <span>Developed by &nbsp;</span>
      </div>
      <div className="bottom">
        <span>Shreya Wanisha</span>
        {/* <img className="emoji" src="./images/emojis/rockon.png" alt="emoji"/> */}
          <span> &copy; 2025</span>
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
