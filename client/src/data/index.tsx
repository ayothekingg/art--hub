export * from './types';

import type { LinkT, IconT, HeroImageT, EllipseT, AuctionCardT } from './types';
import { RiSearchLine } from 'react-icons/ri';
import { TbGardenCart } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';

import img1 from "../assets/homecarousels/image.jpg";
import img2 from "../assets/homecarousels/image2.jpg";
import img3 from "../assets/homecarousels/image3.jpg";
import img4 from "../assets/homecarousels/image4.jpg";
import img5 from "../assets/homecarousels/image5.jpg";
import img6 from "../assets/homecarousels/image6.jpg";
import img7 from "../assets/homecarousels/image7.jpg";
import img8 from "../assets/homecarousels/image8.jpg";

export const navLinks: LinkT[] = [
  { name: "Home", path: "/" },
  { name: "Marketplace", path: "/Marketplace" },
  { name: "Auctions", path: "/Auctions" },
  { name: "Drop", path: "/Drop" }
];

export const navIcons: IconT[] = [
  { icon: <RiSearchLine />, label: "Search" },
  { icon: <TbGardenCart />, label: "Cart" },
  { icon: <IoNotificationsOutline />, label: "Notifications" },
];

export const footLinks: LinkT[] = [
  { name: "Blog", path: "/#" },
  { name: "Wallets", path: "/#" },
  { name: "Rates", path: "/#" },
  { name: "High bids", path: "/#" },
];


export const desktopImages: HeroImageT[] = [
  {
    src: img1,
    style: {
      width: "358px",
      height: "332px",
      objectFit: "cover",
      marginTop: "100px",
    },
  },
  {
    src: img2,
    style: {
      width: "358px",
      height: "428px",
      objectFit: "cover",
      marginTop: "50px",
    },
  },
  {
    src: img3,
    style: { width: "358px", height: "444px", objectFit: "cover" },
  },
  {
    src: img4,
    style: {
      width: "358px",
      height: "428px",
      objectFit: "cover",
      marginTop: "50px",
    },
  },
  {
    src: img5,
    style: {
      width: "358px",
      height: "428px",
      objectFit: "cover",
      marginTop: "60px",
    },
  },
];

export const mobileImageStyle = { width: "336px", height: "296px", objectFit: "cover" as const };

export const mobileImages: HeroImageT[] = [
  { src: img6, rotate: "rotate-10" },
  { src: img7, rotate: "" },
  { src: img8, rotate: "-rotate-10" },
];


export const mobileEllipses: EllipseT[] = [
  {
    className: "absolute left-[330px] mt-[-190px] -translate-y-1/2 rounded-full",
    style: {
      width: "80px",
      height: "80px",
      background: "#3341C1",
      filter: "blur(30px)",
      zIndex: 1,
    },
  },
  {
    className: "absolute left-[330px] mt-[370px] -translate-y-1/2 rounded-full",
    style: {
      width: "80px",
      height: "80px",
      background: "red",
      filter: "blur(30px)",
      zIndex: 1,
    },
  },
  {
    className: "absolute -left-10 mt-[300px] rounded-full",
    style: {
      width: "80px",
      height: "80px",
      background: "#E27625",
      filter: "blur(30px)",
      zIndex: 1,
    },
  },
];


import productImg from "../assets/featuredproducts/product.jpg";
import productImg2 from "../assets/featuredproducts/product2.jpg";
import productImg3 from "../assets/featuredproducts/product3.jpg";
import creator1 from "../assets/featuredproducts/creator.png";
import creator2 from "../assets/featuredproducts/creator2.png";
import creator3 from "../assets/featuredproducts/creator3.png";
import creator4 from "../assets/featuredproducts/creator4.png";
import creator5 from "../assets/featuredproducts/creator5.png";

export const creators = [creator1, creator2, creator3, creator4, creator5];

export const products = [
  {
    img: productImg,
    title: "The Boolean Egyptian",
    desc:
      "Discover the unique story and artistry behind The Boolean Egyptian, a featured product that blends tradition with modern creativity. This piece stands out for its craftsmanship and cultural significance.",
  },
  {
    img: productImg2,
    title: "Are We There Yet?",
    desc:
      "Discover the unique story and artistry behind Are We There Yet? a featured product that blends tradition with modern creativity. This piece stands out for its craftsmanship and cultural significance.",
  },
  {
    img: productImg3,
    title: "Oloibiri 1997",
    desc:
      "Discover the unique story and artistry behind Oloibiri 1997, a featured product that blends tradition with modern creativity. This piece stands out for its craftsmanship and cultural significance.",
  },
];


import auctionImg from "../assets/auctioncards/auction.jpg";
import auctionImg2 from "../assets/auctioncards/auction2.jpg";


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

export const categories = ["By Category", "By Price", "By Artist", "Collection Year"];

export const byCategoryOptions = [
  "Editorials",
  "Fashion",
  "Optics",
  "Art & Museum",
  "Nature",
];

export const byArtistOptions = [
  "Banksy",
  "Yayoi Kusama",
  "Jean-M Basquiat",
  "Frida Kahlo",
  "Pablo Picasso",
];

export const collectionYearOptions = ["2020", "2021", "2022", "2023", "2024"];

export const sortOptions = [
  { value: "sort", label: "Sort by" },
  { value: "recent", label: "Most Recent" },
  { value: "popular", label: "Most Popular" },
  { value: "price_low", label: "Low to High" },
  { value: "price_high", label: "High to Low" },
];

export const minPrice = 100.0;
export const maxPrice = 200.0;

import productsImg1 from "../assets/products/1.jpg";
import productsImg2 from "../assets/products/2.jpg";
import productsImg3 from "../assets/products/3.jpg";
import productsImg4 from "../assets/products/4.jpg";
import productsImg5 from "../assets/products/5.jpg";
import productsImg6 from "../assets/products/6.jpg";
import productsImg7 from "../assets/products/7.jpg";
import productsImg8 from "../assets/products/8.jpg";
import productsImg9 from "../assets/products/9.jpg";

export const marketplaceProducts = [
  {
    id: "1",
    image: productsImg1,
    title: "Philomena ‘22",
    price: 3.9,
    creator: "Adaeze Okafor",
    location: "Nigeria",
    views: "1.2k",
    description: "Philomena ‘22 is a vibrant piece inspired by the rich culture and colors of Nigeria. Adaeze Okafor captures the spirit of tradition and modernity in this unique artwork.",
    listing: "Listed on 12th June 2023. Auction ends in 3 days.",
    status: "Available"
  },
  {
    id: "2",
    image: productsImg2,
    title: "Boolean Egyptian",
    price: 95.5,
    creator: "Luca Romano",
    location: "Italy",
    views: "2.5k",
    description: "Boolean Egyptian blends ancient Egyptian motifs with contemporary digital art. Created in Italy, this piece explores the intersection of history and technology by Luca Romano.",
    listing: "Listed on 5th May 2023. Auction ends in 1 day.",
    status: "Sold"
  },
  {
    id: "3",
    image: productsImg3,
    title: "Blanc",
    price: 112.6,
    creator: "Sofia Martins",
    location: "Portugal",
    views: "3.1k",
    description: "Blanc is a minimalist artwork that celebrates simplicity and elegance. Sofia Martins’ use of white tones evokes a sense of calm and clarity, inspired by Portugal’s serene landscapes.",
    listing: "Listed on 20th July 2023. Auction ends in 5 days.",
    status: "Available"
  },
  {
    id: "4",
    image: productsImg4,
    title: "Ellipsia",
    price: 49.12,
    creator: "Carlos Ruiz",
    location: "Spain",
    views: "4.8k",
    description: "Ellipsia features dynamic shapes and bold colors, reflecting the lively energy of Spain. This piece is a testament to Carlos Ruiz’s innovative approach to abstract art.",
    listing: "Listed on 1st June 2023. Auction ends in 2 days.",
    status: "Available"
  },
  {
    id: "5",
    image: productsImg5,
    title: "The Lawmakers",
    price: 3.9,
    creator: "Emma de Vries",
    location: "Netherlands",
    views: "5.6k",
    description: "The Lawmakers is a thought-provoking work that comments on governance and society. Created in the Netherlands, it combines symbolism and modern aesthetics by Emma de Vries.",
    listing: "Listed on 15th August 2023. Auction ends in 7 days.",
    status: "Available"
  },
  {
    id: "6",
    image: productsImg6,
    title: "Veil",
    price: 95.5,
    creator: "Nikos Papadopoulos",
    location: "Greece",
    views: "2.3k",
    description: "Veil draws inspiration from Greek mythology and architecture. Nikos Papadopoulos uses layered textures to create a sense of mystery and depth in this captivating piece.",
    listing: "Listed on 30th July 2023. Auction ends in 4 days.",
    status: "Sold"
  },
  {
    id: "7",
    image: productsImg7,
    title: "Alternating",
    price: 112.6,
    creator: "Chinonso Eze",
    location: "Nigeria",
    views: "3.9k",
    description: "Alternating is a rhythmic composition that plays with patterns and contrasts. Inspired by the vibrant life of Nigeria, it showcases Chinonso Eze’s mastery of form and color.",
    listing: "Listed on 10th September 2023. Auction ends in 6 days.",
    status: "Available"
  },
  {
    id: "8",
    image: productsImg8,
    title: "Rosemary ‘22",
    price: 49.12,
    creator: "Greta Schneider",
    location: "Germany",
    views: "4.1k",
    description: "Rosemary ‘22 is a delicate and expressive piece, reflecting the beauty of nature in Germany. Greta Schneider’s brushwork brings the essence of rosemary to life.",
    listing: "Listed on 22nd June 2023. Auction ends in 2 days.",
    status: "Available"
  },
  {
    id: "9",
    image: productsImg9,
    title: "Beverly",
    price: 3.9,
    creator: "Lucas Dupont",
    location: "Belgium",
    views: "1.8k",
    description: "Beverly is a modern portrait that captures emotion and personality. Created in Belgium, this artwork highlights Lucas Dupont’s skill in contemporary portraiture.",
    listing: "Listed on 3rd July 2023. Auction ends in 1 day.",
    status: "Sold"
  },
];