import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { wallets } from "../data";
import type { ShippingFormProps } from "../data/types/marketplace.model";

const ShippingForm: React.FC<ShippingFormProps> = ({ onProceed }) => {
  const [checked, setChecked] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<(typeof wallets)[number] | null>(null);

  // State for form data and errors
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    wallet: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle wallet selection
  const handleWalletChange = (wallet: any) => {
    setSelectedWallet(wallet);
    setFormData({ ...formData, wallet: wallet?.name || "" });
  };

  // Validate and submit
  const handleProceed = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!formData.wallet) newErrors.wallet = "Wallet selection is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // All good, proceed
      onProceed?.(formData);
    }
  };

  return (
    <form className="flex flex-col gap-6 w-full md:max-w-xl" onSubmit={handleProceed}>
      {/* Email */}
      <div className="flex flex-col mb-1">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="text-[#888888] rounded-lg w-full h-12.5 md:w-152.5 md:h-19 pl-6 md:text-[26px] text-[18px] search-input focus:outline-none"
          placeholder="Enter your email"
        />
        {errors.email && <span className="text-red-400 md:text-[20px]">{errors.email}</span>}
      </div>

      {/* Checkbox */}
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

      {/* Address */}
      <div className="flex flex-col mb-1">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="text-[#888888] rounded-lg w-full h-12.5 md:w-152.5 md:h-19 pl-6 md:text-[26px] text-[18px] search-input focus:outline-none"
          placeholder="Enter your address"
        />
        {errors.address && <span className="text-red-400 md:text-[20px]">{errors.address}</span>}
      </div>

      {/* City */}
      <div className="flex flex-col mb-1">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          City
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="text-[#888888] rounded-lg w-full h-12.5 md:w-152.5 md:h-19 pl-6 md:text-[26px] text-[18px] search-input focus:outline-none"
          placeholder="Enter your city"
        />
        {errors.city && <span className="text-red-400 md:text-[20px]">{errors.city}</span>}
      </div>

      {/* Country & Postal Code */}
      <div className="flex flex-col md:flex-row gap-6 mb-2 md:mb-6 w-full md:w-152.5">
        <div className="flex flex-col flex-1">
          <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-1">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="text-[#888888] rounded-lg w-full h-12.5 md:h-19 pl-6 md:text-[26px] text-[18px] search-input focus:outline-none"
            placeholder="Country"
          />
          {errors.country && <span className="text-red-400 md:text-[20px]">{errors.country}</span>}
        </div>
        <div className="flex flex-col flex-1">
          <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-1">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="text-[#888888] rounded-lg w-full h-12.5 md:h-19 pl-6 md:text-[26px] text-[18px] search-input focus:outline-none"
            placeholder="Postal Code"
          />
          {errors.postalCode && <span className="text-red-400 md:text-[20px]">{errors.postalCode}</span>}
        </div>
      </div>

      {/* Wallet */}
      <div className="flex flex-col relative md:mb-6">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          Choose a wallet
        </label>
        <div className="relative w-full md:w-152.5">
          <Listbox value={selectedWallet} onChange={handleWalletChange}>
            {({ open }) => (
              <>
                <Listbox.Button className="text-[#888888] rounded-lg w-full h-12.5 md:w-full md:h-19 pl-6 search-input flex items-center justify-between pr-12 focus:outline-none">
                  <span className="flex items-center gap-4 text-[#aaaaaa] md:text-[26px] text-[18px]">
                    {selectedWallet ? selectedWallet.icon : "SELECT WALLET"}
                  </span>
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#888888] -mt-3 text-3xl">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-2 md:w-152.5 w-full search-input rounded-lg shadow-lg focus:outline-none">
                  {wallets.map((wallet) => (
                    <Listbox.Option
                      key={wallet.name}
                      value={wallet}
                      className={({ active }) =>
                        `cursor-pointer select-none px-6 md:h-19 h-12.5 flex items-center gap-4 ${
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
          {errors.wallet && <span className="text-red-400 md:text-[20px]">{errors.wallet}</span>}
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#272727] text-white md:text-[30px] text-[20px] md:ml-10 satoshi-bold w-70 md:w-151.25 h-15 md:h-27.5 mb-20 mt-6 self-center"
      >
        Proceed to Payment
      </button>
    </form>
  );
};

export default ShippingForm;