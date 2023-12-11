import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

const products = [
  {
    id: 1,
    topImageSrc: "/product-1.svg",
    headline: "COMPLIANCE",
    bodyText:
      "Whether it’s standards or regulations, let us help you identify which path forward is best for you.  No more uncertainty – just structured steps to achieve and maintain compliance with ease with our Task Management.",
    ctaText: "Know more",
    backgroundColor: "#313D46",
    hoverImageUrl: { url: "/compliance.jpg", width: 480, height: 600 },
  },
  {
    id: 2,
    topImageSrc: "/product-2.svg",
    headline: "SECURITY",
    bodyText:
      "With compliance comes security, and with security comes ever-evolving risks. But staying secure is not a one-time deal to purchase and forget about. This is why we help you automate monitoring, and grant Controls Access to protect you from cyber threats.",
    ctaText: "Know more",
    backgroundColor: "#E8530E",
    hoverImageUrl: { url: "/security.jpg", width: 480, height: 600 },
  },
  {
    id: 3,
    topImageSrc: "/product-3.svg",
    headline: "TRUST",
    bodyText:
      "A business’s success is only as good as the trust it’s built on. Prove to your customers that you value their trust by showcasing your security posture through our Trust Center and providing top tier protection for their data.",
    ctaText: "Know more",
    backgroundColor: "#5F7E9F",
    hoverImageUrl: { url: "/trust.jpg", width: 480, height: 600 },
  },
];

const Products = () => {
  return (
    <section>
      <div className="pt-20 pb-10 md:pb-0">
        <SectionHeader
          subHeadline="HOW WE GET IT DONE"
          headline="Your road to total confidence with SKELDUS"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-5">
        {products.map((product) => (
          <Card
            key={product.id}
            topImageSrc={product.topImageSrc}
            headline={product.headline}
            bodyText={product.bodyText}
            ctaText={product.ctaText}
            backgroundColor={product.backgroundColor}
            hoverImageUrl={product.hoverImageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
