import React, { useState } from "react";
import { useAds } from "../context";
import bed from "../assets/bed.svg";
import bath from "../assets/bath.svg";
import area from "../assets/area.svg";
import { useParams } from "react-router-dom";
import { useEffect, memo } from "react";

export default function CardsDetails() {
  const { id } = useParams();
  const { ads } = useAds();
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const selected = ads.find((item) => item.id === id);
    setSelectedCard(selected);
  }, [id, ads]);

  return (
    <div className="flex items-center justify-center text-[#37474F]">
      {selectedCard ? (
        <div className="xl:w-[1100px] lg:w-[900px] md:w-[700px] flex flex-col gap-8 mt-[50px]">
          <div className="relative">
          <img
            className="xl:w-[1100px] lg:w-[890px] object-cover md:rounded-2xl lg:h-[400px] h-[300px]"
            src={selectedCard.imgUrl}
            alt=""
          />
          <button
            className={`absolute bottom-3 left-3 p-1 rounded-full ${
              isFavorite ? "text-[#e85451] " : "text-white "
            }`}
            onClick={toggleFavorite}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFavorite ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
          </div>
          

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
                <img src={area} alt="" /> <p>{selectedCard.size} </p>
              </div>
              
              <div className="flex items-center gap-2"> <div className="w-[13px] h-[13px] bg-[#e85451] rounded-sm"></div>
              <p>{selectedCard.type}</p>
          </div>
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
      ) : (
        <p></p>
      )}
    </div>
  );
}
