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
      <div className="streak-twice grid">
        <img
          className="language"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Loki343&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=530835"
          alt="streak"
          id="github-top-langs"
          style={{ width: "50%" }}
        />
        <div style={{ display: "flex" }}>
          <img
            id="github-stats-card"
            className="calender__stats"
            src="https://github-readme-stats.vercel.app/api?username=Loki343&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=530835"
            alt="github stats"
            style={{ width: "50%" }}
          />
          <img
            className="streak"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Loki343&theme=black-ice&hide_border=true&stroke=0000&background=530835"
            alt="language"
            id="github-streak-stats"
            style={{ width: "50%" }}
          />
        </div>
      </div>

      <div className="calender react-activity-calendar" style={{background:"rgb(83,8,53)",padding:'20px',marginTop:"15px"}}>
        <GitHubCalendar
          id="github-stats-card"
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
