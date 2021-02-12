import React from "react";
import Arrow from "../Images/arrow-white.svg";
import helsinki from "../Images/helsinki.png";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlReport from "../InstructionComponents/ControlReport";

function toggleDropdown(id) {
  document.getElementById("dropdown" + id).classList.toggle("show");
  document.getElementById("circle-button" + id).classList.toggle("opened");
}

// window.onclick = function(event) {
//   if (!event.target.matches('.report-button')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

function LastReportPage({
  setLastReportVisibility,
  visibility,
  reportHistory
}) {
  return (
    <div
      className={
        "emergencyPage-container" +
        (typeof visibility === "boolean"
          ? visibility
            ? " active"
            : " inactive"
          : "")
      }
    >
      <div className="wave-blue">
        <img
          src={Arrow}
          alt="arrow.svg"
          onClick={() => setLastReportVisibility(false)}
        ></img>
        <h2 className="responsiveh2">Viimeisimmät raportit</h2>
        <img className="helsinki" src={helsinki} alt=""></img>
      </div>
      <div className="hatatilanne-container">
        {reportHistory.map((report, index) => (
          <div key={index}>
            <div className="report-header">
              <p>Raportti - {report.personData.undefined_timestampfull}</p>
              <div
                onClick={() => {
                  toggleDropdown(index);
                }}
                id={"circle-button" + index}
                className="report-button circle-plus closed"
              >
                <div class="circle">
                  <div class="horizontal"></div>
                  <div class="vertical"></div>
                </div>
              </div>
            </div>
            <div id={"dropdown" + index} className="dropdown-content">
              <ControlledScoreCard
                NEWSscoreTotal={report.NEWSscoreTotal}
                personData={report.personData}
                controlData={report.controlData}
                ControlNEWSscoreTotal={report.ControlNEWSscoreTotal}
              />
              <InstructionCardSecond
                NEWSscoreTotal={report.NEWSscoreTotal}
                personData={report.personData}
                controlData={report.controlData}
                ControlNEWSscoreTotal={report.ControlNEWSscoreTotal}
                careType={report.careType}
              />

              <ControlReport
                personData={report.personData}
                controlData={report.controlData}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastReportPage;
