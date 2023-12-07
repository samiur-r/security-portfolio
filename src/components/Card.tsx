"use client";

import React, { useEffect } from "react";
import Image from "next/image";

type CardProps = {
  backgroundColor?: string;
  topImageSrc?: string;
  topImageAlt?: string;
  topText?: string;
  headline: string;
  bodyText: string;
  ctaText?: string;
  onCtaClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  backgroundColor,
  topImageSrc,
  topImageAlt = "Top Image",
  topText,
  headline,
  bodyText,
  ctaText,
  onCtaClick,
}) => {
  useEffect(() => {
    console.log(backgroundColor);
  }, [backgroundColor]);
  return (
    <div
      className={`px-4 py-12 rounded-lg shadow-md ${
        backgroundColor ? `bg-[${backgroundColor}]` : "bg-transparent"
      } ${backgroundColor ? "rounded-lg" : "border"}`}
    >
      {topImageSrc && (
        <div className="h-12 w-12 relative">
          <Image
            src={topImageSrc}
            alt={topImageAlt}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
      {topText && (
        <div className="">{topText}</div>
      )}
      <h2 className="text-3xl font-glancyr h-16 mb-5 mt-8 max-w-xs">{headline}</h2>
      <p className={`text-bas ${ctaText && !topText ? 'h-32' : 'h-auto'}`}>{bodyText}</p>
      {ctaText && (
        <button className="pb-2 border-b mt-5" onClick={onCtaClick}>
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default Card;
