import React from "react";
import { Card, CardContent } from "./ui/card";
import blogprofilepic from "../assets/blogprofilepic.svg";

export default function Blogcards({ item }) {
  return (
    <div>
      <Card className="shadow-md">
        <CardContent className="flex lg:w-[388px] md:w-[300px] h-[470px] w-[270px]   flex-col aspect-square p-0 text-[#37474F] ">
          <img className="" src={item.pic} alt="" />
          <div className="flex flex-col gap-4 mt-7 mx-4">
            <p className="text-[12px] font-semibold text-[#E85451]">Article</p>
            <p className="text-[18px] font-semibold">{item.title}...</p>
            <p className="text-[14px]">{item.discription}...</p>
            <div className="flex items-center gap-2 mt-2">
              <img src={blogprofilepic} alt="" />
              <div>
                <p className="text-[14px] font-semibold">{item.name}</p>
                <p className="text-[10px]">{item.date}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
