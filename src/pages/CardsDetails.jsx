import React from "react";
import { useAds } from "../context";
import bed from "../assets/bed.svg";
import bath from "../assets/bath.svg";
import area from "../assets/area.svg";

export default function CardsDetails() {
  const { selectedCard } = useAds();
  console.log("for", selectedCard);

  return (
    <div className="flex items-center justify-center text-[#37474F]">
      <div className="w-[1100px] flex flex-col gap-8 mt-[50px]">
        <img
          className="w-[1100px] object-cover rounded-2xl h-[400px]"
          src={selectedCard.imgUrl}
          alt=""
        />
        <div className="px-4 flex flex-col gap-4">
          <div className="flex justify-between items-center ">
            <p className="text-[28px] font-semibold">
              {selectedCard.propertyName} In {selectedCard.area},{" "}
              {selectedCard.city}
            </p>
            <p className="flex gap-1 text-[14px] items-center justify-center font-semibold">
              <span>Contact:</span>
              {selectedCard.contact}
            </p>
          </div>
          <div className="flex gap-4 items-center text-[14px]">
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
            <p>PKR</p>
            <p className="text-[26px]">{selectedCard.price}</p>
          </div>
          <div className="flex justify-between items-center">
            {" "}
            <p className="text-[12px]">Added 7 hours ago</p>
            <p className="font-semibold text-[20px]">
              Published by : {selectedCard.name}
            </p>
          </div>
          <div className="flex flex-col font-semibold gap-1 py-8  border-y border-y-gray-300">
            <p className="text-[18px]">Condition</p>
            <p className="text-[14px]">{selectedCard.condition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
