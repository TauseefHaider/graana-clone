import React from "react";
import { Card, CardContent } from "./ui/card";
import bed from "../assets/bed.svg";
import bath from "../assets/bath.svg";
import area from "../assets/area.svg";
import { useAds } from "../context";

export default function Card2({ item }) {
  return (
    <Card className=" rounded cursor-pointer">
      <CardContent className="flex md:w-[289px] w-[250px] flex-col aspect-square p-0 text-[#37474F]">
        <img
          className=" object-cover md:w-[289px] w-[250px]  h-[161px] "
          src={item.imgUrl}
          alt=""
        />
        <div className="flex justify-between items-center m-2">
          <p className="text-[14px] font-semibold">
            PKR <span className="text-[22px]">{item.price}</span>
          </p>
          <p className="text-[12px]">{item.type}</p>
        </div>
        <div className="text-[12px] flex gap-2 mx-2">
          <img src={bed} alt="" />
          <p>{item.bedRoom}</p>
          <img src={bath} alt="" />
          <p>{item.bathRoom}</p>
          <img src={area} alt="" />
          <p>{item.size} </p>
        </div>
        <div className="text-[14px] m-2">
          <p>
            {item.area} , {item.city}
          </p>
        </div>
        <p className="text-[10px] mx-2">Added 7 hours ago</p>
      </CardContent>
    </Card>
  );
}
