import React, { useState } from "react";
import granaLogo from "../assets/GraanaLogo.svg";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="h-[76px] z-50 sticky top-0 bg-white px-[10px] text-[#37474f] md:flex items-center hidden">
      <div className="lg:pl-[108px] md:pl-[10px] md:pr-[5px]  pr-[30px] cursor-pointer">
        <img className="w-[240px] h-[40px]" src={granaLogo} alt="" />
      </div>
      <div className="flex items-center justify-start flex-1">
        <div className="group relative inline-block text-left">
          <Button className="bg-inherit text-[#37474f] shadow-none hover:bg-inherit font-semibold">
            BUY
          </Button>

          <div
            className={`group-hover:block hover:block hidden  absolute z-10 w-[300px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="w-[300px]">
              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Buy a residential Property
              </a>
              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Buy a commerial Property
              </a>

              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Buy a plot
              </a>
            </div>
          </div>
        </div>

        <div className="group relative inline-block text-left">
          <Button className="group bg-inherit w-[64px] text-[#37474f] shadow-none hover:bg-inherit font-semibold">
            SELL
          </Button>

          <div
            className={`group-hover:block hover:block hidden absolute z-10 w-[300px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="w-[300px]">
              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Sell a property
              </a>
              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Rentout a property
              </a>
            </div>
          </div>
        </div>

        <div className="group relative inline-block text-left">
          <Button className="bg-inherit text-[#37474f] shadow-none hover:bg-inherit font-semibold">
            RENT
          </Button>

          <div
            className={`group-hover:block hover:block hidden  absolute z-10 w-[300px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="w-[300px]">
              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Residential property on rent
              </a>
              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Commerial property on rent
              </a>
              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                List my home for rent
              </a>
            </div>
          </div>
        </div>

        <Button className="bg-inherit w-[69px] text-[#37474f] shadow-none hover:bg-inherit font-semibold">
          INVEST
        </Button>
        <Button className="bg-inherit text-[#37474f] shadow-none hover:bg-inherit font-semibold">
          MORE
        </Button>
      </div>
      <div className="flex justify-end items-center md:[60px] lg:mr-[108px] gap-2">
        <Button className="bg-inherit text-[#37474f] shadow-none hover:bg-inherit font-semibold">
          WANTED
        </Button>
        <Button className="bg-inherit text-[#37474f] border px-[18px] h-10 border-black font-semibold shadow-none hover:bg-inherit">
          Sign In
        </Button>
      </div>
    </div>
  );
}
