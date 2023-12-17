"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Guide {
  id: number;
  imageUrl: string;
}

interface GuideSliderProps {
  guides: Guide[];
}

const GuideSlider: React.FC<GuideSliderProps> = ({ guides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === guides.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? guides.length - 1 : current - 1
    );
  };

  return (
    <div className="container mx-auto p-4 lg:p-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center rounded-lg overflow-hidden">
      <div className="col-span-12 lg:col-span-11 flex flex-col lg:flex-row bg-light-gray">
        <div className="relative min-h-[345px] w-full">
          <Image src={guides[activeIndex].imageUrl} alt="" layout="fill" className="w-full object-cover h-full" />
        </div>
      </div>

      <div className="col-span-12 lg:col-span-1 h-full flex flex-col lg:items-start items-center bg-light-gray">
        <div className="hidden lg:flex lg:flex-col lg:items-center justify-between h-full w-full pt-4">
          <button
            onClick={prevTestimonial}
            className="text-black disabled:text-gray-400"
            aria-label="Previous"
          >
            <Image src="/Arrow_left.svg" height={50} width={50} alt="" />
          </button>
          <button
            onClick={nextTestimonial}
            className="text-black disabled:text-gray-400"
            aria-label="Next"
          >
            <Image src="/Arrow_right.svg" height={50} width={50} alt="" />
          </button>
          <div className="bg-white flex justify-center items-center w-full h-[100px] relative">
            <Image
              src={
                guides[activeIndex === guides.length - 1 ? 0 : activeIndex + 1]
                  .imageUrl
              }
              alt="Company Logo"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex lg:hidden justify-between w-full">
          <button
            onClick={prevTestimonial}
            className="text-black disabled:text-gray-400"
            aria-label="Previous"
          >
            <Image src="Arrow_left.svg" height={50} width={50} alt="" />
          </button>
          <div className="bg-white flex justify-center items-center w-full">
            <Image
              src={
                guides[activeIndex === guides.length - 1 ? 0 : activeIndex + 1]
                  .imageUrl
              }
              alt="Company Logo"
              width={80}
              height={23}
            />
          </div>
          <button
            onClick={nextTestimonial}
            className="text-black disabled:text-gray-400"
            aria-label="Next"
          >
            <Image src="Arrow_right.svg" height={50} width={50} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideSlider;
