import React from "react";
import OurProduct from "./ourProduct/OurProduct";
import PortfolioPage from "./portfolioPage/PortfolioPage";
import s from "./Portfolio.module.css";
import Footer from "../footer/Footer";

const Portfolio = (props) => {
  return (
    <section className={s.portfolio}>
      <PortfolioPage />
      <OurProduct features={props.features} />
      <Footer />
    </section>
  );
};

export default Portfolio;
