"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Testimonial {
  id: number;
  imageUrl: string;
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
    <div className="container mx-auto p-4 xl:p-0 grid grid-cols-1 xl:grid-cols-12 gap-4 items-center rounded-xl overflow-hidden">
      <div className="col-span-12 xl:col-span-11 flex flex-col xl:flex-row pt-5 xl:pt-0 bg-light-gray">
        <div className="relative min-h-[345px] min-w-[244px] xl:min-h-[345px] xl:min-w-[244px]">
          <Image
            src={testimonials[activeIndex].imageUrl}
            alt={testimonials[activeIndex].name}
            layout="fill"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 p-10 text-dark-blue">
          <p className="text-xl xl:text-3xl text-center xl:text-start">
            {testimonials[activeIndex].text}
          </p>
          <div className="flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-start gap-2">
            <p> {testimonials[activeIndex].name},</p>
            <p>{testimonials[activeIndex].title}</p>
          </div>
        </div>
      </div>

      <div className="col-span-12 xl:col-span-1 h-full flex flex-col xl:items-start items-center bg-light-gray">
        <div className="hidden xl:flex xl:flex-col xl:items-center justify-between h-full w-full pt-4">
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
                testimonials[
                  activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
                ].imageUrl
              }
              alt="Company Logo"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex xl:hidden justify-between w-full">
          <button
            onClick={prevTestimonial}
            className="text-black disabled:text-gray-400"
            aria-label="Previous"
          >
            <Image src="/Arrow_left.svg" height={50} width={50} alt="" />
          </button>
          <div className="bg-white flex justify-center items-center w-full">
            <Image
              src={
                testimonials[
                  activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
                ].imageUrl
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
            <Image src="/Arrow_right.svg" height={50} width={50} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
