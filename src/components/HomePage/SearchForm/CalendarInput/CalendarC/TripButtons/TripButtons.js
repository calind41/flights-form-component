import React, { useEffect } from "react";
import "./TripButtons.css";

export default function TripButtons({ passTripType }) {
  const handleBtnClick = (evt) => {
    document
      .querySelectorAll(".trip-btns > button")
      .forEach((btn) => btn.classList.remove("is-selected"));
    evt.target.classList.add("is-selected");

    passTripType(evt.target.textContent);
  };
  useEffect(() => {
    document
      .querySelectorAll(".trip-btns > button")
      .forEach((btn) => btn.addEventListener("click", handleBtnClick));
  }, []);

  return (
    <div className='trip-btns'>
      <button className='is-selected'>Round trip</button>
      <button>One way</button>
    </div>
  );
}
