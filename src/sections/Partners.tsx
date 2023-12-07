import Card from "@/components/Card";
import React from "react";

const partners = [
  {
    id: 1,
    topImageSrc: "/partner-1.svg",
    headline: "AUDITORS",
    bodyText: "Improve your audit practices with SKELDUS.",
  },
  {
    id: 2,
    topImageSrc: "/partner-2.svg",
    headline: "INDUSTRY ORGANIZATIONS",
    bodyText: "Strengthen compliance practices in your sector.",
  },
  {
    id: 3,
    topImageSrc: "/partner-3.svg",
    headline: "MANAGED SERVICE PROVIDERS",
    bodyText:
      "Discover our leading MSPs partners to provide security and compliance.",
  },
];

const Partners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-5 container md:mx-auto">
      {partners.map((partner) => (
        <Card
          key={partner.id}
          topImageSrc={partner.topImageSrc}
          headline={partner.headline}
          bodyText={partner.bodyText}
        />
      ))}
    </div>
  );
};

export default Partners;
