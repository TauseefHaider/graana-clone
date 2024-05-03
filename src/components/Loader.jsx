import React from "react";
import Skeleton from "@/components/ui/skeleton";

export default function Loader() {
  return (
    <div className="flex w-[260px] gap-2 flex-col aspect-square p-0 text-[#37474F]">
      <Skeleton className="h-[161px] w-full" />
      <Skeleton className=" h-4 w-full" />
      <Skeleton className=" h-3 w-full" />
      <Skeleton className=" h-3 w-full" />
    </div>
  );
}
