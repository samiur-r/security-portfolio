"use client";

import TopThumbnailCard from "@/components/TopThumbnailCard";
import React, { useState } from "react";

const articles = [
  {
    id: 1,
    imageUrl: "/article-1.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 2,
    imageUrl: "/article-2.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 3,
    imageUrl: "/article-3.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 4,
    imageUrl: "/article-4.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 5,
    imageUrl: "/article-5.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 6,
    imageUrl: "/article-6.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 7,
    imageUrl: "/article-5.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "TITLE OF THE ARTICLE HERE",
    bodyText:
      "Small description of the article will go here if too or extremely long.",
    cta: { text: "view pdf", url: "#" },
  },
];

const Press = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prevItems) => prevItems + 3);
  };

  return (
    <section className="my-12 px-5 container mx-auto flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-8">
        <h1 className="font-glancyr font-bold text-3xl xl:text-5xl max-w-3xl">
          Stay informed
        </h1>
        <p className="max-w-xl">
          Discover the latest updates, news, and articles from the world of
          SKELDUS.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
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

export default Press;
