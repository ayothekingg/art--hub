import type { LinkT, IconT } from "./types/shared.model";
import { RiSearchLine } from "react-icons/ri";
import { TbGardenCart } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

export const navLinks: LinkT[] = [
  { name: "Home", path: "/" },
  { name: "Marketplace", path: "/Marketplace" },
  { name: "Auctions", path: "/Auctions" },
  { name: "Drop", path: "/Drop" },
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