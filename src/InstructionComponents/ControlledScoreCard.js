import React, { useState, useEffect } from "react";

function ControlledScoreCard({ NEWSscoreTotal }) {
  // If the RISK LEVEL stayed the same after control, render PYSYI SAMANA. If the not render MUUTTUI
  const newRiskLevel = {
    stayedSame: " PYSYI SAMANA",
    changed: " MUUTTUI"
  };
  const [cardStyle, setCardStyle] = useState(null);
  const [cardText, setCardText] = useState(null);
  const [riskLevel, setRiskLevel] = useState(0);

  useEffect(() => {
    if (NEWSscoreTotal === 0) {
      setRiskLevel(0);
      setCardText("Lievä riski");
      setCardStyle({
        backgroundColor: "green"
      });
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      setRiskLevel(NEWSscoreTotal);
      setCardText("kohtalainen riski");
      setCardStyle({
        backgroundColor: "blue"
      });
    } else if (NEWSscoreTotal >= 4) {
      setRiskLevel(NEWSscoreTotal);
      setCardText("Korkea riski");
      setCardStyle({
        backgroundColor: "red"
      });
    }
  }, [riskLevel, NEWSscoreTotal]);
  return (
    <div style={cardStyle} className="controlled-scoreCard-container">
      <h3>RISKILUOKKA: {cardText}</h3>
      <p>Kontrolloidut NEWS-pisteet: {riskLevel}p.</p>
      <h3>{"KONTROLLOITU RISKILUOKKA:" + " KOHTALAINEN RISKI"}</h3>
    </div>
  );
}

export default ControlledScoreCard;
