import React from "react";
import FooterLeft from "./FooterLeft"; // correct case

import FooterCenter from "./FooterCenter";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <div
      className="
    absolute bottom-0 w-full h-14
    bg-black/40
    backdrop-blur-md
    border-t border-white/20
    shadow-[0_-4px_20px_rgba(0,0,0,0.4)]
    flex items-center justify-between
    px-4 text-white
  "
    >
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  );
};

export default Footer;
