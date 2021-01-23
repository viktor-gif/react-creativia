import React from "react";
import s from "./IntroText.module.css";

const IntroText = (props) => {
  return <div className={s.IntroText}>{props.introText[0].text}</div>;
};

export default IntroText;
