import ProductSection from "@/components/ProductSection";

const assetList = [
  {
    id: 1,
    imageUrl: "dashboard.svg",
    title: "PEOPLE",
    description:
      "Your team's compliance is vital, and with SKELDUS, you can efficiently track the status of your employees' requirements. Know exactly which compliance tasks are open or fulfilled, making on-boarding and off-boarding a breeze.",
    topText: "01",
  },
  {
    id: 2,
    imageUrl: "dashboard.svg",
    title: "PEOPLE 2",
    description:
      "2 Your team's compliance is vital, and with SKELDUS, you can efficiently track the status of your employees' requirements. Know exactly which compliance tasks are open or fulfilled, making on-boarding and off-boarding a breeze.",
    topText: "02",
  },
];

const Asset = () => {
  return (
    <ProductSection
      subHeadline="ASSETS"
      headline="Your Compliance Essentials"
      description="When it comes to compliance, SKELDUS offers comprehensive asset management. Here's a glimpse of what we have in store:"
      data={assetList}
    />
  );
};

export default Asset;
