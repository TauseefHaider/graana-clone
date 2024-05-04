import React, { useState } from "react";
import { useAds } from "../context";
import CitiesButtons from "./CitiesButtons";
import PropertiesCarousel from "./PropertiesCarousel";

export default function SellResKarachi() {
  const { ads } = useAds();
  const buttons = ["Residential", "Commercial", "Plots"];
  const [type, setType] = useState("Residential");

  const PropertyData = ads.filter((data) => data.propertyFor === "Sell");
  const cityHandler = (item) => {
    const itemName = item;
    setType(itemName);
  };
  const CityWiseData = PropertyData.filter((data) => data.city === "Karachi");
  const cityData = CityWiseData.filter((item) => item.propertyType === type);

  return (
    <div className="w-full flex items-center justify-center my-4 text-[#37474F]">
      <div className="md:w-[650px] lg:w-[890px] 2xl:w-[1200px] w-[278px] h-[467px] flex flex-col gap-6">
        <p className="md:text-[21px] text-[18px] font-semibold">
          Properties for Sale in Karachi
        </p>
        <CitiesButtons
          buttons={buttons}
          cityHandler={cityHandler}
          defaultSelectedIndex={0}
        />

        <div>
          <PropertiesCarousel data={cityData} />
        </div>
      </div>
    </div>
  );
}
