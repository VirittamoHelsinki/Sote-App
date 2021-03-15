import React from "react";

function InstructionCardSecond({
  NEWSscoreTotal,
  personData,
  controlData,
  ControlNEWSscoreTotal,
  careType,
  setEmergencyVisibility
}) {
  //INSTRUCTIONS FOR DIFFERENT RISK TYPES

  const highRiskInstructions = {
    Kotihoito: (
      <div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            <span style={{ color: "rgb(171, 38, 21)", fontWeight: "800" }}>
              Soita 112.
            </span>
          </p>
        </div>

        <div className="emergency">
          <p
            className="emergencyPage-link page-paragraph"
            onClick={() => {
              setEmergencyVisibility(true);
            }}
          >
            Todelliset{" "}
            <span
              style={{
                fontWeight: "300",
                color: "#ad3e2f",
                textDecoration: "underline"
              }}
            >
              hätätilanneoireet
            </span>
          </p>
        </div>

        <p style={{ fontWeight: "600" }}>
          Tarkista hoidonrajaukset/-linjaukset ennen 112 soittoa.
        </p>
        <br />
        <p>Tarvittaessa mittaa uudestaan vitaalit ambulanssia odottaessa.</p>
      </div>
    ),

    "Ympärivuorokautinen hoiva": (
      <>
        <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi omaa lääkäriä <span>välittömästi</span>.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi lääkäriä erillisen ohjeen mukaan
            <br />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                letterSpacing: "0.1rem"
              }}
            >
              (Virka-ajan ulkopuolinen konsultointiohje kotihoidon ja
              ympärivuorokautisen hoivan henkilöstölle)
            </span>
            .
            <br />
            Konsultoi <span>ISBAR</span>-raportointiohjeen mukaan.
          </p>
        </div>
      </>
    )
  };

  const highToLowRiskInstructions = {
    Kotihoito: (
      <>
        <div>
          <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>välittömästi</span> omaa sairaanhoitajaa/lääkäriä
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>välittömästi</span> omaa sairaanhoitajaa jos
              paikalla.
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Jos oma sairaanhoitaja ei ole paikalla, konsultoi erillisen{" "}
              <span>virka-ajan ulkopuolisen ohjeen</span> mukaan <br />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  letterSpacing: "0.1rem"
                }}
              >
                (Virka-ajan ulkopuolinen konsultointiohje kotihoidon ja
                ympärivuorokautisen hoivan henkilöstölle)
              </span>
              .
              <br />
              Konsultoi <span>ISBAR</span>-raportointiohjeen mukaan.
            </p>
          </div>
        </div>
      </>
    ),

    "Ympärivuorokautinen hoiva": (
      <>
        <div>
          <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>välittömästi</span> omaa sairaanhoitajaa/lääkäriä
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>välittömästi</span> omaa sairaanhoitajaa jos
              paikalla.
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Jos oma sairaanhoitaja ei ole paikalla, konsultoi erillisen{" "}
              <span>virka-ajan ulkopuolisen ohjeen</span> mukaan <br />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  letterSpacing: "0.1rem"
                }}
              >
                (Virka-ajan ulkopuolinen konsultointiohje kotihoidon ja
                ympärivuorokautisen hoivan henkilöstölle)
              </span>
              .
              <br />
              Konsultoi <span>ISBAR</span>-raportointiohjeen mukaan.
            </p>
          </div>
        </div>
      </>
    )
  };

  const highToNoRiskInstructions = {
    Kotihoito: (
      <>
        <div>
          <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>välittömästi</span> omaa sairaanhoitajaa/lääkäriä
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>välittömästi</span> omaa sairaanhoitajaa jos
              paikalla.
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Jos oma sairaanhoitaja ei ole paikalla, konsultoi erillisen{" "}
              <span>virka-ajan ulkopuolisen ohjeen</span> mukaan <br />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  letterSpacing: "0.1rem"
                }}
              >
                (Virka-ajan ulkopuolinen konsultointiohje kotihoidon ja
                ympärivuorokautisen hoivan henkilöstölle)
              </span>
              .
              <br />
              Konsultoi <span>ISBAR</span>-raportointiohjeen mukaan.
            </p>
          </div>
        </div>
      </>
    ),

    "Ympärivuorokautinen hoiva": (
      <>
        <div>
          <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>välittömästi</span> oman yksikön sairaanhoitajaa
              tai hoitavaa lääkäriä.
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi oman yksikön sairaanhoitajaa jos paikalla tai suoraan{" "}
              <span>geriatrista lääkäriä</span> virka-ajan ulkopuolisen ohjeen
              mukaan
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  letterSpacing: "0.1rem"
                }}
              >
                (Virka-ajan ulkopuolinen konsultointiohje kotihoidon ja
                ympärivuorokautisen hoivan henkilöstölle)
              </span>
              .
              <br />
              Konsultoi <span>ISBAR</span>-raportointiohjeen mukaan.
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>
            Tarvittaessa jos haluat arvioida asiakasta uudestaan ennen
            mahdollista konsultaatiota, aloita sovellus alusta.
          </h3>
        </div>
      </>
    )
  };

  const CheckNEWSSCORErisk = () => {
    if (NEWSscoreTotal === 0) {
      return "Lievä riski";
    } else if (
      personData["Tajunnan taso"] === false ||
      personData["Hengitystaajuus - NEWSscore"] === 3 ||
      personData["Happisaturaatio - NEWSscore"] === 3 ||
      personData["Systolinen verenpaine - NEWSscore"] === 3 ||
      personData["Syketaajuus - NEWSscore"] === 3 ||
      personData["Mittaa lämpötila - NEWSscore"] === 3 ||
      NEWSscoreTotal >= 4
    ) {
      return "Korkea riski";
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      return "Kohtalainen riski";
    }
  };

  const CheckControlNEWSSCORErisk = () => {
    if (ControlNEWSscoreTotal === 0) {
      return "Lievä riski";
    } else if (
      controlData["Tajunnan taso"] === false ||
      controlData["Hengitystaajuus - NEWSscore"] === 3 ||
      controlData["Happisaturaatio - NEWSscore"] === 3 ||
      controlData["Systolinen verenpaine - NEWSscore"] === 3 ||
      controlData["Syketaajuus - NEWSscore"] === 3 ||
      controlData["Mittaa lämpötila - NEWSscore"] === 3 ||
      ControlNEWSscoreTotal >= 4
    ) {
      return "Korkea riski";
    } else if (ControlNEWSscoreTotal >= 1 && ControlNEWSscoreTotal <= 3) {
      return "Kohtalainen riski";
    }
  };

  const checkForSingleThreePointCase = () => {
    return (
      NEWSscoreTotal <= 3 &&
      (personData["Tajunnan taso"] === false ||
        personData["Hengitystaajuus - NEWSscore"] === 3 ||
        personData["Happisaturaatio - NEWSscore"] === 3 ||
        personData["Systolinen verenpaine - NEWSscore"] === 3 ||
        personData["Syketaajuus - NEWSscore"] === 3 ||
        personData["Mittaa lämpötila - NEWSscore"] === 3)
    );
  };

  // const NEWSscoreRiskChange = () => {
  //   if (
  //     (CheckControlNEWSSCORErisk() === "Korkea riski" &&
  //       CheckNEWSSCORErisk() === "Kohtalainen riski") ||
  //     (CheckControlNEWSSCORErisk() === "Kohtalainen riski" &&
  //       CheckNEWSSCORErisk() === "Lievä riski") ||
  //     (CheckControlNEWSSCORErisk() === "Korkea riski" &&
  //       CheckNEWSSCORErisk() === "Lievä riski")
  //   )
  //     return true;
  // };

  // console.log("CheckNEWSSCORErisk", CheckNEWSSCORErisk());
  // console.log("CheckControlNEWSSCORErisk", CheckControlNEWSSCORErisk());
  // console.log("NEWSscoreRiskChange", NEWSscoreRiskChange());

  if (
    CheckControlNEWSSCORErisk() === "Korkea riski" &&
    CheckNEWSSCORErisk() === "Lievä riski"
  ) {
    //RISKILUOKKA: KORKEASTA LIEVÄÄN
    return (
      <div className="InstructionCard-second-container">
        {/* {NEWSscoreRiskChange() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )} */}
        {highToNoRiskInstructions[careType]}
      </div>
    );
  } else if (
    CheckControlNEWSSCORErisk() === "Korkea riski" &&
    CheckNEWSSCORErisk() === "Kohtalainen riski"
  ) {
    // RISKILUOKKA: KORKEASTA KOHTALAISEEN
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        {/* {NEWSscoreRiskChange() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )} */}
        {highToLowRiskInstructions[careType]}
      </div>
    );
  } else if (
    CheckControlNEWSSCORErisk() === "Korkea riski" ||
    CheckNEWSSCORErisk() === "Korkea riski"
  ) {
    //RISKILUOKKA: KORKEA RISKI
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        {checkForSingleThreePointCase() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska yksittäisestä mittauksesta tuli korkean riskiluokan arvio.
          </p>
        )}
        {/* {NEWSscoreRiskChange() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )} */}
        {highRiskInstructions[careType]}
      </div>
    );
  } else {
    //RISKILUOKKA: LIEVÄ RISKI
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi oman yksikön sairaanhoitajaa tai hoitavaa lääkäriä.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi oman yksikön sairaanhoitajaa jos paikalla tai suoraan{" "}
            lääkäriä
            <br />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                letterSpacing: "0.1rem"
              }}
            >
              (Virka-ajan ulkopuolinen konsultointiohje kotihoidon ja
              ympärivuorokautisen hoivan henkilöstölle)
            </span>
            .
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>
          Tarvittaessa jos haluat arvioida asiakasta uudestaan ennen mahdollista
          konsultaatiota, aloita sovellus alusta.
        </h3>
      </div>
    );
  }
}

export default InstructionCardSecond;
