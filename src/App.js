import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarContainer from "./components/navbar/NavbarContainer";
import AboutContainer from "./components/about/AboutContainer";
import PortfolioContainer from "./components/portfolio/PortfolioContainer";
import ClientsContainer from "./components/clients/ClientsContainer";
import TeamContainer from "./components/team/TeamContainer";
import ServicesContainer from "./components/services/ServicesContainer";
import BlogContainer from "./components/blog/BlogContainer";
import ContactsContainer from "./components/contact/ContactsContainer";
import Footer from "./components/footer/Footer";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Route path="/about" render={() => <AboutContainer />} />
        <Route path="/portfolio" render={() => <PortfolioContainer />} />
        <Route path="/clients" render={() => <ClientsContainer />} />
        <Route path="/team" render={() => <TeamContainer />} />
        <Route path="/services" render={() => <ServicesContainer />} />
        <Route path="/blog" render={() => <BlogContainer />} />
        <Route path="/contacts" render={() => <ContactsContainer />} />
      </div>
    </div>
  );
};

export default App;
