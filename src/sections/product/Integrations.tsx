import ProductSection from "@/components/ProductSection";

const integrationsList = [
  {
    id: 1,
    imageUrl: "/dashboard-integrations.png",
    title: "PEOPLE",
    description:
      "Your team's compliance is vital, and with SKELDUS, you can efficiently track the status of your employees' requirements. Know exactly which compliance tasks are open or fulfilled, making on-boarding and off-boarding a breeze.",
  },
];

const Integrations = () => {
  return (
    <ProductSection
      subHeadline="INTEGRATIONS"
      headline="Enhance Your Workflow with SKELDUS Integrations"
      description="Streamline compliance and security tasks by seamlessly integrating SKELDUS with your favorite tools and counting. Make your work easier, and protect your business with automated solutions."
      data={integrationsList}
    />
  );
};

export default Integrations;
