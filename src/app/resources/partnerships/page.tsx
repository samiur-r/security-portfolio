import Card from "@/components/Card";

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

const brands = [
  {
    id: 1,
    title: "Google",
    img: { src: "/google.svg", width: 121, height: 40 },
  },
  {
    id: 2,
    title: "Paypal",
    img: { src: "/paypal.svg", width: 140, height: 37 },
  },
  { id: 3, title: "Visa", img: { src: "/visa.svg", width: 93, height: 30 } },
  {
    id: 4,
    title: "Google",
    img: { src: "/google.svg", width: 121, height: 40 },
  },
  {
    id: 5,
    title: "Windows",
    img: { src: "/windows.svg", width: 140, height: 36 },
  },
  { id: 6, title: "Visa", img: { src: "/visa.svg", width: 93, height: 30 } },
  {
    id: 7,
    title: "Paypal",
    img: { src: "/paypal.svg", width: 140, height: 37 },
  },
];

const Partnerships = () => {
  return (
    <section className="my-12 px-5 flex flex-col gap-20 w-full">
      <div className="container mx-auto flex flex-col gap-8">
        <p className="font-glancyr text-xl xl:text-3xl ">
          POWERFUL COLLABORATIONS
        </p>
        <h1 className="font-glancyr font-bold text-3xl xl:text-5xl max-w-3xl">
          Meet our Partners
        </h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 px-5">
        {partners.map((partner) => (
          <div key={partner.id}>
            <Card
              topImageSrc={partner.topImageSrc}
              headline={partner.headline}
              bodyText={partner.bodyText}
              brands={brands}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partnerships;
