import React from "react";
import "./DaysOfWeek.css";
export default function DaysOfWeek() {
  return (
    <div className='days-of-week'>
      <div>mon</div>
      <div>tue</div>
      <div>wed</div>
      <div>thu</div>
      <div>fri</div>
      <div className='weekend-days'>sat</div>
      <div className='weekend-days'>sun</div>
    </div>
  );
}
