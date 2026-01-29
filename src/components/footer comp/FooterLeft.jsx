import React, { useEffect, useState } from "react";

const FooterLeft = () => {
  const [forecast, setForecast] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [city, setCity] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

  // ✅ Fetch weather ONCE
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7`,
          );
          const data = await res.json();

          setCity(data.location.name);
          setForecast(data.forecast.forecastday);
        } catch (err) {
          console.error("Weather error:", err);
        }
      },
      async () => {
        // fallback location
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Delhi&days=7`,
        );
        const data = await res.json();

        setCity(data.location.name);
        setForecast(data.forecast.forecastday);
      },
    );
  }, [API_KEY]);

  // ✅ SLIDER — this is what was confusing you
  useEffect(() => {
    if (forecast.length === 0) return;

    const slider = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % forecast.length;
        return next;
      });
    }, 10000); // 🔥 10 sec (change to 180000 later)

    return () => clearInterval(slider);
  }, [forecast]);

  const currentDay = forecast[currentIndex];

  return (
    <div
      className="
        weather w-[9%] h-[85%] px-2 rounded-md
        text-white text-sm shadow-md
        hover:bg-white/10
hover:shadow-[0_0_8px_rgba(255,255,255,0.12)]
        transition-all duration-100 ease-linear
        overflow-hidden flex flex-col justify-center items-center pt-2 leading-2.5
      "
    >
      <p className="text-[14px] self-start pl-0.5">{city}</p>

      {currentDay && (
        <div className="flex justify-start gap-1 w-full text-[12px] items-center">
          <div className="flex items-center">
            <span>
              {new Date(currentDay.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </span>

            <img
              src={currentDay.day.condition.icon}
              alt=""
              className="w-7 h-7"
            />
          </div>

          <span className="whitespace-nowrap">
            {Math.round(currentDay.day.mintemp_c)}° /{" "}
            {Math.round(currentDay.day.maxtemp_c)}°
          </span>
        </div>
      )}
    </div>
  );
};

export default FooterLeft;
