
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


export interface UseMenuAnimationProps {
  menuOpen: boolean;
}

export interface UseMenuAnimationReturn {
  shouldRender: boolean;
  isOpening: boolean;
  isClosing: boolean;
}

export interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  path?: string; 
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export interface LoadMoreButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export interface SeeMoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}