import Calendar from "../Calendar";
import React from "react";
import Spacing from "../Spacing";
import Title from "./Title";

const CalendarSection = () => {
  return (
    <section className="w-full px-24pxr">
      <Title>{`2024.06.08\nSATURDAY\nPM 4:00`}</Title>

      <Spacing size={15} />
      <Calendar>
        <Calendar.Days />
        <Calendar.Dates startDate={2} endDate={29} activeDate={8} />
      </Calendar>
    </section>
  );
};

export default CalendarSection;
