import React from "react";
import SidelogoWhite from "../components/SidelogoWhite";
import graanalogo from "../assets/GraanaLogo.svg";

export default function Mblheader() {
  return (
    <div className="h-[56px] flex items-center justify-between px-4 bg-white sticky top-0 z-50 md:hidden ">
      <SidelogoWhite />
      <img className="w-[130px]" src={graanalogo} alt="" />
      <p className="text-white">p</p>
    </div>
  );
}
