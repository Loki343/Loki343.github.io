import React from "react";
import "./home.css";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { TbArrowBigRightLines } from "react-icons/tb";
import { TbChevronsDown } from "react-icons/tb";

const Home = () => {
  return (
    <section id="home" className="home section">
      {/* this div will only visible at wider screen */}
      <div className='leftIcons'>
      <div className="socials grid">
        <a href="https://github.com/Loki343" rel="noreferrer" target='_blank'>
          <AiFillGithub className='icon'/>
        </a>
        <a href="https://www.linkedin.com/in/kausik-bhaumik-617179229/" target='_blank' rel="noreferrer">
          <AiOutlineLinkedin className='icon'/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100006364819489" target='_blank' rel="noreferrer">
          <FiFacebook className='icon'/>
        </a>
        <div className="line"></div>
      </div>
      </div>

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

      {/* right div,with email address (will also be visible at a wider screen only) */}
      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
              kausikbhaumik42@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
