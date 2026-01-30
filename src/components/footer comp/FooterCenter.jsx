import { useState } from "react";
import DockIcon from "./DockIcon";

const FooterCenter = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="
        flex w-fit h-full absolute bottom-0 left-1/2 -translate-x-1/2
        items-center justify-center gap-3
        bg-white/10 backdrop-blur-md 
        rounded-xl px-4
      "
    >
      <DockIcon
        index={0}
        windowId="github"
        src="/github.svg"
        gradient="from-black to-pink-700"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex} 
      />

      <DockIcon
        index={1}
        windowId="calendar"
        src="/calender.svg"
        gradient="from-blue-500 to-cyan-500"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />

      <DockIcon
        index={2}
        windowId="terminal"
        src="/cli.svg"
        gradient="from-green-600 to-emerald-600"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />

      <DockIcon
        index={3}
        windowId="linkedin"
        src="/Iinkedin.svg"
        gradient="from-[#0A66C2] to-[#004182]"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />

      <DockIcon
        index={4}
        windowId="instagram"
        src="/insta.svg"
        gradient="from-[#831cbf] via-[#fd0575] to-[#f87307]"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />

      <DockIcon
        index={5}
        windowId="note"
        src="/note.svg"
        gradient="from-indigo-500 to-purple-500"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />

      <DockIcon
        index={6}
        windowId="spotify"
        src="/spotify.svg"
        gradient="from-green-400 to-green-600"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />

      <DockIcon
        index={7}
        windowId="resume"
        src="/pdf.svg"
        gradient="from-rose-400 to-red-600"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
    </div>
  );
};

export default FooterCenter;
