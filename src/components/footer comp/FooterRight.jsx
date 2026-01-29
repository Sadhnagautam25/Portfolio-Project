import React, { useEffect, useState } from "react";
import { Wifi, Volume2, BatteryFull } from "lucide-react";

const FooterRight = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
    w-[30%] h-[85%]
    flex items-center justify-end
    text-white text-sm gap-2
  "
    >
      {/* Language */}
      <div
        className="
        language h-full
        flex flex-col items-center
        text-[12px] text-gray-100
        px-2 py-1
        rounded-md
        hover:bg-white/10
hover:shadow-[0_0_8px_rgba(255,255,255,0.12)]
        transition-all duration-200 ease-out
        cursor-pointer
      "
      >
        <span>ENG</span>
        <span className="opacity-80">IN</span>
      </div>

      {/* Status Icons */}
      <div
        className=" h-full
        flex items-center gap-3
        px-3 py-2
        rounded-md
        hover:bg-white/10
hover:shadow-[0_0_8px_rgba(255,255,255,0.12)]
        transition-all duration-200 ease-out
      "
      >
        <Wifi
          size={16}
          className="
    opacity-80
    hover:opacity-100
    hover:-translate-y-1px
    transition-all duration-200 ease-out
  "
        />
        <Volume2
          size={16}
          className="
    opacity-80
    hover:opacity-100
    hover:-translate-y-1px
    transition-all duration-200 ease-out
  "
        />
        <BatteryFull
          size={16}
          className="
    opacity-80
    hover:opacity-100
    hover:-translate-y-1px
    transition-all duration-200 ease-out
  "
        />
      </div>

      {/* Date & Time */}
      <div
        className="
    h-full
    date text-right leading-tight
    px-3 py-1.5
    rounded-md
    cursor-pointer
    group

    bg-transparent
    transform translate-x-0
    transition-[transform,box-shadow,background-color]
    duration-1000
    ease-[cubic-bezier(0.25,0.1,0.25,1)]

    hover:bg-white/10
    hover:shadow-[0_0_8px_rgba(255,255,255,0.12)]
    hover:-translate-x-2
  "
      >
        {/* Time */}
        <div className="text-[12px]">
          {time.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          <span className="hidden group-hover:inline text-xs opacity-70 ml-1">
            :{time.getSeconds().toString().padStart(2, "0")}
          </span>
        </div>

        {/* Date */}
        <div
          title={time.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          className="text-xs opacity-80"
        >
          {time.toLocaleDateString("en-IN", {
            weekday: "short",
            day: "2-digit",
            month: "short",
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterRight;
