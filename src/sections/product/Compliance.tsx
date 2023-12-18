import ProductSection from "@/components/ProductSection";

const complianceList = [
  {
    id: 1,
    imageUrl: "/dashboard.png",
    title: "SIMPLIFY COMPLIANCE WITH OUR CONTROLS",
    description:
      "Structure and customize your frameworks by tailoring controls and policies to your specific needs, link them to respective frameworks and sections, and keep your documents organized. All the essential aspects of compliance are at your fingertips, without any unnecessary complexity.",
    topText: "01",
  },
  {
    id: 2,
    imageUrl: "/dashboard.png",
    title: "SIMPLIFY COMPLIANCE WITH OUR CONTROLS 2",
    description:
      "2 Structure and customize your frameworks by tailoring controls and policies to your specific needs, link them to respective frameworks and sections, and keep your documents organized. All the essential aspects of compliance are at your fingertips, without any unnecessary complexity.",
    topText: "02",
  },
];

const Compliance = () => {
  return (
    <ProductSection
      subHeadline="SKELDUS COMPLIANCE"
      headline="Your All-In-One Solution for Frameworks Compliance"
      description="We understand that managing compliance across various frameworks can be a labyrinth of controls, policies, and documentation. That's why we've built SKELDUS Comply to make your compliance journey as smooth as possible."
      imageUrl="compliance.svg"
      data={complianceList}
    />
  );
};

export default Compliance;
