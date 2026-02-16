import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Drop: React.FC = () => {
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
      <main className="flex-1"></main>
      <Footer menuOpen={menuOpen} />
    </div>
  );
};

export default Drop;
