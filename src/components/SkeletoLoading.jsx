import React from "react";
import Skeleton from "react-loading-skeleton";

export default function SkeletoLoading() {
  return (
    <div className="w-[300px] bg-black">
      <Skeleton />
    </div>
  );
}
