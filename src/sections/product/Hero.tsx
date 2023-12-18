import Image from "next/image";

import SectionHeader from "@/components/SectionHeader";

const Hero = () => {
  return (
    <section className="flex flex-col gap-16 mx-auto container px-5 mt-24">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-0 gap-10">
        <div className="flex flex-col gap-8">
          <SectionHeader
            subHeadline="SKELDUS PLATFORM"
            headline="Your Go-to Compliance, Trust, and Security Platform"
          />

          <div className="max-w-xl">
            <p>
              At SKELDUS, we're here to empower you on your journey towards
              compliance, security, and trust in a swift and effective way so
              you can focus on developing your business, and leave the rest to
              us. But how can we help you achieve your goals?  <br />
              <br />
              At the core of our platform is a set of user-friendly features,
              including{" "}
              <b>task management, controls, trust center, and more. </b>
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center xl:justify-center">
          <Image
            src="product-hero.svg"
            alt=""
            width={509}
            height={440}
            className="object-cover xl:w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-xl xl:text-3xl font-bold">
          What are these features?
        </p>
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
          <div className="">
            <p>
              This set of innovative features empower you to easily swiftly
              become compliant with tailored controls linked to relevant
              frameworks and organize compliance tasks through efficient task
              management.
              <br />
              <br />
              Once you’re all compliant, SKELDUS is here to ensure you stay
              secure thanks to granular access controls and simplified vendor
              assessments.
            </p>
          </div>
          <div className="">
            <p>
              Finally, as trust is crucial, SKELDUS helps you showcase your
              security posture through a customizable trust center, and
              automates compliance questionnaires to save time and effort.
              <br />
              <br />
              By bringing simple approaches to compliance, security, and trust
              under one roof, SKELDUS makes your journey straightforward and
              manageable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
