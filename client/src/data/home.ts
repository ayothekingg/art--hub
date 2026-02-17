import type { HeroImageT } from "./types/home.model";
import type { EllipseT } from "./types/shared.model";

import img1 from "../assets/homecarousels/image.jpg";
import img2 from "../assets/homecarousels/image2.jpg";
import img3 from "../assets/homecarousels/image3.jpg";
import img4 from "../assets/homecarousels/image4.jpg";
import img5 from "../assets/homecarousels/image5.jpg";
import img6 from "../assets/homecarousels/image6.jpg";
import img7 from "../assets/homecarousels/image7.jpg";
import img8 from "../assets/homecarousels/image8.jpg";

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

export const mobileImageStyle = {
  width: "336px",
  height: "296px",
  objectFit: "cover" as const,
};

export const mobileImages: HeroImageT[] = [
  { src: img6, rotate: "rotate-10" },
  { src: img7, rotate: "" },
  { src: img8, rotate: "-rotate-10" },
];

export const mobileEllipses: EllipseT[] = [
  {
    className:
      "absolute left-[330px] mt-[-190px] -translate-y-1/2 rounded-full",
    style: {
      width: "80px",
      height: "80px",
      background: "#3341C1",
      filter: "blur(30px)",
      zIndex: 1,
    },
  },
  {
    className:
      "absolute left-[330px] mt-[370px] -translate-y-1/2 rounded-full",
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