import React from "react";
import "./about.css";
import { TbCloudDownload } from "react-icons/tb";
import img from "../../Assets/Kausik_image.jpg";

function resume() {
  window.open(
    "https://drive.google.com/file/d/16KeO14t4SBP6p1ZDksrgGnnCF8WnTxg3/view?usp=sharing",
    "_blank"
  );
}

const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About Me{" "}
          <div className="underline">
            {" "}
            <span></span>{" "}
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="aboutImgDiv">
          <img src={img} alt="Kausik Bhaumik" className="aboutImg home-img" />
        </div>

        <div className="textSection">
          <h4 id="user-detail-intro">
            I'm a success-driven, determind fullstack web developer. I have
            experience using HTML5 CSS3 Javascript ReactJS NodeJS ExpressJS MongoDB to build
            accessible component-based web pages and systems. <br />
            Ability to deliver quality results while collaborating in rapidly
            changing work environments and team compositions. <br /> A
            passioniate person willing to learn more technologies
            <br />
            <br />
            <h3>
              <span className="edu">Education:</span>
              <br />
              1. Fullstack-Developer (Masai School@2023)
              <br />
              2. Bachelor of Science (Calcutta Univercity@2019)
            </h3>
            <h3>
              <span className="edu">Experience:</span>
              <br />
              1. 1200+ hours of coding
              <br />
              2. 500+ Problems of DSA
              <br />
              3. 3+ months of working as associate in flipkart hub
            </h3>
          </h4>

          <div className="aboutBtn">
            <button
              className="resume-btn"
              onClick={resume}
              id="resume-button-2"
            >
              <a
                href="Kausik_Bhaumik_Resume.pdf"
                download="Kausik_Bhaumik_Resume.pdf"
                className="flex"
                id="resume-link-2"
              >
                Download CV <TbCloudDownload className="icon" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
