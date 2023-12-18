"use client";

import React, { useState } from "react";
import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";

const regionOptions = ["Opt 1", "Opt 2"];
const industryOptions = ["Opt 1", "Opt 2"];
const companyOptions = ["Opt 1", "Opt 2"];

const testimonialsData = [
  {
    id: 1,
    imageUrl: "/testimonial-person-1.svg",
    text: "I can't emphasize enough the peace of mind and confidence that investing in robust cybersecurity measures has brought to our organization.",
    name: "John Wilson",
    title: "Chief Executive Officer, Harvard University",
  },
  {
    id: 2,
    imageUrl: "/testimonial-company-1.svg",
    text: "I can't emphasize enough the peace of mind and confidence that investing in robust cybersecurity measures has brought to our organization. 2",
    name: "John Wilson 2",
    title: "Chief Executive Officer, Harvard University 2",
  },
];

const ClientStories = () => {
  return (
    <section className="my-12 px-5 container mx-auto flex flex-col gap-16 w-full">
      <div>
        <p>Filter Blog articles by</p>
        <div className="flex flex-col xl:flex-row gap-10 xl:justify-between items-center xl:items-start mt-5">
          <select
            id="region"
            name="region"
            className="mt-2 block rounded-full py-1.5 pl-3 pr-5 bg-transparent border border-light-gray w-full"
          >
            <option>Region/Sub-region</option>
            {regionOptions.map((option) => (
              <option key={option} className="text-dark-blue">
                {option}
              </option>
            ))}
          </select>
          <select
            id="industry"
            name="industry"
            className="mt-2 block rounded-full py-1.5 pl-3 pr-5 bg-transparent border border-light-gray w-full"
          >
            <option>Industry</option>
            {industryOptions.map((option) => (
              <option key={option} className="text-dark-blue">
                {option}
              </option>
            ))}
          </select>
          <select
            id="company"
            name="company"
            className="mt-2 block rounded-full py-1.5 pl-3 pr-5 bg-transparent border border-light-gray w-full"
          >
            <option>Company Size</option>
            {companyOptions.map((option) => (
              <option key={option} className="text-dark-blue">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="flex items-center gap-2">
          <Image src="/world.svg" width={24} height={24} alt="" />
          <p className="font-glancyr mt-1">UNITED STATES</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/edu-icon.svg" width={22} height={22} alt="" />
          <p className="font-glancyr mt-1">EDUCATION</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/group-add.svg" width={26} height={26} alt="" />
          <p className="font-glancyr mt-1">{">1000"}</p>
        </div>
      </div>
      <h1 className="font-glancyr font-bold text-3xl xl:text-5xl max-w-3xl">
        The Harvard Story
      </h1>
      <hr className="border-t border-light-gray"></hr>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
          sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper
          non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit
          sed. Integer sodales vulputate tortor, eget efficitur ante volutpat
          ornare. Aliquam sit amet dolor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
          sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper
          non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit
          sed. Integer sodales vulputate tortor, eget efficitur ante volutpat
          ornare. Aliquam sit amet dolor.
        </p>
      </div>
      <h3 className="font-glancyr text-xl xl:text-3xl">
        Neque porro quisquam est qui
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
          sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper
          non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit
          sed. Integer sodales vulputate tortor, eget efficitur ante volutpat
          ornare. Aliquam sit amet dolor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
          sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper
          non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit
          sed. Integer sodales vulputate tortor, eget efficitur ante volutpat
          ornare. Aliquam sit amet dolor.
        </p>
      </div>
      <div>
        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </section>
  );
};

export default ClientStories;
