import React, { useState } from "react";

import Heroinvest from "../components/Heroinvest";
import Heroimg from "../components/Heroimg";
import Transparentdiv from "../components/Transparentdiv";
import Heromap from "../components/Heromap";
import CardsDiv from "../components/CardsDiv";
import homepic from "../assets/home.webp";
import Blogsdiv from "../components/Blogsdiv";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import Heroappdiv from "../components/Heroappdiv";
import { useAds } from "../context";
import { useEffect } from "react";

export default function LandingPage() {
  const { ads, selectedBtn } = useAds();

  const blog = [
    {
      pic: blog1,
      title: "CDA Initiates Pre-Ramadan",
      discription:
        "Islamabad: Under the directives of the Chairman of the Capital Development Authority (CDA), robust measures are being taken ahead of the",
      name: "Muhammad Jahanzaib",
      date: "March 7, 2024 - 1 min read",
    },
    {
      pic: blog1,
      title: "CDA Allots 157 Government",
      discription:
        "Islamabad: The Capital Development Authority (CDA) has allotted 157 government accommodations. These allotments were mad",
      name: "Muhammad Jahanzaib",
      date: "March 7, 2024 - 2 min read",
    },
    {
      pic: blog2,
      title: "Ramadan Calendar Gujranwala",
      discription:
        "As the holy month of Ramadan approaches, Muslims in Gujranwala, Pakistan, eagerly await the opportunity to observe their faith through",
      name: "Mariana Aslam",
      date: "March 1, 2024 - 7 min read",
    },
  ];
  const SellProperty = ads.filter((data) => data.propertyFor === "Sell");
  const buttons = ["Islamabad", "Rawalpind", "Lahore", "Karachi", "Peshawar"];
  const filteredData = SellProperty.filter((data) => data.city === selectedBtn);
  const RentProperty = ads.filter((data) => data.propertyFor === "Rent");
  const filteredDataRent = RentProperty.filter(
    (data) => data.city === selectedBtn
  );

  return (
    <div>
      {/* Hero Img Section */}
      <Heroimg />
      {/* Hero Invest and Wanted Section */}
      <Heroinvest />
      {/* Hero Transparent div */}
      <Transparentdiv />
      {/* Hero Map Section */}
      <Heromap />
      {/* City cards */}

      <CardsDiv
        data={filteredDataRent}
        title="Recent Properties for Rent"
        buttons={buttons}
        defaultSelectedIndex={0}
      />

      <CardsDiv
        data={filteredData}
        title="Recent Properties for Sale"
        buttons={buttons}
        defaultSelectedIndex={0}
      />
      {/* blogs div */}
      <Blogsdiv data={blog} />
      <Heroappdiv />
    </div>
  );
}
