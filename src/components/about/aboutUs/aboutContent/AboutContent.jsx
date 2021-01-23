import React from "react";
import s from "./AboutContent.module.css";
import AboutUsAdvantages from "./aboutUsAdvantages/AboutUsAdvantages";
import AboutUsInfo from "./aboutUsInfo/AboutUsInfo";

const AboutContent = (props) => {
  return (
    <section className={s.main}>
      <div className={s.aboutUsInfo}>
        <AboutUsInfo about={props.about} />
      </div>
      <div className={s.AboutUsAdvantages}>
        <AboutUsAdvantages advantages={props.about.advantages} />
      </div>
    </section>
  );
};

export default AboutContent;
