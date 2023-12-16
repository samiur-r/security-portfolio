import React from "react";
import Image from "next/image";
import colors from "@/styles/colors";

type CardProps = {
  backgroundColor: string;
  topImg: { url: string; width: number; height: number };
  headline: string;
  bodyText: string;
};

const KeyCard: React.FC<CardProps> = ({
  backgroundColor,
  topImg,
  headline,
  bodyText,
}) => {
  return (
    <div className={`p-5 rounded-lg bg-${backgroundColor}`}>
      <div className="flex justify-end mb-16">
        <Image
          src={topImg.url}
          alt=""
          width={topImg.width}
          height={topImg.height}
        />
      </div>
      <h2 className="font-glancyr font-bold text-3xl lg:text-5xl">
        {headline}
      </h2>
      <p>{bodyText}</p>
    </div>
  );
};

export default KeyCard;
