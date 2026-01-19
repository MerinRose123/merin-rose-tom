import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(true);

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
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="header-left" onClick={scrollToHome} style={{ cursor: 'pointer' }}>
          <div className="nav_ac" title="Home">{logotext}</div>
        </div>
        <div className="header-right">
          <div className="theme-toggle-wrapper" title="Toggle Theme">
            <Themetoggle />
          </div>
          <button className="menu__button" onClick={handleToggle} title={isActive ? "Open Menu" : "Close Menu"}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>

        <div className={`site__navigation ${isActive ? "" : "menu__opend"}`}>
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
                    <span onClick={() => { handleToggle(); scrollToSection('experience'); }} className="my-3" style={{ cursor: 'pointer' }}>Experience</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { handleToggle(); scrollToSection('projects'); }} className="my-3" style={{ cursor: 'pointer' }}>Projects</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { handleToggle(); scrollToSection('certifications'); }} className="my-3" style={{ cursor: 'pointer' }}>Certifications</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { handleToggle(); scrollToSection('skills'); }} className="my-3" style={{ cursor: 'pointer' }}>Skills</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { handleToggle(); scrollToSection('blogs'); }} className="my-3" style={{ cursor: 'pointer' }}>Blogs</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { handleToggle(); scrollToSection('hobbies'); }} className="my-3" style={{ cursor: 'pointer' }}>Hobbies</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { handleToggle(); scrollToSection('about'); }} className="my-3" style={{ cursor: 'pointer' }}>About Me</span>
                  </li>
                  <li className="menu_item">
                    <span onClick={() => { handleToggle(); scrollToSection('hireme'); }} className="my-3" style={{ cursor: 'pointer' }}>Hire Me</span>
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
