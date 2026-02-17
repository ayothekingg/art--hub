import type { AuctionCardT } from "./types/auction.model";

import auctionImg from "../assets/auctioncards/auction.jpg";
import auctionImg2 from "../assets/auctioncards/auction2.jpg";

import mainauctionimg1 from "../assets/mainauction/1.jpg";
import mainauctionimg2 from "../assets/mainauction/2.jpg";
import mainauctionimg3 from "../assets/mainauction/3.jpg";

import creatorImg1 from "../assets/creatorcard/1.jpg";
import creatorImg2 from "../assets/creatorcard/2.jpg";

export const auctionCards: AuctionCardT[] = [
  {
    image: auctionImg,
    number: "01",
    title: ["MONALISA REDEFINED", "IN STYLE."],
    bullet: true,
    start: "START ON : 08:00 GTS . MONDAY",
    description:
      "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
    loader: 60,
  },
  {
    image: auctionImg2,
    number: "02",
    title: ["THE STARRY NIGHT", "EXPERIENCE."],
    bullet: true,
    start: "START ON : 10:30 GTS . FRIDAY",
    description:
      "DISCOVER THE MAGIC OF POST-IMPRESSIONISM WITH AN EXCLUSIVE SHOWCASE OF MASTERPIECES. MEET RENOWNED ARTISTS AND PLACE YOUR BIDS ON RARE, INSPIRING WORKS FROM AROUND THE GLOBE.",
    loader: 35,
  },
];

export const auctionImages = [
  { image: mainauctionimg1 },
  { image: mainauctionimg2 },
  { image: mainauctionimg3 },
];

export const creatorImg = [
  {
    id: 1,
    name: "Out of the box",
    image: creatorImg1,
    creator: "Dan Murray",
    date: "12/08/22",
    highestBid: "0.57 ETH",
    currentBid: "0.987 ETH",
  },
  {
    id: 2,
    name: "Falling apart",
    image: creatorImg2,
    creator: "Jacob Banks",
    date: "12/08/22",
    highestBid: "0.34 ETH",
    currentBid: "0.99 ETH",
  },
];