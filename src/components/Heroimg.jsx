import React from "react";
import mainimg from "../assets/Main_img.webp";
import { Button } from "../components/ui/button";
import search from "../assets/search.svg";
import logoresponsive from "../assets/gr.svg";

import Sidebar from "../components/Sidebar";

export default function Heroimg() {
  return (
    <div className="relative">
      <div className=" absolute z-10 flex top-4 w-full md:hidden">
        <div className="ml-4">
          <Sidebar />
        </div>
        <div className=" flex flex-1 items-center justify-center mr-14">
          <img
            className="w-[130px] cursor-pointer"
            src={logoresponsive}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center relative">
        <img
          src={mainimg}
          className="w-full h-[320px] md:h-[541px] object-cover relative"
        />

        <div className="flex flex-col absolute md:w-[700px] lg:w-[800px] w-[350px] justify-center items-center top-[80px] md:top-[132px] text-white gap-4">
          <p className="text-[34.44px] font-semibold text-center justify-center w-[675px] p-2 md:block hidden">
            Buy or rent vetted properties at the most trusted online real estate
            portal
          </p>
          <p className="text-[25.8px] font-semibold text-center mb-2 justify-center md:hidden">
            Buy or rent with trust
          </p>

          <div className="flex gap-4">
            <Button className="font-semibold w-[75px] md:w-[100px] text-[13px] h-[37px] md:h-[43px] hover:bg-white text-[#37474f] bg-white ">
              BUY
            </Button>
            <Button className="font-semibold w-[75px] text-[13px] md:w-[100px] h-[37px] md:h-[43px] hover:bg-white text-[#37474f] backdrop-blur bg-white/60">
              RENT
            </Button>
          </div>
          <div className="flex w-full bg-white rounded-xl md:rounded-2xl h-[60px] md:h-[80px] pl-[15px] ">
            <input
              type="text"
              placeholder="Search by city or area"
              className="flex flex-1 focus:border-0 focus:outline-none text-slate-800  px-[14px] text-sm"
            />
            <div className="md:w-[80px] w-[60px] flex items-center justify-center rounded-r-lg bg-[#e85451] cursor-pointer">
              <img src={search} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
