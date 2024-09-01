import React from "react";
import "./work.css";
import Works from "./Works";
const Work = () => {
  return (
    <section className="work section dark:bg-black" id="portfolio">
      <h2 className="section__title dark:text-white">Portfolio</h2>
      <span className="section__subtitle dark:text-gray-50">Project Highlights</span>
      <Works />
    </section>
  );
};

export default Work;
