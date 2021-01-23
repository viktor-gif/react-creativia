import React from "react";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import s from "./PortfolioPage.module.css";
import photo1 from "../../../img/portfolio/portfolioPageImg/1.jpeg";
import photo2 from "../../../img/portfolio/portfolioPageImg/2.jpeg";
import photo3 from "../../../img/portfolio/portfolioPageImg/3.jpeg";
import photo4 from "../../../img/portfolio/portfolioPageImg/4.jpeg";
import photo5 from "../../../img/portfolio/portfolioPageImg/5.jpeg";
import photo6 from "../../../img/portfolio/portfolioPageImg/6.jpeg";
import photo7 from "../../../img/portfolio/portfolioPageImg/7.jpeg";
import photo8 from "../../../img/portfolio/portfolioPageImg/8.jpeg";
import Scroll from "../../repeatableCode/scroll/Scroll";

const PortfolioPage = (props) => {
  return (
    <div className={s.portfolioPage}>
      <SectionsTitle
        whiteFraction="portfolio"
        redFraction=""
        marginStyle={s.marginTiltle}
        firstFractionColorStyle={s.firstFractionColor}
      />
      <PortfolioSuptitle />
      <div className={s.lists}>
        {/* <div className={s.imgRow}>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo1} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo2} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo3} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo4} />
            </div>
          </div>
        </div>
        <div className={s.imgRow + " " + s.second}>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo5} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo6} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo7} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo8} />
            </div>
          </div>
        </div> */}
        <div className={s.imgRow}>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo1} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo2} />
            </div>
          </div>
        </div>
        <div className={s.imgRow + " " + s.beneath + " " + s.second}>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo3} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo4} />
            </div>
          </div>
        </div>
        <div className={s.imgRow + " " + s.beneath}>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo5} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo6} />
            </div>
          </div>
        </div>
        <div className={s.imgRow + " " + s.beneath}>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo7} />
            </div>
          </div>
          <div className={s.innerImg}>
            <div className={s.imgContainer}>
              <img src={photo8} />
            </div>
          </div>
        </div>
      </div>
      <Scroll colorStyle={s.colorScroll} />
    </div>
  );
};

const PortfolioSuptitle = (props) => {
  return (
    <div className={s.suptitle}>
      All<span>illustration</span>digitallart webdesign
    </div>
  );
};

export default PortfolioPage;
