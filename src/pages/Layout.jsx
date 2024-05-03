import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { AdsProvider, useAds } from "../context";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../components/Firebase";
import Mblheader from "./Mblheader";

function Layout() {
  const [ads, setAds] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("");
  const [type, setType] = useState("Sell");
  const [search, setSearch] = useState("");

  const handleType = (item) => {
    setType(item);
  };
  const handleSearch = (item) => {
    setSearch(item);
  };

  const handleSelectedBtn = (item) => {
    setSelectedBtn(item);
  };

  const handleSubmitAds = (ads) => {
    setAds((prev) => [ads, ...prev]);
  };
  const handleSelectedCardData = (selectedCard) => {
    setSelectedCard(selectedCard);
  };

  const getDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "users"));
      const adsData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();

        adsData.push({ id: doc.id, ...data });
      });
      setAds(adsData);

      return ads;
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };

  useEffect(() => {
    getDataFromFirestore();
  }, []);

  return (
    <AdsProvider
      value={{
        ads,
        handleSubmitAds,
        selectedCard,
        handleSelectedCardData,
        selectedBtn,
        handleSelectedBtn,
        type,
        handleType,
        search,
        handleSearch,
      }}
    >
      <Header />
      <Mblheader />
      <Outlet />
      <Footer />
    </AdsProvider>
  );
}

export default Layout;
