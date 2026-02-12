import type { ProductInfoProps } from "@/data/types/products.model";

const ProductInfo = ({ creator, location, views, size = "mobile" }: ProductInfoProps) => {
  const textSizes = {
    mobile: {
      creator: "text-[18px]",
      location: "text-[16px]",
      views: "text-[16px]",
    },
    desktop: {
      creator: "text-[30px]",
      location: "text-[24px]",
      views: "text-[28px]",
    },
  };

  const sizes = textSizes[size];

  return (
    <div className="flex flex-col gap-4 md:gap-0">
      <p className={`${sizes.creator} satoshi-normal app-text`}>
        <span>Creator: </span>
        <span className="text-[#4693ED]">{creator}</span>
      </p>
      <p className={`${sizes.location} satoshi-normal app-text ${size === "desktop" ? "mt-5" : ""}`}>
        <span>Made in </span>
        {location}
      </p>
      <p className={`${sizes.views} ${size === "desktop" ? "satoshi-medium mt-5" : "satoshi-normal"} app-text`}>
        <span>Total Views: </span>
        {views}
        <span> Views</span>
      </p>
    </div>
  );
};

export default ProductInfo;