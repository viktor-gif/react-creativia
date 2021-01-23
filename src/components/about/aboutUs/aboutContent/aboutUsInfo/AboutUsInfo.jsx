import React from "react";
import Scroll from "../../../../repeatableCode/scroll/Scroll";
import AboutUsAccordeonItem from "./aboutUsAccordeonItem/AboutUsAccordeonItem";
import s from "./AboutUsInfo.module.css";
import image1 from "../../../../../img/about/img/1.jpeg";

const AboutUsGallery = (props) => {
  return (
    <div className={s.hexagon}>
      {/* <img src={image1} alt="dgdh" /> */}
      <div className={s.hexagon + " " + s.left}></div>
      <div className={s.hexagon + " " + s.right}></div>
      {/* <img src="" alt="" />
      <img src="" alt="" /> */}
    </div>
  );
};

const AboutUsInfo = (props) => {
  let accordeon = props.about.accordeon;

  let aboutAccordeon = accordeon.map((a) => (
    <AboutUsAccordeonItem id={a.id} key={a.id} header={a.header} />
  ));

  return (
    <div className={s.main}>
      <div>
        <div className={s.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          veniam dolore eveniet, amet cumque aperiam placeat atque sint illo
          ipsa aut quae vel animi? Consequuntur, non iusto. Aut, obcaecati
          maiores! Ab omnis distinctio repellendus est consequatur nihil rerum?
          Aut aliquid eveniet perferendis nobis, vitae placeat, nisi a adipisci
          tenetur cumque sapiente neque labore repudiandae eaque saepe
          recusandae rem? Quam, sequi?
        </div>
        {aboutAccordeon}
      </div>
      <div className={s.aboutGallery}>
        <AboutUsGallery />
      </div>
      <div className={s.scroll}>
        <Scroll />
        {/* <svg
          viewBox="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="img"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image href={image1} x="-25" width="150" height="100" />
            </pattern>
          </defs>
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />
        </svg> */}
      </div>
    </div>
  );
};

export default AboutUsInfo;
