import React from "react";
import Image from "next/image";


type LeftThumbnailCardType = {
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

const LeftThumbnailCard: React.FC<LeftThumbnailCardType> = ({
  thumbnailImage,
  date,
  author,
  title,
  bodyText,
}) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
      <div>
        <Image
          src={thumbnailImage}
          width={580}
          height={428}
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div className="xl:col-span-2 my-2">
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex items-center gap-2">
            <Image src="/time.svg" width={24} height={24} alt="" />
            <p className="font-glancyr mt-1">{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/pen.svg" width={24} height={24} alt="" />
            <p className="font-glancyr mt-1">{author}</p>
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
        </div>
        <h3 className="text-xl xl:text-3xl font-glancyr mt-10 max-w-md">
          {title}
        </h3>
        <p
          className="mt-5 max-w-lg"
          dangerouslySetInnerHTML={{ __html: bodyText }}
        ></p>
      </div>
    </div>
  );
};

export default LeftThumbnailCard;
