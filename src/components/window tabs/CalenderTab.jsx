import React, { useState } from "react";
import MacWindow from "../../window/MacWindow";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalenderTab = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const prevMonth = () =>
    setCurrentDate(new Date(year, month - 1, 1));

  const nextMonth = () =>
    setCurrentDate(new Date(year, month + 1, 1));

  return (
    <MacWindow windowId="calendar">
      <div className="p-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
          >
            ←
          </button>

          <h2 className="text-xl font-semibold tracking-wide">
            {currentDate.toLocaleString("default", {
              month: "long",
            })}{" "}
            {year}
          </h2>

          <button
            onClick={nextMonth}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
          >
            →
          </button>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center text-sm text-white/70 mb-2">
          {days.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty slots */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={i}></div>
          ))}

          {/* Actual Dates */}
          {Array.from({ length: totalDays }).map((_, i) => {
            const date = i + 1;
            const isToday =
              date === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();

            return (
              <div
                key={date}
                className={`
                  h-10 flex items-center justify-center rounded-lg cursor-pointer
                  transition-all duration-300
                  ${
                    isToday
                      ? "bg-blue-500 text-white font-semibold shadow-lg"
                      : "bg-white/10 hover:bg-white/20"
                  }
                `}
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>
    </MacWindow>
  );
};

export default CalenderTab;

