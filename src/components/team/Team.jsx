import React from "react";
import TeamWork from "./teamWork/TeamWork";
import Skills from "./skills/Skills";
import s from "./Team.module.css";

const Team = (props) => {
  return (
    <div className={s.teamContainer}>
      <div className={s.teamInner}>
        <TeamWork
          teamWork={props.teamWork}
          icons={props.icons}
          setActiveWorkerImg={props.setActiveWorkerImg}
          deleteActiveWorkerImg={props.deleteActiveWorkerImg}
          isActiveWorkerImg={props.isActiveWorkerImg}
        />
        <Skills skills={props.skills} />
      </div>
    </div>
  );
};

export default Team;
