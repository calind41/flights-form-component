import React, { useState } from "react";
import "./CalendarInput.css";
import CalendarC from "./CalendarC/CalendarC";
import { months } from "./CalendarC/MonthComponent/Month";
export default function CalendarInput() {
  const [departingValue, setDepartingValue] = useState("Departing");
  const handleClick = () => {
    let svgEl = document.querySelector(".departing-c svg");
    if (svgEl.style.transform == "rotate(180deg)") {
      document.querySelector(".departing-c svg").style.transform =
        "rotate(0deg)";
      document.querySelector(" .wrapper").style.display = "none";
    } else {
      document.querySelector(".departing-c svg").style.transform =
        "rotate(180deg)";
      document.querySelector(" .wrapper").style.display = "block";
    }
  };
  const receiveDepartingValues = (values, selectedMonth) => {
    console.log(values);
    if (selectedMonth === 0) {
      selectedMonth = new Date().getMonth() + 1;
    }
    console.log(months[selectedMonth - 1]);
    let txt = "";
    values.map(
      (v) => (txt += `${v} ${months[selectedMonth - 1].slice(0, 3)}-`)
    );
    let finalStr = txt.slice(-txt.length, txt.length - 1);

    setDepartingValue(finalStr);
  };

  return (
    <>
      <div onClick={handleClick} className='departing-c'>
        <span
          className={departingValue !== "Departing" ? "departed-has-value" : ""}
        >
          {departingValue}
        </span>
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
      </div>
      <CalendarC passDepartingValues={receiveDepartingValues} />
    </>
  );
}
