export type LinkT = {
  name: string;
  path: string;
};

export type IconT = {
  icon: React.ReactNode;
  label: string;
};

export type HeroImageT = {
  src: string;
  style?: React.CSSProperties;
  rotate?: string;
};

export type EllipseT = {
  className: string;
  style: React.CSSProperties;
};

export type ProductT = {
  img: string;
  title: string;
  desc: string;
};

export type CreatorT = string;

export type AuctionCardT = {
  image: string;
  number: string;
  title: [string, string];
  bullet: boolean;
  start: string;
  description: string;
  loader: number;
};


export type Theme = "light" | "dark";