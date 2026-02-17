import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const OthersSection: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Explore Marketplace", path: "/Marketplace" },
    { label: "See Auctions", path: "/Auctions" },
  ];

  return (
    <section className="w-full h-84 md:h-screen flex flex-col justify-between app-bg relative">
      <div className="flex-1" />
      
      {navItems.map((item) => (
        <React.Fragment key={item.path}>
          <hr className="border-[0.5px] border-main m-0" />
          <div className="flex-1 flex items-center justify-between text-[24px] md:text-[48px] ml-5 md:ml-30 mr-10 md:mr-50 satoshi-bold app-text">
            <span>{item.label}</span>
            <button
              className="w-13.5 h-13.5 md:w-19.5 md:h-19.5 flex items-center justify-center rounded-full app-bg border-main border-[0.41px] transition-transform hover:scale-110 cursor-pointer"
              aria-label={`Navigate to ${item.label}`}
              type="button"
              onClick={() => navigate(item.path)}
            >
              <LiaArrowRightSolid className="w-8 h-8 featured-arrow" />
            </button>
          </div>
        </React.Fragment>
      ))}
      
      <hr className="border-[0.5px] border-main m-0" />
      <div className="flex-1" />
    </section>
  );
};

export default OthersSection;