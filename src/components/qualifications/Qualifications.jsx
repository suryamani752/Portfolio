import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section dark:bg-black" id="experience">
      <h2 className="section__title dark:text-white">Experience</h2>
      <span className="section__subtitle dark:text-gray-200">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`${toggleState === 1
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"} dark:text-gray-50`
              
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon dark:text-gray-50"></i>
            Education
          </div>
          <div
            className={
              `${toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"} dark:text-gray-50`
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon dark:text-gray-50"></i>
            Work Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <a className="cf-link dark:text-gray-300" href="shecodes.io" target="_blank">
                    Computer Science and Engineering
                  </a>
                </h3>
                <span className="qualification__subtitle">
                  Vellore Institute of Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title dark:text-gray-300">
                  {" "}
                  Intermediate (12th)
                </h3>
                <span className="qualification__subtitle">
                  Sardar Patel Memorial College Udantpuri, Nalanda, Bihar
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title dark:text-gray-300">
                  Internship - DevOps
                </h3>
                <span className="qualification__subtitle">
                  Applus Idiada
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Feb 2024 - Aug 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
