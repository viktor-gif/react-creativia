import React from "react";
import s from "./LogoNavbar.module.css";

const LogoNavbar = () => {
  return (
    <div className={s.logosContainer}>
      <div className={s.logoNavbar}>
        {/* <div className={s.logoTextContainer}> */}
        <div className={s.logoText}>Creativia</div>
        {/* </div> */}
        <div className={s.figure}>
          <div className={s.figureLeft}></div>
          <div className={s.figureCenter}></div>
          <div className={s.figureRight}></div>
        </div>
      </div>
      <div className={s.logoForSmallDisplays}>Creativia</div>
    </div>
  );
};

export default LogoNavbar;
