import React from "react";

interface CardFormFieldsProps {
  checked: boolean;
  setChecked: (v: boolean) => void;
}

const CardFormFields: React.FC<CardFormFieldsProps> = ({ checked, setChecked }) => (
  <div className="flex flex-col gap-6 md:mt-6">
    <div className="flex flex-col">
      <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
        Card Number
      </label>
      <input
        type="text"
        className="rounded-lg w-full h-[50px] md:w-[590px] md:h-[76px] md:text-[26px] text-[18px] search-input pl-3 md:pl-8"
        placeholder="1234 5678 9012 3456"
      />
    </div>
    <div className="flex gap-3 md:gap-6">
      <div className="flex flex-col flex-1">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          Expiry Date
        </label>
        <input
          type="text"
          className="rounded-lg md:w-[285px] w-[190px] h-[50px] md:h-[76px] md:text-[26px] text-[18px] search-input pl-3 md:pl-8"
          placeholder="MM/YY"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          CVC
        </label>
        <input
          type="text"
          className="rounded-lg md:w-[277px] w-[190px] h-[50px] md:h-[76px] md:text-[26px] text-[18px] search-input pl-3 md:pl-8"
          placeholder="CVC"
        />
      </div>
    </div>
    <div className="flex flex-col">
      <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
        Cardholder Name
      </label>
      <input
        type="text"
        className="rounded-lg w-full h-[50px] md:w-[590px] md:h-[76px] md:text-[26px] text-[18px] search-input pl-3 md:pl-8"
        placeholder="Full Name"
      />
    </div>
    <label className="flex items-center gap-4 md:mt-10 mb-10 cursor-pointer select-none">
      <span
        className={`md:w-7 md:h-7 w-5 h-5 flex items-center justify-center rounded border-2 ${
          checked
            ? "bg-[#CCCCCC] border-[#CCCCCC]"
            : "bg-[#CCCCCC] border-[#CCCCCC]"
        } transition-colors`}
        onClick={() => setChecked(!checked)}
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
      <span className="md:text-[20px] text-[15px] satoshi-medium text-[#888888]">
        Save my card details & information for future transactions
      </span>
    </label>
  </div>
);

export default CardFormFields;