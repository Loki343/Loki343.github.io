import React from "react";
import "./projects.css";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";
//import images..................
import indiwebmall from "../../Assets/indiwebmall.png";
import macmatch from "../../Assets/macmatch.png";
import unicorn from "../../Assets/unicorn.png";
import flipzone from "../../Assets/flipzone.png";
import nykaa from "../../Assets/nykaa.png";
import kindmeal from "../../Assets/kindmeal.png";

const data = [
  {
    id: 1,
    demo: "",
    image: indiwebmall,
    liveLink: "https://indiwebmall-nine.vercel.app/",
    github: "https://github.com/Loki343/PaytmMall.com-Clone",
    title: "IndiWebMall Shopping",
    desc: "IndiWebmall is ecommerce website where we can buy different categories of products and can buy coupons and gift them to others",
    tech_1: "ReactJS",
    tech_2: "Redux",
    tech_3: "VanillaJS",
    tech_4: "ChakraUI",
  },
  {
    id: 2,
    demo: "",
    image: macmatch,
    liveLink: "https://murky-pan-2202.vercel.app/",
    github: "https://github.com/Loki343/Apple.com-Clone",
    title: "MacMatch Gadgets",
    desc: "it an e-commerce website which provides various types of electronic products with online services.",
    tech_1: "ReactJS",
    tech_2: "Redux",
    tech_3: "ChakraUI",
    tech_4: "MaterialUI",
  },
  {
    id: 3,
    demo: "",
    image: unicorn,
    liveLink: "https://testy-throne-7976.vercel.app/",
    github: "https://github.com/Loki343/BurBerry-Clone",
    title: "Unicorn Fashion",
    desc: "BlueBerry is a American ecommerce website, the principle that clothing should be designed to protect people from the British weather.",
    tech_1: "ReactJS",
    tech_2: "Redux",
    tech_3: "ChakraUI",
  },
  {
    id: 4,
    demo: "",
    image: flipzone,
    liveLink: "https://flip-zon-ecom.vercel.app/",
    github: "https://github.com/Loki343/FlipZone-Ecom",
    title: "FlipZone Ecom",
    desc: "This is the indian website with various type of products at low price, Products are specially for students.",
    tech_1: "TypeScript",
    tech_2: "ReactJS",
    tech_3: "VanillaJS",
    tech_4: "ChakraUI",
  },
  {
    id: 5,
    demo: "",
    image: nykaa,
    liveLink: "https://lustrous-entremet-5aa626.netlify.app/",
    github: "https://github.com/Loki343/Nykaa.com-Clone",
    title: "Nykaa Cosmetics",
    desc: "Nykaa.com is an Indian e-commerce company. It sells beauty, wellness and fashion products across websites.",
    tech_1: "ReactJS",
    tech_2: "VanillaJS",
    tech_3: "ChakraUI",
  },
  {
    id: 6,
    demo: "",
    image: kindmeal,
    liveLink: "https://arrogant-beef-5673.vercel.app/",
    github: "https://github.com/Loki343/Kindmeal.my-Clone",
    title: "KindMeal.my",
    desc: "KindMeal is Malaysia's pioneering meat-free lifestyle platform. We provide an effective platform.",
    tech_1: "HTML5",
    tech_2: "CSS3",
    tech_3: "VanillaJS",
    tech_4: "DOM",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Projects{" "}
          <div className="underline">
            {" "}
            <span></span>{" "}
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            title,
            tech_1,
            tech_2,
            tech_3,
            tech_4,
            demo,
          }) => {
            return (
              <div key={id} className="singleProject project-card">
                <div className="externalLinks flex">
                  <div className="videoIcon">
                    <a href={demo} rel="noreferrer" target="_blank">
                      <AiOutlineVideoCamera className="icon" />
                    </a>
                  </div>
                  <div className="videoIcon project-deployed-link">
                    <a
                      className="project-deployed-link"
                      href={liveLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <SiNetlify className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon project-github-link">
                    <a
                      className="project-github-link"
                      href={github}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} rel="noreferrer" target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle project-title">
                  <h3 className="project-title">{title}</h3>
                </div>

                <div className="desc project-description">{desc}</div>

                <div className="technologies flex project-tech-stack">
                  <small className="project-tech-stack">{tech_1}</small>
                  <small className="project-tech-stack">{tech_2}</small>
                  <small className="project-tech-stack">{tech_3}</small>
                  <small className="project-tech-stack">{tech_4}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
