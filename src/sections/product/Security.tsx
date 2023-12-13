import ProductSection from "@/components/ProductSection";

const securityList = [
  {
    id: 1,
    imageUrl: "dashboard.svg",
    title: "ACCESS CONTROLS, TAKE CHARGE OF YOUR SYSTEM",
    description:
      "Are you concerned about who has access of your system? With SKELDUS, manage user access and ensure only authorized individuals enter, while preventing unauthorized users minimizing risks and enhancing security.",
    topText: "01",
  },
  {
    id: 2,
    imageUrl: "dashboard.svg",
    title: "ACCESS CONTROLS, TAKE CHARGE OF YOUR SYSTEM 2",
    description:
      "2 Are you concerned about who has access of your system? With SKELDUS, manage user access and ensure only authorized individuals enter, while preventing unauthorized users minimizing risks and enhancing security.",
    topText: "02",
  },
];

const Security = () => {
  return (
    <ProductSection
      subHeadline="SKELDUS Security"
      headline="Secure Your Business"
      description="SKELDUS Secure empowers you with efficient and round-the-clock access control management and continuous monitoring for robust security, to stay secure 24/7 with peace of mind."
      imageUrl="security.svg"
      data={securityList}
    />
  );
};

export default Security;
