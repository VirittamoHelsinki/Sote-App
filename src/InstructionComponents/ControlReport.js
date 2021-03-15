import React from "react";

function Report({ personData, controlData }) {
  // personData = controlled score, controlData = original score.
  const red = "#ad3e2f";
  const orange = "#db5400";
  const lightOrange = "#f0a171";
  const green = "#377d4f";
  const blue = "#284e78";
  const darkred = "#ab2615";
  const bold = "600";
  const light = "400";

  const colorBox = () => {
    if (
      personData["Hengitystaajuus - NEWSscore"] === 3 ||
      personData["Happisaturaatio - NEWSscore"] === 3 ||
      personData["Systolinen verenpaine - NEWSscore"] === 3 ||
      personData["Syketaajuus - NEWSscore"] === 3 ||
      personData["Mittaa lämpötila - NEWSscore"] === 3 ||
      personData["Tajunnan taso"] === false      
    ) {
      return darkred;
    } else if (
      personData["Hengitystaajuus - NEWSscore"] +
      personData["Happisaturaatio - NEWSscore"] +
      personData["Systolinen verenpaine - NEWSscore"] +
      personData["Syketaajuus - NEWSscore"] +
      personData["Mittaa lämpötila - NEWSscore"] >= 4
    ) {
      return darkred;
    } else if (
      personData["Hengitystaajuus - NEWSscore"] === 0 &&
      personData["Happisaturaatio - NEWSscore"] === 0 &&
      personData["Systolinen verenpaine - NEWSscore"] === 0 &&
      personData["Syketaajuus - NEWSscore"] === 0 &&
      personData["Mittaa lämpötila - NEWSscore"] === 0
    ) {
      return green;
    } else {
      return blue;
    }
  }

  const hengitystaajuusStyle = () => {
    if (personData.Hengitystaajuus <= 8 || personData.Hengitystaajuus >= 25) {
      return red;
    } else if (
      personData.Hengitystaajuus >= 9 &&
      personData.Hengitystaajuus <= 11
    ) {
      return lightOrange;
    } else if (
      personData.Hengitystaajuus >= 12 &&
      personData.Hengitystaajuus <= 20
    ) {
      return green;
    } else if (
      personData.Hengitystaajuus >= 21 &&
      personData.Hengitystaajuus <= 24
    ) {
      return orange;
    }
  };

  const hengitystaajuusBold = () => {
    if (personData.Hengitystaajuus <= 8 || personData.hengitystaajuus >= 25) {
      return bold;
    }
  };

  const hengitystaajuusStyle2 = () => {
    if (controlData.Hengitystaajuus <= 8 || controlData.Hengitystaajuus >= 25) {
      return red;
    } else if (
      controlData.Hengitystaajuus >= 9 &&
      controlData.Hengitystaajuus <= 11
    ) {
      return lightOrange;
    } else if (
      controlData.Hengitystaajuus >= 12 &&
      controlData.Hengitystaajuus <= 20
    ) {
      return green;
    } else if (
      controlData.Hengitystaajuus >= 21 &&
      controlData.Hengitystaajuus <= 24
    ) {
      return orange;
    }
  };

  const hengitystaajuusBold2 = () => {
    if (controlData.Hengitystaajuus <= 8 || controlData.Hengitystaajuus >= 25) {
      return bold;
    } else if (
      controlData.Hengitystaajuus >= 9 && controlData.Hengitystaajuus <= 24 
    ) {
      return light;
    } else if (
      personData.Hengitystaajuus <= 8 || personData.Hengitystaajuus >= 25
    ) {
      return bold;
    } else {
      return light;
    }
  };

  const hengitystaajuus = () => {
    if (controlData.Hengitystaajuus === undefined) {
      return null;
    } else if (
      controlData.Hengitystaajuus >= 12 &&
      controlData.Hengitystaajuus <= 20 &&
      personData.Hengitystaajuus >= 12 &&
      personData.Hengitystaajuus <= 20
      ) {
      return null;
    } else {
      return personData.Hengitystaajuus;
    }
  };

  const hengitystaajuus2 = () => {
    if (controlData.Hengitystaajuus === undefined) {
      return personData.Hengitystaajuus;
    } else {
      return controlData.Hengitystaajuus;
    }
  };

  const hengitystaajuusTimestamp = () => {
    if (controlData.Hengitystaajuus === undefined) {
      return null;
    } else if (
      controlData.Hengitystaajuus >= 12 &&
      controlData.Hengitystaajuus <= 20 &&
      personData.Hengitystaajuus >= 12 &&
      personData.Hengitystaajuus <= 20
      ) {
      return null;
    } else {
      return personData.Hengitystaajuus_timestamp;
    }
  };

  const happisaturaatioStyle = () => {
    if (personData.Happisaturaatio <= 91) {
      return red;
    } else if (
      personData.Happisaturaatio >= 92 &&
      personData.Happisaturaatio <= 93
    ) {
      return orange;
    } else if (
      personData.Happisaturaatio >= 94 &&
      personData.Happisaturaatio <= 95
    ) {
      return lightOrange;
    } else if (personData.Happisaturaatio >= 96) {
      return green;
    }
  };

  const happisaturaatioBold = () => {
    if (personData.Happisaturaatio <= 91) {
      return bold;
    }
  };

  const happisaturaatioStyle2 = () => {
    if (controlData.Happisaturaatio <= 91) {
      return red;
    } else if (
      controlData.Happisaturaatio >= 92 &&
      controlData.Happisaturaatio <= 93
    ) {
      return orange;
    } else if (
      controlData.Happisaturaatio >= 94 &&
      controlData.Happisaturaatio <= 95
    ) {
      return lightOrange;
    } else if (controlData.Happisaturaatio >= 96) {
      return green;
    }
  };

  const happisaturaatioBold2 = () => {
    if (controlData.Happisaturaatio <= 91) {
      return bold;
    } else if (
      controlData.Happisaturaatio >= 92 
    ) {
      return light;
    } else if (
      personData.Happisaturaatio <= 91
    ) {
      return bold;
    } else {
      return light;
    }
  };

  const happisaturaatio = () => {
    if (controlData.Happisaturaatio === undefined) {
      return null;
    } else if (
      controlData.Happisaturaatio >= 96 &&
      personData.Happisaturaatio >= 96
    ) {
      return null;
    } else {
      return personData.Happisaturaatio;
    }
  };

  const happisaturaatio2 = () => {
    if (controlData.Happisaturaatio === undefined) {
      return personData.Happisaturaatio;
    } else {
      return controlData.Happisaturaatio;
    }
  };

  const happisaturaatioTimestamp = () => {
    if (controlData.Happisaturaatio === undefined) {
      return null;
    } else if (
      controlData.Happisaturaatio >= 96 &&
      personData.Happisaturaatio >= 96
      ) {
      return null;
    } else {
      return personData.Happisaturaatio_timestamp;
    }
  };

  const systolinenVerenpaineStyle = () => {
    if (
      personData["Systolinen verenpaine"] <= 90 ||
      personData["Systolinen verenpaine"] >= 220
    ) {
      return red;
    } else if (
      personData["Systolinen verenpaine"] >= 91 &&
      personData["Systolinen verenpaine"] <= 100
    ) {
      return orange;
    } else if (
      personData["Systolinen verenpaine"] >= 101 &&
      personData["Systolinen verenpaine"] <= 110
    ) {
      return lightOrange;
    } else if (
      personData["Systolinen verenpaine"] >= 111 &&
      personData["Systolinen verenpaine"] <= 219
    ) {
      return green;
    }
  };

  const systolinenVerenpaineBold = () => {
    if (
      personData["Systolinen verenpaine"] <= 90 ||
      personData["Systolinen verenpaine"] >= 220
    ) {
      return bold;
    }
  };

  const systolinenVerenpaineStyle2 = () => {
    if (
      controlData["Systolinen verenpaine"] <= 90 ||
      controlData["Systolinen verenpaine"] >= 220
    ) {
      return red;
    } else if (
      controlData["Systolinen verenpaine"] >= 91 &&
      controlData["Systolinen verenpaine"] <= 100
    ) {
      return orange;
    } else if (
      controlData["Systolinen verenpaine"] >= 101 &&
      controlData["Systolinen verenpaine"] <= 110
    ) {
      return lightOrange;
    } else if (
      controlData["Systolinen verenpaine"] >= 111 &&
      controlData["Systolinen verenpaine"] <= 219
    ) {
      return green;
    }
  };

  const systolinenVerenpaineBold2 = () => {
    if (
      controlData["Systolinen verenpaine"] <= 90 ||
      controlData["Systolinen verenpaine"] >= 220
    ) {
      return bold;
    } else if (
      controlData["Systolinen verenpaine"] >= 91 &&
      controlData["Systolinen verenpaine"] <= 219 
    ) {
      return light;
    } else if (
      personData["Systolinen verenpaine"] <= 90 ||
      personData["Systolinen verenpaine"] >= 220
    ) {
      return bold;
    } else {
      return light;
    }
  };

  const systolinenVerenpaine = () => {
    if (controlData["Systolinen verenpaine"] === undefined) {
      return null;
    } else if (
      controlData["Systolinen verenpaine"] >= 111 &&
      controlData["Systolinen verenpaine"] <= 219 &&
      personData["Systolinen verenpaine"] >= 111 &&
      personData["Systolinen verenpaine"] <= 219
    ) {
      return null;
    } else {
      return personData["Systolinen verenpaine"];
    }
  };

  const systolinenVerenpaine2 = () => {
    if (controlData["Systolinen verenpaine"] === undefined) {
      return personData["Systolinen verenpaine"];
    } else {
      return controlData["Systolinen verenpaine"];
    }
  };

  const systolinenVerenpaineTimestamp = () => {
    if (controlData["Systolinen verenpaine"] === undefined) {
      return null;
    } else if (
      controlData["Systolinen verenpaine"] >= 111 &&
      controlData["Systolinen verenpaine"] <= 219 &&
      personData["Systolinen verenpaine"] >= 111 &&
      personData["Systolinen verenpaine"] <= 219
      ) {
      return null;
    } else {
      return personData["Systolinen verenpaine_timestamp"];
    }
  };

  const syketaajuusStyle = () => {
    if (personData.Syketaajuus <= 40 || personData.Syketaajuus >= 131) {
      return red;
    } else if (personData.Syketaajuus >= 111 && personData.Syketaajuus <= 130) {
      return orange;
    } else if (
      (personData.Syketaajuus >= 41 && personData.Syketaajuus <= 50) ||
      (personData.Syketaajuus >= 91 && personData.Syketaajuus <= 110)
    ) {
      return lightOrange;
    } else if (personData.Syketaajuus >= 51 && personData.Syketaajuus <= 90) {
      return green;
    }
  };

  const syketaajuusBold = () => {
    if (personData.Syketaajuus <= 40 || personData.Syketaajuus >= 131) {
      return bold;
    }
  };

  const syketaajuusStyle2 = () => {
    if (controlData.Syketaajuus <= 40 || controlData.Syketaajuus >= 131) {
      return red;
    } else if (
      controlData.Syketaajuus >= 111 &&
      controlData.Syketaajuus <= 130
    ) {
      return orange;
    } else if (
      (controlData.Syketaajuus >= 41 && controlData.Syketaajuus <= 50) ||
      (controlData.Syketaajuus >= 91 && controlData.Syketaajuus <= 110)
    ) {
      return lightOrange;
    } else if (controlData.Syketaajuus >= 51 && controlData.Syketaajuus <= 90) {
      return green;
    }
  };

  const syketaajuusBold2 = () => {
    if (
      controlData.Syketaajuus <= 40 ||
      controlData.Syketaajuus >= 131
    ) {
      return bold;
    } else if (
      controlData.Syketaajuus >= 41 &&
      controlData.Syketaajuus <= 130
    ) {
      return light;
    } else if (
      personData.Syketaajuus <= 40 ||
      personData.Syketaajuus >= 131
    ) {
      return bold;
    } else {
      return light;
    }
  };

  const syketaajuus = () => {
    if (controlData.Syketaajuus === undefined) {
      return null;
    } else if (
      controlData.Syketaajuus >= 51 &&
      controlData.Syketaajuus <= 90 &&
      personData.Syketaajuus >= 51 &&
      controlData.Syketaajuus <= 90
    ) {
      return null;
    } else {
      return personData.Syketaajuus;
    }
  };

  const syketaajuus2 = () => {
    if (controlData.Syketaajuus === undefined) {
      return personData.Syketaajuus;
    } else {
      return controlData.Syketaajuus;
    }
  };

  const syketaajuusTimestamp = () => {
    if (controlData.Syketaajuus === undefined) {
      return null;
    } else if (
      controlData.Syketaajuus >= 51 &&
      controlData.Syketaajuus <= 90 &&
      personData.Syketaajuus >= 51 &&
      controlData.Syketaajuus <= 90
      ) {
      return null;
    } else {
      return personData.Syketaajuus_timestamp;
    }
  };

  const lampotilaStyle = () => {
    if (personData["Mittaa lämpötila"] <= 35) {
      return red;
    } else if (personData["Mittaa lämpötila"] >= 39.1) {
      return orange;
    } else if (
      (personData["Mittaa lämpötila"] >= 35.1 &&
        personData["Mittaa lämpötila"] <= 36) ||
      (personData["Mittaa lämpötila"] >= 38.1 &&
        personData["Mittaa lämpötila"] <= 39)
    ) {
      return lightOrange;
    } else if (
      personData["Mittaa lämpötila"] >= 36.1 &&
      personData["Mittaa lämpötila"] <= 38
    ) {
      return green;
    }
  };

  const lampotilaBold = () => {
    if (personData["Mittaa lämpötila"] <= 35) {
      return bold;
    }
  };

  const lampotilaStyle2 = () => {
    if (controlData["Mittaa lämpötila"] <= 35) {
      return red;
    } else if (controlData["Mittaa lämpötila"] >= 39.1) {
      return orange;
    } else if (
      (controlData["Mittaa lämpötila"] >= 35.1 &&
        controlData["Mittaa lämpötila"] <= 36) ||
      (controlData["Mittaa lämpötila"] >= 38.1 &&
        controlData["Mittaa lämpötila"] <= 39)
    ) {
      return lightOrange;
    } else if (
      controlData["Mittaa lämpötila"] >= 36.1 &&
      controlData["Mittaa lämpötila"] <= 38
    ) {
      return green;
    }
  };

  const lampotilaBold2 = () => {
    if (controlData["Mittaa lämpötila"] <= 35) {
      return bold;
    } else if (controlData["Mittaa lämpötila"] >= 35.1) {
      return light;
    } else if (personData["Mittaa lämpötila"] <= 35) {
      return bold;
    } else {
      return light;
    }
  };

  const lampotila = () => {
    if (controlData["Mittaa lämpötila"] === undefined) {
      return null;
    } else if (
      controlData["Mittaa lämpötila"] >= 36.1 &&
      controlData["Mittaa lämpötila"] <= 38 &&
      personData["Mittaa lämpötila"] >= 36.1 &&
      personData["Mittaa lämpötila"] <= 38
    ) {
      return null;
    } else {
      return personData["Mittaa lämpötila"];
    }
  };

  const lampotila2 = () => {
    if (controlData["Mittaa lämpötila"] === undefined) {
      return personData["Mittaa lämpötila"];
    } else {
      return controlData["Mittaa lämpötila"];
    }
  };

  const lampotilaTimestamp = () => {
    if (controlData["Mittaa lämpötila"] === undefined) {
      return null;
    } else if (
      controlData["Mittaa lämpötila"] >= 36.1 &&
      controlData["Mittaa lämpötila"] <= 38 &&
      personData["Mittaa lämpötila"] >= 36.1 &&
      personData["Mittaa lämpötila"] <= 38
      ) {
      return null;
    } else {
      return personData["Mittaa lämpötila_timestamp"];
    }
  };

  const tajunnanTasoStyle = () => {
    if (personData["Tajunnan taso"] === true) {
      return green;
    } else {
      return red;
    }
  };

  const tajunnanTasoStyle2 = () => {
    if (controlData["Tajunnan taso"] === undefined) {
      return green;
    } else if (
      controlData["Tajunnan taso"] === true
    ) {
      return green;
    } else {
      return red;
    }
  };

  const tajunnanTasoBold = () => {
    if (personData["Tajunnan taso"] === false) {
      return bold;
    }
  };

  const tajunnanTasoBold2 = () => {
    if (controlData["Tajunnan taso"] === false) {
      return bold;
    }
  };

  const tajunnanTaso = () => {
    if (controlData["Tajunnan taso"] === undefined) {
      return null;
    } else if (
      controlData["Tajunnan taso"] === true &&
      personData["Tajunnan taso"] === true
    ) {
      return null;
    } else if (
      controlData["Tajunnan taso"] === false &&
      personData["Tajunnan taso"] === false
    ) {
      return "Poikkeava";
    } else {
      return "Normaali";
    }
  };

  const tajunnanTaso2 = () => {
    if (controlData["Tajunnan taso"] === undefined) {
      return "Normaali";
    } else if (
      controlData["Tajunnan taso"] === true
      ) {
        return "Normaali"
      } else {
      return "Poikkeava";
    }
  };

  const tajunnanTasoTimestamp = () => {
    if (controlData["Tajunnan taso"] === undefined) {
      return null;
    } else if (
      controlData["Tajunnan taso"] === true &&
      personData["Tajunnan taso"] === true
    ) {
      return null
    } else {
      return personData["Tajunnan taso_timestamp"];
    }
  };

  const verensokeriStyle = () => {
    if (
      (personData["Mittaa verensokeri:"] <= 3.9 &&
      personData["Mittaa verensokeri:"] >= 0.1) ||
      personData["Mittaa verensokeri:"] >= 25
    ) {
      return red;
    } else if (
      (personData["Mittaa verensokeri:"] >= 4 &&
        personData["Mittaa verensokeri:"] <= 6) ||
      (personData["Mittaa verensokeri:"] >= 20.1 &&
        personData["Mittaa verensokeri:"] <= 24.9)
    ) {
      return orange;
    } else if (
      personData["Mittaa verensokeri:"] >= 15 &&
      personData["Mittaa verensokeri:"] <= 20
    ) {
      return lightOrange;
    } else if (
      personData["Mittaa verensokeri:"] >= 6.1 &&
      personData["Mittaa verensokeri:"] <= 14.9
    ) {
      return green;
    }
  };

  const verensokeriBold = () => {
    if (
      personData["Mittaa verensokeri:"] <= 3.9 ||
      personData["Mittaa verensokeri:"] >= 25
    ) {
      return bold;
    }
  };

  const verensokeriStyle2 = () => {
    if (
      (controlData["Mittaa verensokeri:"] <= 3.9 &&
      controlData["Mittaa verensokeri:"] >= 0.1) ||
      controlData["Mittaa verensokeri:"] >= 25
    ) {
      return red;
    } else if (
      (controlData["Mittaa verensokeri:"] >= 4 &&
        controlData["Mittaa verensokeri:"] <= 6) ||
      (controlData["Mittaa verensokeri:"] >= 20.1 &&
        controlData["Mittaa verensokeri:"] <= 24.9)
    ) {
      return orange;
    } else if (
      controlData["Mittaa verensokeri:"] >= 15 &&
      controlData["Mittaa verensokeri:"] <= 20
    ) {
      return lightOrange;
    } else if (
      controlData["Mittaa verensokeri:"] >= 6.1 &&
      controlData["Mittaa verensokeri:"] <= 14.9
    ) {
      return green;
    }
  };

  const verensokeriBold2 = () => {
    if (
      (controlData["Mittaa verensokeri:"] <= 3.9 &&
      controlData["Mittaa verensokeri:"] >= 0.1) ||
      controlData["Mittaa verensokeri:"] >= 25
    ) {
      return bold;
    } else if (
      (controlData["Mittaa verensokeri:"] >= 4 &&
      controlData["Mittaa verensokeri:"] <= 24.9) ||
      controlData["Mittaa verensokeri:"] === 0
    ) {
      return light;
    } else if (
      (personData["Mittaa verensokeri:"] <= 3.9 &&
      personData["Mittaa verensokeri:"] >= 0.1) ||
      personData["Mittaa verensokeri:"] >= 25
    ) {
      return bold;
    } else {
      return light;
    }
  };

  const verensokeri = () => {
    if (
      controlData["Mittaa verensokeri:"] === undefined ||
      personData["Mittaa verensokeri:"] === 0
    ) {
      return null;
    } else if (
      controlData["Mittaa verensokeri:"] >= 6.1 &&
      controlData["Mittaa verensokeri:"] <= 14.9 &&
      personData["Mittaa verensokeri:"] >= 6.1 &&
      personData["Mittaa verensokeri:"] <= 14.9
    ) {
      return null;
    } else if (
      personData["Mittaa verensokeri:"] !== undefined
    ) {
      return personData["Mittaa verensokeri:"];
    } else {
      return null;
    }
  };

  const verensokeri2 = () => {
    if (
      personData["Mittaa verensokeri:"] === 0 &&
      controlData["Mittaa verensokeri:"] === 0
    ) {
      return "Ei mitattu";
    } else if (
      personData["Mittaa verensokeri:"] === 0
    ) {
      return "Ei mitattu";
    } else if (
      controlData["Mittaa verensokeri:"] !== undefined
    ) {
      return controlData["Mittaa verensokeri:"];
    } else if (
      personData["Mittaa verensokeri:"] !== undefined
    ) {
      return personData["Mittaa verensokeri:"];
    } else {
      return "Ei mitattu";
    }
  };

  const verensokeriTimestamp = () => {
    if (controlData["Mittaa verensokeri:"] === undefined || (controlData["Mittaa verensokeri:"] === 0 && personData["Mittaa verensokeri:"] === 0)) {
      return null;
    } else if (
      controlData["Mittaa verensokeri:"] >= 6.1 &&
      controlData["Mittaa verensokeri:"] <= 14.9 &&
      personData["Mittaa verensokeri:"] >= 6.1 &&
      personData["Mittaa verensokeri:"] <= 14.9
      ) {
      return null;
    } else {
      return personData["Mittaa verensokeri:_timestamp"];
    }
  };

  const verensokeriTimestamp2 = () => {
    if (controlData["Mittaa verensokeri:"] >= 0.1) {
      return controlData["Mittaa verensokeri:_timestamp"];
    } else if (
      controlData["Mittaa verensokeri:"] === undefined && personData["Mittaa verensokeri:"] >= 0.1
    ) {
      return personData["Mittaa verensokeri:_timestamp"];
    } else if (
      (controlData["Mittaa verensokeri:"] === 0 && personData["Mittaa verensokeri:"] === 0) ||
      (controlData["Mittaa verensokeri:"] === undefined && personData["Mittaa verensokeri:"] === 0)
    ) {
      return null;
    } else {
      return personData["Mittaa verensokeri:_timestamp"];
    }
  };

  const timestamp = () => {
    if (verensokeriTimestamp() !== null) {
      return personData["Mittaa verensokeri:_timestampfull"];
    } else if (
      tajunnanTasoTimestamp() !== null
    ) {
      return personData["Tajunnan taso_timestampfull"];
    } else if (
      lampotilaTimestamp() !== null
    ) {
      return personData["Mittaa lämpötila_timestampfull"];
    } else if (
      syketaajuusTimestamp() !== null
    ) {
      return personData.Syketaajuus_timestampfull;
    } else if (
      systolinenVerenpaineTimestamp() !== null
    ) {
      return personData["Systolinen verenpaine_timestampfull"];
    } else if (
      happisaturaatioTimestamp() !== null
    ) {
      return personData.Happisaturaatio_timestampfull;
    } else if (
      hengitystaajuusTimestamp() !== null
    ) {
      return personData.Hengitystaajuus_timestampfull;
    } else if (
      personData["Mittaa verensokeri:"] !== undefined
    ) {
      return personData["Mittaa verensokeri:_timestampfull"];
    } else {
      return personData["Tajunnan taso_timestampfull"];
    }
  };

  return (
    <div className="report-container">
      <div className="sote-box" style={{ background: colorBox() }}>
        <h3>ABCDE-raportti:</h3>
        <p>{timestamp()}</p>
      </div>
      <div className="white-box">
        <div className="reportElement">
          <h3>Hengitystie:</h3>
          <div className="flex">
            <p className="subject">{"Onko hengitystie auki?"}</p>
            <div className="answer">
              {personData["Onko hengitystie auki?"] ? (
                <p style={{ color: green }}>Kyllä</p>
              ) : (
                <p style={{ color: red }}>Ei</p>
              )}
            </div>
          </div>
          <div className="flex">
            <p className="subject">{"Onko ilmatie-estettä?"}</p>
            <div className="answer">
              {personData["Onko ilmatie-estettä?"] ? (
                <p style={{ color: red }}>Kyllä</p>
              ) : (
                <p style={{ color: green }}>Ei</p>
              )}
            </div>
          </div>
        </div>

        <hr />

        <div className="reportElement">
          <h3>Hengitys:</h3>
          <div className="flex">
            <p className="subject">{"Korviin kuultavat äänet?"}</p>
            <div className="answer">
              <p style={{ color: green }}>
                {personData["Hengitys - Normaali hengitys / ei ääniä"]
                  ? "Normaali"
                  : null}
              </p>
              <p style={{ color: red }}>
                {personData["Hengitys - Vinkuna"] ? "Vinkuna" : null}
              </p>
              <p style={{ color: red }}>
                {personData["Hengitys - Korina"] ? "Korina" : null}
              </p>
              <p style={{ color: red }}>
                {personData["Hengitys - Rohina"] ? "Rohina" : null}
              </p>
              <p style={{ color: red }}>
                {personData["Hengitys - Raskas hengitys"]
                  ? "Raskas hengitys"
                  : null}
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="reportElement">
          <h3>Verenkierto:</h3>
          <div className="flex">
            <p className="subject">{"Syke"}</p>
            <div className="answer">
              {personData["Tarkista syke:"] ? (
                <p style={{ color: green }}>Säännöllinen</p>
              ) : (
                <p style={{ color: red }}>Epäsäännöllinen</p>
              )}
            </div>
          </div>
          <div className="flex">
            <p className="subject">{"Tuntuuko lämpörajoja raajoissa?"}</p>
            <div className="answer">
              {personData["Tuntuuko lämpörajoja raajoissa:"] ? (
                <p style={{ color: red }}>Kyllä</p>
              ) : (
                <p style={{ color: green }}>Ei</p>
              )}
            </div>
          </div>
        </div>

        <hr />

        <div className="reportElement">
          <h3>Tajunta:</h3>
          <div className="flex">
            <div
              style={{
                width: "100%",
                fontWeight: "200",
                overflowWrap: "break-word",
                display: "block",
                marginTop: "1em",
                marginBottom: "1em",
                marginLeft: "0",
                marginRight: "0"
              }}
              className="answer"
            >
              {personData["Tajunta - Ei poikkeavia löydöksiä."] ? (
                "Ei poikkeavia löydöksiä."
              ) : (
                <div style={{ fontWeight: "bold", color: red }}>
                  {personData.Tajunta}
                </div>
              )}
            </div>
          </div>
        </div>

        <hr />

        <div className="reportElement">
          <h3>Iho, paljastaminen:</h3>
          <div className="flex">
            <p className="subject">{"Miltä iho tuntuu?"}</p>
            <div className="answer">
              <p style={{ color: green }}>
                {personData["Iho, paljastaminen - Normaali"]
                  ? "Normaali"
                  : null}
              </p>
              <p style={{ color: red }}>
                {personData["Iho, paljastaminen - Kuiva"] ? "Kuiva" : null}
              </p>
              <p style={{ color: red }}>
                {personData["Iho, paljastaminen - Kostea"] ? "Kostea" : null}
              </p>
              <p style={{ color: red }}>
                {personData["Iho, paljastaminen - Kylmä"] ? "Kylmä" : null}
              </p>
              <p style={{ color: red }}>
                {personData["Iho, paljastaminen - Kuuma"] ? "Kuuma" : null}
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="subject">Onko iho muutoksia?</p>
            <div className="answer">
              {personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"] ? (
                <p style={{ color: green }}>Ei</p>
              ) : (
                <p style={{ color: red }}>Kyllä</p>
              )}
            </div>
          </div>
          {personData.Iho ? (
            <p
              style={{
                fontWeight: "bold",
                fontSize: "0.9rem",
                lineHeight: "1.6rem",
                color: red,
                overflowWrap: "break-word"
              }}
              className="answer"
            >
              {personData.Iho}
            </p>
          ) : null}
        </div>
      </div>

      <div className="sote-box" style={{ background: colorBox() }}>
        <h3>Vitaali-arvot:</h3>
      </div>

      {/* -----------------------  TIMESTAMPS  ----------------------- */}

      <div className="white-box">
        <table>
          <tbody>
            <tr>
              <td>{"Hengitystaajuus:"}</td>
              <td
                style={{
                  color: hengitystaajuusStyle2() ? (hengitystaajuusStyle2()) : (hengitystaajuusStyle()),
                  fontWeight: hengitystaajuusBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData.Hengitystaajuus_timestamp ? (controlData.Hengitystaajuus_timestamp) : (personData.Hengitystaajuus_timestamp)}
                </span>
                <br />
                {hengitystaajuus2()}
              </td>
              <td></td>
              <td
                style={{
                  color: hengitystaajuusStyle(),
                  fontWeight: hengitystaajuusBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {hengitystaajuusTimestamp()}
                </span>
                <br />
                {hengitystaajuus()}
              </td>
            </tr>

            <tr></tr>

            <tr>
              <td>
                {"Happisaturaatio:"}
                <br />
                <p style={{ fontWeight: "bold" }}>
                  Huomioi asiakkaan keuhkosairaus SpO2 arvoa tulkittaessa.
                </p>
              </td>
              <td
                style={{
                  color: happisaturaatioStyle2() ? (happisaturaatioStyle2()) : (happisaturaatioStyle()),
                  fontWeight: happisaturaatioBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData.Happisaturaatio_timestamp ? (controlData.Happisaturaatio_timestamp) : (personData.Happisaturaatio_timestamp)}
                </span>
                <br />
                {happisaturaatio2()}
              </td>
              <td></td>
              <td
                style={{
                  color: happisaturaatioStyle(),
                  fontWeight: happisaturaatioBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {happisaturaatioTimestamp()}
                </span>
                <br />
                {happisaturaatio()}
              </td>
            </tr>

            <tr></tr>

            <tr>
              <td>
                {"Systolinen"} <br />
                {"Verenpaine:"}
              </td>
              <td
                style={{
                  color: systolinenVerenpaineStyle2() ? (systolinenVerenpaineStyle2()) : (systolinenVerenpaineStyle()),
                  fontWeight: systolinenVerenpaineBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData["Systolinen verenpaine_timestamp"] ? (controlData["Systolinen verenpaine_timestamp"]) : (personData["Systolinen verenpaine_timestamp"])}
                </span>
                <br />
                {systolinenVerenpaine2()}
              </td>
              <td></td>
              <td
                style={{
                  color: systolinenVerenpaineStyle(),
                  fontWeight: systolinenVerenpaineBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {systolinenVerenpaineTimestamp()}
                </span>
                <br />
                {systolinenVerenpaine()}
              </td>
            </tr>

            <tr></tr>

            <tr>
              <td>{"Syketaajuus:"}</td>
              <td
                style={{
                  color: syketaajuusStyle2() ? (syketaajuusStyle2()) : (syketaajuusStyle()),
                  fontWeight: syketaajuusBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData.Syketaajuus_timestamp ? (controlData.Syketaajuus_timestamp) : (personData.Syketaajuus_timestamp)}
                </span>
                <br />
                {syketaajuus2()}
              </td>
              <td></td>
              <td
                style={{
                  color: syketaajuusStyle(),
                  fontWeight: syketaajuusBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {syketaajuusTimestamp()}
                </span>
                <br />
                {syketaajuus()}
              </td>
            </tr>

            <tr></tr>

            <tr>
              <td>{"Lämpötila:"}</td>
              <td
                style={{
                  color: lampotilaStyle2() ? (lampotilaStyle2()) : (lampotilaStyle()),
                  fontWeight: lampotilaBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData["Mittaa lämpötila_timestamp"] ? (controlData["Mittaa lämpötila_timestamp"]) : (personData["Mittaa lämpötila_timestamp"])}
                </span>
                <br />
                {lampotila2()}
              </td>
              <td></td>
              <td
                style={{ color: lampotilaStyle(), fontWeight: lampotilaBold() }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {lampotilaTimestamp()}
                </span>
                <br />
                {lampotila()}
              </td>
            </tr>

            <tr></tr>

            <tr>
              <td>{"Tajunnan taso:"}</td>
              <td
                style={{
                  color: tajunnanTasoStyle2() ? (tajunnanTasoStyle2()) : (tajunnanTasoStyle()),
                  fontWeight: tajunnanTasoBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData["Tajunnan taso_timestamp"] ? (controlData["Tajunnan taso_timestamp"]) : (personData["Tajunnan taso_timestamp"])}
                </span>
                <br />
                {tajunnanTaso2()}
              </td>
              <td></td>
              <td
                style={{ color: tajunnanTasoStyle(), fontWeight: tajunnanTasoBold() }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {tajunnanTasoTimestamp()}
                </span>
                <br />
                {tajunnanTaso()}
              </td>
            </tr>

            <tr></tr>
            
            <tr>
              <td>
                {"Verensokeri:"}
                <br />
                <p style={{ fontWeight: "bold" }}>
                  Huomioi insuliini DM paasto VS tavoite.
                </p>
              </td>
              <td
                style={{
                  color: verensokeriStyle2() ? (verensokeriStyle2()) : (verensokeriStyle()),
                  fontWeight: verensokeriBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {verensokeriTimestamp2()}
                </span>
                <br />
                  {verensokeri2()}
              </td>
              <td></td>
              <td
                style={{
                  color: verensokeriStyle(),
                  fontWeight: verensokeriBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {verensokeriTimestamp()}
                </span>
                <br />
                {verensokeri()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Report;
