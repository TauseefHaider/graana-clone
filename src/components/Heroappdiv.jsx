import React from "react";
import appstore from "../assets/appstore.svg";
import play from "../assets/play.svg";
import mbl from "../assets/mbl.webp";

export default function Heroappdiv() {
  return (
    <div className="w-full bg-[#f2f2f2] my-2 flex items-center justify-center text-[#37474F]">
      <div className="md:h-[443px] md:w-[1020px] p-5 md:p-0 md:px-4 px-0 lg:px-0 flex justify-between">
        <div className="md:w-[450px] h-full  flex flex-col justify-center gap-2 md:gap-6">
          <p className="md:text-[29px] text-[18px] font-semibold text-center md:text-start">
            Get the app now
          </p>
          <p className="text-[14px] md:block hidden">
            Search hundreds of thousands of up to date listings with powerful
            filters to find your perfect home and real estate investment. Find
            properties and opportunities exclusive and unique to Graana.
          </p>
          <div className="flex gap-4 mt-2">
            <img className="cursor-pointer" src={appstore} alt="" />
            <img className="cursor-pointer" src={play} alt="" />
          </div>
        </div>
        <img className="md:block hidden" src={mbl} alt="" />
      </div>
    </div>
  );
}
