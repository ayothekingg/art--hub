import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, navIcons } from "../data";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { BiSolidMessageSquare } from "react-icons/bi";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import type { Theme } from "../data";
import "../App.css";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  menuOpen,
  setMenuOpen,
  theme,
  setTheme,
}) => {
  const handleIconClick = () => {
    window.location.href = "/Drop";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, setMenuOpen]);

  const isDark = theme === "dark";
  const getThemeIcon = () => (isDark ? <MdDarkMode /> : <MdOutlineLightMode />);

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav className="w-full navbar-bg px-4 py-3 flex items-center justify-between md:px-8 md:py-4 relative">
      <div className="flex w-full items-center justify-between md:justify-normal">
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="text-3xl navbar-text mt-4 focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-start">
          <span className="font-bold text-[24px] md:text-3xl navbar-text mt-4 md:mt-[52px] ml-0 md:ml-[183px] font-serif">
            ARTHUB
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-3 mt-4 md:mt-[52px] mr-0 md:mr-[153px]">
          {navIcons.slice(0, 2).map((item) => (
            <span
              key={item.label}
              title={item.label}
              className="text-2xl md:text-3xl navbar-text cursor-pointer transition-all duration-300 ease-out hover:scale-90"
              onClick={handleIconClick}
            >
              {item.icon}
            </span>
          ))}

          <span
            className="hidden md:inline text-2xl md:text-3xl navbar-text cursor-pointer transition-all duration-300 ease-out hover:scale-90"
            title="Notifications"
            onClick={handleIconClick}
          >
            {navIcons[2].icon}
          </span>

          <span
            className="ml-2 text-2xl md:text-3xl cursor-pointer"
            title={`Toggle theme`}
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
          >
            {getThemeIcon()}
          </span>
        </div>
      </div>

      <ul className="hidden md:flex gap-12 list-none font-sans text-lg mt-[52px] md:absolute md:left-1/2 md:-translate-x-1/2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `nav-link group relative flex items-center text-[24px] font-sans ${
                  isActive ? "active font-normal" : "font-light"
                } transition-all duration-300 ease-out`
              }
              style={({ isActive }: { isActive: boolean }) => ({
                fontWeight: isActive ? 300 : 200,
                fontFamily: "inherit",
              })}
            >
              {({ isActive }) => (
                <>
                  <span className="relative">
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 bottom-0.5 w-full h-0.5 animate-underline active-underline" />
                    )}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col">
          <div className="navbar-bg w-full flex items-center justify-between px-4 py-4">
            <span className="font-bold text-[24px] mt-[15px] ml-2.5 navbar-text font-serif">
              ARTHUB
            </span>

            <button
              type="button"
              className="text-3xl mr-2.5 mt-[15px] navbar-text"
              onClick={() => setMenuOpen(false)}
            >
              <TfiClose />
            </button>
          </div>
          <div className="navbar-bg w-full flex-1 px-4 pt-6 relative">
            <ul className="flex flex-col gap-10 text-lg mt-2.5 ml-2.5 font-sans navbar-text">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="nav-link"
                    style={({ isActive }: { isActive: boolean }) => ({
                      display: "block",
                      textDecoration: "none",
                      textUnderlineOffset: isActive ? "8px" : undefined,
                      color: isActive ? undefined : undefined,
                      fontSize: "22px",
                      fontWeight: 400,
                      transition: "color 0.2s",
                      fontFamily: "inherit",
                    })}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-15 right-10">
              <div className="w-17 h-17 rounded-full bg-[#3341C1] flex items-center justify-center shadow-lg">
                <BiSolidMessageSquare
                  className="text-white text-4xl"
                  style={{ filter: "drop-shadow(0 0 0 white)" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;