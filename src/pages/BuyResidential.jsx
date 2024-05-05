import React from "react";

import PropertiesInIslamabad from "../components/PropertiesInIslamabad";
import SellResRawalPindi from "../components/SellResRawalpindi";
import SellResLahore from "../components/SellResLahore";
import SellResKarachi from "../components/SellResKarachi";
import SellResPeshawar from "../components/SellResPeshawar";

export default function BuyResidential() {
  return (
    <div>
      <PropertiesInIslamabad />
      <SellResRawalPindi />

      <SellResLahore />
      <SellResKarachi />
      <SellResPeshawar />
    </div>
  );
}
