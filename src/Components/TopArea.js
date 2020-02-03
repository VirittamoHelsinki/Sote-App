import React from "react";
import backArrowSvg from "../Images/back-arrow.svg";
import moreBtnSvg from "../Images/more-btn.svg";

import ProgressBar from "./ProgressBar";

function TopArea({ setMenuVisibility, history }) {
  return (
    <div className="TopArea">
      <div className="flex-container">
        <img
          className="back-arrow"
          src={backArrowSvg}
          onClick={() => {
            history.goBack();
          }}
          alt="backArrowSvg"
        />
        <h1 className="AppName">SoTe</h1>
        <img
          className="more-btn"
          src={moreBtnSvg}
          alt="moreBtnSvg"
          onClick={() => setMenuVisibility(true)}
        />
      </div>
      <ProgressBar />
    </div>
  );
}

export default TopArea;
