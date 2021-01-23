import React from "react";
import s from "./SectionsTitle.module.css";

const SectionsTitle = (props) => {
  return (
    <h2 className={s.SectionsTitle + " " + props.marginStyle}>
      <span className={props.firstFractionColorStyle}>
        {props.whiteFraction}
      </span>
      <span className={s.RedFraction}>{props.redFraction}</span>
    </h2>
  );
};

export default SectionsTitle;
