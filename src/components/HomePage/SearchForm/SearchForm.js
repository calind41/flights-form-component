import React, { useEffect } from "react";
import "./SearchForm.css";

import FromInput from "./FromInput/FromInput";
import ToInput from "./ToInput/ToInput";
import CalendarInput from "./CalendarInput/CalendarInput";
import PassengerDropdown from "./PassengerDropdown/PassengerDropdown";
import SearchButton from "./SearchButton/SearchButton";

export default function SearchForm() {
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (evt) => {
      if (evt.target.classList.contains("homepage-c")) {
        document.querySelector(".from").style.display = "none";
        document.querySelector(".to").style.display = "none";
      }
    });
  }, []);
  const swapLocations = () => {
    let from_input = document.querySelector(".from-input label input ");
    let from_span = document.querySelector(".from-input label span ");

    let to_input = document.querySelector(".to-input label input");
    let to_span = document.querySelector(".to-input label span");

    let temp_txt = from_input.value;
    let temp_acronym = from_span.textContent;

    from_input.value = to_input.value;
    from_span.textContent = to_span.textContent;

    to_input.value = temp_txt;
    to_span.textContent = temp_acronym;
  };
  return (
    <div className='searchform-c'>
      <div>FLIGHTS</div>
      <FromInput />
      <div onClick={swapLocations} className='swap'>
        <svg
          class='_2sB1Q _5YKYt'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path
            fill-rule='evenodd'
            d='M7.8 8.8l1.7 1.7a.8.8 0 0 1-1 1l-3-3a.8.8 0 0 1 0-1l3-3a.8.8 0 0 1 1 1L7.8 7.3H16c1.7 0 2.8 1 2.8 2.7a.8.8 0 1 1-1.5 0c0-1-.4-1.3-1.3-1.3H7.8zm8.4 6.4l-1.7-1.7a.8.8 0 0 1 1-1l3 3a.8.8 0 0 1 0 1l-3 3a.8.8 0 0 1-1-1l1.7-1.8H8c-1.7 0-2.8-1-2.8-2.7a.8.8 0 1 1 1.5 0c0 1 .4 1.3 1.3 1.3h8.2z'
          ></path>
        </svg>
      </div>
      <ToInput />
      <CalendarInput />
      <PassengerDropdown />
      <SearchButton />
    </div>
  );
}
