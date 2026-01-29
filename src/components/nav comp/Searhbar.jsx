import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openTab } from "../../redux/features/tabSlice";

const Searhbar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const text = value.toLowerCase();
      if (text.includes("git")) dispatch(openTab("github"));
      else if (text.includes("resume")) dispatch(openTab("resume"));
      else if (text.includes("spotify")) dispatch(openTab("spotify"));
      else if (text.includes("insta")) dispatch(openTab("instagram"));
      else if (text.includes("linkedin")) dispatch(openTab("linkedin"));
      else if (text.includes("calendar")) dispatch(openTab("calendar"));
      else if (text.includes("note")) dispatch(openTab("note"));
      else if (text.includes("terminal")) dispatch(openTab("terminal"));



      setValue("");
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search the web and type URL"
      className="
        absolute top-12 left-1/2 -translate-x-1/2 text-center
        w-[32%] h-13

        bg-black/35 
        border border-white/15
        rounded-xl

        px-5
        text-white text-sm
        placeholder:text-white/60

        shadow-[0_10px_30px_rgba(0,0,0,0.35)]

        outline-none
        transition-all duration-300
        ease-[cubic-bezier(0.25,0.1,0.25,1)]

        hover:bg-black/45
        hover:border-white/25

        focus:w-[36%]
        focus:bg-black/55
        focus:border-white/40
        focus:shadow-[0_20px_40px_rgba(0,0,0,0.45)]
      "
    />
  );
};

export default Searhbar;
