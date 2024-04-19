import React from "react";
import homepic from "../assets/home.webp";
import CardsDiv from "../components/CardsDiv";

export default function RentResidential() {
  const cityAreasData = [
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.5 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.2 arab",
      type: "House",
      bed: "5",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.8 arab",
      type: "House",
      bed: "8",
      bath: "9",
      city: "Lahore",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
  ];
  const countryAreaData = [
    {
      img: homepic,
      price: "1.3 arab",
      type: "Hotel",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.7 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.6 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.9 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
  ];
  const countryArea = [
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
    {
      img: homepic,
      price: "1.3 arab",
      type: "House",
      bed: "6",
      bath: "7",
      city: "Islamabad",
      Location: "F-6",
    },
  ];
  const buttons = [
    {
      btn: "Residential Properties",
    },
    {
      btn: "Commercial Properties",
    },
    {
      btn: "Plots",
    },
  ];

  return (
    <div>
      <CardsDiv
        title="Properties for Rent in Islamabad"
        data={cityAreasData}
        buttons={buttons}
      />
      <CardsDiv
        title="Properties for Rent in Rawalpindi"
        data={countryAreaData}
        buttons={buttons}
      />
      <CardsDiv
        title="Properties for Rent in Lahore"
        data={countryArea}
        buttons={buttons}
      />
      <CardsDiv
        title="Properties for Rent in Karachi"
        data={countryArea}
        buttons={buttons}
      />
      <CardsDiv
        title="Properties for Rent in Peshawar"
        data={countryArea}
        buttons={buttons}
      />
    </div>
  );
}
