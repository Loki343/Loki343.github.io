import React from "react";
import "./app.css";
import About from "./Components/About Section/About";
import Home from "./Components/Home Section/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects Section/Projects";
import Skills from "./Components/Skills Section/Skills";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact Section/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
