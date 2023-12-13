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
    <div>
      <p className="text-xl lg:text-3xl font-glancyr">{subHeadline}</p>
      <h2 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-2xl mt-5">
        {headline}
      </h2>
    </div>
  );
};

export default SectionHeader;
