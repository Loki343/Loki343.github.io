import React from "react";
import "./projects.css";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
//import images..................
import project1_image from "../../Assets/project1_image.png";

const data = [
  {
    id: 1,
    demo:'https://drive.google.com/file/d/1ZiwN2feBe84dyF6ieZYuXt4LZNFY0z2t/view?usp=share_link',
    image: project1_image,
    liveLink: "https://lustrous-entremet-5aa626.netlify.app",
    github: "https://github.com/Loki343/honorable-maid-4418",
    title: "Nykaa Cosmetics",
    desc: "This is an Indian Cosmetics selling website which is the first unicorn headed by woman.Founder is Priyanka Mathur.",
    tech_1: "HTML5",
    tech_2: "CSS3",
    tech_3: "VanillaJS",
    tech_4: "ReactJS",
  },
  {
    id: 2,
    image: project1_image,
    liveLink: "netlify.con",
    github: "github.com",
    title: "Nykaa Cosmetics",
    desc: "This is an Indian Cosmetics selling website which is the first unicorn headed by woman.Founder is Priyanka Mathur.",
    tech_1: "HTML5",
    tech_2: "CSS3",
    tech_3: "VanillaJS",
    tech_4: "ReactJS",
  },
  {
    id: 3,
    image: project1_image,
    liveLink: "netlify.con",
    github: "github.com",
    title: "Nykaa Cosmetics",
    desc: "This is an Indian Cosmetics selling website which is the first unicorn headed by woman.Founder is Priyanka Mathur.",
    tech_1: "HTML5",
    tech_2: "CSS3",
    tech_3: "VanillaJS",
    tech_4: "ReactJS",
  },
  {
    id: 4,
    image: project1_image,
    liveLink: "netlify.con",
    github: "github.com",
    title: "Nykaa Cosmetics",
    desc: "This is an Indian Cosmetics selling website which is the first unicorn headed by woman.Founder is Priyanka Mathur.",
    tech_1: "HTML5",
    tech_2: "CSS3",
    tech_3: "VanillaJS",
    tech_4: "ReactJS",
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
            demo
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="videoIcon">
                    <a href={demo} target="_blank">
                      <AiOutlineVideoCamera className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank">
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
