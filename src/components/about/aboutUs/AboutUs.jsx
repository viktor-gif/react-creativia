import React from "react";
import s from "./AboutUs.module.css";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import SectionsSuptitle from "../../repeatableCode/sectionsSuptitle/SectionsSuptitle";
import AboutContent from "./aboutContent/AboutContent";

const AboutUs = (props) => {
  return (
    <section className={s.AboutUs}>
      <div className={s.aboutWrapper}>
        <SectionsTitle
          whiteFraction="about "
          redFraction="creativia"
          marginStyle={s.marginTitle}
          firstFractionColorStyle={s.firstFractionColor}
        />
        <SectionsSuptitle
          colorStyle={s.color}
          marginBottom={s.marginSuptitle}
        />
        <AboutContent about={props.about} />
      </div>
    </section>
  );
};

export default AboutUs;
