import React from "react";
import Card2 from "./Card";
import { useAds } from "../context";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./Loader";

export default function SearchCards() {
  const { type, search } = useParams();
  const [loading, setLoading] = useState(true);
  const { ads } = useAds();

  const filterdata = ads.filter((data) => data.propertyFor === type);
  const data = filterdata.filter((data) => data.city === search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md:m-10 lg:m-14 m-4 flex flex-col gap-5">
      <p className="md:text-[21px] text-[18px] font-semibold">
        Properties For {type} In {search}
      </p>

      {loading ? (
        <div className="flex gap-4 flex-wrap">
          {[...Array(10)].map((_, index) => (
            <Loader key={index} />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {data.length === 0 ? (
            <p>No property found.</p>
          ) : (
            data.map((item, index) => (
              <div key={index} className="flex">
                <NavLink to={`/details/${item.id}`} className="p-1">
                  <Card2 item={item} />
                </NavLink>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
