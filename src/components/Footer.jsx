import React from "react";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import instagram from "../assets/instagram.webp";
import linkedin from "../assets/linkedin.webp";
import twitter from "../assets/twitter.webp";
import youtube from "../assets/youtube.webp";
import facebook from "../assets/facebook.webp";

export default function Footer() {
  return (
    <div className="w-full text-[#37474F] flex items-center justify-center flex-col pb-20">
      <div className="2xl:w-[1440px] md:w-[700px] h-[250px] flex md:justify-between justify-center 2xl:px-32 md:py-20 py-5 flex-col md:flex-row items-center md:items-start md:gap-0 gap-4">
        <div className="md:flex flex-col gap-2 hidden">
          <p className="text-[18px] font-semibold">About</p>
          <p className="text-[12px]">Our Story</p>
          <p className="text-[12px]">Our Blog</p>
          <p className="text-[12px]">Careers</p>
          <p className="text-[12px]">Gurus</p>
        </div>

        <div className="md:flex flex-col gap-2 hidden">
          <p className="text-[18px] font-semibold">Quick Links</p>
          <p className="text-[12px]">Projects in Pakistan</p>
          <p className="text-[12px]">Project in Karachi</p>
          <p className="text-[12px]">Project in Islamabad</p>
          <p className="text-[12px]">Project in Lahore</p>
        </div>
        <div className="flex flex-col gap-2 md:items-start items-center justify-center md:justify-start border-y md:border-y-0 md:w-auto w-full md:p-0 p-6">
          <p className="text-[18px] font-semibold">Contact Us</p>
          <div className="flex md:flex-col items-center md:items-start md:gap-2 gap-6 ">
            <div className="flex gap-2 items-center">
              <img src={email} alt="" />
              <p className="text-[12px]"> info@graana.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={phone} alt="" />
              <p className="text-[12px]"> 111-555-555</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:items-start items-center justify-center md:justify-start">
          <p className="text-[18px] font-semibold">Follow Us</p>
          <div className="flex items-center gap-2">
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f2f2f2] py-4 flex flex-col items-center justify-center gap-2">
        <p className="text-[10px]">
          Copyright 2024 Graana.com All rights reserved
        </p>
        <p className="text-[10px]">
          Terms & Conditions| Privacy Policy | Disclaimer
        </p>
      </div>
    </div>
  );
}
