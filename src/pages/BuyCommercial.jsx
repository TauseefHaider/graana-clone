import React from "react";

import SellComIslamabad from "../components/SellComIslamabad";
import SellComRawalpindi from "../components/SellComRawalpindi";
import SellComLahore from "../components/SellComLahore";
import SellComKarachi from "../components/SellComKarachi";
import SellComPeshawar from "../components/SellComPeshawar";

export default function BuyCommercial() {
  return (
    <div>
      <SellComIslamabad />
      <SellComRawalpindi />
      <SellComLahore />
      <SellComKarachi />
      <SellComPeshawar />
    </div>
  );
}
