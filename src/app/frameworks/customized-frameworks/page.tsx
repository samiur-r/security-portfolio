import BusinessCard from "@/components/BusinessCard";

const cFItems = [
  {
    id: 1,
    topText: "01",
    headline: "TAILORED SOLUTIONS",
    bodyText:
      "Customized frameworks are designed to address the unique needs and challenges of a specific business.",
  },
  {
    id: 2,
    topText: "02",
    headline: "INDUSTRY-SPECIFIC REQUIREMENTS",
    bodyText:
      "Different industries have distinct regulatory and compliance standards. Custom frameworks ensure alignment with them.",
  },
  {
    id: 3,
    topText: "03",
    headline: "SCALABILITY",
    bodyText:
      "A customized framework can be built to scale alongside the business, accommodating growth and changes in organizational structure.",
  },
  {
    id: 4,
    topText: "04",
    headline: "ADAPTABILITY TO TECHNOLOGY",
    bodyText:
      "Businesses need frameworks that can easily integrate with new technologies.",
  },
];

const CustomizedFrameworks = () => {
  return (
    <section className="my-12 px-5 flex flex-col gap-16 w-full">
      <div className="container mx-auto flex flex-col gap-16">
        <h2 className="font-glancyr font-bold text-3xl lg:text-5xl mt-5">
          Customized Frameworks
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 ">
          <p>
            <b>Your Compliance, Your Way.</b>
            <br /> At SKELDUS, we get that every business is different. That’s
            why our customized frameworks are created to address the specific
            needs and goals of your organization.
          </p>
          <p>
            Whether it's aligning with regional regulations, industry-specific
            requirements, or your distinct business objectives, our solution
            helps you achieve compliance in less time and resources.
          </p>
        </div>
        <h2 className="font-glancyr font-bold text-xl lg:text-3xl max-w-xl">
          Why Do Businesses Need Customized Frameworks?
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {cFItems.map((item) => (
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
      <div className="container mx-auto flex flex-col gap-16">
        <h3 className="font-glancyr text-xl lg:text-3xl">TITLE GOES HERE</h3>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 ">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
          <p>
            As consumers become increasingly aware of these risks, they demand
            greater transparency from companies handling their personal data.
            This has led to the emergence of data privacy regulations such as
            HIPAA and GDPR, which serve as legal frameworks to protect
            individuals' rights and ensure responsible data handling practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomizedFrameworks;
