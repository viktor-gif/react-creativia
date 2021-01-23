import React from "react";
import SectionsSuptitle from "../../repeatableCode/sectionsSuptitle/SectionsSuptitle";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import s from "./Bestseller.module.css";

const Bestseller = (props) => {
  return (
    <div className={s.bestsellerContainer}>
      <div className={s.bestsellerInner}>
        <SectionsTitle
          whiteFraction="Plans "
          redFraction="Bestseller"
          marginStyle={s.titleMargin}
        />
        <SectionsSuptitle colorStyle={s.suptitleStyle} />
        <div className={s.resellers}>
          <Reseller />
          <Reseller />
          <Reseller />
          <Reseller />
        </div>
      </div>
    </div>
  );
};

const Reseller = (props) => {
  return (
    <div className={s.reseller}>
      <h4>Reseller</h4>
      <div>
        199$ <span>year</span>
      </div>
      <button>Oreder now</button>
    </div>
  );
};

export default Bestseller;
