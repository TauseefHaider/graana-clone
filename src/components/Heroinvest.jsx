import React from "react";
import investimg from "../assets/investimg.webp";
import { Button } from "./ui/button";
import wantedimg from "../assets/wantedimg.webp";

export default function Heroinvest() {
  return (
    <div className="flex text-[#37474f] my-8 ">
      <div>
        <div className="flex mx-20 px-[200px] py-10 gap-[180px]">
          <div className="flex flex-col justify-center items-center gap-10 w-[420px] ">
            <div>
              <img src={investimg} alt="" className="w-[230px]" />
            </div>
            <h1 className="text-[29.4px] font-semibold">Invest</h1>
            <p className="flex text-center text-sm">
              Invest in fully legal Imarat projects. Our “Ownerships &
              Approvals, Demand & Delivery” approach ensures fantastic returns
              with full risk mitigation
            </p>
            <Button className="w-[134px] h-[43px] bg-[#37474f]">
              INVEST NOW
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center gap-14 w-[420px] ">
            <div>
              <img src={wantedimg} alt="" className="w-[230px] " />
            </div>
            <h1 className="text-[29.4px] font-semibold">Wanted</h1>
            <p className="flex text-center text-sm">
              In just 3 clicks activate a team of experts to find the properties
              you need
            </p>
            <Button className="w-[134px] h-[43px] bg-[#37474f]">WANTED</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
