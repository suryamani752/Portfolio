import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/suryamani-kumar-78711a1b1/"
        className="home__social-icon dark:text-white"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-linkedin"></i>
      </a>

      <a
        href="https://github.com/suryamani752"
        className="home__social-icon dark:text-white"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.instagram.com/suryamaniinsta/"
        className="home__social-icon dark:text-white"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
