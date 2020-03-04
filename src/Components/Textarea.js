import React from "react";

// When implementing a Textarea component on any of the pages, pass in the State-Variables: "personData" and "setPersonData" to update the global personData variable as props. Also pass in a "name" prop to indicate what the key in the "personData" object should be.
const Textarea = props => {
  return (
    <div className="Textarea">
      <p>
        {props.name === "Tajunta"
          ? "Poikkeava käytös"
          : "Poikkeavat löydökset."}
      </p>
      <form>
        <textarea
          placeholder="Kirjoita tähän löydöksiäsi..."
          value={
            props.personData[props.name] ? props.personData[props.name] : ""
          }
          onChange={e => {
            const oldData = props.personData;
            const newData = {
              ...oldData,
              [props.name]: e.target.value
            };
            props.setPersonData(newData);
          }}
        />
      </form>
    </div>
  );
};

export default Textarea;
