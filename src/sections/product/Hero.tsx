import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen pt-44 pb-20 flex flex-col gap-16 mx-auto container px-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-0">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <p className="text-xl lg:text-3xl font-glancyr">SKELDUS Platform</p>
            <h2 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-3xl mt-5">
              Your Go-to Compliance, Trust, and Security Platform
            </h2>
          </div>
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
        <div>
          <Image
            src="product-hero.svg"
            alt=""
            width={509}
            height={440}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-xl lg:text-3xl font-bold">
          What are these features?
        </p>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
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
