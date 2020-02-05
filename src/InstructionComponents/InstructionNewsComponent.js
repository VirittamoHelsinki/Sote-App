import React from "react";
import NewsComponent from "../Components/NewsComponent";

function InstructionNewsComponent({
  history,
  setPersonData,
  personData,
  ControlCardVisibility,
  setControlCardVisibility
}) {
  return (
    <div
      className={
        "instruction-news-component" + (ControlCardVisibility ? " active" : "")
      }
    >
      <h1>Header poop</h1>
      <p>text poop text poop text poop text poop text poop</p>
      <div>
        {personData["Hengitystaajuus - NEWSscore"] >= 1 ? (
          <NewsComponent
            name={"Hengitystaajuus"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[8, null, [9, 11], [12, 20], null, [21, 24], 25]}
          />
        ) : null}

        {personData["Happisaturaatio - NEWSscore"] >= 1 ? (
          <NewsComponent
            name={"Happisaturaatio"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[91, [92, 93], [94, 95], 96, null, null, null]}
          />
        ) : null}

        {personData["Systolinen verenpaine - NEWSscore"] >= 1 ? (
          <NewsComponent
            name={"Systolinen verenpaine"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[90, [91, 100], [101, 110], [111, 219], null, null, 220]}
          />
        ) : null}

        {personData["Syketaajuus - NEWSscore"] >= 1 ? (
          <NewsComponent
            name={"Syketaajuus"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[40, null, [41, 50], [51, 90], [91, 110], [111, 130], 131]}
          />
        ) : null}

        {personData["Mittaa lämpötila - NEWSscore"] >= 1 ? (
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
        ) : null}
      </div>
    </div>
  );
}

export default InstructionNewsComponent;