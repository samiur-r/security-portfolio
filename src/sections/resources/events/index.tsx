"use client";

import InsightCard from "@/components/InsightCard";
import TopThumbnailCard from "@/components/TopThumbnailCard";
import React, { useState } from "react";

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
  {
    id: 5,
    imageUrl: "article-5.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "Know more", url: "#" },
  },
  {
    id: 6,
    imageUrl: "article-6.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "Know more", url: "#" },
  },
  {
    id: 7,
    imageUrl: "article-5.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "Know more", url: "#" },
  },
];

const insights = [
  {
    id: 1,
    imageUrl: "/blog.png",
    date: "08 nOV. 2023",
    author: "by jane doe",
    headline: "Leaving Authentication Credentials in Public Code",
    bodyText:
      "Researchers from security firm GitGuardian this week reported finding almost 4,000 unique secrets",
    ctaText: "Know more",
  },
  {
    id: 2,
    imageUrl: "/white-paper.png",
    date: "08 nOV. 2023",
    author: "by nicolas smith",
    headline: "US Harbors Prolific Malicious Link Shortening Service",
    bodyText:
      "In an age when most domain registrars are redacting customer information from publicly",
    ctaText: "Know more",
  },
];

const Events = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prevItems) => prevItems + 3);
  };

  return (
    <section className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-8">
        <h1 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-3xl">
          Latest events
        </h1>
        <p className="max-w-xl">
          Discover the latest updates, news, and insights from the world of
          SKELDUS.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
        {insights.map((insight) => (
          <InsightCard
            key={insight.id}
            imageUrl={insight.imageUrl}
            date={insight.date}
            author={insight.author}
            headline={insight.headline}
            bodyText={insight.bodyText}
            ctaText={insight.ctaText}
            ctaOutlined={false}
          />
        ))}
      </div>
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

export default Events;
