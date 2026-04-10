import * as React from "react"

import Seo from "../components/seo"
import Intro from "../components/intro/intro";
import Switch from "../components/switch/switch";
import "../scss/base.scss"
import "../scss/fonts.scss"
import Background from "../components/background/background";
import Skills from "../components/skills/skills";
import Experience from "../components/experience/experience";
import Projects from "../components/projects/projects";
import Beyond from "../components/beyond/beyond";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Scroll from "../components/scroll"
import ScrollProgress from "../components/scroll-progress/scroll-progress";

const IndexPage = () => (
  <>
    <ScrollProgress />
    <Scroll />
    <Seo/>
    <Switch />
    <Intro />
    <Background />
    <Skills />
    <Experience />
    <Projects />
    <Beyond />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
