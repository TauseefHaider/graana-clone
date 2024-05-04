import React, { useState } from "react";
import { Button } from "./ui/button";
import renthome from "../assets/renthomeicon.svg";
import salehome from "../assets/salehomeicon.svg";

export default function CitiesButtons({
  buttons,
  cityHandler,
  defaultSelectedIndex,
}) {
  const [selectedBtn, setSelectedBtn] = useState(buttons[defaultSelectedIndex]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3 overflow-scroll md:overflow-auto ">
        {buttons.map((item, index) => (
          <Button
            key={index}
            style={{
              borderColor: selectedBtn === item ? "#EF4444" : "#D1D5DB",
            }}
            className={`  bg-white shadow-none text-[12px] md:text-[14px] px-3 md:px-4 text-[#37474F] border border-gray-400 hover:bg-white hover:border-gray-700 h-[40px]`}
            onClick={() => {
              cityHandler(item);
              setSelectedBtn(item);
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="lg:flex hidden gap-2">
        <p className="font-semibold text-[12px] text-black">
          Total properties:
        </p>
        <img src={renthome} alt="" />
        <p className="text-[12px]">
          <span className="text-red-600 font-semibold text-[12px] mr-1">6</span>
          on rent
        </p>
        <img src={salehome} alt="" />
        <p className="text-[12px]">
          <span className="text-red-600 font-semibold text-[12px] mr-1">
            10
          </span>
          on sale
        </p>
      </div>
    </div>
  );
}
