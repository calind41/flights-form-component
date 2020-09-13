import React, { useState, useEffect } from "react";
import "./Month.css";
let name = "September";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Month({
  passSelectedDate,
  selectedMonth,
  tripType,
  month,
  year,
}) {
  const [nrSelectedDates, setNrSelectedDates] = useState(0);
  const [firstValueSelected, setFirstValueSelected] = useState(0);

  useEffect(() => {
    document.querySelectorAll(".grid-container .grid-item").forEach((el) => {
      el.classList.remove("selected-date");
      el.classList.remove("hovered-date");
    });
    setNrSelectedDates(0);
  }, [tripType]);

  const getDaysInMonth = function (month, year) {
    // Here jan is 1 based
    // Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
  };

  const handleOnMouseEnter = (evt) => {
    // Only for  Round Trip option and when 1 date is already selected
    if (tripType === "One way") return;
    if (nrSelectedDates === 0 || nrSelectedDates === 2) return;

    let currentValue = parseInt(evt.target.textContent);
    let gridItems = document.querySelectorAll(".grid-container .grid-item");

    // Remove all hovered-date classes
    gridItems.forEach((item) => item.classList.remove("hovered-date"));
    // Add `hovered-date` class to elements with its textContent in
    // range of first date selected and currently hovered element
    gridItems.forEach((item, idx) => {
      if (parseInt(item.id) !== selectedMonth) return;
      let itemValue = parseInt(item.textContent);
      if (
        itemValue >= parseInt(firstValueSelected) &&
        itemValue <= currentValue
      ) {
        item.classList.add("hovered-date");
      }
    });
  };

  const selectDate = (evt) => {
    if (evt.target.classList.contains("color-gray")) return;
    if (selectedMonth !== month) return; // To avoid selecting same date for all months at the same time

    if (tripType === "Round trip") {
      if (nrSelectedDates + 1 > 2) {
        return;
      }
      evt.target.classList.add("selected-date");
      setFirstValueSelected(evt.target.textContent);
    } else {
      if (nrSelectedDates + 1 > 1) {
        return;
      }
      evt.target.classList.add("selected-date");
    }
    setNrSelectedDates(nrSelectedDates + 1);
    passSelectedDate(parseInt(evt.target.textContent));
  };
  const determineJsx = (monthNr, year) => {
    const d = new Date(`${monthNr}/01//${year}`);
    const dayOfWeek = d.getDay();
    const maxDaysInMonth = getDaysInMonth(monthNr, year);
    let jsx = [];
    let k = 1;

    for (let i = 0; i < 35; i++) {
      if (i < dayOfWeek - 1 || i > maxDaysInMonth) {
        jsx.push(<div className='grid-item grid-item-empty'></div>);
      } else {
        let className = "grid-item";
        if (k < new Date().getDate()) {
          className = "grid-item color-gray";
        }
        jsx.push(
          <div
            onMouseEnter={handleOnMouseEnter}
            onClick={selectDate}
            className={className}
            id={monthNr}
          >
            {k}
          </div>
        );
        k++;
      }
    }
    return jsx;
  };

  return (
    <div className='month-c'>
      <h4>{months[month - 1]}</h4>
      <div className='grid-container'>{determineJsx(month, year)}</div>
    </div>
  );
}
