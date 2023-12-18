import React from "react";
import Image from "next/image";

type CertificateCardProps = {
  topText: string;
  topImage: {
    url: string;
    width: number;
    height: number;
  };
  bodyText: string;
  showBorderBottom: boolean;
};

const CertificateCard: React.FC<CertificateCardProps> = ({
  topText,
  topImage,
  bodyText,
  showBorderBottom,
}) => {
  return (
    <div className={`${showBorderBottom ? "xl:border-b xl:pb-16" : "xl:pt-16"}`}>
      <div className="px-5 flex flex-col gap-8">
        <div className="font-glancyr text-xl xl:text-3xl">{topText}</div>
        <Image
          src={topImage.url}
          alt=""
          width={topImage.width}
          height={topImage.height}
          className="object-contain"
        />
        <p>{bodyText}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
