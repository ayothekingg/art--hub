import React from "react";
import type { CardFormFieldsProps } from "../data/types/marketplace.model";

const CardFormFields: React.FC<CardFormFieldsProps> = ({
  checked,
  setChecked,
}) => (
  <div className="flex flex-col gap-6 md:mt-6">
    <div className="flex flex-col">
      <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
        Card Number
      </label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9 ]*"
        maxLength={19}
        className="rounded-lg w-full h-12.5 md:w-147.5 md:h-19 md:text-[26px] text-[18px] search-input pl-3 md:pl-8 focus:outline-none"
        placeholder="1234 5678 9012 3456"
        onInput={e => {
          let value = (e.target as HTMLInputElement).value;
          value = value.replace(/\D/g, "");
          value = value.slice(0, 16);
          value = value.replace(/(.{4})/g, "$1 ").trim();
          (e.target as HTMLInputElement).value = value;
        }}
      />
    </div>
    <div className="flex gap-3 md:gap-6 md:mt-10">
      <div className="flex flex-col flex-1">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          Expiry Date
        </label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9 /]*"
          maxLength={7}
          className="rounded-lg md:w-71.25 w-47.5 h-12.5 md:h-19 md:text-[26px] text-[18px] search-input pl-3 md:pl-8 focus:outline-none"
          placeholder="MM / YY"
          onInput={e => {
            let value = (e.target as HTMLInputElement).value;
            value = value.replace(/[^0-9]/g, "");
            if (value.length > 2) {
              value = value.slice(0, 2) + " / " + value.slice(2, 4);
            }
            value = value.slice(0, 7);
            (e.target as HTMLInputElement).value = value;
          }}
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
          CVC
        </label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={3}
          className="rounded-lg md:w-69.25 w-47.5 h-12.5 md:h-19 md:text-[26px] text-[18px] search-input pl-3 md:pl-8 focus:outline-none"
          placeholder="123"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            input.value = input.value.replace(/[^0-9]/g, "").slice(0, 3);
          }}
        />
      </div>
    </div>
    <div className="flex flex-col md:mt-10">
      <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
        Cardholder Name
      </label>
      <input
        type="text"
        className="rounded-lg w-full h-12.5 md:w-147.5 md:h-19 md:text-[26px] text-[18px] search-input pl-3 md:pl-8 focus:outline-none"
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