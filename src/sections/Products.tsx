import Card from "@/components/Card";

const products = [
  {
    id: 1,
    topImageSrc: "/product-1.svg",
    headline: "COMPLIANCE",
    bodyText:
      "Whether it’s standards or regulations, let us help you identify which path forward is best for you.  No more uncertainty – just structured steps to achieve and maintain compliance with ease with our Task Management.",
    ctaText: "Know more",
    backgroundColor: "#313D46",
  },
  {
    id: 2,
    topImageSrc: "/product-2.svg",
    headline: "SECURITY",
    bodyText:
      "With compliance comes security, and with security comes ever-evolving risks. But staying secure is not a one-time deal to purchase and forget about. This is why we help you automate monitoring, and grant Controls Access to protect you from cyber threats.",
    ctaText: "Know more",
    backgroundColor: "#E8530E",
  },
  {
    id: 3,
    topImageSrc: "/product-3.svg",
    headline: "TRUST",
    bodyText:
      "A business’s success is only as good as the trust it’s built on. Prove to your customers that you value their trust by showcasing your security posture through our Trust Center and providing top tier protection for their data.",
    ctaText: "Know more",
    backgroundColor: "#5F7E9F",
  },
];

const Products = () => {
  return (
    <section>
      <div className="container md:mx-auto px-5 md:px-0 mb-4 md:mb-16">
        <h6 className="text-xl md:text-3xl font-glancyr">HOW WE GET IT DONE</h6>
        <h2 className="font-glancyr font-bold text-3xl md:text-5xl max-w-2xl mt-5">
          Your road to total confidence with SKELDUS
        </h2>
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
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
