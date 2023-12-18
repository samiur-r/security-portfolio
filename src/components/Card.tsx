"use client";

import React, { useState } from "react";
import Image from "next/image";

import colors from "@/styles/colors";

type Brand = {
  id: number;
  title: string;
  img: { src: string; width: number; height: number };
};

type CardProps = {
  backgroundColor?: string;
  topImageSrc?: string;
  topImageAlt?: string;
  topText?: string;
  headline: string;
  bodyText?: string;
  ctaText?: string;
  beforeImg?: { url: string; height: number; width: number; isTop?: boolean };
  beforeImgHoveredUrl?: string;
  hoverImageUrl?: { url: string; height: number; width: number };
  changeBgColorOnHover?: boolean;
  onCtaClick?: () => void;
  brands?: Brand[];
};

const Card: React.FC<CardProps> = ({
  backgroundColor,
  topImageSrc,
  topImageAlt = "Top Image",
  topText,
  headline,
  bodyText,
  ctaText,
  beforeImg,
  beforeImgHoveredUrl,
  hoverImageUrl,
  changeBgColorOnHover,
  onCtaClick,
  brands,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prevItems) => prevItems + 3);
  };

  const hoverStyle = {
    backgroundColor:
      isHovered && !hoverImageUrl && changeBgColorOnHover !== false
        ? colors.brightOrange
        : colors[backgroundColor as keyof typeof colors] || "transparent",
    transition: "background-color 300ms",
  };

  return (
    <div
      className={`relative ${
        beforeImg ? "mt-[185px] xl:mt-[175px]" : "overflow-hidden "
      } ${backgroundColor ? `rounded-lg` : "border"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...hoverStyle }}
    >
      {isHovered && hoverImageUrl ? (
        <>
          <div className="hidden xl:block">
            <Image
              src={hoverImageUrl.url}
              alt="Hover Image"
              layout="fill"
              className={`object-cover ${
                backgroundColor ? `rounded-lg` : "border"
              }`}
            />
          </div>
          <div className="xl:hidden">
            <Image
              src={hoverImageUrl.url}
              alt="Hover Image"
              width={hoverImageUrl.width}
              height={hoverImageUrl.height}
              className={`object-cover ${
                backgroundColor ? `rounded-lg` : "border"
              }`}
            />
          </div>
        </>
      ) : (
        <>
          {beforeImg && (
            <div
              className={`flex justify-end pr-8 absolute right-5 ${
                beforeImg.isTop ? "z-10 -top-[150px]" : "-z-10 -top-[170px]"
              }`}
            >
              <Image
                src={
                  isHovered && beforeImgHoveredUrl
                    ? beforeImgHoveredUrl
                    : beforeImg.url
                }
                width={beforeImg.width}
                height={beforeImg.height}
                alt=""
                className="object-contain"
              />
            </div>
          )}
          <div className="px-4 py-12 rounded-lg shadow-md transition-all duration-300">
            {topImageSrc && (
              <div className="h-12 w-12 relative">
                <Image
                  src={topImageSrc}
                  alt={topImageAlt}
                  layout="fill"
                  className="object-contain"
                />
              </div>
            )}
            {topText && <div className="">{topText}</div>}
            <h2 className="text-3xl font-glancyr h-16 mb-5 mt-8 max-w-xs">
              {headline}
            </h2>
            {bodyText && (
              <p
                className={`text-base ${ctaText && !topText ? "h-40" : "h-20"}`}
              >
                {bodyText}
              </p>
            )}
            {ctaText && (
              <button className="pb-2 border-b mt-5" onClick={onCtaClick}>
                {ctaText}
              </button>
            )}
          </div>
        </>
      )}
      {brands && (
        <div className="px-8">
          <hr className="border-t border-light-gray"></hr>
          <div className="grid grid-cols-2 gap-20 py-16">
            {brands.slice(0, visibleItems).map((brand) => (
              <div key={brand.id} className="flex flex-col items-center gap-5">
                <Image
                  src={brand.img.src}
                  alt=""
                  width={brand.img.width}
                  height={brand.img.height}
                />
                <p className="">{brand.title}</p>
              </div>
            ))}
          </div>
          {visibleItems < brands.length && (
            <div className="flex justify-center tracking-widest mb-16">
              <button className="pb-2 border-b" onClick={loadMore}>
                load more
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
