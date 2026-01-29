import React from "react";
import { useDispatch } from "react-redux";
import { openTab } from "../../redux/features/tabSlice";

const DockIcon = ({ src, gradient, index, hoveredIndex, setHoveredIndex, windowId }) => {
  const isHovered = hoveredIndex === index;
  const isAdjacent = hoveredIndex === index - 1 || hoveredIndex === index + 1;
  const dispatch = useDispatch()

  return (
    <div
      onClick={()=>{
        dispatch(openTab(windowId))
      }} 
      onMouseEnter={() => setHoveredIndex(index)} 
      onMouseLeave={() => setHoveredIndex(null)}
      className={`
        flex items-center justify-center
        w-9 h-9 rounded-lg
        bg-linear-to-br ${gradient}
        cursor-pointer
        transition-all duration-300
        ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${
          isHovered
            ? "scale-125 -translate-y-2"
            : isAdjacent
              ? "scale-110 -translate-y-1"
              : "scale-100 translate-y-0"
        }
      `}
    >
      <img
        src={src}
        alt=""
        className="w-6 h-6 opacity-90 pointer-events-none"
      />
    </div>
  );
};

export default DockIcon;
