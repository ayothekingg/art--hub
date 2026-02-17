import React, { useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { navLinks, navIcons } from "../data";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { BiSolidMessageSquare } from "react-icons/bi";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useCartStore } from "../store/cartStore";
import { FiShoppingCart } from "react-icons/fi";
import type { NavbarProps } from "../data/types/shared.model";
import { useMenuAnimation } from "../hooks/useMenuAnimation";
import "../App.css";

const Navbar: React.FC<NavbarProps> = ({
  menuOpen,
  setMenuOpen,
  theme,
  setTheme,
}) => {
  const navigate = useNavigate();
  const { shouldRender, isOpening, isClosing } = useMenuAnimation({ menuOpen });

  const handleIconClick = () => {
    window.location.href = "/Drop";
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    handleCloseMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const isDark = theme === "dark";
  const getThemeIcon = () => (isDark ? <MdDarkMode /> : <MdOutlineLightMode />);

  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
          <Link to="/" className="font-bold text-[24px] md:text-3xl navbar-text mt-4 md:mt-13 ml-0 md:ml-45.75 font-serif">
            ARTHUB
          </Link>
        </div>

    
        <div className="flex items-center gap-3 md:gap-6 mt-4 md:mt-13 mr-0 md:mr-38.25">
          {navIcons.slice(0, 2).map((item) =>
            item.label === "Cart" ? (
              <Link
                key={item.label}
                to="/Marketplace/Cart"
                title={item.label}
                className="text-2xl md:text-3xl navbar-text cursor-pointer transition-all duration-300 ease-out hover:scale-90 relative"
              >
                <div className="relative">
                  <FiShoppingCart size={28} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            ) : (
              <span
                key={item.label}
                title={item.label}
                className="text-2xl md:text-3xl navbar-text cursor-pointer transition-all duration-300 ease-out hover:scale-90"
                onClick={handleIconClick}
              >
                {item.icon}
              </span>
            )
          )}

          <span
            className="hidden md:inline text-2xl md:text-3xl navbar-text cursor-pointer transition-all duration-300 ease-out hover:scale-90"
            title="Notifications"
            onClick={handleIconClick}
          >
            {navIcons[2].icon}
          </span>

          <span
            className=" text-2xl md:text-3xl cursor-pointer"
            title={`Toggle theme`}
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
          >
            {getThemeIcon()}
          </span>
        </div>
      </div>

      <ul className="hidden md:flex gap-12 list-none font-sans text-lg mt-13 md:absolute md:left-1/2 md:-translate-x-1/2">
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

      {/* Mobile Menu Overlay */}
      {shouldRender && (
        <>
          {/* Dark Overlay Background */}
          <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
              isOpening && !isClosing ? "bg-opacity-60" : "opacity-0"
            }`}
            onClick={handleCloseMenu}
          />

          {/* Mobile Menu Panel - Slides from left */}
          <div
            className={`fixed top-0 left-0 navbar-bg w-full h-full flex flex-col z-51 transition-transform duration-300 ease-out ${
              isOpening && !isClosing ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 py-4 border-b border-opacity-10">
              <Link to="/" className="font-bold text-[24px] mt-3.75 ml-2.5 navbar-text font-serif" onClick={handleCloseMenu}>
                ARTHUB
              </Link>

              <button
                type="button"
                className="text-3xl mr-2.5 mt-3.75 navbar-text hover:opacity-70 transition-opacity"
                onClick={handleCloseMenu}
              >
                <TfiClose />
              </button>
            </div>

            {/* Menu Content */}
            <div className="w-full flex-1 px-4 pt-6 relative overflow-y-auto">
              <ul className="flex flex-col gap-10 text-lg mt-2.5 ml-2.5 font-sans navbar-text">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
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

              {/* Message Button */}
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
        </>
      )}
    </nav>
  );
};

export default Navbar;