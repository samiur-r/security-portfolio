import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

const frameworks = [
  {
    id: 1,
    headline: "STANDARDS",
    bodyText:
      "Explore globally recognized standards such as ISO 27001 and SOC2 and get certified to demonstrate cybersecurity excellence.",
    backgroundColor: "#313D46",
    beforeImg: { url: "1.svg", width: 85, height: 175 },
  },
  {
    id: 2,
    headline: "REGULATIONS",
    bodyText:
      "Become compliant with regulations like HIPAA, ensuring the highest standards for safeguarding protected information.",
    backgroundColor: "#E8530E",
    beforeImg: { url: "2.svg", width: 144, height: 179 },
  },
  {
    id: 3,
    headline: "CUSTOMIZED LOCAL FRAMEWORKS",
    bodyText:
      "Craft tailored frameworks that fit your business’ goals and unique requirements. ",
    backgroundColor: "#5F7E9F",
    beforeImg: { url: "3.svg", width: 146, height: 183 },
  },
];

const Frameworks = () => {
  return (
    <section className="mb-20">
      <div className="container md:mx-auto px-5 md:px-0 mb-4 md:mb-16">
        <h6 className="text-xl md:text-3xl font-glancyr">
          your needs, our expertise
        </h6>
        <h2 className="font-glancyr font-bold text-3xl md:text-5xl max-w-2xl mt-5">
          Our Frameworks, For Your Regional Preference
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-5">
        {frameworks.map((framework) => (
          <Card
            key={framework.id}
            headline={framework.headline}
            bodyText={framework.bodyText}
            backgroundColor={framework.backgroundColor}
            beforeImg={framework.beforeImg}
          />
        ))}
      </div>
      <div className="flex justify-center mt-16 md:mt-20 tracking-widest">
        <Link href="#" className="pb-2 border-b">Explore all our frameworks</Link>
      </div>
    </section>
  );
};

export default Frameworks;
