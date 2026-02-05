import React from "react";
import { Listbox } from "@headlessui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface WalletFormFieldsProps {
  selectedNetwork: any;
  setSelectedNetwork: (v: any) => void;
  selectedToken: any;
  setSelectedToken: (v: any) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  networkButtonRef: React.RefObject<HTMLButtonElement>;
  tokenButtonRef: React.RefObject<HTMLButtonElement>;
  networks: any[];
  tokens: any[];
}

const WalletFormFields: React.FC<WalletFormFieldsProps> = ({
  selectedNetwork,
  setSelectedNetwork,
  selectedToken,
  setSelectedToken,
  checked,
  setChecked,
  networkButtonRef,
  tokenButtonRef,
  networks,
  tokens,
}) => (
  <div className="flex flex-col gap-6 md:mt-6">
    <div className="flex flex-col">
      <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
        Wallet Address
      </label>
      <input
        type="text"
        className="rounded-lg w-full h-[50px] md:w-[590px] md:h-[76px] md:text-[26px] text-[18px] search-input pl-3 md:pl-8"
        placeholder="Enter your wallet address"
      />
    </div>
    <div className="flex flex-col md:mt-10">
      <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4 ">
        Select Network
      </label>
      <div className="relative w-full max-w-[610px]">
        <Listbox value={selectedNetwork} onChange={setSelectedNetwork}>
          {({ open }) => (
            <>
              <Listbox.Button
                ref={networkButtonRef}
                className="text-[#888888] rounded-lg w-full h-[50px] md:w-[590px] md:h-[76px] md:text-[26px] text-[18px] pl-3 md:pl-8 pr-4 md:pr-12 search-input flex items-center justify-between"
              >
                <span>
                  {selectedNetwork ? selectedNetwork.name : "Choose network"}
                </span>
                <span className="ml-auto flex items-center">
                  <img
                    src={selectedNetwork.logo}
                    alt={selectedNetwork.name}
                    className="md:w-10 md:h-10 w-7 h-7 object-contain ml-4"
                  />
                  <span className="ml-2 text-[#888888] text-3xl">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-2 w-full search-input rounded-lg shadow-lg">
                {networks.map((network) => (
                  <Listbox.Option
                    key={network.name}
                    value={network}
                    className={({ active }) =>
                      `cursor-pointer select-none px-6 md:h-[76px] h-[50px] flex items-center justify-between md:text-[26px] text-[18px] ${
                        active ? "bg-[#b0b0b0] text-black" : "text-[#272727]"
                      }`
                    }
                  >
                    <span>{network.name}</span>
                    <img
                      src={network.logo}
                      alt={network.name}
                      className="md:w-10 md:h-10 w-7 h-7 object-contain"
                    />
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </>
          )}
        </Listbox>
      </div>
    </div>
    <div className="flex flex-col md:mt-10">
      <label className="md:text-[26px] text-[20px] text-[#888888] satoshi-medium mb-2 md:mb-4">
        Select Token
      </label>
      <div className="relative w-full max-w-[610px]">
        <Listbox value={selectedToken} onChange={setSelectedToken}>
          {({ open }) => (
            <>
              <Listbox.Button
                ref={tokenButtonRef}
                className="text-[#888888] rounded-lg w-full h-[50px] md:w-[590px] md:h-[76px] md:text-[26px] text-[18px] pl-3 md:pl-8 pr-4 md:pr-12 search-input flex items-center justify-between"
              >
                <span>
                  {selectedToken ? selectedToken.name : "Choose token"}
                </span>
                <span className="ml-auto flex items-center">
                  <img
                    src={selectedToken.logo}
                    alt={selectedToken.name}
                    className="md:w-10 md:h-10 w-7 h-7 object-contain ml-4"
                  />
                  <span className="ml-2 text-[#888888] text-3xl">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-2 w-full search-input rounded-lg shadow-lg">
                {tokens.map((token) => (
                  <Listbox.Option
                    key={token.name}
                    value={token}
                    className={({ active }) =>
                      `cursor-pointer select-none px-6 md:h-[76px] h-[50px] flex items-center justify-between text-20px md:text-[24px] ${
                        active ? "bg-[#b0b0b0] text-black" : "text-[#272727]"
                      }`
                    }
                  >
                    <span>{token.name}</span>
                    <img
                      src={token.logo}
                      alt={token.name}
                      className="md:w-10 md:h-10 w-7 h-7 object-contain"
                    />
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </>
          )}
        </Listbox>
      </div>
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
        Save my wallet details & information for future transactions
      </span>
    </label>
  </div>
);

export default WalletFormFields;