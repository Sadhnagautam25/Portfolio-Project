import React from "react";
import { useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import { closeTab } from "../redux/features/tabSlice";
import { motion } from "framer-motion";

motion;
const MacWindow = ({ children, windowId }) => {
  const dispatch = useDispatch();

  return (
    <Rnd
      default={{
        x: 200,
        y: 110,
        width: 600,
        height: 400,
      }}
      bounds="parent"
    >
      {/* 👇 Animation wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{
          duration: 0.35,
          ease: [0.25, 0.8, 0.25, 1], // mac-like easing
        }}
        className="w-full h-full"
      >
        <div className="macWindow w-full h-full bg-[#0d1117] rounded-xl overflow-hidden relative border border-gray-800">
          {/* Navbar */}
          <div className="absolute top-0 left-0 w-full h-7 bg-[#161b22] z-10 flex items-center gap-3 px-3 border-b border-gray-700">
            <div className="flex gap-1">
              <div
                onClick={() => dispatch(closeTab(windowId))}
                className="w-3 h-3 bg-red-500 rounded-full"
              />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="text-gray-300 text-xs">~ Sadhna Gautam</div>
          </div>

          {/* Content */}
          <div className="pt-8 px-2 h-full overflow-y-auto text-gray-300 text-sm">
            {children}
          </div>
        </div>
      </motion.div>
    </Rnd>
  );
};

export default MacWindow;
