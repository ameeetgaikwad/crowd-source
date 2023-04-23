import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Mint() {
  //contract address : 0x6D7594739C397A5262E16B2091663B79920528f9
  return (
    <div className="absolute top-4 left-5">
      <ConnectButton />
    </div>
  );
}

export default Mint;
