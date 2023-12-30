import React, { useState } from "react";
import "./Navbar.css";
import Pdf from './Vinay-Sulake.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-scroll"; 


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`main ${showMenu ? "show-menu" : ""}`}>
      <div className="logo">
        <h2>Prince</h2>
      </div>
      <div className={`item ${showMenu ? "show-menu" : ""}`}>
        <FontAwesomeIcon icon={faBars} className="icon" onClick={toggleMenu} />

        <ul>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <li>About Me</li>
          </Link>

          <Link to="education" spy={true} smooth={true} duration={500}>
            <li>Education</li>
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <li>Projects</li>
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            <li>Skills</li>
          </Link>
          <a href={Pdf} target="_blank" rel="noopener noreferrer">
            <li>My Resume</li>
          </a>

          <Link to="contact" spy={true} smooth={true} duration={500}>
            <li>Contact Me</li>
          </Link>

          <div className="social">
            <a href="https://www.linkedin.com/in/vinay-sulake-a8771a224/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sulakevinay" target="_blank"rel="noreferrer">
              <FaSquareGithub />
            </a>
            <a href="https://www.instagram.com/vinay___sulake/" target="_blank"  rel="noreferrer">
              <AiFillInstagram />
            </a>
          </div>
        </ul>
        {showMenu && (
          <div className="close-icon" onClick={toggleMenu}>
            &times;
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
