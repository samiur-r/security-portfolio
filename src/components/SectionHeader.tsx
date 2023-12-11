import React from "react";

type SectionHeaderProps = {
  subHeadline: string;
  headline: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subHeadline,
  headline,
}) => {
  return (
    <div className="container md:mx-auto px-5 md:px-0 mb-4 md:mb-16">
      <p className="text-xl md:text-3xl font-glancyr">{subHeadline}</p>
      <h2 className="font-glancyr font-bold text-3xl md:text-5xl max-w-2xl mt-5">
        {headline}
      </h2>
    </div>
  );
};

export default SectionHeader;
