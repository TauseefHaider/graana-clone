import React from "react";

import SellPlotLahore from "../components/SellPlotLahore";
import SellPlotKarachi from "../components/SellPlotKarachi";
import SellPlotIslamabad from "../components/SellPlotIslamabad";
import SellPlotRawalpindi from "../components/SellPlotRawalpindi";

export default function BuyPlot() {
  return (
    <div>
      <SellPlotIslamabad />
      <SellPlotRawalpindi />
      <SellPlotLahore />
      <SellPlotKarachi />
      <SellPlotIslamabad />
    </div>
  );
}
