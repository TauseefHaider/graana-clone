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

import Card2 from "./Card";
import { useAds } from "../context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CardsDiv({ title, data, buttons }) {
  const { ads, handleSelectedCardData, handleSelectedBtn } = useAds();
  const navigate = useNavigate();
  const [selectedBtn, setSelectedBtn] = useState("");
  const [selectedCard, setSelectedCard] = useState([]);

  const handleCardClick = (item) => {
    let cardData = [];
    if (item) {
      cardData.push({ item });
      console.log(cardData);
    }
    setSelectedCard(cardData);
  };

  useEffect(() => {
    handleSelectedBtn(selectedBtn);
  }, [selectedBtn]);

  useEffect(() => {
    if (selectedCard.length > 0) {
      const selectedItem = selectedCard[0].item;
      handleSelectedCardData(selectedItem);
      console.log("for2", selectedCard);
      navigate("/details");
    }
  }, [selectedCard]);

  return (
    <div className="w-full flex items-center justify-center my-4 text-[#37474F]">
      <div className="md:w-[650px] lg:w-[890px] 2xl:w-[1200px] w-[278px] h-[467px] flex flex-col gap-6">
        <p className="md:text-[21px] text-[18px] font-semibold">{title}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 overflow-scroll md:overflow-auto ">
            {buttons.map((item, index) => (
              <Button
                key={index}
                style={{
                  borderColor: selectedBtn === item ? "#EF4444" : "#D1D5DB",
                }}
                className={`  bg-white shadow-none text-[12px] md:text-[14px] px-3 md:px-4 text-[#37474F] border border-gray-400 hover:bg-white hover:border-gray-700 h-[40px]`}
                onClick={() => {
                  setSelectedBtn(item);
                  handleSelectedBtn(item);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="lg:flex hidden gap-2">
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
          <Carousel className="w-full max-w-full">
            <CarouselContent className="-ml-1">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/1 md:basis-1/2.2  lg:basis-1/2.9 2xl:basis-1/3.9"
                >
                  <div className="p-1" onClick={() => handleCardClick(item)}>
                    <Card2 item={item} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
