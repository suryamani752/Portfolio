import React, { useState, useEffect } from "react";
import "./header.css";
import Dark from "../../Dark";

const Header = () => {
  /* --- Change Background Header --- */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* --- Toggle Menu --- */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const sectionTop = currentSection.offsetTop - 50;
        const sectionBottom = sectionTop + currentSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const id = currentSection.getAttribute("id");
          setActiveNav(`#${id}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header dark:bg-black">
      <nav className="nav container">
        <a href="index.html" className="nav__logo dark:text-white">
          Suryamani
        </a>
        {/* <DarkMode /> */}
        <div className={`${Toggle ? "nav__menu show-menu" : "nav__menu"} dark:bg-black`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  activeNav === "#home" ? "active-link" : ""
                } dark:text-gray-200`}
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  activeNav === "#about" ? "active-link" : ""
                } dark:text-gray-200`}
                onClick={() => setActiveNav("#about")}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${
                  activeNav === "#skills" ? "active-link" : ""
                } dark:text-gray-200`}
                onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#experience"
                className={`nav__link ${
                  activeNav === "#experience" ? "active-link" : ""
                } dark:text-gray-200`}
                onClick={() => setActiveNav("#experience")}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Experience
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className={`nav__link ${
                  activeNav === "#portfolio" ? "active-link" : ""
                } dark:text-gray-200`}
                onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  activeNav === "#contact" ? "active-link" : ""
                } dark:text-gray-200`}
                onClick={() => setActiveNav("#contact")}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
            {/* <li className="nav__item">
              <a
                href="#services"
                className={`nav__link ${
                  activeNav === "#services" ? "active-link" : ""
                } dark:text-gray-200`}
                onClick={() => setActiveNav("#services")}
              >
                <i className="uil uil-message nav__icon"></i>Services
              </a>
            </li> */}
          </ul>
          <i
            className="uil uil-times nav__close dark:text-gray-400 dark:hover:text-rose-500"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps dark:text-[#B7511E]"></i>
        </div>
        <Dark />
      </nav>
    </header>
  );
};

export default Header;
