import React from "react";
import "./CalendarInput.css";

export default function CalendarInput() {
  const handleClick = () => {
    let svgEl = document.querySelector(".departing-c svg");
    console.log(svgEl.style.transform);
    if (svgEl.style.transform == "rotate(180deg)") {
      document.querySelector(".departing-c svg").style.transform =
        "rotate(0deg)";
      console.log("intru aici");
    } else {
      document.querySelector(".departing-c svg").style.transform =
        "rotate(180deg)";
    }
  };
  return (
    <div onClick={handleClick} className='departing-c'>
      <span>Departing</span>
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
  );
}
