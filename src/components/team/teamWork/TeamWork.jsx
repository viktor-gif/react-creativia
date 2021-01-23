import React from "react";
import SectionsSuptitle from "../../repeatableCode/sectionsSuptitle/SectionsSuptitle";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import Scroll from "../../repeatableCode/scroll/Scroll";
import s from "./TeamWork.module.css";
import facebook from "../../../img/team/teamWork/icons/facebook.png";

const TeamWork = (props) => {
  const teamWorkItems = props.teamWork.map((t) => {
    return (
      <Worker
        id={t.id}
        key={t.id}
        photo={t.photo}
        name={t.name}
        position={t.position}
        setActiveWorkerImg={props.setActiveWorkerImg}
        deleteActiveWorkerImg={props.deleteActiveWorkerImg}
        isActiveWorkerImg={props.isActiveWorkerImg}
        icons={props.icons}
      />
    );
  });
  return (
    <div className={s.teamWorkContainer}>
      <SectionsTitle whiteFraction="our " redFraction="teamwork" />
      <SectionsSuptitle />
      <div className={s.teamWork}>{teamWorkItems}</div>
      <Scroll />
    </div>
  );
};

const Worker = (props) => {
  return (
    <div className={s.worker}>
      <div className={s.workerImg}>
        <div
          onMouseOver={props.setActiveWorkerImg}
          onMouseLeave={props.deleteActiveWorkerImg}
          className={s.workerImgContainer}
        >
          <img src={props.photo} />
        </div>
        {/* {props.isActiveWorkerImg && ( */}
        <div className={s.workersSotialNetworks}>
          <WorkersSotialNetworks
            icons={props.icons}
            isActiveWorkerImg={props.isActiveWorkerImg}
          />
        </div>
        {/* )} */}
      </div>
      <div className={s.workerName}>{props.name}</div>
      <div className={s.workerPosition}>{props.position}</div>
    </div>
  );
};

const WorkersSotialNetworks = (props) => {
  const HexagonsItems = props.icons.map((i) => {
    return <Hexagon id={i.id} key={i.id} icon={i.icon} />;
  });
  return (
    <div>
      {props.isActiveWorkerImg && (
        <div className={s.networkBanch}>{HexagonsItems}</div>
      )}
    </div>
  );
};

const Hexagon = (props) => {
  return (
    <div className={s.hexContainer}>
      <div className={s.hex}></div>
      <div className={s.hex + " " + s.left}></div>
      <div className={s.hex + " " + s.right}></div>
      <div className={s.networkIcon}>
        <img src={props.icon} />
      </div>
    </div>
  );
};

export default TeamWork;
