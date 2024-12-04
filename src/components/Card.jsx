import React from "react";
import { Card, CardContent } from "./ui/card";
import bed from "../assets/bed.svg";
import bath from "../assets/bath.svg";
import area from "../assets/area.svg";
import { useAds } from "../context";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card2({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };


  return (
    <Card className=" rounded cursor-pointer">
      <CardContent className="flex md:w-[289px] w-[250px] flex-col aspect-square p-0 text-[#37474F]">
      <div className="relative">
      <img
          className=" object-cover md:w-[289px] w-[250px]  h-[161px] "
          src={item.imgUrl}
          alt=""
        />
          {/* Heart Icon */}
          <button
            className={`absolute bottom-2 right-2 p-1 rounded-full ${
              isFavorite ? "text-[#e85451] " : "text-white "
            }`}
            onClick={toggleFavorite}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFavorite ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
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
        <Link to={`/details/${item.id}`} className="p-1">
                 
           
        <div className="flex justify-between items-center m-2">
          <p className="text-[12px] font-semibold">
            PKR <span className="text-[22px]">{item.price}</span>
          </p>
          <div className="flex items-center gap-1"> <div className="w-[8.5px] h-[8.7px] bg-[#e85451] rounded-sm"></div>
          <p className="text-[12px]">{item.type}</p>
          </div>
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
        </Link>
      </CardContent>
    </Card>
  );
}
