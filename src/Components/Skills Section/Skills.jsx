import React from "react";
import "./skills.css";
import { TbBrandReactNative } from "react-icons/tb";
import {  AiOutlineHtml5, AiOutlineNodeCollapse } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {  DiJavascript1 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCypress, SiMongodb, SiRedux, SiStorybook } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { FaPeopleCarry } from "react-icons/fa";
import { GiMineWagon, GiOpenBook } from "react-icons/gi";

const Skills = () => {
  return (
    <section id="skills" className="skills container section nav-link">
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

          <div className="generalSkills">
            {/* single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <AiOutlineHtml5 className="icon" />
              </div>
              <span className="skillName">HTML5</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoCss3 className="icon" />
              </div>
              <span className="skillName">CSS3</span>
            </div>

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <DiSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandBootstrap className="icon" />
              </div>
              <span className="skillName">Boot <br /> strap</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <SiTailwindcss className="icon" />
              </div>
              <span className="skillName">Tailwind <br /> CSS</span>
            </div> */}

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiJavascript1 className="icon" />
              </div>
              <span className="skillName">Java <br />Script </span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React <br /> JS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiRedux className="icon" />
              </div>
              <span className="skillName">Redux</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTypescript className="icon" />
              </div>
              <span className="skillName">Type <br /> Script</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandNextjs className="icon" />
              </div>
              <span className="skillName">Next<br/>JS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiChakraui className="icon" />
              </div>
              <span className="skillName">Chakra<br/>UI</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMaterialui className="icon" />
              </div>
              <span className="skillName">Matrial<br/>UI</span>
            </div>

          </div>
        </div>

        {/* single group of skills - Back-end */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Back-end Development & Testing-Tools</h2>
            <span className="subTitle">400+ Hours of Experience</span>
          </div>
          <div className="generalSkills">
            {/* single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoNodejs className="icon" />
              </div>
              <span className="skillName">Node <br /> JS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiExpress className="icon" />
              </div>
              <span className="skillName">Express <br /> JS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMongodb className="icon" />
              </div>
              <span className="skillName">Mongo <br /> DB</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCypress className="icon" />
              </div>
              <span className="skillName">Cypress</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiStorybook className="icon" />
              </div>
              <span className="skillName">Story <br /> Book</span>
            </div>

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className="icon" />
              </div>
              <span className="skillName">GitHub</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiDatabase className="icon" />
              </div>
              <span className="skillName">DSA</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <FaFileCode className="icon" />
              </div>
              <span className="skillName">VS Code</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiNetlify className="icon" />
              </div>
              <span className="skillName">Netlify</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandVercel className="icon" />
              </div>
              <span className="skillName">Vercel</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div> */}

          </div>
        </div>

        {/* single group of skills - Soft-Skills*/}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Soft-Skills</h2>
            <span className="subTitle">200+ Hours of Experience</span>
          </div>
          <div className="generalSkills">
            {/* single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaPeopleCarry className="icon" />
              </div>
              <span className="skillName">Collabo <br /> -rative</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <GiOpenBook className="icon" />
              </div>
              <span className="skillName">Fast <br />Learner</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <GiMineWagon className="icon" />
              </div>
              <span className="skillName">Creati<br/>-vity</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiOutlineNodeCollapse className="icon" />
              </div>
              <span className="skillName">Problem <br />Solving</span>
            </div>

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <FaLanguage className="icon" />
              </div>
              <span className="skillName">Hindi <br />Language</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaLanguage className="icon" />
              </div>
              <span className="skillName">English <br />Language</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div> */}

            {/* <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div> */}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
