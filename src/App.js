import React from "react";
import "./App.css";
import About from "./Components/About Section/About";
import Home from "./Components/Home Section/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects Section/Projects";
import Skills from "./Components/Skills Section/Skills";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact Section/Contact";
import Github from './Components/Github Section/Github';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github/>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
