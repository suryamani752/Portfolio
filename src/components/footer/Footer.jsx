import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer dark:bg-black">
      <div className="footer__container container">
        <h1 className="footer__title text-3xl dark:text-white">Suryamani</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link dark:text-gray-300">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link dark:text-gray-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link dark:text-gray-300">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/suryamani752"
            className="footer__social-link dark:hover:bg-gray-700"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/suryamani-kumar-78711a1b1/"
            className="footer__social-link dark:hover:bg-gray-700"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://www.instagram.com/suryamaniinsta/"
            className="footer__social-link dark:hover:bg-gray-700"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy dark:text-white">
          &#169; Suryamani-Kumar, 2024. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
