import React from "react";

import Heroinvest from "../components/Heroinvest";
import Heroimg from "../components/Heroimg";

export default function LandingPage() {
  return (
    <div>
      {/* Hero Img Section */}
      <Heroimg />
      {/* Hero Invest and Wanted Section */}
      <Heroinvest />
    </div>
  );
}
