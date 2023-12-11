import InsightCard from "@/components/InsightCard";
import SectionHeader from "@/components/SectionHeader";

const insights = [
  {
    id: 1,
    imageUrl: "/blog.png",
    date: "08 nOV. 2023",
    author: "by jane doe",
    headline: "Leaving Authentication Credentials in Public Code",
    bodyText:
      "Researchers from security firm GitGuardian this week reported finding almost 4,000 unique secrets",
    ctaText: "Read our latest blogs",
  },
  {
    id: 2,
    imageUrl: "/white-paper.png",
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
    <section className="mb-20">
      <SectionHeader
        subHeadline="Explore Our Insights"
        headline="Our Insightful Knowledge Base"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5 md:gap-0">
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
