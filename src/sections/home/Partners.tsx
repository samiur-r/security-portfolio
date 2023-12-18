import Link from "next/link";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

const partners = [
  {
    id: 1,
    topImageSrc: "/partner-1.svg",
    headline: "AUDITORS",
    bodyText: "Improve your audit practices with SKELDUS.",
    hoverImageUrl: { url: "/auditors.jpg", width: 480, height: 378 },
  },
  {
    id: 2,
    topImageSrc: "/partner-2.svg",
    headline: "INDUSTRY ORGANIZATIONS",
    bodyText: "Strengthen compliance practices in your sector.",
    hoverImageUrl: {
      url: "/industry organization.jpg",
      width: 480,
      height: 378,
    },
  },
  {
    id: 3,
    topImageSrc: "/partner-3.svg",
    headline: "MANAGED SERVICE PROVIDERS",
    bodyText:
      "Discover our leading MSPs partners to provide security and compliance.",
    hoverImageUrl: {
      url: "/MSP.jpg",
      width: 480,
      height: 378,
    },
  },
];

const Partners = () => {
  return (
    <section>
      <div className="container xl:mx-auto px-5 xl:px-0 mb-4 xl:mb-16">
        <SectionHeader
          subHeadline="POWERFUL COLLABORATIONS"
          headline="Meet our Partners"
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 px-5">
        {partners.map((partner) => (
          <Card
            key={partner.id}
            topImageSrc={partner.topImageSrc}
            headline={partner.headline}
            bodyText={partner.bodyText}
            hoverImageUrl={partner.hoverImageUrl}
          />
        ))}
      </div>
      <div className="flex justify-center mt-16 xl:mt-20 tracking-widest">
        <Link href="/resources/partnerships" className="pb-2 border-b">
          Explore the strength of partnerships
        </Link>
      </div>
    </section>
  );
};

export default Partners;
