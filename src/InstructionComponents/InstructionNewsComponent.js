import React from "react";
import NewsComponent from "../Components/NewsComponent";

function InstructionNewsComponent({
  history,
  setPersonData,
  personData,
  ControlCardVisibility,
  setControlCardVisibility,
  controlData,
  setcontrolData,
  ControlRiskCardVisibility,
  setControlRiskCardVisibility
}) {
  console.log(controlData);

  return (
    <div>
      {controlData["Hengitystaajuus - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Hengitystaajuus</h1>
          <p>
            Laske rintakehän liikkeet minuutin ajalta. Asiakkaan pitäisi olla
            puhumatta tämän ajan.
          </p>
          <NewsComponent
            name={"Hengitystaajuus"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[8, null, [9, 11], [12, 20], null, [21, 24], 25]}
          />
        </div>
      ) : null}

      {controlData["Happisaturaatio - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Happisaturaatio</h1>
          <p>Aseta Spo2 mittari asiakkaan sormeen noin 1-2 minuutin ajaksi.</p>
          <NewsComponent
            name={"Happisaturaatio"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[91, [92, 93], [94, 95], 96, null, null, null]}
          />
        </div>
      ) : null}

      {controlData["Systolinen verenpaine - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Systolinen verenpaine</h1>
          <p>Mittaa verenpaine istuen voinnin salliessa.</p>
          <NewsComponent
            name={"Systolinen verenpaine"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[90, [91, 100], [101, 110], [111, 219], null, null, 220]}
          />
        </div>
      ) : null}

      {controlData["Syketaajuus - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Syketaajuus</h1>
          <p>Tunnustele ranteesta tai tarvittaessa kyynärpäästä.</p>
          <NewsComponent
            name={"Syketaajuus"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[40, null, [41, 50], [51, 90], [91, 110], [111, 130], 131]}
          />
        </div>
      ) : null}

      {controlData["Mittaa lämpötila - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Lämpötila</h1>
          <p>Mittaa lämpötila kainalosta/korvasta.</p>
          <NewsComponent
            name={"Mittaa lämpötila"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[
              35.0,
              null,
              [35.1, 36.0],
              [36.1, 38.0],
              [38.1, 39.0],
              39.1,
              null
            ]}
          />
        </div>
      ) : null}

      <div
        onClick={() => {
          window.scrollTo(0, 0);
          history.push("/InstructionPageTwo");
        }}
        className={"controlDone-btn" + (ControlCardVisibility ? " active" : "")}
      >
        Kontrolloi valmis
      </div>
    </div>
  );
}

export default InstructionNewsComponent;
