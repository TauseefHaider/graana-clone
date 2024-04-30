import React from "react";
import { useAds } from "../context";
import bed from "../assets/bed.svg";
import bath from "../assets/bath.svg";
import area from "../assets/area.svg";

export default function CardsDetails() {
  const { selectedCard } = useAds();

  return (
    <div className="flex items-center justify-center text-[#37474F]">
      <div className="xl:w-[1100px] lg:w-[900px] md:w-[700px] flex flex-col gap-8 mt-[50px]">
        <img
          className="xl:w-[1100px] lg:w-[890px] object-cover md:rounded-2xl lg:h-[400px] h-[300px]"
          src={selectedCard.imgUrl}
          alt=""
        />
        <div className="px-4 flex flex-col gap-4">
          <div className="flex justify-between items-center ">
            <p className="lg:text-[28px] md:text-[20px] font-semibold">
              {selectedCard.propertyName} In {selectedCard.area},{" "}
              {selectedCard.city}
            </p>
            <p className="md:flex hidden gap-1 text-[14px] items-center justify-center font-semibold">
              <span>Contact:</span>
              {selectedCard.contact}
            </p>
          </div>
          <div className="flex gap-4 items-center md:text-[14px] text-[12px]">
            <div className="flex gap-2 items-center ">
              <img src={bed} alt="" /> <p>{selectedCard.bedRoom}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={bath} alt="" /> <p>{selectedCard.bathRoom}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={area} alt="" /> <p>{selectedCard.size} Marla</p>
            </div>
            <p>{selectedCard.type}</p>
          </div>
          <div className="flex items-center gap-3 font-semibold">
            <p className="text-[14px]">PKR</p>
            <p className="lg:text-[26px] md:text-[20px]">
              {selectedCard.price}
            </p>
          </div>
          <div className="flex justify-between items-center">
            {" "}
            <p className="md:text-[12px] text-[10px]">Added 7 hours ago</p>
            <p className="font-semibold lg:text-[20px]  hidden md:block">
              Published by : {selectedCard.name}
            </p>
          </div>
          <div className="flex flex-col font-semibold gap-1 py-8  border-y border-y-gray-300">
            <p className="md:text-[18px] text[16px]">Condition</p>
            <p className="md:text-[14px] text-[12px]">
              {selectedCard.condition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
