
import React from "react";
import "./Education.css";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";

function Education() {
  return (
    <div  className="main-education">
      <h1 id="education" className="education-heading">EDUCATION</h1>
      <div className="submain-education">
        <div className="education-content">
          <h1> Graduation</h1>
          <br />
          <p>
            <b>
              Completed my Bachelor degree in Computer Science and Systems
              Engineering at Sree Vidyanikethan Engineering College, Tirupati,
              Andhra Pradesh, graduating in 2023 with an impressive percentage
              of 78.
            </b>
          </p>
        </div>
        <div className="education-content">
          <h1>Intermediate</h1>
          <br />
          <p>
            <b>
              Successfully finished my Intermediate education at Narayana Junior
              College in Kurnool, Andhra Pradesh, achieving a commendable CGPA
              of 9.79 in the year 2019
            </b>
          </p>
        </div>
        <div className="education-content">
          <h1>SSC</h1>
          <br />
          <p>
            <b>
              Achieved academic excellence by completing my SSC at S.F.S English
              Medium High School in Pamidi, Andhra Pradesh, with a notable CGPA
              of 8.7 in the year 2017.
            </b>
          </p>
        </div>
      </div>
      <h1 id="projects" className="education-heading">PROJECTS</h1>
      <div className="project">
        <div className="project-content">
          <h1>Youtube Clone</h1>
          <p>
            Successfully replicated the YouTube homepage through the utilization
            of technologies such as HTML and CSS.{" "}
          </p>
        </div>
        <div className="project-content">
          <h1>
            Predicting the Share Market Data Using Deep Learning Techniques
          </h1>
          <p>
            Implemented a data analytics project using sentiment and numerical
            analysis, combining Twitter and Yahoo Finance data to predict future
            stock prices.
          </p>
          <a href="https://ieeexplore.ieee.org/document/10128464">
            IEEE Conference Paper
          </a>
        </div>
      </div>
      <h1 id="skills" className="education-heading"> SKILLS</h1>
      <div className="skills">
        <div className="skill-content">
          <h1>
            HTML <br />
            <FaHtml5 />
          </h1>
          <p>
            Proficient in crafting structured and semantic web pages using HTML.
          </p>
        </div>
        <div className="skill-content">
          <h1>
            CSS <br />
            <IoLogoCss3 />
          </h1>
          <p> Skilled in styling and designing responsive websites with CSS.</p>
        </div>
        <div className="skill-content">
          <h1>
            React js <br /> <FaReact />
          </h1>
          <p>
            Experienced in building dynamic and interactive user interfaces
            using React.js.
          </p>
        </div>
        <div className="skill-content">
          <h1>
            MySql <br /><SiMysql />
          </h1>
          <p>
            Proficient in managing and querying relational databases with MySql.
          </p>
        </div>
        <div className="skill-content">
          <h1>
            Python <br /><FaPython />
          </h1>
          <p>
            Proficient in leveraging Python for versatile programming tasks and
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
