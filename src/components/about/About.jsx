import React from "react";

import Intro from "./intro/Intro";
import AboutUs from "./aboutUs/AboutUs";
import s from "./About.module.css";
import Footer from "../footer/Footer";

const About = (props) => {
  return (
    <div className={s.about}>
      <Intro
        introText={props.about.introText}
        isLeftArrowMouseDown={props.about.isLeftArrowMouseDown}
        isRightArrowMouseDown={props.about.isRightArrowMouseDown}
        setLeftArrowMouseDown={props.setLeftArrowMouseDown}
        setLeftArrowMouseUp={props.setLeftArrowMouseUp}
        setRightArrowMouseDown={props.setRightArrowMouseDown}
        setRightArrowMouseUp={props.setRightArrowMouseUp}
      />
      <AboutUs about={props.about} />
      <Footer />
    </div>
  );
};

export default About;
