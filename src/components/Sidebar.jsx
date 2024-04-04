import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import sidelogo from "../assets/sidebarlogo.svg";
import granalogo from "../assets/GraanaLogo.svg";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Sidebar() {
  const [menuBtn, setMenuBtn] = useState("hidden");
  const [menuBtn2, setMenuBtn2] = useState("hidden");
  const [menuBtn3, setMenuBtn3] = useState("hidden");
  const [menuBtn4, setMenuBtn4] = useState("hidden");

  const menubtn = () => {
    const btn = menuBtn === "hidden" ? "flex" : "hidden";
    setMenuBtn(btn);
  };
  const menubtn2 = () => {
    const btn2 = menuBtn2 === "hidden" ? "flex" : "hidden";
    setMenuBtn2(btn2);
  };
  const menubtn3 = () => {
    const btn3 = menuBtn3 === "hidden" ? "flex" : "hidden";
    setMenuBtn3(btn3);
  };
  const menubtn4 = () => {
    const btn4 = menuBtn4 === "hidden" ? "flex" : "hidden";
    setMenuBtn4(btn4);
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <img className="w-[25px]" src={sidelogo} alt="" />
        </SheetTrigger>
        <SheetContent>
          <div className="mt-3 text-[#37474f]">
            <div className=" cursor-pointer">
              <img src={granalogo} className="w-[152px]" />
            </div>
            <Button className="bg-white text-[#37474f] text-[10px] font-semibold shadow-none hover:bg-white border w-[205px] py-[19px] mt-7 border-black">
              SIGN IN
            </Button>
            <div className="flex flex-col mt-4 pt-4 border-x-0 border-b-0 border-opacity-30 border border-t-[#37474f] w-[225px]">
              <div className="group relative inline-block text-left cursor-pointer">
                <div
                  onClick={menubtn}
                  type="button"
                  className="bg-white text-[#37474f] text-[10px] shadow-none hover:bg-inherit w-full"
                >
                  Buy
                </div>

                <div
                  className={`${menuBtn} w-[220px] origin-top-right bg-white focus:outline-none`}
                >
                  <div className="w-[220px]">
                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Buy a residential Property
                    </a>
                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Buy a commerial Property
                    </a>

                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Buy a plot
                    </a>
                  </div>
                </div>
              </div>
              <div className="group relative inline-block text-left cursor-pointer">
                <div
                  onClick={menubtn2}
                  type="button"
                  className="bg-white text-[#37474f] text-[10px] shadow-none hover:bg-inherit  w-full"
                >
                  Rent
                </div>

                <div
                  className={`${menuBtn2} w-[220px] origin-top-right bg-white focus:outline-none`}
                >
                  <div className="w-[220px]">
                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Rent a residential Property
                    </a>
                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Rent a commerial Property
                    </a>

                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      List my home for Rent
                    </a>
                  </div>
                </div>
              </div>
              <div className="group relative inline-block text-left cursor-pointer">
                <div
                  onClick={menubtn3}
                  type="button"
                  className="bg-white text-[#37474f] text-[10px] shadow-none hover:bg-inherit w-full"
                >
                  Sell
                </div>

                <div
                  className={`${menuBtn3} w-[220px] origin-top-right bg-white focus:outline-none`}
                >
                  <div className="w-[220px]">
                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Sell a Property
                    </a>
                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Rentout a Property
                    </a>
                  </div>
                </div>
              </div>
              <div className="group relative inline-block text-left cursor-pointer">
                <div
                  onClick={menubtn4}
                  type="button"
                  className="bg-white text-[#37474f] text-[10px] shadow-none hover:bg-inherit w-full"
                >
                  More
                </div>

                <div
                  className={`${menuBtn4} w-[220px] origin-top-right bg-white focus:outline-none`}
                >
                  <div className="w-[220px]">
                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Blogs
                    </a>
                    <a
                      href="#"
                      className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                    >
                      Visualize Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
