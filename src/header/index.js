import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const sectionIds = ['experience', 'projects', 'certifications', 'skills', 'blogs', 'hobbies', 'about', 'hireme'];

const Headermain = () => {
  const [isActive, setActive] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section
      const headerOffset = 120;
      let currentSection = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const menuItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'about', label: 'About Me' },
    { id: 'hireme', label: 'Hire Me' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
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
                  {menuItems.map((item) => (
                    <li className="menu_item" key={item.id}>
                      <span
                        onClick={() => { handleToggle(); scrollToSection(item.id); }}
                        className={`my-3 ${activeSection === item.id ? 'menu_active' : ''}`}
                        style={{ cursor: 'pointer' }}
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
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
