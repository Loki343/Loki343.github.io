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
  );
};

export default Github;
