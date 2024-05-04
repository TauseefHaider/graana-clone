import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Card2 from "./Card";

import Loader from "./Loader";

export default function PropertiesCarousel({ data }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Carousel className="w-full max-w-full">
      {loading ? (
        <div className="-ml-1 flex gap-4">
          <Loader />
          <Loader className="md:block hidden" />
          <Loader className="hidden lg:block" />
          <Loader className="hidden  2xl:block" />
        </div>
      ) : (
        <CarouselContent className="-ml-1">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/1 md:basis-1/2.2  lg:basis-1/2.9 2xl:basis-1/3.9"
            >
              <Link to={`/details/${item.id}`} className="p-1">
                <Card2 item={item} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      )}

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
