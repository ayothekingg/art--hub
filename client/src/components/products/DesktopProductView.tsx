import { GrDiamond } from "react-icons/gr";
import ProductInfo from "./ProductInfo";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import ProductDetails from "./ProductDetails";
import type { DesktopProductViewProps } from "@/data/types/products.model";

const DesktopProductView = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onAddToCart,
}: DesktopProductViewProps) => {
  return (
    <div className="ml-30 w-305 h-255 bg-transparent border-2 mb-15 sort-border hidden md:flex items-stretch justify-center">
      {/* Left Side - Product Image */}
      <div className="flex-1 flex flex-col items-center justify-center h-255">
        <img
          src={product.image}
          alt={product.title}
          className="w-131.25 h-231.5 object-cover -ml-17"
        />
      </div>

      {/* Vertical Divider */}
      <div className="w-px border sort-border -ml-17 h-254.5" />

      {/* Right Side - Product Details */}
      <div className="flex-1 flex flex-col justify-between h-255 py-12">
        {/* Header with Title and Price */}
        <div className="flex justify-between items-center -mt-5 mb-10 h-30 px-10">
          <h1 className="text-[46px] satoshi-bold app-text">{product.title}</h1>
          <div className="flex items-center text-[40px] mb-2 app-text">
            <GrDiamond className="mr-2" />
            {product.price}
          </div>
        </div>

        <div className="w-full h-px -mt-20 border sort-border" />

        {/* Product Info and Actions */}
        <div className="flex flex-col items-start px-10">
          <ProductInfo
            creator={product.creator}
            location={product.location}
            views={product.views}
            size="desktop"
          />

          <div className="flex flex-col items-start">
            <div className="mt-6 mb-15">
              <QuantitySelector
                quantity={quantity}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                size="desktop"
              />
            </div>

            <AddToCartButton onAddToCart={onAddToCart} size="desktop" />
          </div>
        </div>


        {/* Collapsible Sections */}
        <ProductDetails
          description={product.description}
          listing={product.listing}
          status={product.status}
          showDividers={true}
        />
      </div>
    </div>
  );
};

export default DesktopProductView;