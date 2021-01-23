import React from "react";
import SectionsSuptitle from "../../repeatableCode/sectionsSuptitle/SectionsSuptitle";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import s from "./OurProduct.module.css";
import photo from "../../../img/portfolio/ourProduct/1.jpeg";
import icon from "../../../img/portfolio/featureImg/icon.png";

const OurProduct = (props) => {
  return (
    <div className={s.OurProductWrapper}>
      <SectionsTitle
        whiteFraction="our "
        redFraction="product features"
        marginStyle={s.marginSection}
      />
      <SectionsSuptitle />
      <div className={s.featuresBlock}>
        <LeftFeatures features={props.features} />
        <FeaturesPhoto />
        <LeftFeatures
          features={props.features}
          rightFeatures={s.rightFeatures}
        />
      </div>
    </div>
  );
};

const LeftFeatures = (props) => {
  const featuresItems = props.features.map((f) => {
    return (
      // <div className={s.featureItemWrapper}>
      <div className={s.featureItem + " " + props.rightFeatures}>
        {f.text}
        <img src={icon} />
      </div>
      // </div>
    );
  });
  return <div>{featuresItems}</div>;
};

const FeaturesPhoto = (props) => {
  return (
    <div className={s.featuresImg}>
      <div className={s.hexWrapper}>
        <div className={s.imgInnerWrapper}>
          <div className={s.imgWrapper}>
            <img src={photo} />
            <div className={s.camera}></div>
            <div className={s.homeButton}></div>
          </div>
        </div>
        <div className={s.hex}></div>
        <div className={s.hex + " " + s.left}></div>
        <div className={s.hex + " " + s.right}></div>
        <div className={s.square}></div>
        <div className={s.triangle}></div>
        <div className={s.triangleRight}></div>
        <div className={s.psdButton}>
          <a href="https://psdrepo.com/free-psd/creativia-one-page-template-freebie/">
            <button>Free PSD</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
