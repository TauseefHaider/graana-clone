import React from "react";
import investimg from "../assets/investimg.webp";
import { Button } from "./ui/button";
import wantedimg from "../assets/wantedimg.webp";

export default function Heroinvest() {
  return (
    <div className="flex justify-center items-center text-[#37474f] my-8 ">
      <div className="flex md:w-[1440px] lg:flex-row flex-col justify-center w-full items-center md:py-10 py-0 gap-12 md:gap-[180px]">
        <div className="flex md:flex-col justify-center items-center gap-3 md:gap-10 md:w-[420px] md:h-[460px]">
          <div>
            <img src={investimg} alt="" className="md:w-[230px] w-[175px]" />
          </div>
          <div className="flex flex-col md:justify-center md:items-center md:gap-10 gap-3 md:mt-0 mt-6 md:w-[420px] w-[145px]">
            <h1 className="md:text-[29.4px] text-[16px] font-semibold">
              Invest
            </h1>
            <p className="md:flex text-center text-sm hidden ">
              Invest in fully legal Imarat projects. Our “Ownerships &
              Approvals, Demand & Delivery” approach ensures fantastic returns
              with full risk mitigation
            </p>
            <p className="flex text-start text-[12px] md:hidden">
              Invest in fully legal Imarat projects
            </p>
            <Button className="md:w-[134px] w-[108px] md:h-[43px] h-[30px] md:text-sm text-[12px] bg-[#37474f]">
              INVEST NOW
            </Button>
          </div>
        </div>
        <div className="flex md:flex-col justify-center items-center w-full gap-3 md:gap-10 md:bg-white bg-[#f2f2f2] md:w-[420px] md:h-[460px] md:mt-12">
          <div className="md:block hidden">
            <img src={wantedimg} alt="" className="w-[230px]" />
          </div>
          <div className="flex flex-col md:justify-center md:items-center md:gap-10 gap-3 pb-6 md:pb-0 md:mt-0 mt-6 md:w-[420px] w-[145px]">
            <h1 className="md:text-[29.4px] text-[16px] font-semibold mt-4">
              Wanted
            </h1>
            <p className="flex md:text-center md:text-sm text-start my-4 text-[12px]">
              In just 3 clicks activate a team of experts to find the properties
              you need
            </p>
            <Button className="md:w-[134px] w-[108px] md:h-[43px] h-[30px] md:text-sm text-[12px] bg-[#37474f]">
              WANTED
            </Button>
          </div>
          <div>
            <div className="md:hidden block">
              <img src={wantedimg} alt="" className=" w-[175px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
