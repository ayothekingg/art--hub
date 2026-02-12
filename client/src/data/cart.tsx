import coinbaseImg from "../assets/wallet/coinbase.png";
import phantomImg from "../assets/wallet/phantom.png";
import metamaskImg from "../assets/wallet/metamask.png";

import ethereumLogo from "../assets/networks/eth.svg";
import polygonLogo from "../assets/networks/matic.svg";
import solanaLogo from "../assets/networks/sol.svg";
import usdtLogo from "../assets/networks/usdt.svg";
import usdcLogo from "../assets/networks/usdc.svg";
import maticLogo from "../assets/networks/matic.svg";
import bnbLogo from "../assets/networks/bnb.svg";

export const wallets = [
  {
    name: "Coinbase",
    icon: (
      <img
        src={coinbaseImg}
        alt="Coinbase"
        className="md:w-36 md:h-36 w-25 h-25 rounded-full"
      />
    ),
  },
  {
    name: "Phantom",
    icon: (
      <img
        src={phantomImg}
        alt="Phantom"
        className="md:w-36 md:h-9 w-25 h-6 rounded-full"
      />
    ),
  },
  {
    name: "Metamask",
    icon: (
      <img
        src={metamaskImg}
        alt="Metamask"
        className="md:w-36 md:h-36 w-28 h-28 rounded-full"
      />
    ),
  },
];

export const networks = [
  { name: "Ethereum", logo: ethereumLogo },
  { name: "Polygon", logo: polygonLogo },
  { name: "Solana", logo: solanaLogo },
  { name: "BNB", logo: bnbLogo },
];

export const tokens = [
  { name: "USDT", logo: usdtLogo },
  { name: "USDC", logo: usdcLogo },
  { name: "ETH", logo: ethereumLogo },
  { name: "MATIC", logo: maticLogo },
  { name: "BNB", logo: bnbLogo },
];