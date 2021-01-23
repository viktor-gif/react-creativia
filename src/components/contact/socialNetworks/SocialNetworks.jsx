import React from "react";
import s from "./SocialNetworks.module.css";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import Hexagon from "../../repeatableCode/hexagon/Hexagon";

const SocialNetworks = (props) => {
  return (
    <div className={s.networksContainer}>
      <SectionsTitle
        whiteFraction="Follow "
        redFraction="Creativia"
        firstFractionColorStyle={s.headerColor}
        marginStyle={s.headerMargin}
      />
      <Networks />
    </div>
  );
};

const Networks = (props) => {
  return (
    <div className={s.netWorks}>
      <div className={s.netWork}>
        <div className={s.cube}>
          <div>
            <Hexagon />
          </div>
          <div className={s.followersMount}>20 000</div>
        </div>
      </div>
      <div className={s.netWork}>
        <div className={s.cube}>
          <div>
            <Hexagon />
          </div>
          <div className={s.followersMount}>99 900</div>
        </div>
      </div>
      <div className={s.netWork}>
        <div className={s.cube}>
          <div>
            <Hexagon />
          </div>
          <div className={s.followersMount}>5 000</div>
        </div>
      </div>
      <div className={s.netWork}>
        <div className={s.cube}>
          <div>
            <Hexagon />
          </div>
          <div className={s.followersMount}>2000</div>
        </div>
      </div>
    </div>
  );
};

export default SocialNetworks;
