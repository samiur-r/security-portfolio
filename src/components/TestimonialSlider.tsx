"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Testimonial {
  id: number;
  imageUrl: string;
  companyLogoUrl: string;
  text: string;
  name: string;
  title: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center rounded-lg overflow-hidden">
      <div
        className="col-span-12 md:col-span-11 flex flex-col md:flex-row pt-5 md:pt-0 bg-[#E5E7E8]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative min-h-[345px] min-w-[244px] md:min-h-[345px] md:min-w-[244px] ${
            isHovered && "mx-5"
          }`}
        >
          <Image
            src={
              isHovered
                ? testimonials[activeIndex].companyLogoUrl
                : testimonials[activeIndex].imageUrl
            }
            alt={testimonials[activeIndex].name}
            layout="fill"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 p-10 text-[#313D46]">
          <p className="text-xl md:text-3xl text-center md:text-start">
            {testimonials[activeIndex].text}
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-start gap-2">
            <p> {testimonials[activeIndex].name},</p>
            <p>{testimonials[activeIndex].title}</p>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-1 h-full flex flex-col md:items-start items-center bg-[#E5E7E8]">
        <div className="hidden md:flex md:flex-col md:items-center justify-between h-full w-full pt-4">
          <button
            onClick={prevTestimonial}
            className="text-black disabled:text-gray-400"
            aria-label="Previous"
          >
            <Image src="Arrow_left.svg" height={50} width={50} alt="" />
          </button>
          <button
            onClick={nextTestimonial}
            className="text-black disabled:text-gray-400"
            aria-label="Next"
          >
            <Image src="Arrow_right.svg" height={50} width={50} alt="" />
          </button>
          <div className="bg-white flex justify-center items-center w-full h-[100px] relative">
            <Image
              src={
                isHovered
                  ? testimonials[activeIndex].imageUrl
                  : testimonials[activeIndex].companyLogoUrl
              }
              alt="Company Logo"
              objectFit={isHovered ? "cover" : "contain"}
              layout="fill"
            />
          </div>
        </div>
        <div className="flex md:hidden justify-between w-full">
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
                isHovered
                  ? testimonials[activeIndex].imageUrl
                  : testimonials[activeIndex].companyLogoUrl
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

export default TestimonialSlider;
