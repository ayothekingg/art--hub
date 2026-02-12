import React, { useState } from "react";
import Navbar from "../components/Navbar";
import useDarkMode from "@/hooks/useDarkMode";
import thankyouImg from "@/assets/thankyou.png";

const ThankYou: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();

  return (
    <div className="min-h-screen app-bg relative overflow-hidden">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="flex flex-col items-center justify-center min-h-[70vh] mt-10 px-4 relative z-10">
        <img
          src={thankyouImg}
          alt="Thank you"
          className="md:w-[320px] md:h-80 w-70 h-70 object-contain mb-8"
        />

        <h1 className="md:text-[40px] text-[25px] satoshi-bold mb-6  text-center">
          Hey Celestina, thank you for your purchase.
        </h1>
        <p className="md:text-[30px] text-[18px] satoshi -mt-5 md:mb-40 text-center">
          You are amazing. Cheers to being <span className="text-[#5683a6]">ARTSY!</span> <span className="md:text-[60px]">🎉</span>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;