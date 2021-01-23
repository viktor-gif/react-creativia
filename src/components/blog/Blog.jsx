import React from "react";
import s from "./Blog.module.css";
import SectionsSuptitle from "../repeatableCode/sectionsSuptitle/SectionsSuptitle";
import SectionsTitle from "../repeatableCode/sectionsTitle/SectionsTitle";
import photo1 from "../../img/blog/photo/1.jpeg";
import photo2 from "../../img/blog/photo/2.jpeg";
import Footer from "../footer/Footer";
import icon1 from "../../img/blog/icons/1.png";
import icon2 from "../../img/blog/icons/2.png";
import icon3 from "../../img/blog/icons/3.png";

const Blog = (props) => {
  return (
    <section className={s.blogContainer}>
      <div className={s.blogInner}>
        <SectionsTitle
          whiteFraction="our "
          redFraction="Blog"
          marginStyle={s.titleStyle}
        />
        <SectionsSuptitle />
        <div className={s.blog}>
          <BlogItems />
        </div>
        <div className={s.more}>
          <div className={s.arrow}></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

const BlogItems = (props) => {
  return (
    <div className={s.blogItems}>
      <div className={s.blogItem}>
        <div className={s.avatar}>
          <img src={photo1} />
        </div>
        <BlogInfo />
      </div>
      <div className={s.blogItem}>
        <div className={s.avatar}>
          <img src={photo2} />
        </div>
        <BlogInfo />
      </div>
    </div>
  );
};

const BlogInfo = (props) => {
  let blogText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenititenetur deserunt quis, accusamus totam iure culpa provident sint, atdelectus a voluptate! Tempore expedita deleniti quas rerum assumendaamet nihil. Tempora praesentium sed quaerat, sunt magnam sintrepellendus aperiam itaque voluptatem recusandae eaque magni ducimusest adipisci, ipsa optio reprehenderit voluptatum nemo distinctioquasi et eos nihil quis! Iste, corporis. Hic nobis ratione ipsum,eveniet possimus consequuntur sit laudantium incidunt quaeratcorporis magni molestias cupiditate.";
  return (
    <div className={s.blogInfo}>
      <h4>Lorem ipsum dolor sit amet, consectetur</h4>
      <div className={s.blogMeta}>
        <img src={icon1} alt="" />
        <span>admin</span>
        <img src={icon2} alt="" />
        <span>1205</span>
        <img src={icon3} alt="" />
        <span>1205</span>
      </div>
      <p>{blogText.length < 200 ? blogText : blogText.slice(0, 201) + "..."}</p>
      <button>View more</button>
    </div>
  );
};

export default Blog;
