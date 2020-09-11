import React, { useState } from "react";
import "./FromInput.css";

import Locations from "../Locations/Locations";

export default function FromInput() {
  const [acronym, setAcronym] = useState("");
  const [fromValue, setFromValue] = useState("");
  const receiveInput = (text, acronym) => {
    console.log("text is ", text);
    setFromValue(text);
    setAcronym(acronym);
  };
  return (
    <div className='from-input'>
      <label>
        <input
          value={fromValue}
          type='text'
          placeholder='From'
          spellCheck='false'
          onClick={(el) => el.target.setSelectionRange(0, 24)}
          onFocus={() => {
            document.querySelector(".from").style.display = "block";
            document.querySelector(".to").style.display = "none";
          }}
        />
        <span>{acronym}</span>
      </label>
      <Locations inputType='from' passInput={receiveInput} />
    </div>
  );
}
