import * as React from "react"
import "./intro.scss"
import profileImage from "../../img/profile.jpg"
import resume from "../../../public/resume.pdf"

const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Shreya",
  afterName: " — a Software Engineer passionate about building scalable backend systems and solving complex engineering challenges.",
  contact: "Get in touch ",
  email: "shreyawanisha1221@gmail.com",
  mailTo: "mailto:shreyawanisha1221@gmail.com",
  profileImage: profileImage,
};

const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseOver = _ => {
    setIsHovering(true);
  };
  const onMouseOut = _ => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Shreya_Wanisha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="intro">
      <div className="intro__content">
        <div className="intro__text">
          <h1 className="intro__hello">{introData.title}
            <span className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onFocus={onMouseOver} onBlur={onMouseOut} role="button" tabIndex={0} aria-label="wave hand"></span>
          </h1>

          <h2 className="intro__tagline">{introData.beforeName}
            <span className="name">{introData.name}</span>{introData.afterName}
            <span className="emoji technologist"></span>
          </h2>

          <h3 className="intro__contact">
            <button 
              onClick={downloadResume} 
              className="arrow-link download-btn" 
              style={{
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                font: 'inherit', 
                color: 'inherit',
                padding: '2px 3px',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Download Resume
            </button>
            <br />
            <span>{introData.contact}</span>
            <span className="emoji pointer"></span>
            <span>
              <a href={introData.mailTo} className="highlight-link">{introData.email}</a>
            </span>
          </h3>
        </div>
        <div className="intro__image">
          <img src={profileImage} alt="Shreya Wanisha" className="profile-image" />
        </div>
      </div>
    </header>
  );
};

export default Intro