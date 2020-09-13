import React, { useState, useEffect } from "react";
import "./CalendarC.css";
import DaysOfWeek from "./DaysOfWeek/DaysOfWeek";
import Month from "./MonthComponent/Month";
import TripButtons from "./TripButtons/TripButtons";
import MonthList from "./MonthList/MonthList";

export const months = [
  { name: "September", nr: 9, year: 2020 },
  { name: "October", nr: 10, year: 2020 },
  { name: "November", nr: 11, year: 2020 },
  { name: "December", nr: 12, year: 2020 },
  { name: "January 2021", nr: 1, year: 2021 },
  { name: "February", nr: 2, year: 2021 },
  { name: "March", nr: 3, year: 2021 },
  { name: "April", nr: 4, year: 2021 },
  { name: "May", nr: 5, year: 2021 },
  { name: "June", nr: 6, year: 2021 },
  { name: "July", nr: 7, year: 2021 },
  { name: "August", nr: 8, year: 2021 },
  { name: "September", nr: 9, year: 2021 },
];

const monthData = [];
for (let i = 9; i < 22; i++) {
  const d = {
    month: i > 12 ? i % 12 : i,
    year: i > 12 ? 2021 : 2020,
  };
  monthData.push(d);
}

// BreakPoints for changing months elements (from left side)  on scroll
const breakPoints = [193];
for (let i = 0; i < 12; i++) {
  breakPoints.push(breakPoints[i] + 239);
}

export default function CalendarC({ passDepartingValues }) {
  const [tripType, setTripType] = useState("Round trip");
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDates, setSelectedDates] = useState([]);
  useEffect(() => {
    document
      .querySelector(".calendar-c")
      .addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (evt) => {
    // Change months in increments of scrollTop 193px
    const currentScrollValue = parseInt(evt.target.scrollTop);

    // Find idx of element that will  have class 'selected-month'
    const idx = breakPoints.findIndex((number) => {
      return number > currentScrollValue;
    });
    let monthList = document.querySelectorAll(".month-list-c > div");
    // Remove previous selected class
    monthList.forEach((m) => m.classList.remove("selected-month"));

    // Set new selected element
    if (idx === 11 && currentScrollValue > 2700) {
      monthList[idx + 1].classList.add("selected-month");
    } else {
      monthList[idx].classList.add("selected-month");
    }
  };

  const receiveTripType = (type) => {
    setTripType(type);
  };
  const receiveSelectedMonth = (nr) => {
    setSelectedMonth(nr);
    console.log("selected month nr ", nr);
  };
  const receiveSelectedDate = (date) => {
    if (tripType === "One way") {
      document.querySelector(".wrapper").style.display = "none";
      document.querySelector(".departing-c svg").style.transform =
        "rotate(0deg)";
      passDepartingValues([date], selectedMonth);
    } else {
      let temp = [...selectedDates];
      temp.push(date);
      setSelectedDates(temp);
      if (temp.length === 2) {
        document.querySelector(".wrapper").style.display = "none";
        document.querySelector(".departing-c svg").style.transform =
          "rotate(0deg)";
        passDepartingValues(temp, selectedMonth);
      }
    }
  };
  return (
    <div className='wrapper'>
      <MonthList passSelectedMonth={receiveSelectedMonth} />
      <TripButtons passTripType={receiveTripType} selected={tripType} />
      <DaysOfWeek />
      <div className='calendar-c'>
        {monthData.map((md) => (
          <Month
            passSelectedDate={receiveSelectedDate}
            selectedMonth={
              selectedMonth === 0 ? new Date().getMonth() + 1 : selectedMonth
            }
            tripType={tripType}
            month={md.month}
            year={md.year}
          />
        ))}
      </div>
      <div className='h-line'></div>
    </div>
  );
}
