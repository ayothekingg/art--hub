import { useState } from "react";
import type { ReactNode } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col w-full px-10 mb-6">
      <div
        className="flex flex-row items-center justify-between cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-[18px] -ml-5 md:ml-0 md:text-[32px] md:mt-5 satoshi-medium app-text">{title}</span>
        <HiOutlineChevronDown
          className={`text-[28px] app-text md:mt-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && <div className="mt-4 text-[16px] -ml-5 md:ml-0 satoshi-normal app-text">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;