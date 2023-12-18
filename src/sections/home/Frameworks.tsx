import Link from "next/link";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

const frameworks = [
  {
    id: 1,
    headline: "STANDARDS",
    bodyText:
      "Explore globally recognized standards such as ISO 27001 and SOC2 and get certified to demonstrate cybersecurity excellence.",
    backgroundColor: "darkBlue",
    beforeImg: { url: "/1.svg", width: 85, height: 175 },
    beforeImgHoveredUrl: "/1-hover.png",
    changeBgColorOnHover: false,
  },
  {
    id: 2,
    headline: "REGULATIONS",
    bodyText:
      "Become compliant with regulations like HIPAA, ensuring the highest standards for safeguarding protected information.",
    backgroundColor: "brightOrange",
    beforeImg: { url: "/2.svg", width: 144, height: 179 },
    beforeImgHoveredUrl: "/2-hover.png",
    changeBgColorOnHover: false,
  },
  {
    id: 3,
    headline: "CUSTOMIZED LOCAL FRAMEWORKS",
    bodyText:
      "Craft tailored frameworks that fit your business’ goals and unique requirements. ",
    backgroundColor: "lightBlue",
    beforeImg: { url: "/3.svg", width: 146, height: 183 },
    beforeImgHoveredUrl: "/3-hover.png",
    changeBgColorOnHover: false,
  },
];

const Frameworks = ({ showCTA }: { showCTA: boolean }) => {
  return (
    <section>
      <div className="container xl:mx-auto mb-4 xl:mb-16">
        <SectionHeader
          subHeadline=""
          headline="Our Frameworks, For Your Regional Preference"
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3">
        {frameworks.map((framework) => (
          <Card
            key={framework.id}
            headline={framework.headline}
            bodyText={framework.bodyText}
            backgroundColor={framework.backgroundColor}
            beforeImg={framework.beforeImg}
            beforeImgHoveredUrl={framework.beforeImgHoveredUrl}
            changeBgColorOnHover={framework.changeBgColorOnHover}
          />
        ))}
      </div>
      {showCTA && (
        <div className="flex justify-center mt-16 xl:mt-20 tracking-widest">
          <Link href="/frameworks" className="pb-2 border-b">
            Explore all our frameworks
          </Link>
        </div>
      )}
    </section>
  );
};

export default Frameworks;
