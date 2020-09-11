import React, { useEffect, useState } from "react";
import "./Dropdown.css";

export default function Dropdown({ passNrAdults, passSelectedType }) {
  //   let nr_adults = 1;
  const [nrAdults, setNrAdults] = useState(1);

  const decrement = () => {
    if (nrAdults === 1) {
      return;
    }
    setNrAdults(nrAdults - 1);
    passNrAdults(nrAdults - 1);
  };
  const increment = () => {
    if (nrAdults === 9) {
      return;
    }
    setNrAdults(nrAdults + 1);
    passNrAdults(nrAdults + 1);
  };
  const chooseType = (evt) => {
    document
      .querySelector(".flight-types > div:nth-child(1) button:nth-child(1)")
      .classList.remove("selected-btn");
    document
      .querySelector(".flight-types > div:nth-child(1) button:nth-child(2)")
      .classList.remove("selected-btn");
    document
      .querySelector(".flight-types > div:nth-child(2) button:nth-child(1)")
      .classList.remove("selected-btn");
    document
      .querySelector(".flight-types > div:nth-child(2) button:nth-child(2)")
      .classList.remove("selected-btn");
    evt.target.classList.add("selected-btn");

    passSelectedType(evt.target.textContent);
  };
  return (
    <div className='dropdown-c'>
      <div className='nr-adults-c'>
        <button className={nrAdults === 1 ? "gray-bg" : ""} onClick={decrement}>
          -
        </button>
        <div>
          <span>{nrAdults}</span>adults
        </div>
        <button className={nrAdults === 9 ? "gray-bg" : ""} onClick={increment}>
          +
        </button>
      </div>
      <div className='flight-types'>
        <div>
          <button onClick={chooseType} className='selected-btn'>
            Economy
          </button>
          <button onClick={chooseType}>Premium</button>
        </div>
        <div>
          <button onClick={chooseType}>Business</button>
          <button onClick={chooseType}>First</button>
        </div>
      </div>
    </div>
  );
}
