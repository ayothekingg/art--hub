import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks, footLinks } from "../data/index.tsx";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Footer: React.FC<{ menuOpen?: boolean }> = ({ menuOpen }) => {
  if (menuOpen) return null;

  return (
    <footer className="app-bg app-text py-8 px-4 w-full shadow-lg z-50">
      <div className="mb-8 mt-5 md:mt-20 flex justify-center">
        <div className="app-bg border border-main max-w-[1332px] w-full h-80 flex-col justify-center items-center shadow-md px-8 hidden md:flex">
          <h2 className="text-[30.21px] baskerville mb-2 app-text">
            NEWSLETTER
          </h2>
          <p className="font-sans text-[32px] satoshi-normal mb-6 text-center app-text">
            Subscribe to get daily updates on new drops & exciting deals
          </p>
          <form
            className="flex w-full justify-center"
            style={{ maxWidth: "800px" }}
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="border border-main w-[446px] h-[60px] baskerville text-[16px] app-text placeholder:app-text placeholder:text-[16px] pl-8 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="subscribe-btn w-[181.63px] h-[60px] baskerville ml-[15px] text-[16px]"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className="flex flex-col items-start md:hidden w-full">
          <h2 className="text-[24px] baskerville mb-2 app-text">NEWSLETTER</h2>
          <p className="font-sans text-[11.64px] satoshi-normal mb-6 text-center app-text">
            Subscribe to get daily updates on new drops & exciting deals
          </p>
          <form className="flex flex-col w-full justify-start mb-1">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="border border-main w-[340px] satoshi-medium h-[46px] text-[10px] app-text placeholder:app-text placeholder:text-[10px] pl-4 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="subscribe-btn w-[181.63px] satoshi-medium h-[53.64px] mt-6 text-[11.64px]"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start max-w-[1332px] mx-auto mt-15">
        <div className="hidden md:flex flex-col items-center md:items-start">
          <span className="text-[24px] clash-bold md:text-3xl mt-[136px] ml-[100px] app-text">
            ARTHUB
          </span>
        </div>

        <div className="hidden md:block">
          <ul className="flex text-[24px] satoshi flex-col gap-8 font-sans">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="footer-link"
                  style={{
                    fontWeight: 300,
                    fontFamily: "inherit",
                  }}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-col text-[24px] satoshi-normal gap-8">
            {footLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className="footer-link">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-col gap-10 satoshi-normal text-[24px]">
            <li className="flex items-center gap-4">
              <AiOutlineMail size={48} className="footer-link" />
              <a
                href="mailto:arthub@gmail.com"
                className="hover:underline footer-link"
              >
                arthub@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <GoLocation size={48} className="footer-link" />
              <span className="block footer-link">Lagos, Nigeria.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col -mt-8 md:hidden">
          <h3 className="text-[12px] mb-3 satoshi-normal footer-link">
            REACH US
          </h3>
          <ul className="flex flex-col gap-4 text-[12px] satoshi-normal items-start">
            <li className="flex items-start gap-2">
              <AiOutlineMail size={24} className="footer-link" />
              <a
                href="mailto:arthub@gmail.com"
                className="hover:underline footer-link"
              >
                arthub@gmail.com
              </a>
            </li>
            <li className="flex items-start mb-5 gap-2">
              <GoLocation size={24} className="footer-link" />
              <span className="block footer-link">Lagos, Nigeria.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-15 mb-2 hidden md:block">
        <span className="text-[24px] rubiks footer-link">
          ArtHub &copy; {new Date().getFullYear()}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
