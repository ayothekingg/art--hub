import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import useDarkMode from "../hooks/useDarkMode";
import ShoppingCart from "../components/ShoppingCart";
import ShippingDetails from "../components/ShippingDetails";
import PaymentDetails from "../components/PaymentDetails";

const tabs = [
  { label: "Shopping Cart" },
  { label: "Shipping Details" },
  { label: "Payment Details" },
];

const CartPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (tabParam && !isNaN(Number(tabParam))) {
      setActiveTab(Number(tabParam));
    }
  }, [location.search]);

  const crumbs = [
    { label: "Cart", tab: 0 },
    { label: "Shipping", tab: 1 },
    { label: "Payment", tab: 2 },
  ];
  const activeCrumbs = crumbs.slice(0, activeTab + 1);

  const handleTabChange = (tabIdx: number) => {
    setActiveTab(tabIdx);
    window.history.replaceState(
      null,
      "",
      `/Marketplace/Cart?tab=${tabIdx}`
    );
  };

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="min-h-screen flex flex-col app-bg items-center pt-12">
        <div className="flex items-center w-full satoshi-bold text-[18px] -mt-4 -ml-2 px-4 md:hidden">
          <Link to="/" className="text-[#888888]">Home</Link>
          <span className="text-[#888888]">/</span>
          <Link to="/Marketplace" className="text-[#888888]">Marketplace</Link>
          <span className="text-[#888888]">/</span>
          {activeCrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              <button
                type="button"
                className={`bg-transparent border-none p-0 m-0 focus:outline-none ${
                  idx === activeCrumbs.length - 1 ? "app-text" : "text-[#888888]"
                }`}
                style={{ background: "none" }}
                onClick={() => handleTabChange(crumb.tab)}
                disabled={idx === activeCrumbs.length - 1}
              >
                {crumb.label}
              </button>
              {idx < activeCrumbs.length - 1 && (
                <span className="text-[#888888]">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="mt-6 md:hidden">
            <div className="bg-[#272727] rounded-4xl px-10 py-1 flex items-center justify-center">
              <span className="text-white text-[22px] satoshi-bold">Shop</span>
            </div>
          </div>
        )}

        <div className="relative w-full max-w-2xl flex-col items-center mb-15 hidden md:flex">
          <div className="flex gap-9 w-full justify-center">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => handleTabChange(idx)}
                className={`px-6 py-2 rounded-full text-[22px] satoshi-medium transition-all relative
                  ${activeTab === idx
                    ? theme === "dark"
                      ? " text-white"
                      : " text-[#272727]"
                    : "bg-transparent text-[#888888]"}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full"
            style={{
              background: theme === "dark" ? "#888888" : "#c7c7c7"
            }}
          />
          <div
            className="absolute -bottom-1 h-0.5 rounded-full transition-all duration-300"
            style={{
              background: theme === "dark" ? "#fff" : "#000",
              left: `calc(${(100 / tabs.length) * activeTab}% + ${15 * activeTab}px)`,
              width: `calc(${100 / tabs.length}% - 40px)`,
            }}
          />
        </div>

        <div className="w-full ">
          {activeTab === 0 && <ShoppingCart onProceed={() => handleTabChange(1)} />}
          {activeTab === 1 && <ShippingDetails onProceed={() => handleTabChange(2)} />}
          {activeTab === 2 && <PaymentDetails />}
        </div>
      </div>
    </>
  );
};

export default CartPage;