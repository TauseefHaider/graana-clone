import React from "react";
import sidelogo from "../assets/sidelogoblack.svg";
import granalogo from "../assets/GraanaLogo.svg";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import buyicon from "../assets/buyicon.svg";
import renticon from "../assets/renticon.svg";
import sellicon from "../assets/sellicon.svg";
import moreicon from "../assets/moreicon.webp";
import { Link } from "react-router-dom";

export default function SidelogoWhite() {
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
                        <Link
                          to="buy/residential"
                          className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                        >
                          Buy a residential Property
                        </Link>
                        <Link
                          to="buy/commercial"
                          className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                        >
                          Buy a commercial Property
                        </Link>

                        <Link
                          to="buy/plot"
                          className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                        >
                          Buy a plot
                        </Link>
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
                        <Link
                          to="rent/residential"
                          className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                        >
                          Rent a residential Property
                        </Link>
                        <Link
                          to="rent/commercial"
                          className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                        >
                          Rent a commercial Property
                        </Link>

                        <Link
                          to="list/home"
                          className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                        >
                          List my home for Rent
                        </Link>
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
                        <Link
                          to="sell/property"
                          className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                        >
                          Sell a Property
                        </Link>
                        <Link
                          to="rent/property"
                          className="text-[#37474f] block pl-4 py-1 text-[10px] hover:bg-gray-100"
                        >
                          Rentout a Property
                        </Link>
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
