import React from "react";

import RentComIslamabad from "../components/RentComIslamabad";
import RentComRawalpindi from "../components/RenrComRawalpindi";
import RentComLahore from "../components/RentComLahore";
import RentComKarachi from "../components/RentComKarachi";
import RentComPeshawar from "../components/RentComPeshawar";

export default function BuyCommercial() {
  return (
    <div>
      <RentComIslamabad />
      <RentComRawalpindi />
      <RentComLahore />
      <RentComKarachi />
      <RentComPeshawar />
    </div>
  );
}
