import React from "react";
import s from "./Intro.module.css";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import IntroText from "./introText/IntroText";
import IntroBtns from "./introBtns/IntroBtns";

const Intro = (props) => {
  const leftArrowMouseDown = () => {
    props.setLeftArrowMouseDown();
  };
  const leftArrowMouseUp = () => {
    props.setLeftArrowMouseUp();
  };

  const rightArrowMouseDown = () => {
    props.setRightArrowMouseDown();
  };
  const rightArrowMouseUp = () => {
    props.setRightArrowMouseUp();
  };

  return (
    <header className={s.intro}>
      <div
        onMouseDown={leftArrowMouseDown}
        onMouseUp={leftArrowMouseUp}
        onMouseLeave={leftArrowMouseUp}
        className={
          s.arrow +
          " " +
          s.left +
          " " +
          (props.isLeftArrowMouseDown && s.leftMouseDown)
        }
      ></div>
      <div
        onMouseDown={rightArrowMouseDown}
        onMouseUp={rightArrowMouseUp}
        onMouseLeave={rightArrowMouseUp}
        className={
          s.arrow +
          " " +
          s.right +
          " " +
          (props.isRightArrowMouseDown && s.rightMouseDown)
        }
      ></div>

      <div className={s.introWrapper}>
        <SectionsTitle
          whiteFraction="why "
          redFraction="creativia ?"
          marginStyle={s.marginTitle}
          firstFractionColorStyle={s.firstFractionColor}
        />
        <IntroText introText={props.introText} />
        <IntroBtns />
      </div>
    </header>
  );
};

export default Intro;
