import { useState } from "react";
import { useParams } from "react-router-dom";
import { marketplaceProducts } from "../data";
import Navbar from "@/components/Navbar";
import useDarkMode from "@/hooks/useDarkMode";
import { useCartStore } from "@/store/cartStore";
import Breadcrumb from "@/components/shared/Breadcrumb";
import MobileProductView from "@/components/products/MobileProductView";
import DesktopProductView from "@/components/products/DesktopProductView";
import CollectionCarousel from "@//components/products/CollectionCarousel";

const ProductPage = () => {
  const { id } = useParams();
  const product = marketplaceProducts.find((p) => p.id === id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (!product) return;
    
    addToCart({
      id: product.id,
      image: product.image,
      title: product.title,
      subtitle: product.creator,
      price: product.price,
      quantity: quantity,
    });
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />

      <section className="min-h-screen flex flex-col app-bg">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Marketplace", path: "/Marketplace" },
            { label: product.title },
          ]}
        />

        {/* Mobile View */}
        <MobileProductView
          product={product}
          quantity={quantity}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
          onAddToCart={handleAddToCart}
        />

        {/* Desktop View */}
        <DesktopProductView
          product={product}
          quantity={quantity}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
          onAddToCart={handleAddToCart}
        />

        {/* Collection Carousel - Desktop Only */}
        <CollectionCarousel products={marketplaceProducts} />
      </section>
    </>
  );
};

export default ProductPage;