import React from "react";

import RentResIslamabad from "../components/RentResIslamabad";
import RentResRawalpindi from "../components/RentResRawalpindi";
import RentResLahore from "../components/RentResLahore";
import RentResKarachi from "../components/RentResKarachi";
import RentResPeshawar from "../components/RentResPeshawar";

export default function RentResidential() {
  return (
    <div>
      <RentResIslamabad />
      <RentResRawalpindi />
      <RentResLahore />
      <RentResKarachi />
      <RentResPeshawar />
    </div>
  );
}
