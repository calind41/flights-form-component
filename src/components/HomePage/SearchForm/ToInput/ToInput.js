import React, { useState } from "react";
import "./ToInput.css";
import Locations from "../Locations/Locations";

export default function ToInput() {
  const [acronym, setAcronym] = useState("");
  const [toValue, setToValue] = useState("");
  const receiveInput = (text, acronym) => {
    console.log("text is ", text);
    setToValue(text);
    setAcronym(acronym);
  };
  return (
    <div className='to-input'>
      <label>
        <input
          value={toValue}
          type='text'
          placeholder='To'
          spellCheck='false'
          onClick={(el) => el.target.setSelectionRange(0, 24)}
          onFocus={() => {
            document.querySelector(".to").style.display = "block";
            document.querySelector(".from").style.display = "none";
          }}
        />
        <span>{acronym}</span>
      </label>
      <Locations inputType='to' passInput={receiveInput} />
    </div>
  );
}
