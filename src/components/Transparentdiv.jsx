import React from "react";
import graycircle from "../assets/graycirle.svg";
import redcircle from "../assets/redcircle.svg";
import buyimg from "../assets/buyimg.svg";
import sellimg from "../assets/sellimg.svg";
import rentimg from "../assets/rentimg.svg";
import { Button } from "./ui/button";

export default function Transparentdiv() {
  return (
    <>
      <div className=" w-full my-5 md:flex justify-center min-h-[548px] flex-wrap items-center text-[#37474F] mt-4 hidden">
        <div className="lg:w-[1080px] md:w-[660px] relative min-h-[548px] flex justify-center items-center lg:flex-nowrap md:flex-wrap">
          <div className="lg:w-[1080px] md:w-[660px] md:p-2 min-h-[548px] backdrop-blur-lg bg-gray-200/50 z-10 rounded-xl flex items-center justify-center gap-12 lg:flex-nowrap md:flex-wrap">
            <div className="w-[290px] h-[364px] bg-white rounded-lg items-center justify-center flex flex-col gap-6">
              <img src={buyimg} alt="" />
              <div className="flex justify-center items-center flex-col gap-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#37474F] font-semibold text-[18.8px] py-3">
                    Buy a property
                  </p>
                  <p className="text-[14px]">Find where “perfect”</p>
                  <p className="text-[14px]">meets “happy”</p>
                </div>
                <Button className="text-[12px] bg-white text-[#37474F] shadow-none border border-black hover:bg-gray-100">
                  BROWSE PROPERTIES
                </Button>
              </div>
            </div>
            <div className="w-[290px] h-[364px] bg-white rounded-lg items-center justify-center flex flex-col gap-6">
              <img src={sellimg} alt="" />
              <div className="flex justify-center items-center flex-col gap-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#37474F] font-semibold text-[18.8px] py-3">
                    Sell a property
                  </p>
                  <p className="text-[14px]">Get the best value</p>
                  <p className="text-[14px]">in any economy</p>
                </div>
                <Button className="text-[12px] bg-white text-[#37474F] shadow-none border border-black hover:bg-gray-100">
                  ADD DETAILS
                </Button>
              </div>
            </div>
            <div className="w-[290px] h-[364px] bg-white rounded-lg items-center justify-center flex flex-col gap-6">
              <img src={rentimg} alt="" />
              <div className="flex justify-center items-center flex-col gap-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#37474F] font-semibold text-[18.8px] py-3">
                    Rent a property
                  </p>
                  <p className="text-[14px]">Live where you</p>
                  <p className="text-[14px]">can love</p>
                </div>
                <Button className="text-[12px] bg-white text-[#37474F] shadow-none border border-black hover:bg-gray-100">
                  FIND RENTALS
                </Button>
              </div>
            </div>
          </div>
          <img
            className="absolute top-10 left-[-60px] z-0"
            src={graycircle}
            alt=""
          />
          <img
            className="absolute bottom-6 right-[-50px]"
            src={redcircle}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-[#37474F] md:hidden">
        <div className="w-[320px] h-[300px] bg-white  items-center justify-center flex gap-4 border-b">
          <img src={buyimg} alt="" />
          <div className="flex justify-center items-center flex-col gap-8">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#37474F] font-semibold text-[18.8px] py-3">
                Buy a property
              </p>
              <p className="text-[14px]">Find where “perfect”</p>
              <p className="text-[14px]">meets “happy”</p>
            </div>
            <Button className="text-[12px] bg-white text-[#37474F] shadow-none border border-black hover:bg-gray-100">
              BROWSE PROPERTIES
            </Button>
          </div>
        </div>
        <div className="w-[320px] h-[300px] bg-white  items-center justify-center flex gap-4 border-b">
          <div className="flex justify-center items-center flex-col gap-8">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#37474F] font-semibold text-[18.8px] py-3">
                Sell a property
              </p>
              <p className="text-[14px]">Get the best value</p>
              <p className="text-[14px]">in any economy</p>
            </div>
            <Button className="text-[12px] bg-white text-[#37474F] shadow-none border border-black hover:bg-gray-100">
              ADD DETAILS
            </Button>
          </div>
          <img src={sellimg} alt="" />
        </div>
        <div className="w-[320px] h-[300px] bg-white  items-center justify-center flex gap-4 border-b">
          <img src={rentimg} alt="" />
          <div className="flex justify-center items-center flex-col gap-8">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#37474F] font-semibold text-[18.8px] py-3">
                Rent a property
              </p>
              <p className="text-[14px]">Live where you</p>
              <p className="text-[14px]">can love</p>
            </div>
            <Button className="text-[12px] bg-white text-[#37474F] shadow-none border border-black hover:bg-gray-100">
              FIND RENTALS
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
