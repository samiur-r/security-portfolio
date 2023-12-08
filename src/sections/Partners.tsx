import Card from "@/components/Card";

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
    <section className="mb-20">
      <div className="container md:mx-auto px-5 md:px-0 mb-4 md:mb-16">
        <h6 className="text-xl md:text-3xl font-glancyr">
          powerful collaborations
        </h6>
        <h2 className="font-glancyr font-bold text-3xl md:text-5xl max-w-2xl mt-5">
          Meet our Partners
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-5">
        {partners.map((partner) => (
          <Card
            key={partner.id}
            topImageSrc={partner.topImageSrc}
            headline={partner.headline}
            bodyText={partner.bodyText}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
