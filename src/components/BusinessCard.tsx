import React from "react";

type BusinessCardProps = {
  topText: string;
  headline: string;
  bodyText: string;
  borderRight?: boolean;
  borderBottom?: boolean;
};

const BusinessCard: React.FC<BusinessCardProps> = ({
  topText,
  headline,
  bodyText,
  borderRight,
  borderBottom,
}) => {
  return (
    <div
      className={`px-6 py-12 border-r  border-t border-l border-light-gray ${
        borderRight ? "border-r" : "lg:border-r-0"
      } ${borderBottom && "border-b"}`}
    >
      <div className="">{topText}</div>
      <h2 className="text-3xl font-glancyr h-16 mb-5 mt-8">{headline}</h2>
      <p className="h-20" dangerouslySetInnerHTML={{ __html: bodyText }}></p>
    </div>
  );
};

export default BusinessCard;
