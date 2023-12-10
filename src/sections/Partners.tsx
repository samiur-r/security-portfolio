import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const partners = [
  {
    id: 1,
    topImageSrc: "/partner-1.svg",
    headline: "AUDITORS",
    bodyText: "Improve your audit practices with SKELDUS.",
    hoverImageUrl: "/auditors.jpg",
  },
  {
    id: 2,
    topImageSrc: "/partner-2.svg",
    headline: "INDUSTRY ORGANIZATIONS",
    bodyText: "Strengthen compliance practices in your sector.",
    hoverImageUrl: "/industry organization.jpg",
  },
  {
    id: 3,
    topImageSrc: "/partner-3.svg",
    headline: "MANAGED SERVICE PROVIDERS",
    bodyText:
      "Discover our leading MSPs partners to provide security and compliance.",
    hoverImageUrl: "/MSP.jpg",
  },
];

const Partners = () => {
  return (
    <section className="mb-20">
      <SectionHeader
        subHeadline="powerful collaborations"
        headline="Meet our Partners"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 px-5">
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
      <div className="flex justify-center mt-16 md:mt-20 tracking-widest">
        <Link href="#" className="pb-2 border-b">
          Explore the strength of partnerships
        </Link>
      </div>
    </section>
  );
};

export default Partners;
