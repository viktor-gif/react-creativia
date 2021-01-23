import React from "react";
import s from "./Skills.module.css";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import SectionsSuptitle from "../../repeatableCode/sectionsSuptitle/SectionsSuptitle";

const Skills = (props) => {
  const skillsItems = props.skills.map((s) => {
    return (
      <SkillItem
        id={s.id}
        key={s.key}
        percent={s.percent}
        skill={s.skill}
        description={s.description}
      />
    );
  });
  return (
    <div className={s.skillsContainer}>
      <SectionsTitle whiteFraction="our " redFraction="Skills" />
      <SectionsSuptitle />
      <div className={s.skills}>{skillsItems}</div>
    </div>
  );
};

const SkillItem = (props) => {
  return (
    <div className={s.skill}>
      <div className={s.percent}>
        <span>{props.percent}</span>%
      </div>
      <h4>{props.skill}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default Skills;
