import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div id="contact" className="contact-container">
      <div className="contact-info">
        <h1 className="heading">
          Contact <span className="highlight">Me!</span>
        </h1>
        <h4 className="subheading">
          Have any questions? Fill out the form and I’ll get you a response soon!
        </h4>
        <p className="description">
          Feel free to ask about school, projects, Python, or web development—I'm here to help.
          If you're reaching out about a job opportunity, please use the provided form or email directly.
          <span className="highlight">Excited to assist you on your journey!</span>
        </p>
        <a className="email" href="mailto:vinaysulake2001@gmail.com">
          vinaysulake2001@gmail.com
        </a>
        <div className="social-links">
          <a className="social-link" href="https://www.linkedin.com/in/vinay-sulake-a8771a224/" target="_blank"  rel="noreferrer">
            <FaLinkedin />
          </a>
          <a className="social-link" href="https://github.com/sulakevinay" target="_blank"  rel="noreferrer">
            <FaSquareGithub />
          </a>
          <a className="social-link" href="https://www.instagram.com/vinay___sulake/" target="_blank"  rel="noreferrer">
            <AiFillInstagram />
          </a>
        </div>
      </div>

      <div className="contact-form">
        <div className="word">
          <h3>
            Name <span className="common">(required)</span>
          </h3>
        </div>
        <div className="name">
          <div className="word0">
            <h3>First Name </h3>
            <input type="text" />
          </div>
          <div className="word1">
            <h3>Last Name</h3>
            <input type="text" />
          </div>
        </div>
        <div className="word2">
          <h3>
            Email <span className="common">(required)</span>{" "}
          </h3>
          <input type="email" placeholder="" />
        </div>
        <div className="word3">
          <h3>
            Which are you? <span className="common">(required)</span>
          </h3>
          <input
            type="radio"
            name="userType"
            id="student"
            checked={isChecked}
            onChange={() => setIsChecked(true)}
          />
          <label htmlFor="student">Student</label>

          <input
            type="radio"
            name="userType"
            id="recruiter"
            checked={!isChecked}
            onChange={() => setIsChecked(false)}
          />
          <label htmlFor="recruiter">Recruiter</label>

          <input
            type="radio"
            name="userType"
            id="others"
            checked={!isChecked}
            onChange={() => setIsChecked(false)}
          />
          <label htmlFor="others">Others</label>
        </div>
        <div className="word4">
          <h3>
            Message <span className="common">(required)</span>
          </h3>
          <textarea
            name="message"
            id=""
            cols="50"
            rows="6"
            placeholder=" "
          ></textarea>
        </div>
        <div className="word5">
          <button
            id="submit"
            onClick={() => alert("Your message has been sent.")}
          >
            <b>Send</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
