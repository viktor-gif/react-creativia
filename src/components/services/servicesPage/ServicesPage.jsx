import React from "react";
import s from "./ServicesPage.module.css";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import SectionsSuptitle from "../../repeatableCode/sectionsSuptitle/SectionsSuptitle";
import Scroll from "../../repeatableCode/scroll/Scroll";

const ServicesPage = (props) => {
  const servicesItems = props.services.map((s) => {
    return <Service id={s.id} key={s.id} service={s.service} icon={s.icon} />;
  });
  return (
    <div className={s.servicesContainer}>
      <div className={s.servicesInner}>
        <SectionsTitle
          whiteFraction="our "
          redFraction="services"
          firstFractionColorStyle={s.titleColor}
          marginStyle={s.titleMargin}
        />
        <SectionsSuptitle colorStyle={s.suptitleStyle} />
        <div className={s.services}>{servicesItems}</div>
        <Scroll colorStyle={s.scrollStyle} />
      </div>
    </div>
  );
};

const Service = (props) => {
  return (
    <div className={s.service}>
      <div className={s.serviceHead}>
        <div className={s.serviceIcon}>
          <div className={s.hexContainer}>
            <div className={s.hex}></div>
            <div className={s.hex + " " + s.left}></div>
            <div className={s.hex + " " + s.right}></div>
          </div>
          <img src={props.icon} />
        </div>
        <h6>{props.service}</h6>
      </div>
      <div className={s.serviceDescription}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        delectus voluptate labore repellat quaerat nemo ad rem itaque, magnam
        odio aliquam voluptatibus quisquam nam, excepturi molestias suscipit
        dolorem ducimus ipsum!
      </div>
    </div>
  );
};

export default ServicesPage;
