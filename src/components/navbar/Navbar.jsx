import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import LogoNavbar from "./logoNavbar/LogoNavbar";
import { useState } from "react";

const Navbar = (props) => {
  const [activeSandwitchBar, setActiveSandwitchBar] = useState(false);

  const toggleActivateSandwitchBar = () => {
    if (activeSandwitchBar === false) {
      setActiveSandwitchBar(true);
    } else {
      setActiveSandwitchBar(false);
    }
  };

  return (
    <div className={s.navbar}>
      <div className={s.navbarContainer}>
        <LogoNavbar />

        <nav className={s.navLinks}>
          <div className={s.navLinkContainer}>
            <NavLink to="/home">home</NavLink>
          </div>
          <div className={s.navLinkContainer}>
            <NavLink to="/about">about</NavLink>
          </div>
          <div className={s.navLinkContainer}>
            <NavLink to="/portfolio">portfolio</NavLink>
          </div>
          <div className={s.navLinkContainer}>
            <NavLink to="/clients">clients</NavLink>
          </div>
          <div className={s.navLinkContainer}>
            <NavLink to="/team">team</NavLink>
          </div>
          <div className={s.navLinkContainer}>
            <NavLink to="/services">services</NavLink>
          </div>
          <div className={s.navLinkContainer}>
            <NavLink to="/blog">blog</NavLink>
          </div>
          <div className={s.navLinkContainer}>
            <NavLink to="/contacts">contacts</NavLink>
          </div>
        </nav>

        {activeSandwitchBar && (
          <nav className={s.activeLinks}>
            <div className={s.activeLinkContainer}>
              <NavLink to="/home">home</NavLink>
            </div>
            <div className={s.activeLinkContainer}>
              <NavLink to="/about">about</NavLink>
            </div>
            <div className={s.activeLinkContainer}>
              <NavLink to="/portfolio">portfolio</NavLink>
            </div>
            <div className={s.activeLinkContainer}>
              <NavLink to="/clients">clients</NavLink>
            </div>
            <div className={s.activeLinkContainer}>
              <NavLink to="/team">team</NavLink>
            </div>
            <div className={s.activeLinkContainer}>
              <NavLink to="/services">services</NavLink>
            </div>
            <div className={s.activeLinkContainer}>
              <NavLink to="/blog">blog</NavLink>
            </div>
            <div className={s.activeLinkContainer}>
              <NavLink to="/contacts">contacts</NavLink>
            </div>
          </nav>
        )}

        <div
          onClick={toggleActivateSandwitchBar}
          className={s.sandwitchBarContainer}
        >
          <div
            className={
              activeSandwitchBar ? s.sandwitchBar : s.deactivatedSandwitchBar
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// isActiveSandwitchBar ? s.sandwitchBar :
