import InsightCard from "@/components/InsightCard";

const insights = [
  {
    id: 1,
    imageUrl: "/blog.svg",
    date: "08 nOV. 2023",
    author: "by jane doe",
    headline: "Leaving Authentication Credentials in Public Code",
    bodyText:
      "Researchers from security firm GitGuardian this week reported finding almost 4,000 unique secrets",
    ctaText: "Read our latest blogs",
  },
  {
    id: 2,
    imageUrl: "/white-paper.svg",
    date: "08 nOV. 2023",
    author: "by nicolas smith",
    headline: "US Harbors Prolific Malicious Link Shortening Service",
    bodyText:
      "In an age when most domain registrars are redacting customer information from publicly",
    ctaText: "Read our latest whitepapers",
  },
];

const Insights = () => {
  return (
    <section className="mb-16">
      <div className="container md:mx-auto px-5 md:px-0 mb-4 md:mb-16">
        <h6 className="text-xl md:text-3xl font-glancyr">
          Explore Our Insights
        </h6>
        <h2 className="font-glancyr font-bold text-3xl md:text-5xl max-w-2xl mt-5">
          Our Insightful Knowledge Base
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5">
        {insights.map((insight) => (
          <InsightCard
            key={insight.id}
            imageUrl={insight.imageUrl}
            date={insight.date}
            author={insight.author}
            headline={insight.headline}
            bodyText={insight.bodyText}
            ctaText={insight.ctaText}
          />
        ))}
      </div>
    </section>
  );
};

export default Insights;
