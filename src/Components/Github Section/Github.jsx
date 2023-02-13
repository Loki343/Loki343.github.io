import React from "react";
import "./github.css";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Github = () => {
  //   const selectLastHalfYear = (contributions) => {
  //     const currentYear = new Date().getFullYear();
  //     const currentMonth = new Date().getMonth();
  //     const shownMonths = 10;

  //     return contributions.filter((day) => {
  //       const date = new Date(day.date);
  //       const monthOfDay = date.getMonth();

  //       return (
  //         date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth
  //       );
  //     });
  //   };
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
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Loki343&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true"
            alt="streak"
          />
          <img
            className="streak"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Loki343&theme=black-ice&hide_border=true&stroke=0000"
            alt="language"
          />
        </div>

      <div className="calender">
        <GitHubCalendar username="Loki343" blockSize={25} fontSize={16} style={{marginTop:'15px'}}>
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
    </div>
  );
};

export default Github;
