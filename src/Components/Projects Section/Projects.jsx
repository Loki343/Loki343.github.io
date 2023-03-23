import React from "react";
import "./projects.css";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
//import images..................
import project1_image from "../../Assets/project1_image.png";
import project4_image from "../../Assets/project4_image.png";
import project3_image from "../../Assets/project3_image.png";
import project2_image from "../../Assets/project2_image.png";
import { SiNetlify } from 'react-icons/si';


const data = [
  {
    id: 1,
    demo: "https://drive.google.com/file/d/1ZiwN2feBe84dyF6ieZYuXt4LZNFY0z2t/view?usp=share_link",
    image: project1_image,
    liveLink: "https://lustrous-entremet-5aa626.netlify.app",
    github: "https://github.com/Loki343/honorable-maid-4418",
    title: "Nykaa Cosmetics",
    desc: "This is an Indian Cosmetics selling website which is the first unicorn headed by woman.Founder is Priyanka Mathur.",
    tech_1: "ReactJS",
    tech_2: "ReactDOM",
    tech_3: "VanillaJS",
    tech_4: "ChakraUI",
  },
  {
    id: 2,
    demo: "",
    image: project2_image,
    liveLink: "https://arrogant-beef-5673.vercel.app/",
    github: "https://github.com/Loki343/arrogant-beef-5673",
    title: "KindMeal Food",
    desc: "KindMeal is Malaysia's pioneering meat-free lifestyle platform. We provide an effective platform to promote compassionate dining in a fun and effective way",
    tech_1: "HTML5",
    tech_2: "CSS3",
    tech_3: "VanillaJS",
    tech_4: "DOM",
  },
  {
    id: 3,
    demo: "",
    image: project3_image,
    liveLink: "https://jovial-dusk-c6ab4b.netlify.app/",
    github: "https://github.com/Loki343/rentomojo_clone",
    title: "RentoMojo Furniture",
    desc: "India's leading rental platform brings to you a wide range of products on rent. Experience the freedom to live the life you want, now.",
    tech_1: "HTML5",
    tech_2: "CSS3",
    tech_3: "VanillaJS",
    tech_4: "DOM",
  },
  {
    id: 4,
    demo: "",
    image: project4_image,
    liveLink: "https://ornate-semolina-caa3bf.netlify.app/",
    github: "https://github.com/Loki343/ProjectYoox",
    title: "YooX E-Comerce",
    desc: "A web Application to shop a wide array of fashion products by the best Italian and international designers.",
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
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="videoIcon">
                    <a href={demo} rel="noreferrer" target="_blank">
                      <AiOutlineVideoCamera className="icon" />
                    </a>
                  </div>
                  <div className="videoIcon">
                    <a href={liveLink} rel="noreferrer" target="_blank">
                      <SiNetlify className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} rel="noreferrer" target="_blank">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} rel="noreferrer" target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small>{tech_1}</small>
                  <small>{tech_2}</small>
                  <small>{tech_3}</small>
                  <small>{tech_4}</small>
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
