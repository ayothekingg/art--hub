import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, footLinks } from "../data";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Footer: React.FC<{ menuOpen?: boolean }> = ({ menuOpen }) => {
  const [email, setEmail] = useState("");

  if (menuOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="app-bg app-text py-8 px-4 w-full shadow-lg z-50">
      <div className="mb-8 mt-5 md:mt-20 flex justify-center">
        <div className="app-bg border border-main max-w-333 w-full h-80 flex-col justify-center items-center shadow-md px-8 hidden md:flex">
          <h2 className="text-[30px] baskerville mb-2 app-text">
            NEWSLETTER
          </h2>
          <p className="font-sans text-[32px] satoshi-normal mb-6 text-center app-text">
            Subscribe to get daily updates on new drops & exciting deals
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full justify-center"
            style={{ maxWidth: "800px" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              required
              className="border border-main w-111.5 h-15 baskerville text-base app-text placeholder:app-text placeholder:text-base pl-8 focus:outline-none focus:ring-2 focus:ring-main"
            />
            <button
              type="submit"
              className="subscribe-btn w-[181.63px] h-15 baskerville ml-3.75 text-base transition-transform hover:scale-105"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className="flex flex-col items-start md:hidden w-full">
          <h2 className="text-2xl baskerville mb-2 app-text">NEWSLETTER</h2>
          <p className="font-sans text-xs satoshi-normal mb-6 app-text">
            Subscribe to get daily updates on new drops & exciting deals
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col w-full mb-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              required
              className="border border-main w-85 satoshi-medium h-12 text-xs app-text placeholder:app-text placeholder:text-xs pl-4 focus:outline-none focus:ring-2 focus:ring-main"
            />
            <button
              type="submit"
              className="subscribe-btn w-[181.63px] satoshi-medium h-[53.64px] mt-6 text-xs transition-transform hover:scale-105"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start max-w-300 mx-auto mt-15">
        <div className="hidden md:flex flex-col items-start">
          <h3 className="text-2xl md:text-3xl clash-bold app-text mt-22">ARTHUB</h3>
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-col gap-8 text-2xl satoshi font-light">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className="footer-link hover:underline">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-col gap-8 text-2xl satoshi-normal">
            {footLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className="footer-link hover:underline">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-col gap-10 satoshi-normal text-2xl">
            <li className="flex items-center gap-4">
              <AiOutlineMail size={48} className="footer-link shrink-0" />
              <a
                href="mailto:arthub@gmail.com"
                className="hover:underline footer-link"
              >
                arthub@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <GoLocation size={48} className="footer-link shrink-0" />
              <span className="footer-link">Lagos, Nigeria.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:hidden">
          <h3 className="text-xs mb-3 satoshi-normal footer-link">REACH US</h3>
          <ul className="flex flex-col gap-4 text-xs satoshi-normal">
            <li className="flex items-start gap-2">
              <AiOutlineMail size={24} className="footer-link shrink-0" />
              <a
                href="mailto:arthub@gmail.com"
                className="hover:underline footer-link"
              >
                arthub@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <GoLocation size={24} className="footer-link shrink-0" />
              <span className="footer-link">Lagos, Nigeria.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full text-center mt-15 mb-2 hidden md:block">
        <p className="text-2xl rubiks footer-link">
          ArtHub &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;