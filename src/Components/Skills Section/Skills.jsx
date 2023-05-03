import React from "react";
import "./skills.css";
import { TbBrandReactNative, TbBrandVercel } from "react-icons/tb";
import { AiFillGithub, AiOutlineHtml5, AiOutlineNodeCollapse } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiDatabase, DiJavascript1 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCypress, SiMongodb, SiNetlify, SiRedux, SiStorybook } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { FaFileCode, FaLanguage, FaPeopleCarry } from "react-icons/fa";
import { GiMineWagon, GiOpenBook } from "react-icons/gi";

const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills{" "}
          <div className="underline">
            {" "}
            <span></span>{" "}
          </div>
        </h5>
      </div>

      {/* skills container */}
      <div className="skillsContainer grid">

        {/* single group of skills - Front-end */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Front-end Development & Tools</h2>
            <span className="subTitle">1200+ Hours of Experience</span>
          </div>

          <div className="generalSkills skills-card">
            {/* single skill div */}
            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <AiOutlineHtml5 className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">HTML5</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <IoLogoCss3 className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">CSS3</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <DiSass className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Sass</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <TbBrandBootstrap className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Boot <br /> strap</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiTailwindcss className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Tailwind <br /> CSS</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <DiJavascript1 className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Java <br />Script </span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <TbBrandReactNative className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">React <br /> JS</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiRedux className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Redux</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiTypescript className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Type <br /> Script</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <TbBrandNextjs className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">NextJS</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiChakraui className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">ChakraUI</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiMaterialui className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">MatrialUI</span>
            </div>

          </div>
        </div>

        {/* single group of skills - Back-end */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Back-end Development & Testing-Tools</h2>
            <span className="subTitle">300+ Hours of Experience</span>
          </div>
          <div className="generalSkills skills-card">
            {/* single skill div */}
            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <IoLogoNodejs className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Node <br /> JS</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiExpress className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Express <br /> JS</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiMongodb className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Mongo <br /> DB</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiCypress className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Cypress</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiStorybook className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Story <br /> Book</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <AiFillGithub className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">GitHub</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <DiDatabase className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">DSA</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <FaFileCode className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">VS Code</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <SiNetlify className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Netlify</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <TbBrandVercel className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Vercel</span>
            </div>
          </div>
        </div>

        {/* single group of skills - Soft-Skills*/}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Soft-Skills</h2>
            <span className="subTitle">200+ Hours of Experience</span>
          </div>
          <div className="generalSkills skills-card">
            {/* single skill div */}
            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <FaPeopleCarry className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Collabo <br /> -rative</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <GiOpenBook className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Fast <br />Learner</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <GiMineWagon className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Creativity</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <AiOutlineNodeCollapse className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Problem <br />Solving</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <FaLanguage className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">Hindi <br />Language</span>
            </div>

            <div className="singleSkill skills-card">
              <div className="iconBox flex skills-card-img">
                <FaLanguage className="icon skills-card-img" />
              </div>
              <span className="skillName skills-card-name">English <br />Language</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
