import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">Ai.</a>
        </h1>
      </div>

      <div className="navBar">
        <ul className="navLists">
          <li className="navItem">
            <a href="#home" className="navLink">
              1.<span>Home</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#about" className="navLink">
              2.<span>About</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              3.<span>Skills</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              4.<span>Projects</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#about" className="navLink">
              1.<span>About</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
