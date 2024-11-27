import * as React from "react"
import "./intro.scss"
import profileImage from "../../img/profile.jpg"

const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Amod",
  afterName: ", a budding Software Developer with keen interest in data/ backend technologies.",
  contact: "Get in touch ",
  email: "amoddhopavkar2@gmail.com",
  mailTo: "mailto:amoddhopavkar2@gmail.com",
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
            <a href="./resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
            <br />
            <span>{introData.contact}</span>
            <span className="emoji pointer"></span>
            <span>
              <a href={introData.mailTo} className="highlight-link">{introData.email}</a>
            </span>
          </h3>
        </div>
        <div className="intro__image">
          <img src={profileImage} alt="Amod Dhopavkar" className="profile-image" />
        </div>
      </div>
    </header>
  );
};

export default Intro