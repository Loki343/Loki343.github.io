import React from "react";
import "./about.css";
import { TbCloudDownload } from "react-icons/tb";
import img from "../../Assets/Kausik_image.jpg";

const About = () => {
  return (
    <section id="about" className="about section container nav-link">
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
          <img src={img} alt="Kausik Bhaumik" className="aboutImg" />
        </div>

        <div className="textSection">
          <h4>
            I'm a success-driven, determind fullstack web developer. I have
            experience using HTML5 CSS3 Sass Javascript ReactJS NodeJS to build
            accessible component-based web pages and systems. <br />
            Ability to deliver quality results while collaborating in rapidly
            changing work environments and team compositions. <br /> A
            passioniate person willing to learn more technologies.
            <br />
            <br />
            <h3>
              <span className="edu">Education:</span> 
              <br />
              1. Fullstack-Developer (Masai School@2023)
              <br />
              2. Bachelor of Science (Calcutta Univercity@2019)
              <br />
              3. Higher Secondary (WBBSE@2016)
            </h3>
            
          </h4>

          <div className="aboutBtn">
            <a
              href="Kausik_Bhaumik_Resume.pdf"
              download="Kausik_Bhaumik_Resume.pdf"
              className="flex"
            >
              Download CV <TbCloudDownload className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
