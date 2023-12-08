import Card from "@/components/Card";

const outcomes = [
  {
    id: 1,
    topText: "01",
    headline: "STREAMLINED SUCCESS",
    bodyText:
      "We empower you with task automation so you can focus on the real deal: your business.",
    ctaText: "Know more",
    backgroundColor: "#313D46",
  },
  {
    id: 2,
    topText: "02",
    headline: "CERTAINTY SIMPLIFIED",
    bodyText:
      "We eliminate your certification concerns with structured processes and transparency.",
    ctaText: "Know more",
    backgroundColor: "#313D46",
  },
  {
    id: 3,
    topText: "03",
    headline: "TIMELY RESULTS",
    bodyText:
      "We ensure timely certification: forget the traditional path to compliance; your next chance is just here.",
    ctaText: "Know more",
    backgroundColor: "#313D46",
  },
];

const Outcomes = () => {
  return (
    <section>
      <div className="container md:mx-auto px-5 md:px-0 mb-4 md:mb-16">
        <h6 className="text-xl md:text-3xl font-glancyr">wHY SKELDUS?</h6>
        <h2 className="font-glancyr font-bold text-3xl md:text-5xl max-w-2xl mt-5">
          Elevated Compliance, 24/7 Assurance, Swift Outcomes.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 container px-5 md:mx-auto">
        {outcomes.map((outcome) => (
          <Card
            key={outcome.id}
            topText={outcome.topText}
            headline={outcome.headline}
            bodyText={outcome.bodyText}
            ctaText={outcome.ctaText}
            backgroundColor={outcome.backgroundColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Outcomes;
