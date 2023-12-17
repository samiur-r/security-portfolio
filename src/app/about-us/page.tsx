import React from "react";
import Image from "next/image";
import KeyCard from "@/components/KeyCard";
import Card from "@/components/Card";

const insights = [
  {
    id: 1,
    headline: "2023",
    bodyText: "Founded",
    backgroundColor: "dark-blue",
    topImg: { url: "insight-1.svg", width: 45, height: 60 },
  },
  {
    id: 2,
    headline: "40+",
    bodyText: "Employees",
    backgroundColor: "bright-orange",
    topImg: { url: "insight-2.svg", width: 53, height: 61 },
  },
  {
    id: 3,
    headline: "120+",
    bodyText: "Integrations",
    backgroundColor: "light-blue",
    topImg: { url: "insight-3.svg", width: 56, height: 53 },
  },
  {
    id: 4,
    headline: "$M",
    bodyText: "In funding",
    backgroundColor: "black",
    topImg: { url: "insight-4.svg", width: 64, height: 64 },
  },
];

const promises = [
  {
    id: 1,
    topImageSrc: "/promise-1.svg",
    headline: "TRANSPARENCY",
    bodyText:
      "At SKELDUS, transparency is not just a principle; it's the genuine way we build trust at every turn. We are committed to ethical and honest practices in everything we do. ",
  },
  {
    id: 2,
    topImageSrc: "/promise-2.svg",
    headline: "SIMPLICITY",
    bodyText:
      "Compliance may seem complex, but with SKELDUS, simplicity reigns. Our straightforward approach ensures that compliance is not a daunting task for you.",
  },
  {
    id: 3,
    topImageSrc: "/promise-3.svg",
    headline: "AUTOMATION",
    bodyText:
      "Compliance may seem complex, but with SKELDUS, simplicity reigns. Our straightforward approach ensures that compliance is not a daunting task for you.",
  },
];

const OurStory = () => {
  return (
    <section
      className="my-12 px-5 flex flex-col gap-20 bg-no-repeat bg-contain bg-left-top"
      style={{
        backgroundImage: `url(/menu-bg.svg)`,
      }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <h2 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-3xl mt-5">
            Driving Compliance and Trust? Mission Accomplished. 
          </h2>
          <h3 className="text-xl lg:text-3xl font-glancyr">SKELDUS story</h3>
          <div className="max-w-xl">
            <p>
              Once upon a time, in today's digital landscape, the world started
              waking up to the importance of being compliant: many fast-growing
              companies faced a pressing need to become compliant, ensure
              security, and, at the same time, focus on their core business.
              Yet, they knew that this could be daunting, costly, and
              time-consuming.
              <br />
              <br />
              <b>In this context, SKELDUS came to life.</b>
            </p>
          </div>
        </div>
        <div className="mt-16 lg:mt-0 flex items-center justify-center lg:justify-start">
          <Image
            src="about-us-hero.svg"
            alt=""
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-16">
        <p>
          SKELDUS. Does the name ring a bell? It should. Our identity draws from
          the Scandinavian word 'SKELDUS,' meaning 'shield,' and embodies the
          idea of being a safeguard for today's businesses.
        </p>
        <p>
          Think of it like this: our modern-day shield is here to protect and
          serve your precious business. With SKELDUS, we're offering you
          compliance, security, and trust, all rolled into one.
        </p>
      </div>
      <h3 className="container mx-auto text-xl lg:text-3xl font-glancyr">SKELDUS IN NUMBERS</h3>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {insights.map((insight) => (
          <KeyCard
            key={insight.id}
            headline={insight.headline}
            bodyText={insight.bodyText}
            topImg={insight.topImg}
            backgroundColor={insight.backgroundColor}
          />
        ))}
      </div>
      <div className="container mx-auto flex flex-col gap-10">
        <h3 className="text-xl lg:text-3xl font-glancyr">
          The SKELDUS Promise to You
        </h3>
        <p className="max-w-lg">
          At SKELDUS, our mission goes hand in hand with our core values and
          principles.
          <br />
          Here's a glimpse into what we hold dear:
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-0">
        {promises.map((promise) => (
          <Card
            key={promise.id}
            topImageSrc={promise.topImageSrc}
            headline={promise.headline}
            bodyText={promise.bodyText}
          />
        ))}
      </div>
    </section>
  );
};

export default OurStory;
