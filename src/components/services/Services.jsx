import React from "react";
import Footer from "../footer/Footer";
import Bestseller from "./bestseller/Bestseller";
import ServicesPage from "./servicesPage/ServicesPage";
import Twitter from "./twitter/Twitter";

const Services = (props) => {
  return (
    <section>
      <ServicesPage services={props.services} />
      <Bestseller />
      <Twitter />
      <Footer />
    </section>
  );
};

export default Services;
