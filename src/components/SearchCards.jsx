import React from "react";
import Card2 from "./Card";
import { useAds } from "../context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function SearchCards() {
  const { ads, type, search, handleSelectedCardData } = useAds();
  const [selectedCard, setSelectedCard] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const filterdata = ads.filter((data) => data.propertyFor === type);
  const data = filterdata.filter((data) => data.city === search);

  const handleCardClick = (item) => {
    let cardData = [];
    if (item) {
      cardData.push({ item });
    }
    setSelectedCard(cardData);
  };

  useEffect(() => {
    if (selectedCard.length > 0) {
      const selectedItem = selectedCard[0].item;
      handleSelectedCardData(selectedItem);

      navigate("/details");
    }
  }, [selectedCard]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" md:m-10 lg:m-14 m-4 flex flex-col gap-5">
      <p className="md:text-[21px] text-[18px] font-semibold">
        Properties For {type} In {search}
      </p>

      {loading ? (
        <div className="flex gap-4 flex-wrap">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {data.map((item, index) => (
            <div key={index} className="flex ">
              <div className="p-1" onClick={() => handleCardClick(item)}>
                <Card2 item={item} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
