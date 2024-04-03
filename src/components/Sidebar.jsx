import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import sidelogo from "../assets/sidebarlogo.svg";

export default function Sidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <img className="w-[25px]" src={sidelogo} alt="" />
        </SheetTrigger>
        <SheetContent></SheetContent>
      </Sheet>
    </div>
  );
}
