"use client";

import Image from "next/image";
import TopThumbnailCard from "@/components/TopThumbnailCard";
import React, { useState } from "react";
import TestimonialSlider from "@/components/TestimonialSlider";
import GuideSlider from "@/components/GuideSlider";

const articles = [
  {
    id: 1,
    imageUrl: "article-1.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "Know more", url: "#" },
  },
  {
    id: 2,
    imageUrl: "article-2.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "Know more", url: "#" },
  },
  {
    id: 3,
    imageUrl: "article-3.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "Know more", url: "#" },
  },
  {
    id: 4,
    imageUrl: "article-4.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "Know more", url: "#" },
  },
];

const data = [
  {
    id: 1,
    imageUrl: "guide-slide-1.svg",
    text: "I can't emphasize enough the peace of mind and confidence that investing in robust cybersecurity measures has brought to our organization.",
    name: "John Wilson",
    title: "Chief Executive Officer, Harvard University",
  },
  {
    id: 2,
    imageUrl: "guide-slide-2.svg",
    text: "I can't emphasize enough the peace of mind and confidence that investing in robust cybersecurity measures has brought to our organization. 2",
    name: "John Wilson 2",
    title: "Chief Executive Officer, Harvard University 2",
  },
];

const Guides = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems((prevItems) => prevItems + 3);
  };

  return (
    <section className="flex flex-col gap-20 w-full">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex items-center gap-2">
          <Image src="/time.svg" width={24} height={24} alt="" />
          <p className="font-glancyr mt-1">08 NOV. 2023</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/pen.svg" width={24} height={24} alt="" />
          <p className="font-glancyr mt-1">BY JANE DOE</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/share.svg" width={22} height={25} alt="" />
          <p className="font-glancyr mt-1">SHARE</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/message-small.svg" width={25} height={25} alt="" />
          <Image src="/linkedin-small.svg" width={22} height={22} alt="" />
          <Image src="/x-small.svg" width={20} height={20} alt="" />
          <Image src="/fb-small.svg" width={20} height={20} alt="" />
        </div>
        <div className="flex items-center gap-2">
          <Image src="/download.svg" width={24} height={24} alt="" />
          <p className="font-glancyr mt-1">Download PDF</p>
        </div>
      </div>
      <h1 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-3xl">
        Leaving authentication credentials in public code
      </h1>
      <hr className="border-t border-light-gray"></hr>
      <GuideSlider guides={data} />
      <h3 className="font-glancyr text-xl lg:text-3xl">
        DEFEND CRITICAL INFRASTRUCTURE
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <p>
          Using the “Shield’s Up” campaign as an example, the National
          Cybersecurity Strategy explains that the country needs a predictable
          regulatory cybersecurity framework focused on security and operational
          continuity.
          <br />
          <br />
          Federal cybersecurity initiatives, like the zero trust architecture
          strategy and modernized digital infrastructures, can be models for
          critical. Specifically, the document outlines the following strategic:
        </p>
        <ul className="list-disc mx-5 lg:mx-0">
          <li>
            Standardized regulatory requirements across industries and
            incentivize cybersecurity investments{" "}
          </li>
          <li>
            Coordination between the critical infrastructure owners/operators
            and CISA
          </li>
          <li>
            Federal Cybersecurity Centers for a single point of contact across
            government agencies
          </li>
          <li>
            Clear guidance for private sector entities that need support during
            and after cyber incidents
          </li>
          <li> Modernizing federal systems with zero trust principles</li>
        </ul>
      </div>
      <h3 className="font-glancyr text-xl lg:text-3xl">
        DISRUPT AND DISMANTLE THREAT ACTORS
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <p>
          The National Cybersecurity Strategy builds on the successes of
          previous activities. For sustained and effective adversary disruption,
          the document outlines the following strategic objectives: Developing
          technical and organizational resources that make criminal cyber
          activity unprofitable and nation-state activities ineffective using
          virtual collaboration platforms for more routine.:
        </p>
        <ul className="list-disc mx-5 lg:mx-0">
          <li>
            Creating processes for sharing warning, technical indicators, and
            threat context across government and private partners
          </li>
          <li>
            Enacting an implementing a risk-based approach to cybersecurity
            across Infrastructure-as-a-Service (SaaS) providers
          </li>
          <li>
            Engaging in disruption campaigns to undermine ransomware’s
            profitability
          </li>
        </ul>
      </div>
      <hr className="border-t border-light-gray"></hr>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {articles.slice(0, visibleItems).map((article) => (
          <TopThumbnailCard
            key={article.id}
            thumbnailImage={article.imageUrl}
            date={article.date}
            author={article.author}
            title={article.title}
            bodyText={article.bodyText}
            cta={article.cta}
          />
        ))}
      </div>
      {visibleItems < articles.length && (
        <div className="flex justify-center tracking-widest">
          <button className="pb-2 border-b" onClick={loadMore}>
            load more
          </button>
        </div>
      )}
    </section>
  );
};

export default Guides;
