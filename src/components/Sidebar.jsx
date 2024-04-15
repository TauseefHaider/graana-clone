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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import buyicon from "../assets/buyicon.svg";
import renticon from "../assets/renticon.svg";
import sellicon from "../assets/sellicon.svg";
import moreicon from "../assets/moreicon.webp";

export default function Sidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <img className="w-[25px]" src={sidelogo} alt="" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col justify-between h-full pb-10">
            <div className="mt-3 text-[#37474f]">
              <div className=" cursor-pointer">
                <img src={granalogo} className="w-[152px]" />
              </div>
              <Button className="bg-white text-[#37474f] text-[10px] font-semibold shadow-none hover:bg-white border w-[205px] py-[19px] mt-7 border-black">
                SIGN IN
              </Button>
              <div className="flex flex-col mt-4 pt-4 pr-2 border-x-0 border-b-0 border-opacity-30 border border-t-[#37474f] w-[225px]">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div
                        type="button"
                        className="bg-white text-[#37474f] flex gap-3 items-center text-[10px] text-left shadow-none hover:bg-inherit w-full"
                      >
                        <img src={buyicon} alt="" />
                        Buy
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
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
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <div
                        type="button"
                        className="bg-white text-[#37474f] flex gap-3 items-center text-left text-[10px] shadow-none hover:bg-inherit  w-full"
                      >
                        <img src={renticon} alt="" />
                        Rent
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
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
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <div
                        type="button"
                        className="bg-white text-[#37474f] flex gap-3 items-center text-left text-[10px] shadow-none hover:bg-inherit w-full"
                      >
                        <img src={sellicon} alt="" />
                        Sell
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
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
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      <div
                        type="button"
                        className="bg-white text-[#37474f] flex gap-3 items-center text-left text-[10px] shadow-none hover:bg-inherit w-full"
                      >
                        <img className="w-[18px]" src={moreicon} alt="" />
                        More
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <Button className="bg-white text-[#37474f] text-[10px] font-semibold shadow-none hover:bg-white border w-[205px] py-[19px] mt-7 border-black">
              WANTED
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
