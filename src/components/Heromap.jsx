import React from "react";
import bgmap from "../assets/bgmap.webp";
import map from "../assets/map.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Heromap() {
  return (
    <div className="lg:my-14 my-2 text-[#37474F]">
      <div className="relative lg:flex items-center justify-center  hidden">
        <img src={bgmap} alt="" />
        <div className="absolute flex gap-20">
          <div className=" w-[440px] flex flex-col gap-2">
            <p className="text-[29.4px] font-semibold">Area Guides</p>
            <p className="text-[14px]">
              View schools, health services, parks, security index and other
              details of any area
            </p>
            <input
              className="w-full p-3 border rounded hover:border-black mt-4"
              type="text"
              placeholder="Search area"
            />
          </div>
          <img className="w-[447px] mb-10" src={map} alt="" />
        </div>
      </div>
      <div className="bg-[#f2f2f2] p-6 py-6 lg:hidden">
        <p className="text-[26.4px] font-semibold">Area Guides</p>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-[14px] text-start font-normal">
                View schools, clinics and other details of any area
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <input
                className="w-full p-3 border rounded hover:border-black mt-4"
                type="text"
                placeholder="Search area"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
