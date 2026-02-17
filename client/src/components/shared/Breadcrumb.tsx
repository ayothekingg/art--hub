import { Link } from "react-router-dom";
import type { BreadcrumbProps } from "@/data/types/shared.model";

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  return (
    <div className={`block text-[18px] ml-2.5 mt-8 mb-5 satoshi-medium md:mt-15 md:text-[24px] md:mb-15 md:ml-30 ${className}`}>
      {items.map((item, index) => (
        <span key={index}>
          {item.path ? (
            <Link to={item.path} className="text-[#999] hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="app-text">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="text-[#999]">/</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;