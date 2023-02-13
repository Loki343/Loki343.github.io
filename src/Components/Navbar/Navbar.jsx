import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  //code to toggle on and off the navbar at small width
  const [active, setActive] = useState("navBar");

  //this will bring in the navbar from the top
  const showNavBar = () => {
    setActive("navBar activeNavbar");
  };

  //this will hide the navbar again.
  const removeNavBar = () => {
    setActive("navBar");
  };

  //code statement to add a background color to the header
  const [activeHeader, setActiveHeader] = useState("header");

  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);
  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">KB.</a>
        </h1>
      </div>

      <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
          <li className="navItem">
            <a href="#home" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="#about" className="navLink">
              About
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              Skills
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#github" className="navLink">
              GitHub
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              Contact
            </a>
          </li>
          <button className="btn">
            <a
              href="https://drive.google.com/file/d/1lRE7_kUXt-3xScFyWIY0ZQS1HbWXnJC7/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>
        </ul>
        <div onClick={removeNavBar} className="closeNavBar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavBar} className="toggleNavBar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
