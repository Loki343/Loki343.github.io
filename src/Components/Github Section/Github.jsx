import React from "react";
import "./github.css";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Github = () => {
  return (
    <div id="github" className="github container section">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Github{" "}
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      <div className="streak-twice grid" id="github-stats-card">
        <img
          className="language"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Loki343&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=570300"
          alt="streak"
          id="github-streak-stats"
        />
        <img
          className="streak"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Loki343&theme=black-ice&hide_border=true&stroke=0000&background=570300"
          alt="language"
          id="github-top-langs"
        />
      </div>

      <div className="calender">
        <GitHubCalendar
          username="Loki343"
          blockSize={25}
          fontSize={16}
          style={{ marginTop: "15px" }}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
    </div>
  );
};

export default Github;
