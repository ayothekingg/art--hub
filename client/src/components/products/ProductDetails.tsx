import CollapsibleSection from "./CollapsibleSection";
import type { ProductDetailsProps } from "@/data/types/products.model";
const ProductDetails = ({
  description,
  listing,
  status,
  showDividers = true,
}: ProductDetailsProps) => {
  const Divider = () => (
    <div className="block w-99.5 h-px md:h-0.5 bg-[#666666] ml-2 mb-6 md:w-full md:ml-0 md:mb-0 " />
  );

  return (
    <>
      {showDividers && <Divider />}
      <CollapsibleSection title="Description">{description}</CollapsibleSection>
      
      {showDividers && <Divider />}
      <CollapsibleSection title="Listing">{listing}</CollapsibleSection>
      
      {showDividers && <Divider />}
      <CollapsibleSection title="Status">{status}</CollapsibleSection>
    </>
  );
};

export default ProductDetails;