import React from "react";
import s from "./Hexagon.module.css";

const Hexagon = (props) => {
  return (
    <div className={s.hexContainer}>
      <div className={s.hex}></div>
      <div className={s.hex + " " + s.left}></div>
      <div className={s.hex + " " + s.right}></div>
    </div>
  );
};

export default Hexagon;
// + " " + props.additionStyle
