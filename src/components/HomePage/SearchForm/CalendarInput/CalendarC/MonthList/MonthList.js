import React from "react";
import "./MonthList.css";
import { months } from "../CalendarC";

export default function MonthList({ passSelectedMonth }) {
  const scrollToSelectedMonth = (idx, monthNr) => {
    document.querySelector(".calendar-c").scrollTo({
      top: idx * 193 + 47 * (idx - 1),
      behavior: "smooth",
    });
    passSelectedMonth(monthNr);
  };
  return (
    <div className='month-list-c'>
      {months.map((m, i) => (
        <div
          onClick={() => scrollToSelectedMonth(i, m.nr)}
          className={
            m.nr === new Date().getMonth() + 1 &&
            m.year == new Date().getFullYear()
              ? "selected-month"
              : ""
          }
        >
          {m.name}
        </div>
      ))}
    </div>
  );
}
