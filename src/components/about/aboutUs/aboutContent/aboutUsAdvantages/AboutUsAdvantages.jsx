import React from "react";
import s from "./AboutUsAdvantages.module.css";
import heart from "../../../../../img/about/icons/heart.png";

const AdvantageItem = (props) => {
  return (
    <div>
      <div className={s.iconHexagon}>
        <img src={props.icon} />
        <div className={s.iconHexagon + " " + s.left}></div>
        <div className={s.iconHexagon + " " + s.right}></div>
      </div>
      <div className={s.title}>
        <h3>{props.title}</h3>
      </div>
      <div className={s.advantage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ut
        incidunt deleniti, modi iste dolor sapiente porro est voluptatem tempore
        quisquam saepe cumque aliquid vero eaque. Ex fuga assumenda iure.
      </div>
    </div>
  );
};

const AboutUsAdvantages = (props) => {
  const advantagesItems = props.advantages.map((a) => {
    return <AdvantageItem id={a.id} key={a.id} icon={a.icon} title={a.title} />;
  });
  return <div className={s.main}>{advantagesItems}</div>;
};

export default AboutUsAdvantages;
