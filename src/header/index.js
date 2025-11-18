import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="header-left" onClick={scrollToHome} style={{cursor: 'pointer'}}>
          <div className="nav_ac">{logotext}</div>
        </div>
        <div className="header-right">
          <div className="theme-toggle-wrapper">
            <Themetoggle />
          </div>
          <button className="menu__button" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <div className="menu-header">
                  <button className="menu__close" onClick={handleToggle}>
                    <VscClose />
                  </button>
                </div>
                <ul className="the_menu">
                  <li className="menu_item">
                    <span onClick={() => { scrollToSection('home'); handleToggle(); }} className="my-3" style={{cursor: 'pointer'}}>Home</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { scrollToSection('experience'); handleToggle(); }} className="my-3" style={{cursor: 'pointer'}}>Experience</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { scrollToSection('projects'); handleToggle(); }} className="my-3" style={{cursor: 'pointer'}}>Projects</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { scrollToSection('skills'); handleToggle(); }} className="my-3" style={{cursor: 'pointer'}}>Skills</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { scrollToSection('blogs'); handleToggle(); }} className="my-3" style={{cursor: 'pointer'}}>Blogs</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { scrollToSection('about'); handleToggle(); }} className="my-3" style={{cursor: 'pointer'}}>About</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { scrollToSection('hireme'); handleToggle(); }} className="my-3" style={{cursor: 'pointer'}}>Hire Me</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
