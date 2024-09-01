import React from "react";
import "./skills.css";
// import Design from "./Design";
import Programming from "./Programming";
import ProgrammingBackend from "./ProgrammingBackend";
import DevOps from "./DevOps";
const Skills = () => {
  return (
    <section className="skills section dark:bg-black" id="skills">
      <h2 className="section__title dark:text-white">Skills</h2>
      <span className="section__subtitle dark:text-gray-400">Programming & Design</span>

      <div className="skills__container container grid">
        <Programming />
        <ProgrammingBackend />
        <DevOps />
        {/* <Design /> */}
      </div>
    </section>
  );
};

export default Skills;
