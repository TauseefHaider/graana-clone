import React from "react";
import { Button } from "./ui/button";
import renthome from "../assets/renthomeicon.svg";
import salehome from "../assets/salehomeicon.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CardsDiv() {
  // const product = props.product;
  return (
    <div className="w-full flex items-center justify-center my-4 text-[#37474F]">
      <div className="w-[1200px] h-[457px] flex flex-col gap-6">
        {/* <p>{product.heading}</p> */}
        <p className="text-[21px] font-semibold">Top areas by city</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              className="bg-white 
             shadow-none text-[#37474F] border border-red-500 hover:bg-white hover:border-gray-700 h-[40px]"
            >
              Islamabad
            </Button>
            <Button className="bg-white shadow-none text-[#37474F] border border-gray-400 hover:bg-white hover:border-gray-700 h-[40px]">
              Rawalpindi
            </Button>
            <Button className="bg-white shadow-none text-[#37474F] border border-gray-400 hover:bg-white hover:border-gray-700 h-[40px]">
              Lahore
            </Button>
            <Button className="bg-white shadow-none text-[#37474F] border border-gray-400 hover:bg-white hover:border-gray-700 h-[40px]">
              Karachi
            </Button>
            <Button className="bg-white shadow-none text-[#37474F] border border-gray-400 hover:bg-white hover:border-gray-700 h-[40px]">
              Peshawar
            </Button>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold text-[12px] text-black">
              Total properties in Islamabad:
            </p>
            <img src={renthome} alt="" />
            <p className="text-[12px]">
              <span className="text-red-600 font-semibold text-[12px] mr-1">
                6
              </span>
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
        <div>
          <Carousel>
            <CarouselContent>
              <CarouselItem>1</CarouselItem>
              <CarouselItem>2</CarouselItem>
              <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
