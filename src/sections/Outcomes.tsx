import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

const outcomes = [
  {
    id: 1,
    topText: "01",
    headline: "STREAMLINED SUCCESS",
    bodyText:
      "We empower you with task automation so you can focus on the real deal: your business.",
    ctaText: "Know more",
    backgroundColor: "#313D46",
    beforeImg: {
      url: "outcome-1.svg",
      width: 202,
      height: 202,
      isTop: true,
    },
    beforeImgHoveredUrl: "outcome-hover-1.svg",
  },
  {
    id: 2,
    topText: "02",
    headline: "CERTAINTY SIMPLIFIED",
    bodyText:
      "We eliminate your certification concerns with structured processes and transparency.",
    ctaText: "Know more",
    backgroundColor: "#313D46",
    beforeImg: {
      url: "outcome-2.svg",
      width: 272,
      height: 226,
      isTop: true,
    },
    beforeImgHoveredUrl: "outcome-hover-2.svg",
  },
  {
    id: 3,
    topText: "03",
    headline: "TIMELY RESULTS",
    bodyText:
      "We ensure timely certification: forget the traditional path to compliance; your next chance is just here.",
    ctaText: "Know more",
    backgroundColor: "#313D46",
    beforeImg: {
      url: "outcome-3.svg",
      width: 202,
      height: 202,
      isTop: true,
    },
    beforeImgHoveredUrl: "outcome-hover-3.svg",
  },
];

const Outcomes = () => {
  return (
    <section>
      <SectionHeader
        subHeadline="wHY SKELDUS?"
        headline="Elevated Compliance, 24/7 Assurance, Swift Outcomes."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 container px-5 lg:mx-auto">
        {outcomes.map((outcome) => (
          <Card
            key={outcome.id}
            topText={outcome.topText}
            headline={outcome.headline}
            bodyText={outcome.bodyText}
            ctaText={outcome.ctaText}
            backgroundColor={outcome.backgroundColor}
            beforeImg={outcome.beforeImg}
            beforeImgHoveredUrl={outcome.beforeImgHoveredUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Outcomes;
