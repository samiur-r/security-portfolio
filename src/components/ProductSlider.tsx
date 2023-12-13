"use client";

import Image from "next/image";
import React, { useState } from "react";

export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  topText?: string;
}

type ProductSliderProps = {
  products: Product[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProduct = () => {
    setActiveIndex((current) =>
      current === products.length - 1 ? 0 : current + 1
    );
  };

  const previousProduct = () => {
    setActiveIndex((current) =>
      current === 0 ? products.length - 1 : current - 1
    );
  };

  return (
    <div className="mt-10 flex flex-col lg:flex-row gap-5 lg:gap-0 lg:h-[596px] flex-1">
      <Image
        src={products[activeIndex].imageUrl}
        width={652}
        height={500}
        alt=""
        className="relative z-10"
      />
      <div className="flex flex-1 justify-center items-center bg-dark-blue relative lg:-ml-20 lg:mt-24 z-0 rounded-lg">
        <div className="flex flex-col gap-5 p-5 max-w-md">
          {products[activeIndex].topText && (
            <p className="font-glancyr">{products[activeIndex].topText}</p>
          )}
          <h3 className="text-xl lg:text-3xl font-glancyr">
            {products[activeIndex].title}
          </h3>
          <p>{products[activeIndex].description}</p>
        </div>
      </div>
      {products.length > 1 && (
        <div className="flex items-end justify-center">
          <div className="bg-[#E5E7E8] rounded-lg p-2 flex lg:flex-col gap-2">
            <button aria-label="Previous" onClick={previousProduct}>
              <Image src="Arrow_left.svg" height={50} width={50} alt="" />
            </button>
            <button aria-label="Next" onClick={nextProduct}>
              <Image src="Arrow_right.svg" height={50} width={50} alt="" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
