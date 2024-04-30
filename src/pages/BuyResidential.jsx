import React from "react";
import homepic from "../assets/home.webp";
import CardsDiv from "../components/CardsDiv";
import { useAds } from "../context";

export default function BuyResidential() {
  const buttons = ["Residential Properties", "Commercial Properties", "Plots"];

  const { ads } = useAds();

  const islamabadData = ads.filter((data) => data.city === "Islamabad");
  const RawalpindiData = ads.filter((data) => data.city === "Rawalpindi");
  const LahoreData = ads.filter((data) => data.city === "Lahore");
  const KarachiData = ads.filter((data) => data.city === "Karachi");
  const PeshawarData = ads.filter((data) => data.city === "Peshawar");

  return (
    <div>
      <CardsDiv
        title="Properties for Sale in Islamabad"
        data={islamabadData}
        buttons={buttons}
      />
      <CardsDiv
        title="Properties for Sale in Rawalpindi"
        data={RawalpindiData}
        buttons={buttons}
      />
      <CardsDiv
        title="Properties for Sale in Lahore"
        data={LahoreData}
        buttons={buttons}
      />
      <CardsDiv
        title="Properties for Sale in Karachi"
        data={KarachiData}
        buttons={buttons}
      />
      <CardsDiv
        title="Properties for Sale in Peshawar"
        data={PeshawarData}
        buttons={buttons}
      />
    </div>
  );
}
