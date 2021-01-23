import React from "react";
import s from "./Twitter.module.css";
import twitPhoto from "../../../img/services/twitter/background/twitter.jpeg";
import twitIcon from "../../../img/services/twitter/icon/twitter.png";
import Scroll from "../../repeatableCode/scroll/Scroll";

const Twitter = (props) => {
  return (
    <div className={s.twitterContainer}>
      <div className={s.twitterInner}>
        <img src={twitIcon} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          molestias totam eum illo ea pariatur doloremque fugit facere? Totam ex
        </p>
        <Scroll colorStyle={s.scrollStyle} />
      </div>
      <img className={s.imgBackground} src={twitPhoto} />
    </div>
  );
};

export default Twitter;
