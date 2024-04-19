import React from "react";

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

export default function LandingPage() {
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
  const buttons = [
    {
      btn: "Islamabad",
    },
    {
      btn: "Rawalpind",
    },
    {
      btn: "Lahore",
    },
    {
      btn: "Karachi",
    },
    {
      btn: "Peshawar",
    },
  ];
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
        title="Top areas by city"
        data={cityAreasData}
        buttons={buttons}
      />
      <CardsDiv
        title="Recent Properties for Rent"
        data={countryAreaData}
        buttons={buttons}
      />
      <CardsDiv
        title="Recent Properties for Sale"
        data={countryArea}
        buttons={buttons}
      />
      {/* blogs div */}
      <Blogsdiv data={blog} />
      <Heroappdiv />
    </div>
  );
}
