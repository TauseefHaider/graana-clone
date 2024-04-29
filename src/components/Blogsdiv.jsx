import React from "react";

import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Blogcards from "./Blogcards";

export default function Blogsdiv({ data }) {
  return (
    <div className="w-full h-[791px] flex flex-col items-center  my-2 gap-5 text-[#37474F]">
      <p className="mt-8 md:text-[30px] text-[22px] font-semibold">
        Graana Blogs
      </p>
      <p className="text-[14px] hidden md:block">
        Trends and perspectives for buyers and investors
      </p>

      <div className="2xl:w-[1204px] lg:w-[850px] md:w-[660px] w-[280px] h-[480px] flex gap-4 my-3">
        <Carousel className="w-full max-w-full">
          <CarouselContent className="-ml-1">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className=" basis-1/1 md:basis-1/2.2 lg:basis-1/2.8 2xl:basis-1/2.9"
              >
                <div className="">
                  <Blogcards item={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Button className="font-semibold bg-[#37474F] hover:bg-">
        VIEW ALL BLOGS
      </Button>
    </div>
  );
}
