import BusinessCard from "@/components/BusinessCard";
import CertificateCard from "@/components/CertificateCard";

const regulationItems = [
  {
    id: 1,
    topText: "01",
    headline: "LEGAL CONSEQUENCES",
    bodyText: "Non-compliance can result in severe legal consequences.",
  },
  {
    id: 2,
    topText: "02",
    headline: "REPUTATION DAMAGE",
    bodyText: "Failure to comply can tarnish a business's reputation.",
  },
  {
    id: 3,
    topText: "03",
    headline: "CUSTOMER TRUST",
    bodyText:
      "Adhering to regulations demonstrates a commitment to protecting customer data.",
  },
  {
    id: 4,
    topText: "04",
    headline: "COMPETITIVE EDGE",
    bodyText:
      "Compliant businesses gain a competitive edge by demonstrating reliability, responsibility, and a commitment to ethical practices.",
  },
];

const certificationItems = [
  {
    id: 1,
    topText: "HIPAA",
    topImage: { url: "/certification-3.svg", width: 254, height: 138 },
    bodyText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 2,
    topText: "GPDR",
    topImage: { url: "/gpdr.svg", width: 130, height: 130 },
    bodyText:
      "As consumers become increasingly aware of these risks, they demand greater transparency from companies handling their personal data. This has led to the emergence of data privacy regulations such as HIPAA and GDPR, which serve as legal frameworks to protect individuals' rights and ensure responsible data handling practices.",
  },
  {
    id: 3,
    topText: "CCPA",
    topImage: { url: "/ccpa.svg", width: 239, height: 94 },
    bodyText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
];

const Regulations = () => {
  return (
    <section className="my-12 px-5 w-full">
      <div
        className="w-full bg-no-repeat bg-[right_top_0px] xl:bg-[right_top_80px] flex flex-col gap-16"
        style={{
          backgroundImage: `url(/2-filled.svg)`,
        }}
      >
        <div className="container mx-auto flex flex-col gap-16">
          <h2 className="font-glancyr font-bold text-3xl xl:text-5xl mt-5">
            Regulations
          </h2>
          <div className="flex flex-col xl:flex-row xl:justify-between gap-16 ">
            <p>
              In today's digital age, personal data is constantly being
              collected, stored, and processed by various entities. This vast
              amount of information encompasses sensitive details such as names,
              addresses, and online activity logs, which can lead to identity
              theft, financial fraud, and reputational damage when they fall
              into the wrong hands.
            </p>
            <p>
              As consumers become increasingly aware of these risks, they demand
              greater transparency from companies handling their personal data.
              This has led to the emergence of data privacy regulations such as
              HIPAA and GDPR, which serve as legal frameworks to protect
              individuals' rights and ensure responsible data handling
              practices.
            </p>
          </div>
          <h2 className="font-glancyr font-bold text-xl xl:text-3xl max-w-xl">
            Why Businesses Can’t Ignore Regulations?
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          {regulationItems.map((item) => (
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
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2">
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
      </div>
    </section>
  );
};

export default Regulations;
