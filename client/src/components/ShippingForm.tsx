import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { wallets, inputFields } from "../data";

interface ShippingFormProps {
  onProceed?: () => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onProceed }) => {
  const [checked, setChecked] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<
    (typeof wallets)[number] | null
  >(null); 

  return (
    <form className="flex flex-col gap-6 w-full md:max-w-xl">

      {inputFields
        .filter((field) => field.name === "email")
        .map((field) => (
          <div className="flex flex-col mb-1" key={field.name}>
            <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              className="text-[#888888] rounded-lg w-full h-[50px] md:w-[610px] md:h-[76px] pl-6 md:text-[26px] text-[18px] search-input"
              placeholder={field.placeholder}
            />
          </div>
        ))}

      <label className="flex items-center gap-4 md:mt-2 -mt-5 md:mb-10 cursor-pointer select-none">
        <span
          className={`md:w-7 md:h-7 w-5 h-5 flex items-center justify-center rounded border-2 ${
            checked
              ? "bg-[#CCCCCC] border-[#CCCCCC]"
              : "bg-[#CCCCCC] border-[#CCCCCC]"
          } transition-colors`}
          onClick={() => setChecked((v) => !v)}
        >
          {checked && (
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </span>
        <span className="text-[15px] md:text-[20px] satoshi-medium text-[#888888]">
          Get updates about new drops & exclusive offers
        </span>
      </label>

      {inputFields
        .filter((field) => field.name !== "email" && field.name !== "city")
        .map((field) => (
          <div className="flex flex-col mb-1" key={field.name}>
            <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              className="text-[#888888] rounded-lg w-full h-[50px] md:w-[610px] md:h-[76px] pl-6 md:text-[26px] text-[18px] search-input"
              placeholder={field.placeholder}
            />
          </div>
        ))}

      {inputFields
        .filter((field) => field.name === "city")
        .map((field) => (
          <div className="flex flex-col mb-1" key={field.name}>
            <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              className="text-[#888888] rounded-lg w-full h-[50px] md:w-[610px] md:h-[76px] pl-6 md:text-[26px] text-[18px] search-input"
              placeholder={field.placeholder}
            />
          </div>
        ))}

      <div className="flex flex-col md:flex-row gap-6 mb-2 md:mb-6 w-full md:w-[610px]">
        <div className="flex flex-col flex-1">
          <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-1">
            Country
          </label>
          <input
            type="text"
            className="text-[#888888] rounded-lg w-full h-[50px] md:h-[76px] pl-6 md:text-[26px] text-[18px] search-input"
            placeholder="Country"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-1">
            Postal Code
          </label>
          <input
            type="text"
            className="text-[#888888] rounded-lg w-full h-[50px] md:h-[76px] pl-6 md:text-[26px] text-[18px] search-input"
            placeholder="Postal Code"
          />
        </div>
      </div>

      <div className="flex flex-col relative md:mb-6">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          Choose a wallet
        </label>
        <div className="relative w-full md:w-[610px]">
          <Listbox value={selectedWallet} onChange={setSelectedWallet}>
            {({ open }) => (
              <>
                <Listbox.Button className="text-[#888888] rounded-lg w-full h-[50px] md:w-full md:h-[76px] pl-6 search-input flex items-center justify-between pr-12">
                  <span className="flex items-center gap-4 text-[#aaaaaa] md:text-[26px] text-[18px[">
                    {selectedWallet ? selectedWallet.icon : "SELECT WALLET"}
                  </span>
                  <span className="absolute md:right-6 right-10 top-1/2 -translate-y-1/2 text-[#888888] text-3xl">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-2 md:w-[610px] w-full search-input rounded-lg shadow-lg">
                  {wallets.map((wallet) => (
                    <Listbox.Option
                      key={wallet.name}
                      value={wallet}
                      className={({ active }) =>
                        `cursor-pointer select-none px-6 md:h-[76px] h-[50px] flex items-center gap-4 ${
                          active ? "bg-[#c4c4c4]" : "bg-[search-input-bg]"
                        }`
                      }
                    >
                      {wallet.icon}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </>
            )}
          </Listbox>
        </div>
      </div>

      <button
        type="button"
        className="bg-[#272727] text-white md:text-[30px] text-[20px] md:ml-10 satoshi-bold w-[280px] md:w-[605px] h-[60px] md:h-[110px] mb-20 mt-6 self-center"
        onClick={onProceed}
      >
        Proceed to Payment
      </button>
    </form>
  );
};

export default ShippingForm;
