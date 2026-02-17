import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import CartSummary from "./CartSummary";
import CardFormFields from "./CardFormFields";
import WalletFormFields from "./WalletFormFields";
import { networks, tokens } from "@/data";

function PaymentForm({
  selectedMethod,
  setSelectedMethod,
  selectedNetwork,
  setSelectedNetwork,
  selectedToken,
  setSelectedToken,
  checked,
  setChecked,
  networkButtonRef,
  tokenButtonRef,
}: any) {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <label className="md:text-[26px] text-[20px] satoshi-medium md:mb-2">
          Select Payment Method
        </label>
        <div className="flex gap-8">
          <label
            className="flex items-center md:gap-3 gap-2 cursor-pointer select-none"
            onClick={() => setSelectedMethod("wallet")}
          >
            <span
              className={`md:w-6 md:h-6 w-4 h-4 flex items-center justify-center rounded-full border-2 ${
                selectedMethod === "wallet"
                  ? "border-[#28A814]"
                  : "border-[#CCCCCC]"
              }`}
            >
              {selectedMethod === "wallet" && (
                <span className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-[#28A814]" />
              )}
            </span>
            <span className="md:text-[22px] text-[18px] satoshi-medium">Wallet</span>
          </label>
          <label
            className="flex items-center md:gap-3 gap-2 cursor-pointer select-none"
            onClick={() => setSelectedMethod("card")}
          >
            <span
              className={`md:w-6 md:h-6 w-4 h-4 flex items-center justify-center rounded-full border-2 ${
                selectedMethod === "card"
                  ? "border-[#28A814]"
                  : "border-[#CCCCCC]"
              }`}
            >
              {selectedMethod === "card" && (
                <span className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-[#28A814]" />
              )}
            </span>
            <span className="md:text-[22px] text-[18px] satoshi-medium">Card</span>
          </label>
        </div>
      </div>

      {selectedMethod === "card" && (
        <CardFormFields checked={checked} setChecked={setChecked} />
      )}

      {selectedMethod === "wallet" && (
        <WalletFormFields
          selectedNetwork={selectedNetwork}
          setSelectedNetwork={setSelectedNetwork}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
          checked={checked}
          setChecked={setChecked}
          networkButtonRef={networkButtonRef}
          tokenButtonRef={tokenButtonRef}
          networks={networks}
          tokens={tokens}
        />
      )}
    </form>
  );
}

const PaymentDetails: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<"wallet" | "card">("wallet");
 const [selectedNetwork, setSelectedNetwork] = useState(null);
const [selectedToken, setSelectedToken] = useState(null);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const networkButtonRef = useRef<HTMLButtonElement>(null);
  const tokenButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      networkButtonRef.current?.blur();
      tokenButtonRef.current?.blur();
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <div className="md:px-30 px-2.5">
      <h2 className="text-[28px] satoshi-medium mb-10 hidden md:flex">Payment Details</h2>
      <div className="flex flex-row gap-8 mt-5">
        <div
          className="app-bg rounded-xl p-10 mb-10 flex-1 max-w-2xl hidden md:block"
          style={{ boxShadow: "0px 0px 5px 0px #00000040" }}
        >
          <PaymentForm
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            selectedNetwork={selectedNetwork}
            setSelectedNetwork={setSelectedNetwork}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            checked={checked}
            setChecked={setChecked}
            networkButtonRef={networkButtonRef}
            tokenButtonRef={tokenButtonRef}
          />
        </div>
        <div className="block md:hidden w-full">
          <PaymentForm
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            selectedNetwork={selectedNetwork}
            setSelectedNetwork={setSelectedNetwork}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            checked={checked}
            setChecked={setChecked}
            networkButtonRef={networkButtonRef}
            tokenButtonRef={tokenButtonRef}
          />
        </div>

        <div className=" flex-col items-start min-w-65 hidden md:flex">
          <div className="flex items-center justify-end w-full ml-0 -mt-20 mb-10">
            <span className="flex items-center gap-2">
              <span className="flex items-center justify-center w-10 h-10 rounded-full search-input">
                <AiFillLock size={24} className="text-[#888888]" />
              </span>
              <span className="text-[20px] satoshi-medium text-[#888888]">
                Secure Server
              </span>
            </span>
          </div>

          <span className="text-[28px] satoshi-medium mb-8 ">
            Payment Summary
          </span>
          <div className="w-131.25 h-0.5 bg-[#aaaaaa] rounded-full my-6 mb-8 ml-auto" />
          <span className="text-[24px] text-[#616161] satoshi-medium mb-8 ">
            Metamask wallet : 002345KJi90pzzz3
          </span>
          <span className="text-[24px] text-[#616161] satoshi-medium mb-8 ">
            Actively linked to Yaba, Lagos Nigeria.
          </span>
          <div className="w-131.25 h-0.5 bg-[#aaaaaa] rounded-full my-6 mb-8 ml-auto" />
          <span className="text-[24px] text-[#616161] satoshi-medium mb-8 ">
            Expected arrival date: Between 22nd <br /> September and 26th
            September 2022.
          </span>
          <div className="w-131.25 h-0.5 bg-[#aaaaaa] rounded-full my-6 mb-8 ml-auto" />
          <div className="flex flex-col gap-6 mt-8 w-full">
            <CartSummary />
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start">
        <button
          type="button"
          className="bg-[#272727] text-white md:text-[28px] text-[22px] satoshi-bold md:w-165 md:h-27.5 w-75 h-15 mt-8 mb-20"
          onClick={() => navigate("/Marketplace/ThankYou")}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;