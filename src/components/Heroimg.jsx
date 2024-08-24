import React, { useState, useEffect } from "react";
import mainimg from "../assets/Main_img.webp";
import { Button } from "../components/ui/button";
import searchimg from "../assets/search.svg";
import { useAds } from "../context";
import { Link, useNavigate } from "react-router-dom";

export default function Heroimg() {
  const [type, setType] = useState("Sell");
  const [search, setSearch] = useState("");
  const { handleType, handleSearch } = useAds();
  const navigate = useNavigate();

  const btn = [
    {
      type: "Sell",
      text: "Buy",
    },
    {
      type: "Rent",
      text: "RENT",
    },
  ];

  const handleSearchClick = () => {
    navigate("search/city");
  };

  return (
    <div className="relative">
      <div className="flex justify-center relative">
        <img
          src={mainimg}
          className="w-full h-[320px] md:h-[541px] object-cover relative"
        />

        <div className="flex flex-col absolute md:w-[700px] lg:w-[800px] w-[320px] justify-center items-center top-[80px] md:top-[132px] text-white gap-4">
          <p className="text-[34.44px] font-semibold text-center justify-center w-[675px] p-2 md:block hidden">
            Buy or rent vetted properties at the most trusted online real estate
            portal
          </p>
          <p className="text-[25.8px] font-semibold text-center mb-2 justify-center md:hidden">
            Buy or rent with trust
          </p>

          <div className="flex gap-4">
            {btn.map((item, index) => (
              <Button
                key={index}
                style={{
                  backgroundColor:
                    type === item.type ? "white" : "rgba(255, 255, 255, 0.6)",
                }}
                className="font-semibold w-[75px] text-[13px] md:w-[100px] h-[37px] md:h-[43px] hover:bg-white text-[#37474f] backdrop-blur "
                onClick={() => setType(item.type)}
              >
                {item.text}
              </Button>
            ))}
          </div>
          <div className="flex w-full bg-white rounded-xl md:rounded-2xl h-[60px] md:h-[80px] pl-[15px] ">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                const inputValue = e.target.value;
                const formattedValue =
                  inputValue.charAt(0).toUpperCase() +
                  inputValue.slice(1).toLowerCase();
                setSearch(formattedValue);
              }}
              placeholder="Search by city or area"
              className="flex flex-1 focus:border-0 focus:outline-none text-slate-800  px-[14px] text-sm"
            />
            <Link
              to={`${type}/${search}`}
              className="md:w-[80px] w-[60px] flex items-center justify-center rounded-r-lg bg-[#e85451] cursor-pointer"
            >
              <img src={searchimg} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
