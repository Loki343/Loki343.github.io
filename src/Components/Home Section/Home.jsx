import React from "react";
import "./home.css";
import { TbArrowBigRightLines } from "react-icons/tb";
import { TbChevronsDown } from "react-icons/tb";

const Home = () => {
  return (
    <section id="home" className="home section">

      {/* homeContent */}
      <div className="container homeContainer">
        <span className="introText">Hi my name is,</span>
        <h1 className="title">Kausik Bhaumik</h1>
        <span className="subTitle">
          Fullstack-Web-Developer 
        </span>
        <p className="homeParagraph">
          I code within required coding standarts and styles to serve the exact
          need
        </p>
        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6>{" "}
              <TbChevronsDown className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
