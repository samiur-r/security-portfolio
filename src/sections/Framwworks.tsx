import Card from "@/components/Card";
import React from "react";

const frameworks = [
  {
    id: 1,
    headline: "STANDARDS",
    bodyText:
      "Explore globally recognized standards such as ISO 27001 and SOC2 and get certified to demonstrate cybersecurity excellence.",
    backgroundColor: "#313D46",
  },
  {
    id: 2,
    headline: "REGULATIONS",
    bodyText:
      "Become compliant with regulations like HIPAA, ensuring the highest standards for safeguarding protected information.",
    backgroundColor: "#E8530E",
  },
  {
    id: 3,
    headline: "CUSTOMIZED LOCAL FRAMEWORKS",
    bodyText:
      "Craft tailored frameworks that fit your business’ goals and unique requirements. ",
    backgroundColor: "#5F7E9F",
  },
];

const Frameworks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-5 container md:mx-auto">
      {frameworks.map((framework) => (
        <Card
          key={framework.id}
          headline={framework.headline}
          bodyText={framework.bodyText}
          backgroundColor={framework.backgroundColor}
        />
      ))}
    </div>
  );
};

export default Frameworks;
