import React, { useState, useEffect } from "react";
import "./PassengerDropdown.css";
import Dropdown from "./Dropdown/Dropdown";

export default function PassengerDropdown() {
  const [nrAdults, setNrAdults] = useState(1);
  const [selectedType, setSelectedType] = useState("economy");

  const passNrAdults = (nrAdults) => {
    setNrAdults(nrAdults);
  };
  const passSelectedType = (selectedType) => {
    setSelectedType(selectedType);
  };
  const handleClick = (evt) => {
    // hack pentru a nu roti 180grade sageata de sub dropdown
    let node = evt.target;
    while (
      node !== null &&
      node.classList &&
      !node.classList.contains("body-className")
    ) {
      if (node.classList.contains("dropdown-c")) {
        return;
      }
      node = node.parentElement;
    }

    // rotate arrow
    let svgEl = document.querySelector(".p-c svg");
    if (svgEl.style.transform == "rotate(180deg)") {
      document.querySelector(".p-c svg").style.transform = "rotate(0deg)";
    } else {
      document.querySelector(".p-c svg").style.transform = "rotate(180deg)";
    }

    // toggle dropdown
    let dropdownEl = document.querySelector(".dropdown-c");
    console.log(dropdownEl.style.display);
    if (dropdownEl.style.display === "block") {
      dropdownEl.style.display = "none";
    } else {
      dropdownEl.style.display = "block";
    }
  };
  return (
    <div onClick={handleClick} className='passenger-c p-c'>
      <span className='nr-p'>{nrAdults}</span>
      <span>passenger,</span>
      <span className='type'>{selectedType.toLowerCase()}</span>
      <svg
        class='_7TN9i _1rcak'
        width='10'
        height='6'
        viewBox='0 0 24 14.8'
        fill='#222'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='#000'>
          <path d='M2.8,0L12,9.2L21.2,0L24,2.8l-12,12L0,2.8L2.8,0z'></path>
        </g>
      </svg>
      <Dropdown
        passNrAdults={passNrAdults}
        passSelectedType={passSelectedType}
      />
    </div>
  );
}
