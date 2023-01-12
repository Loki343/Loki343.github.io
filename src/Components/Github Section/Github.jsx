import React from "react";
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
    <div id="github">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          GitHub{" "}
          <div className="underline">
            {" "}
            <span></span>{" "}
          </div>
        </h5>
      </div>

      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <div className="streak">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Loki343&theme=black-ice&hide_border=true&stroke=0000&background=2C2C6C"
          alt="git-streak"
        />
      </div>
      <div className="calender">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Loki343"
          // transformData={selectLastHalfYear}
          blockSize={40}
          fontSize={20}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
    </div>
  );
};

export default Github;
