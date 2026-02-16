import { useState } from "react";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { marketplaceProducts } from "../data";
import Navbar from "../components/Navbar";
import useDarkMode from "../hooks/useDarkMode";
import { GrDiamond } from "react-icons/gr";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PiHeartStraightThin } from "react-icons/pi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import CollectionProductCard from "../components/CollectionProductCard";
import CollapsibleSection from "../components/CollapsibleSection";

const ProductPage = () => {
  const { id } = useParams();
  const product = marketplaceProducts.find((p) => p.id === id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();
  const [quantity, setQuantity] = useState(1);
  const [mobileCardIndex, setMobileCardIndex] = useState(0);

  const handlePrevCard = () => {
    setMobileCardIndex((prev) =>
      prev === 0 ? marketplaceProducts.length - 1 : prev - 1
    );
  };
  const handleNextCard = () => {
    setMobileCardIndex((prev) =>
      prev === marketplaceProducts.length - 1 ? 0 : prev + 1
    );
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />


      <section className="min-h-screen flex flex-col app-bg">
        <div className="block text-[18px] ml-[10px] mt-8 mb-5 satoshi-bold md:mt-15 md:mb-15 md:ml-[120px]">
          <Link to="/" className="text-[#999] hover:underline">
            Home
          </Link>
          <span className="text-[#999]">/</span>
          <Link to="/Marketplace" className="text-[#999] hover:underline">
            Marketplace
          </Link>
          <span className="text-[#999]">/</span>
          <span className="app-text">{product.title}</span>
        </div>

        <div className="md:hidden">
          <div className="block w-[398px] h-px bg-[#333333] dark:bg-[#666666] ml-2 mb-6" />
          <div className=" flex justify-center mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-[357px] h-[384px] object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-[357px] mx-auto mb-6">
            <h1 className="text-[16px] uppercase satoshi-bold app-text">
              {product.title}
            </h1>
            <div className="flex items-center text-[16px] app-text">
              ${product.price}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[357px] mx-auto mb-6">
            <p className="text-[18px] satoshi-normal app-text">
              <span className="">Creator: </span>
              <span className="text-[#4693ED]">{product.creator}</span>
            </p>
            <p className="text-[16px] satoshi-normal app-text">
              <span className="">Made in </span>
              {product.location}
            </p>
            <p className="text-[16px] satoshi-normal app-text">
              <span className="">Total Views: </span>
              {product.views}
              <span className=""> Views</span>
            </p>
            <div className="flex items-center gap-6 mt-2">
              <span
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="cursor-pointer"
              >
                <FiMinus size={24} />
              </span>
              <span className="text-[24px] satoshi-bold app-text">
                {quantity}
              </span>
              <span
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="cursor-pointer"
              >
                <FiPlus size={24} />
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 mt-4 ml-8 mb-10 ">
            <button
              className="w-[214px] h-[54px] bg-[#272727] text-white text-[20px] satoshi-bold "
              onClick={() => {
              
              }}
            >
              Add to Cart
            </button>
            <div className="w-[54px] h-[54px] flex items-center justify-center border sort-border cursor-pointer">
              <PiHeartStraightThin className="tborder sort-border" size={32} />
            </div>
          </div>

          <div className="block w-[398px] h-px bg-[#333333] dark:bg-[#666666] ml-2 mb-6" />

              <CollapsibleSection title="Description">
            {product.description}
          </CollapsibleSection>

          <div className="block w-[398px] h-px bg-[#333333] dark:bg-[#666666] ml-2 mb-6" />

       <CollapsibleSection title="Listing">
            {product.listing}
          </CollapsibleSection>

          <div className="block w-[398px] h-px bg-[#333333] dark:bg-[#666666] ml-2 mb-6" />

        <CollapsibleSection title="Listing">
            {product.listing}
          </CollapsibleSection>

          <div className="block w-[398px] h-px bg-[#333333] dark:bg-[#666666] ml-2 mb-6" />

          <span className="text-[22px] satoshi-bold ml-5 mb-10 app-text">
            More from this collection
          </span>

          <div className="relative flex justify-center items-center mt-10 mb-25">
            {/* Left button */}
            <button
              onClick={handlePrevCard}
              className="absolute left-10 -mt-5 top-1/2 -translate-y-1/2 w-[64px] h-[64px] flex items-center justify-center rounded-full bg-transparent border-[white] border z-10"
              aria-label="Previous card"
            >
              <HiChevronLeft size={32} className="text-[white]" />
            </button>
            {/* Card */}
            <Link
              to={`/Marketplace/product/${marketplaceProducts[mobileCardIndex].id}`}
            >
              <div className="min-w-[398px] max-w-[398px]">
                <CollectionProductCard
                  image={marketplaceProducts[mobileCardIndex].image}
                  title={marketplaceProducts[mobileCardIndex].title}
                  price={marketplaceProducts[mobileCardIndex].price}
                />
              </div>
            </Link>
          
            <button
              onClick={handleNextCard}
              className="absolute right-10 -mt-5 top-1/2 -translate-y-1/2 w-[64px] h-[64px] flex items-center justify-center rounded-full bg-transparent border-[white] border z-10"
              aria-label="Next card"
            >
              <HiChevronRight size={32} className="text-[white]" />
            </button>
          </div>
        </div>

      
        <div className="ml-[120px] mb-8 w-[1220px] h-[1020px] bg-transparent border-2 mb-15 sort-border hidden md:flex items-stretch justify-center">
         
          <div className="flex-1 flex flex-col items-center justify-center h-[1020px]">
            <img
              src={product.image}
              alt={product.title}
              className="w-[525px] h-[926px] object-cover -ml-17"
            />
          </div>
        
          <div className="w-px border sort-border  -ml-17 h-[1018px]" />
         
          <div className="flex-1 flex flex-col justify-between h-[1020px] py-12">
           
            <div className="flex justify-between items-center -mt-5 mb-10 h-[120px] px-10">
              <h1 className="text-[46px] satoshi-bold app-text">
                {product.title}
              </h1>
              <div className="flex items-center text-[40px] mb-2 app-text">
                <GrDiamond className="mr-2" />
                {product.price}
              </div>
            </div>

     
            <div className="w-full h-px -mt-20 border sort-border " />

   
            <div className="flex flex-col items-start px-10">
              <p className="text-[30px] satoshi-normal app-text">
                <span className="">Creator : </span>
                <span className="text-[#4693ED]">{product.creator}</span>
              </p>
              <p className="text-[24px] satoshi-normal app-text mt-5">
                <span className="">Made in </span> {product.location}
              </p>
              <p className="text-[28px] satoshi-medium app-text mt-5">
                <span className="">Total Views: </span> {product.views}
                <span className=""> Views</span>
              </p>

              <div className="flex flex-col items-start ">
                <div className="flex items-center gap-6 mt-6 mb-15">
                  <span
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <FiMinus size={30} />
                  </span>
                  <span className="text-[36px] satoshi-bold app-text">
                    {quantity}
                  </span>
                  <span
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <FiPlus size={30} />
                  </span>
                </div>
            
                <div className="flex flex-row items-center gap-6 ">
                  <button
                    className="w-[315px] h-[80px] bg-[#272727] text-white text-[26px] satoshi-bold"
                    onClick={() => {
            
                    }}
                  >
                    Add to Cart
                  </button>
                  <div className="w-[100px] h-[80px] flex items-center justify-center border sort-border  cursor-pointer ">
                    <PiHeartStraightThin
                      className="tborder sort-border"
                      size={60}
                    />
                  </div>
                </div>
              </div>
            </div>

     
            <div className="w-full h-px  border sort-border " />
      
             <CollapsibleSection title="Description">
            {product.description}
          </CollapsibleSection>

       
            <div className="w-full h-px border sort-border " />
      
            <CollapsibleSection title="Listing">
            {product.listing}
          </CollapsibleSection>

            <div className="w-full h-px border sort-border " />

      
            <CollapsibleSection title="Status">
            {product.status}
          </CollapsibleSection>

          </div>
        </div>

 
        <div className="ml-[120px] w-[1220px] h-[114px] mt-15 mb-15 bg-white dark:bg-[#181818] rounded-[15px] hidden md:flex items-center justify-between px-10 shadow card-shadow app-bg app-text">
          <span className="text-[32px] text-[#333333] satoshi-medium app-text">
            Explore more from this collection
          </span>
          <div className="flex gap-6">
            <button
              onClick={() => scroll("left")}
              className="w-[44px] h-[44px] md:w-[58px] md:h-[58px] flex items-center justify-center rounded-full app-bg border-main border-[0.41px] "
            >
              <HiChevronLeft size={32} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-[44px] h-[44px] md:w-[58px] md:h-[58px] flex items-center justify-center rounded-full app-bg border-main border-[0.41px] "
            >
              <HiChevronRight size={32} />
            </button>
          </div>
        </div>

 
        <div
          ref={scrollRef}
          className=" overflow-x-auto no-scrollbar ml-[120px] mr-[120px] mb-15 gap-8 hidden md:flex"
        >
          {marketplaceProducts.map((item) => (
            <Link key={item.id} to={`/Marketplace/product/${item.id}`}>
              <CollectionProductCard
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </Link>
          ))}
        </div>

  
        <div className=" justify-center mt-10 mb-30 hidden md:flex">
          <button className="px-8 py-3 w-[249px] h-[73px] app-bg app-text border sort-border rounded-lg text-[30px] satoshi-medium ">
            Explore More
          </button>
        </div>

  
      </section>
    </>
  );
};

export default ProductPage;
