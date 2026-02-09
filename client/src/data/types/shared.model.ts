
export type Theme = "light" | "dark";
export interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}

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
