import React, { useState } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { creators, products } from "../data";


const ProductImageHover: React.FC<{ src: string }> = ({ src }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[610px] h-[305px] cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt="Featured Product"
        className="w-full h-full object-cover transition-all duration-300 ease-out"
        style={{
          filter: hovered ? "brightness(0.5)" : "brightness(1)",
          transition: "filter 300ms ease-out",
        }}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 2 }}
      >
        <div className="flex items-center gap-4">
          <span className="text-white text-[40px] font-bold clash-normal">
            View product
          </span>
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent border-white border-[0.41px]"
            aria-label="See creators"
            type="button"
          >
            <LiaArrowRightSolid
              style={{ width: "32.82px", height: "auto" }}
              className="text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Featured: React.FC = () => (
  <section className="w-full py-16 app-bg flex flex-col items-start">
    <h2 className="text-[28px] -mt-20 md:text-[48px] ml-2.5 md:ml-[120px] mb-13 text-center satoshi-bold app-text">
      Featured Products
    </h2>
    <hr className="hidden md:block w-[calc(100%-240px)] ml-[120px] mr-[120px] mb-15 border-t border-main" />

  
    <div className="hidden md:block w-full">
      <div className="flex flex-wrap ml-[120px] items-center gap-12">
        <ProductImageHover src={products[0].img} />
        <div className="flex-1 mr-[120px]">
          <h3 className="text-[36px] app-text mb-6 clash-medium">
            {products[0].title}
          </h3>
          <p className="featured-desc text-[24px] satoshi-normal mb-9">
            {products[0].desc}
          </p>
          <div className="flex items-center mb-2">
            <div className="flex">
              {creators.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Creator ${idx + 1}`}
                  className="rounded-full"
                  style={{
                    border: "0.41px solid #78A3AD",
                    width: 51,
                    height: 51,
                    objectFit: "cover",
                    marginLeft: idx === 0 ? 0 : -16,
                    zIndex: 10 + idx,
                  }}
                />
              ))}
            </div>
            <span className="text-[20px] app-text satoshi ml-4">
              64 major creators
            </span>
            <button
              className="w-16 h-16 flex items-center justify-center rounded-full app-bg border-main border-[0.41px] ml-35"
              aria-label="See creators"
              type="button"
            >
              <LiaArrowRightSolid
                style={{ width: "32.82px", height: "auto" }}
                className="featured-arrow"
              />
            </button>
          </div>
        </div>
      </div>

      <hr className="w-[calc(100%-240px)] ml-[120px] mr-[120px] mt-15 mb-15 border-t border-main" />
      <div className="flex flex-wrap flex-row-reverse mr-[120px] items-center gap-12">
        <ProductImageHover src={products[1].img} />
        <div className="flex-1 ml-[120px] text-left">
          <h3 className="text-[36px] app-text mb-6 clash-medium">
            {products[1].title}
          </h3>
          <p className="featured-desc text-[24px] satoshi-normal mb-9">
            {products[1].desc}
          </p>
          <div className="flex items-center mb-2">
            <div className="flex">
              {creators.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Creator ${idx + 1}`}
                  className="rounded-full"
                  style={{
                    border: "0.41px solid #78A3AD",
                    width: 51,
                    height: 51,
                    objectFit: "cover",
                    marginLeft: idx === 0 ? 0 : -16,
                    zIndex: 10 + idx,
                  }}
                />
              ))}
            </div>
            <span className="text-[20px] app-text satoshi ml-4">
              64 major creators
            </span>
            <button
              className="w-16 h-16 flex items-center justify-center rounded-full app-bg border-main border-[0.41px] ml-35"
              aria-label="See creators"
              type="button"
            >
              <LiaArrowRightSolid
                style={{ width: "32.82px", height: "auto" }}
                className="featured-arrow"
              />
            </button>
          </div>
        </div>
      </div>

      <hr className="w-[calc(100%-240px)] ml-[120px] mr-[120px] mt-15 mb-15 border-t border-main" />
      <div className="flex flex-wrap ml-[120px] items-center gap-12">
        <ProductImageHover src={products[2].img} />
        <div className="flex-1 mr-[120px]">
          <h3 className="text-[36px] app-text mb-6 clash-medium">
            {products[2].title}
          </h3>
          <p className="featured-desc text-[24px] satoshi-normal mb-9">
            {products[2].desc}
          </p>
          <div className="flex items-center mb-2">
            <div className="flex">
              {creators.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Creator ${idx + 1}`}
                  className="rounded-full"
                  style={{
                    border: "0.41px solid #78A3AD",
                    width: 51,
                    height: 51,
                    objectFit: "cover",
                    marginLeft: idx === 0 ? 0 : -16,
                    zIndex: 10 + idx,
                  }}
                />
              ))}
            </div>
            <span className="text-[20px] app-text satoshi ml-4">
              64 major creators
            </span>
            <button
              className="w-16 h-16 flex items-center justify-center rounded-full app-bg border-main border-[0.41px] ml-35"
              aria-label="See creators"
              type="button"
            >
              <LiaArrowRightSolid
                style={{ width: "32.82px", height: "auto" }}
                className="featured-arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="block md:hidden w-full px-5">
      {products.map((product, idx) => (
        <div key={idx} className="mb-14">
          <div className="relative w-[388px] h-64 mx-auto mb-6 -mt-6 -ml-2.5">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.5)" }}
            />

            
            <span
              className="absolute left-1/2 transform -translate-x-1/2 top-6 text-white text-[30px] font-bold clash-bold text-center w-full px-2"
              style={{ zIndex: 2 }}
            >
              {product.title}
            </span>
            <button
              className="absolute right-10 bottom-20 w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-white"
              aria-label="View product"
              type="button"
              style={{ zIndex: 2 }}
            >
              <LiaArrowRightSolid
                style={{ width: "32.82px", height: "auto" }}
                className="text-white"
              />
            </button>
          </div>
          <p className="featured-desc text-[15px] satoshi-normal mb-5 -ml-2.5 text-start">
            {product.desc}
          </p>
          <div className="flex justify-start items-center -ml-2.5 mb-2">
            <div className="flex">
              {creators.map((src, idx2) => (
                <img
                  key={idx2}
                  src={src}
                  alt={`Creator ${idx2 + 1}`}
                  className="rounded-full"
                  style={{
                    border: "0.41px solid #78A3AD",
                    width: 38,
                    height: 38,
                    objectFit: "cover",
                    marginLeft: idx2 === 0 ? 0 : -12,
                    zIndex: 10 + idx2,
                  }}
                />
              ))}
            </div>
            <span className="text-[16px] app-text satoshi ml-3">
              64 major creators
            </span>
          </div>
          

          <hr className="block md:hidden w-[180px] border-[0.5px] border-main -ml-2.5 my-6" />
        </div>
      ))}
    </div>
  </section>
);

export default Featured;
