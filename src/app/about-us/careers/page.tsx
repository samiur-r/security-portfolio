"use client";

import React, { useState } from "react";
import Image from "next/image";

import Card from "@/components/Card";
import BusinessCard from "@/components/BusinessCard";

const careers = [
  {
    id: 1,
    topText: "08 NOV. 2023, NEW YORK",
    headline: "MARKETING COORDINATOR",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
  {
    id: 2,
    topText: "08 NOV. 2023, NEW YORK",
    headline: "CALL CENTER AGENT",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
  {
    id: 3,
    topText: "08 NOV. 2023, LOS ANGELES",
    headline: "CUSTOMER CARE OFFICER",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
  {
    id: 4,
    topText: "08 NOV. 2023, NEW YORK",
    headline: "MARKETING COORDINATOR",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
  {
    id: 5,
    topText: "08 NOV. 2023, NEW YORK",
    headline: "CALL CENTER AGENT",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
  {
    id: 6,
    topText: "08 NOV. 2023, LOS ANGELES",
    headline: "CUSTOMER CARE OFFICER",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
  {
    id: 7,
    topText: "08 NOV. 2023, NEW YORK",
    headline: "MARKETING COORDINATOR",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
  {
    id: 8,
    topText: "08 NOV. 2023, NEW YORK",
    headline: "CALL CENTER AGENT",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
  {
    id: 9,
    topText: "08 NOV. 2023, LOS ANGELES",
    headline: "CUSTOMER CARE OFFICER",
    ctaText: "Know more",
    backgroundColor: "darkBlue",
  },
];

const locations = [
  {
    id: 1,
    topText: "01",
    headline: "NEW YORK, USA",
    bodyText:
      "<b>A.</b> 456 Park Avenue, New York, NY 10022<br /><b>B.</b> 929-253-2447<br /><b>C.</b> ny@skeldus.com",
  },
  {
    id: 2,
    topText: "02",
    headline: "BEIRUT, LEBANON",
    bodyText:
      "<b>A.</b> 456 Park Avenue, New York, NY 10022<br /><b>B.</b> 929-253-2447<br /><b>C.</b> ny@skeldus.com",
  },
];

const Careers = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prevItems) => prevItems + 3);
  };

  return (
    <section className="my-12 px-5 flex flex-col gap-20">
      <div className="container mx-auto">
        <h2 className="font-glancyr font-bold text-3xl xl:text-5xl">
          Are you a dynamic, forward-thinking, and innovative person? Then your
          place is within the SKELDUS team.
        </h2>
        <p className="max-w-2xl mt-8">
          Explore our current job openings and take the next step in shaping the
          future of digital protection with us.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8 px-5 xl:px-0">
        {careers.slice(0, visibleItems).map((career) => (
          <Card
            key={career.id}
            topText={career.topText}
            headline={career.headline}
            ctaText={career.ctaText}
            backgroundColor={career.backgroundColor}
          />
        ))}
      </div>
      {visibleItems < careers.length && (
        <div className="flex justify-center tracking-widest">
          <button className="pb-2 border-b" onClick={loadMore}>
            load more
          </button>
        </div>
      )}
      <div className="container mx-auto flex flex-col gap-10">
        <h3 className="text-xl xl:text-3xl font-glancyr">Locations</h3>
        <p className="max-w-lg">
          We're a globally distributed team with colleagues spanning the world
          and presence in:
        </p>
      </div>
      <Image
        src="/map.svg"
        alt="map"
        width={1300}
        height={603}
        className="object-contain w-full"
      />
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {locations.map((item) => (
          <BusinessCard
            key={item.id}
            topText={item.topText}
            headline={item.headline}
            bodyText={item.bodyText}
            borderRight={item.id % 2 === 0}
            borderBottom={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Careers;
