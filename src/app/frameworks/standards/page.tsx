import BusinessCard from "@/components/BusinessCard";
import CertificateCard from "@/components/CertificateCard";

const complianceItems = [
  {
    id: 1,
    topText: "01",
    headline: "CREDIBILITY AND TRUST",
    bodyText:
      "Achieving and maintaining certifications enhance a business's credibility by commitment to robust cybersecurity.",
  },
  {
    id: 2,
    topText: "02",
    headline: "GLOBAL MARKET ACCESS",
    bodyText:
      "ISO standards are recognized globally, facilitating entry into international markets.",
  },
  {
    id: 3,
    topText: "03",
    headline: "COMPETITIVE ADVANTAGE",
    bodyText:
      "Compliance with standards sets businesses apart from competitors.",
  },
  {
    id: 4,
    topText: "04",
    headline: "OPERATIONAL EFFICIENCY",
    bodyText:
      "Implementing standards involves adopting best practices, streamlining processes, and improving operational efficiency.",
  },
];

const certificationItems = [
  {
    id: 1,
    topText: "ISO 27001",
    topImage: { url: "/certification-1.svg", width: 145, height: 147 },
    bodyText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 2,
    topText: "SOC 2",
    topImage: { url: "/certification-2.svg", width: 161, height: 147 },
    bodyText:
      "As consumers become increasingly aware of these risks, they demand greater transparency from companies handling their personal data. This has led to the emergence of data privacy regulations such as HIPAA and GDPR, which serve as legal frameworks to protect individuals' rights and ensure responsible data handling practices.",
  },
  {
    id: 3,
    topText: "NIST",
    topImage: { url: "/nist.svg", width: 147, height: 39 },
    bodyText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
];

const Standards = () => {
  return (
    <section className="my-12 px-5 flex flex-col gap-16 w-full">
      <div className="container mx-auto flex flex-col gap-16 w-full">
        <h2 className="font-glancyr font-bold text-3xl lg:text-5xl mt-5">
          Standards
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 ">
          <p>
            Cybersecurity presents a significant concern for businesses in the
            contemporary landscape, and the reasons behind this are clear. A
            single data breach, whether it affects your internal systems or
            those of a trusted vendor or partner, can result in substantial
            financial losses, potentially reaching a couple million. 
          </p>
          <p>
            With cyber threats constantly evolving, businesses must take
            proactive measures to safeguard their sensitive information. Two
            widely recognized frameworks for achieving this are ISO 27001 and
            SOC 2, which are industry-specific regulations and help
            organizations meet compliance requirements more efficiently.
          </p>
        </div>
        <h2 className="font-glancyr font-bold text-xl lg:text-3xl max-w-xl">
          Why Do Businesses Opt for Standards Compliance?
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {complianceItems.map((item) => (
          <BusinessCard
            key={item.id}
            topText={item.topText}
            headline={item.headline}
            bodyText={item.bodyText}
            borderRight={item.id % 2 === 0}
            borderBottom={item.id === 3 || item.id === 4}
          />
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        {certificationItems.map((item, index) => (
          <CertificateCard
            key={item.id}
            topText={item.topText}
            bodyText={item.bodyText}
            topImage={item.topImage}
            showBorderBottom={index !== 2}
          />
        ))}
      </div>
    </section>
  );
};

export default Standards;
