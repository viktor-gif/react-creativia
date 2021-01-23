import React from "react";
import s from "./Scroll.module.css";

const Scroll = (props) => {
  return (
    <div
      className={s.scroll + " " + props.colorStyle + " " + props.hiddenStyle}
    >
      <div className={s.slider}>
        <div className={s.figure + " " + props.colorStyle}></div>
        <div className={s.figure + " " + s.left + " " + props.colorStyle}></div>
        <div
          className={s.figure + " " + s.right + " " + props.colorStyle}
        ></div>
      </div>
    </div>
  );
};

export default Scroll;
