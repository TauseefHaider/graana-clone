import React, { useEffect, useState } from "react";
import { useAds } from "../context";
import CitiesButtons from "./CitiesButtons";
import PropertiesCarousel from "./PropertiesCarousel";

export default function RecentPropertiesForSell() {
  const { ads } = useAds();
  const buttons = ["Islamabad", "Rawalpindi", "Lahore", "Karachi", "Peshawar"];
  const [city, setCity] = useState("Islamabad");
  //create city handler function and pass that fun
  const RentData = ads.filter((data) => data.propertyFor === "Sell");
  const cityHandler = (item) => {
    const cityName = item;
    setCity(cityName);
  };
  const cityData = RentData.filter((item) => item.city === city);

  return (
    <div className="w-full flex items-center justify-center my-4 text-[#37474F]">
      <div className="md:w-[650px] lg:w-[890px] 2xl:w-[1200px] w-[278px] h-[467px] flex flex-col gap-6">
        <p className="md:text-[21px] text-[18px] font-semibold">
          Recent Properties For Sell
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
