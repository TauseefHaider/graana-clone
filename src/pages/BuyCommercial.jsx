import React from "react";

import CardsDiv from "../components/CardsDiv";
import { useAds } from "../context";

export default function BuyCommercial() {
  const buttons = ["Residential", "Commercial", "Plots"];

  const { ads, selectedBtn } = useAds();

  const SellProperty = ads.filter((data) => data.propertyFor === "Sell");

  const islamabadData = SellProperty.filter(
    (data) => data.city === "Islamabad"
  );
  const RawalpindiData = SellProperty.filter(
    (data) => data.city === "Rawalpindi"
  );
  const LahoreData = SellProperty.filter((data) => data.city === "Lahore");
  const KarachiData = SellProperty.filter((data) => data.city === "Karachi");
  const PeshawarData = SellProperty.filter((data) => data.city === "Peshawar");
  const filteredIslamabad = islamabadData.filter(
    (data) => data.propertyType === selectedBtn
  );
  const filteredRawalpindi = RawalpindiData.filter(
    (data) => data.propertyType === selectedBtn
  );
  const filteredLahore = LahoreData.filter(
    (data) => data.propertyType === selectedBtn
  );
  const filteredKarachi = KarachiData.filter(
    (data) => data.propertyType === selectedBtn
  );
  const filteredPeshawar = PeshawarData.filter(
    (data) => data.propertyType === selectedBtn
  );

  return (
    <div>
      <CardsDiv
        title="Properties for Sale in Islamabad"
        data={filteredIslamabad}
        buttons={buttons}
        defaultSelectedIndex={1}
      />
      <CardsDiv
        title="Properties for Sale in Rawalpindi"
        data={filteredRawalpindi}
        buttons={buttons}
        defaultSelectedIndex={1}
      />
      <CardsDiv
        title="Properties for Sale in Lahore"
        data={filteredLahore}
        buttons={buttons}
        defaultSelectedIndex={1}
      />
      <CardsDiv
        title="Properties for Sale in Karachi"
        data={filteredKarachi}
        buttons={buttons}
        defaultSelectedIndex={1}
      />
      <CardsDiv
        title="Properties for Sale in Peshawar"
        data={filteredPeshawar}
        buttons={buttons}
        defaultSelectedIndex={1}
      />
    </div>
  );
}
