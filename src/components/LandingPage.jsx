import React from "react";
import mainimg from "../assets/Main_img.webp";
import { Button } from "./ui/button";
import search from "../assets/search.svg";

export default function LandingPage() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={mainimg} className="w-full h-[541px] object-cover absolute" />
        <div className="flex flex-col relative w-[800px] justify-center items-center top-[132px] text-white gap-6">
          <p className="text-[34.44px] font-semibold text-center justify-center w-[675px] p-2">
            Buy or rent vetted properties at the most trusted online real estate
            portal
          </p>

          <div className="flex gap-4">
            <Button className="font-semibold w-[100px] h-[43px] hover:bg-white text-[#37474f] bg-white ">
              BUY
            </Button>
            <Button className="font-semibold w-[100px] h-[43px] hover:bg-white text-[#37474f] backdrop-blur bg-white/60">
              Rent
            </Button>
          </div>
          <div className="flex w-full bg-white rounded-2xl h-[80px] pl-[15px] ">
            <input
              type="text"
              placeholder="Search by city or area"
              className="flex flex-1 focus:border-0 focus:outline-none text-slate-800  px-[14px]"
            />
            <div className="w-[80px] flex items-center justify-center rounded-r-lg bg-[#e85451] cursor-pointer">
              <img src={search} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
