import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const frameworks = [
  {
    id: 1,
    headline: "STANDARDS",
    bodyText:
      "Explore globally recognized standards such as ISO 27001 and SOC2 and get certified to demonstrate cybersecurity excellence.",
    backgroundColor: "darkBlue",
    beforeImg: { url: "1.svg", width: 85, height: 175 },
    beforeImgHoveredUrl: "/1-hover.png",
    changeBgColorOnHover: false,
  },
  {
    id: 2,
    headline: "REGULATIONS",
    bodyText:
      "Become compliant with regulations like HIPAA, ensuring the highest standards for safeguarding protected information.",
    backgroundColor: "brightOrange",
    beforeImg: { url: "2.svg", width: 144, height: 179 },
    beforeImgHoveredUrl: "/2-hover.png",
    changeBgColorOnHover: false,
  },
  {
    id: 3,
    headline: "CUSTOMIZED LOCAL FRAMEWORKS",
    bodyText:
      "Craft tailored frameworks that fit your business’ goals and unique requirements. ",
    backgroundColor: "lightBlue",
    beforeImg: { url: "3.svg", width: 146, height: 183 },
    beforeImgHoveredUrl: "/3-hover.png",
    changeBgColorOnHover: false,
  },
];

const Frameworks = () => {
  return (
    <section>
      <SectionHeader
        subHeadline="your needs, our expertise"
        headline="Our Frameworks, For Your Regional Preference"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5">
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
      <div className="flex justify-center mt-16 lg:mt-20 tracking-widest">
        <Link href="#" className="pb-2 border-b">
          Explore all our frameworks
        </Link>
      </div>
    </section>
  );
};

export default Frameworks;
