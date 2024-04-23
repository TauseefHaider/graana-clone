import React from "react";
import imarat from "../assets/imaratresidencia.svg";
import { Button } from "../components/ui/button";
import buyicon from "../assets/buyicon.svg";
import renticon from "../assets/renticon.svg";
import house from "../assets/house.svg";
import apartment from "../assets/apartment.svg";
import lowerportion from "../assets/lower-portion.svg";
import upperportion from "../assets/upper-portion.svg";
import room from "../assets/room.svg";
import farmHouse from "../assets/farmHouse.svg";
import guestHouse from "../assets/guestHouse.svg";
import pentHouse from "../assets/pentHouse.svg";
import annexe from "../assets/annexe.svg";
import hostel from "../assets/hostel.svg";
import hotelSuites from "../assets/hotelSuites.svg";
import { Input } from "@/components/ui/input";

export default function RentProperty() {
  return (
    <div className="flex  justify-center text-[#37474F]">
      <div className="flex flex-col justify-center w-[1440px] gap-10">
        <div className="w-[1440px] relative h-[294px] mt-[70px] bg-[#e85451] justify-between flex items-center rounded-xl">
          <div className="text-white flex flex-col ml-[50px] gap-3 ">
            <p className="text-[36px] font-[700] text-white ">
              Upload your property details
            </p>
            <p className="text-[18px]">
              Get the best value for your property in a few steps.
            </p>
          </div>
          <img
            className="mb-[62px] absolute right-[-30px] "
            src={imarat}
            alt=""
          />
        </div>
        {/* form div */}
        <div className="ml-[70px] flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-semibold">What do you want to do?</p>
            <div className="flex gap-3">
              <Button className="bg-white border font-[400] border-red-500 shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                <img src={buyicon} alt="" />
                Sell
              </Button>
              <Button className="bg-white border font-[400] shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                <img src={renticon} alt="" />
                Rent
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[422px]">
            <p className="font-semibold">What kind of property do you have?</p>
            <div className="flex flex-col gap-4">
              <div className="flex">
                <Button className="bg-white shadow-none rounded-none px-6 border-b-2 border-red-500 font-semibold text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  Residential
                </Button>
                <Button className="bg-white font-[400] shadow-none rounded-none px-6 text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  Plot
                </Button>
                <Button className="bg-white font-[400] shadow-none rounded-none px-6 text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  Commercial
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={house} alt="" />
                  House
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={apartment} alt="" />
                  Flat
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={lowerportion} alt="" />
                  Lower Portion
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={upperportion} alt="" /> upper
                  Portion
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={room} alt="" />
                  Room
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={farmHouse} alt="" />
                  Farm House
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={guestHouse} alt="" />
                  Guest House
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[17px]" src={pentHouse} alt="" />
                  Pent House
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={annexe} alt="" />
                  Annexe
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={hostel} alt="" />
                  Hostel
                </Button>
                <Button className="bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img className="w-[20px]" src={hotelSuites} alt="" />
                  Hotel Suites
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">Which city is your property in?</p>
            <Input type="text" placeholder="Select your city" />
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">Which area is your property in?</p>
            <Input type="text" placeholder="Address, block, phase, city etc." />
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">What is the size of your property?</p>
            <Input type="number" placeholder="0" />
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">What is the asking price?</p>
            <Input type="number" placeholder="0 PKR" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">How many bedrooms does it have?</p>
            <div className="flex gap-3 flex-wrap w-[400px]">
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                Studio
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                1
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                2
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                3
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                4
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                5
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                6
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                7
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                8
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                9
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                10+
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">How many bathrooms does it have?</p>
            <div className="flex gap-3 flex-wrap w-[400px]">
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                Studio
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                1
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                2
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                3
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                4
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                5
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                6
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                7
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                8
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                9
              </Button>
              <Button className="bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white">
                10+
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">Name your property</p>
            <Input type="text" placeholder="Name your property" />
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">
              What is the condition of your property?
            </p>
            <Input type="text" placeholder="Property condition" />
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">Upload images of your property</p>
            <Input type="file" />
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">Tell us how to contact you</p>
            <Input type="tel" />
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">What is your name?</p>
            <Input type="text" placeholder="What is your name" />
          </div>
          <div className="w-full flex justify-center items-center p-6 ">
            <Button className="w-[170px]">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
