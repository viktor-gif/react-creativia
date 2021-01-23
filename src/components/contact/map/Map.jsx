import React from "react";
import s from "./Map.module.css";
import SectionsTitle from "../../repeatableCode/sectionsTitle/SectionsTitle";
import SectionsSuptitle from "../../repeatableCode/sectionsSuptitle/SectionsSuptitle";
import Footer from "../../footer/Footer";
import map from "../../../img/contacts/map/map.jpeg";

const Map = (props) => {
  return (
    <div>
      <div>
        <SectionsTitle
          whiteFraction="Fine us "
          redFraction="here"
          marginStyle={s.marginHeader}
        />
        <SectionsSuptitle />
        <div className={s.mapImg}>
          <MapInfo />
          <FormContact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const MapInfo = (props) => {
  return (
    <div className={s.mapInfo}>
      <address>
        <span>Egypt, Creativia</span>
        <br />
        Address: cairo 123
        <br />
        Phone: +0201091915171
        <br />
        Email: gfx3mr@gmail.com
      </address>
      <div className={s.locationPointer}></div>
    </div>
  );
};

const FormContact = (props) => {
  return (
    <div className={s.formContainer}>
      Send message
      <form>
        <div>
          Name <input type="text" />
        </div>
        <div>
          Email <input type="email" />
        </div>
        <div>
          Subject <input type="text" />
        </div>

        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Map;
