"use client";

import React from "react";
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
  backgroundColor = "white",
  topImageSrc,
  topImageAlt = "Top Image",
  topText,
  headline,
  bodyText,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${backgroundColor}`}>
      {topImageSrc && (
        <div className="relative w-full h-60">
          <Image
            src={topImageSrc}
            alt={topImageAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      )}
      {topText && (
        <div className="text-center text-lg font-semibold">{topText}</div>
      )}
      <h2 className="text-xl font-bold my-2">{headline}</h2>
      <p className="text-base">{bodyText}</p>
      {ctaText && (
        <button
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          onClick={onCtaClick}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default Card;
