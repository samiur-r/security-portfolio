import AccordionBox from "@/components/AccordionBox";

const items = [
  {
    id: 1,
    topText: "01",
    accordionItems: [
      {
        title: "HIPAA",
        description:
          "SOC 2 is the most sought after security framework for scaling SaaS companies. Keep up-to-date with the latest SOC 2 terms.",
      },
      { title: "TEXT GOES HERE", description: "Desc 2" },
      { title: "TEXT GOES HERE", description: "Desc 3" },
    ],
  },
  {
    id: 2,
    topText: "02",
    accordionItems: [
      {
        title: "ISO 27001",
        description:
          "ISO 27001 is considered the international gold standard for information security management. Want to learn more? Get familiar with ISO 27001 terms.",
      },
      { title: "TEXT GOES HERE", description: "Desc 2" },
      { title: "TEXT GOES HERE", description: "Desc 3" },
    ],
  },
  {
    id: 3,
    topText: "03",
    accordionItems: [
      {
        title: "PCI",
        description:
          "HIPAA compliance keeps companies that access, process, or store protected health information in check. Find out commonly used HIPAA terminology.",
      },
      { title: "TEXT GOES HERE", description: "Desc 2" },
      { title: "TEXT GOES HERE", description: "Desc 3" },
    ],
  },
  {
    id: 4,
    topText: "04",
    accordionItems: [
      {
        title: "SOC 2",
        description:
          "PCI DSS applies to businesses that accept, process, store, transmit, or impact the security of cardholder data. Keep updated on PCI DSS terms.",
      },
      { title: "TEXT GOES HERE", description: "Desc 2" },
      { title: "TEXT GOES HERE", description: "Desc 3" },
    ],
  },
  {
    id: 5,
    topText: "05",
    accordionItems: [
      {
        title: "TEXT GOES HERE",
        description:
          "SOC 2 is the most sought after security framework for scaling SaaS companies. Keep up-to-date with the latest SOC 2 terms.",
      },
      { title: "TEXT GOES HERE", description: "Desc 2" },
      { title: "TEXT GOES HERE", description: "Desc 3" },
    ],
  },
  {
    id: 6,
    topText: "06",
    accordionItems: [
      {
        title: "TEXT GOES HERE",
        description:
          "ISO 27001 is considered the international gold standard for information security management. Want to learn more? Get familiar with ISO 27001 terms.",
      },
      { title: "TEXT GOES HERE", description: "Desc 2" },
      { title: "TEXT GOES HERE", description: "Desc 3" },
    ],
  },
];

const Glossary = () => {
  return (
    <section className="my-12 px-5 flex flex-col gap-20 w-full">
      <div className="container mx-auto flex flex-col gap-8">
        <h1 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-3xl">
          SKELDUS Glossary
        </h1>
        <p className="max-w-xl">
          Helpful definitions for the terms you need to know before getting
          compliance audit-ready.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {items.map((item) => (
          <AccordionBox
            key={item.id}
            topText={item.topText}
            accordionItems={item.accordionItems}
          />
        ))}
      </div>
    </section>
  );
};

export default Glossary;
