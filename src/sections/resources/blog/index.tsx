"use client";

import LeftThumbnailCard from "@/components/LeftThumbnailCard";
import React, { useState } from "react";

const articles = [
  {
    id: 1,
    imageUrl: "featured-article-1.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "Leaving Authentication Credentials in Public Code",
    bodyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit sed. Integer sodales vulputate tortor.<br /> <br />Federal cybersecurity initiatives, like the zero trust architecture strategy and modernized digital.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 2,
    imageUrl: "featured-article-2.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "Leaving Authentication Credentials in Public Code",
    bodyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit sed. Integer sodales vulputate tortor.<br /> <br />Federal cybersecurity initiatives, like the zero trust architecture strategy and modernized digital.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 3,
    imageUrl: "featured-article-3.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "Leaving Authentication Credentials in Public Code",
    bodyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit sed. Integer sodales vulputate tortor.<br /> <br />Federal cybersecurity initiatives, like the zero trust architecture strategy and modernized digital.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 4,
    imageUrl: "featured-article-4.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "Leaving Authentication Credentials in Public Code",
    bodyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit sed. Integer sodales vulputate tortor.<br /> <br />Federal cybersecurity initiatives, like the zero trust architecture strategy and modernized digital.",
    cta: { text: "view pdf", url: "#" },
  },
  {
    id: 5,
    imageUrl: "featured-article-3.svg",
    date: "08 NOV. 2023",
    author: "BY JANE DOE",
    title: "Leaving Authentication Credentials in Public Code",
    bodyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis magna. Duis eu ligula ac nulla congue tincidunt ullamcorper non massa. Nunc porta dui dolor, vestibulum condimentum diam suscipit sed. Integer sodales vulputate tortor.<br /> <br />Federal cybersecurity initiatives, like the zero trust architecture strategy and modernized digital.",
    cta: { text: "view pdf", url: "#" },
  },
];

const categoryOptions = ["Opt 1", "Opt 2"];
const monthOptions = ["Opt 1", "Opt 2"];

const Blog = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMore = () => {
    setVisibleItems((prevItems) => prevItems + 3);
  };

  return (
    <section className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-8">
        <h1 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-3xl">
          Featured articles
        </h1>
        <p className="max-w-xl">
          Discover the latest updates, news, and insights from the world of
          SKELDUS.
        </p>
      </div>
      <div>
        <p>Filter Blog articles by</p>
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-between items-center lg:items-start max-w-2xl mt-5">
          <select
            id="region"
            name="region"
            className="mt-2 block rounded-full py-1.5 pl-3 pr-5 bg-transparent border border-light-gray w-full"
          >
            <option>All Categories</option>
            {categoryOptions.map((option) => (
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
            <option>All Months</option>
            {monthOptions.map((option) => (
              <option key={option} className="text-dark-blue">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {articles.slice(0, visibleItems).map((article) => (
          <LeftThumbnailCard
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

export default Blog;
