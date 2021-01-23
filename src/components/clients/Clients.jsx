import React from "react";
import SectionsSuptitle from "../repeatableCode/sectionsSuptitle/SectionsSuptitle";
import SectionsTitle from "../repeatableCode/sectionsTitle/SectionsTitle";
import Footer from "../footer/Footer";
import s from "./Clients.module.css";
import userImg from "../../img/clients/user/1.jpeg";
import Scroll from "../repeatableCode/scroll/Scroll";

const Clients = (props) => {
  return (
    <div className={s.clients}>
      <div className={s.clientsWrapper}>
        <SectionsTitle
          whiteFraction="our "
          redFraction="clients"
          firstFractionColorStyle={s.firstFractionTitleColorStyle}
          marginStyle={s.firstFractionMarginStyle}
        />
        <SectionsSuptitle colorStyle={s.SuptitleStyle} />
        <HappyClients clientsFeatures={props.clientsFeatures} />
      </div>
      <Scroll
        colorStyle={s.scrollColorStyle}
        hiddenStyle={s.scrollHiddenStyle}
      />
      <Footer />
    </div>
  );
};

const HappyClients = (props) => {
  const clientsFeaturesItems = props.clientsFeatures.map((c) => (
    <ClientFeatureItem id={c.id} key={c.id} icon={c.icon} text={c.text} />
  ));
  return (
    <div className={s.happyClientsWrapper}>
      <div className={s.happyClientsInner}>
        <h4>Happy clients say</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          dolores, consectetur adipisicing elit. Cumque, dolores
        </p>
        <div className={s.clientImg}>
          <img src={userImg} />
        </div>
        <div className={s.clientsScroll}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={s.clientsFeatures}>{clientsFeaturesItems}</div>
    </div>
  );
};

const ClientFeatureItem = (props) => {
  return (
    <div>
      <img src={props.icon}></img>
      {props.text}
    </div>
  );
};

export default Clients;
