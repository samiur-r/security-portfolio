import Image from "next/image";
import Link from "next/link";
import React from "react";

type TopThumbnailCardType = {
  thumbnailImage: string;
  date: string;
  author: string;
  title: string;
  bodyText: string;
  cta: {
    text: string;
    url: string;
  };
};

const TopThumbnailCard: React.FC<TopThumbnailCardType> = ({
  thumbnailImage,
  date,
  author,
  title,
  bodyText,
  cta,
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-dark-blue max-w-md">
      <Image
        src={thumbnailImage}
        width={370}
        height={222}
        alt=""
        className="w-full object-cover"
      />
      <div className="grid grid-cols-1 gap-10 m-10">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center gap-2">
            <Image src="/time.svg" width={24} height={24} alt="" />
            <p className="font-glancyr mt-1">{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/pen.svg" width={24} height={24} alt="" />
            <p className="font-glancyr mt-1">{author}</p>
          </div>
        </div>
        <h3 className="text-xl xl:text-3xl font-glancyr mt-5">{title}</h3>
        <p>{bodyText}</p>
        <div>
          <Link href={cta.url} className="py-3 border-b border-light-gray">
            {cta.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopThumbnailCard;
