import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Navbar from "../components/Navbar";
import Hero from "../home/hero";
import Featured from "../home/featured";
import Auctions from "../home/auctions";
import OthersSection from "../home/others";
import Creators from "../home/creators";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="flex-1">
        <Hero />
        <Featured />
        <Auctions />
        <OthersSection />
        <Creators />
      </main>
      <Footer menuOpen={menuOpen} />
    </div>
  );
};

export default Home;
