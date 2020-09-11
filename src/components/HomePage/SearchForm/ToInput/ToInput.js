import React, { useState } from "react";
import "./ToInput.css";
import Locations from "../Locations/Locations";
import { locations } from "../FromInput/FromInput";

export default function ToInput() {
  const [locs, setLocs] = useState(locations);
  const [acronym, setAcronym] = useState("");
  const [toValue, setToValue] = useState("");
  const receiveInput = (text, acronym) => {
    console.log("text is ", text);
    setToValue(text);
    setAcronym(acronym);
  };
  const filterLocations = (evt) => {
    setToValue(evt.target.value);
    let input, filter;
    input = evt.target;
    filter = evt.target.value.toLowerCase();

    let filtered_locs = [];
    let temp = locations;
    temp.map((location, index) => {
      const city = location.full.props.children[0];
      const country = location.full.props.children[1].props.children;
      let text = city + country;

      if (text.toLowerCase().indexOf(filter) > -1) {
        // display it
        filtered_locs.push(location);
      }
    });

    setLocs(filtered_locs);
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
          onChange={filterLocations}
        />
        <span>{acronym}</span>
      </label>
      <Locations locations={locs} inputType='to' passInput={receiveInput} />
    </div>
  );
}
