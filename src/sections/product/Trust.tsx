import ProductSection from "@/components/ProductSection";

const trustList = [
  {
    id: 1,
    imageUrl: "/dashboard.png",
    title: "boost productivity with automated questionnaire processes",
    description:
      "Achieve maximum productivity by automating the questionnaire processes essential for compliance and security assessments. Our cutting-edge technology simplifies and accelerates the traditionally time-consuming and manual task of collecting, distributing, and analyzing security questionnaires.",
    topText: "01",
  },
  {
    id: 2,
    imageUrl: "/dashboard.png",
    title: "boost productivity with automated questionnaire processes 2",
    description:
      "2 Achieve maximum productivity by automating the questionnaire processes essential for compliance and security assessments. Our cutting-edge technology simplifies and accelerates the traditionally time-consuming and manual task of collecting, distributing, and analyzing security questionnaires.",
    topText: "02",
  },
];

const Trust = () => {
  return (
    <ProductSection
      subHeadline="SKELDUS TRUST"
      headline="Build Customer Trust"
      description="Imagine easily presenting your security posture, compliance reports, and privacy practices to your customers, and earn their trust seamlessly.  With SKELDUS, building trust is not a one-time process, it’s a promise to continuously support your clients and accelerate sales."
      imageUrl="trust.svg"
      data={trustList}
    />
  );
};

export default Trust;
