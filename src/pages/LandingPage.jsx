import React from "react";

import Heroinvest from "../components/Heroinvest";
import Heroimg from "../components/Heroimg";
import Transparentdiv from "../components/Transparentdiv";
import Heromap from "../components/Heromap";
import CardsDiv from "../components/CardsDiv";

export default function LandingPage() {
  return (
    <div>
      {/* Hero Img Section */}
      <Heroimg />
      {/* Hero Invest and Wanted Section */}
      <Heroinvest />
      {/* Hero Transparent div */}
      <Transparentdiv />
      {/* Hero Map Section */}
      <Heromap />
      {/* City cards */}
      <CardsDiv />
    </div>
  );
}
