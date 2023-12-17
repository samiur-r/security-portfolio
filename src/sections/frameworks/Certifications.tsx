import React from "react";
import Image from "next/image";

import SectionHeader from "@/components/SectionHeader";

const regionOptions = ["Opt 1", "Opt 2"];
const industryOptions = ["Opt 1", "Opt 2"];
const companyOptions = ["Opt 1", "Opt 2"];

const Certifications = () => {
  return (
    <section className="flex flex-col gap-8 container mx-auto">
      <SectionHeader
        subHeadline="FILTERING TOOL"
        headline="Explore below and discover which certifications your need"
      />
      <p>Certifications needed in</p>
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between items-center lg:items-start">
        <select
          id="region"
          name="region"
          className="mt-2 block rounded-full py-1.5 pl-3 pr-5 bg-transparent border border-light-gray w-full"
        >
          <option>Region/Sub-region</option>
          {regionOptions.map((option) => (
            <option key={option} className="text-dark-blue">
              {option}
            </option>
          ))}
        </select>
        <select
          id="industry"
          name="industry"
          className="mt-2 block rounded-full py-1.5 pl-3 pr-5 bg-transparent border border-light-gray w-full"
        >
          <option>Industry</option>
          {industryOptions.map((option) => (
            <option key={option} className="text-dark-blue">
              {option}
            </option>
          ))}
        </select>
        <select
          id="company"
          name="company"
          className="mt-2 block rounded-full py-1.5 pl-3 pr-5 bg-transparent border border-light-gray w-full"
        >
          <option>Company Size</option>
          {companyOptions.map((option) => (
            <option key={option} className="text-dark-blue">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between items-center lg:items-end mt-16">
        <div className="flex-1 flex flex-col gap-8 items-center border-b border-light-gray pb-10 overflow-hidden lg:relative">
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              bottom: "0%",
              borderRight: "1px solid #E5E7E8",
              width: "1px",
            }}
          ></div>
          <Image src="/certification-1.svg" width={145} height={147} alt="" />
          <p>ISO 27001</p>
        </div>
        <div className="flex-1 flex flex-col gap-8 items-center border-b border-light-gray pb-10 overflow-hidden lg:relative">
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              bottom: "0%",
              borderRight: "1px solid #E5E7E8",
              width: "1px",
            }}
          ></div>
          <Image src="/certification-2.svg" width={161} height={147} alt="" />
          <p>SOC 2</p>
        </div>
        <div className="flex-1 flex flex-col gap-8 items-center border-b border-light-gray pb-10">
          <Image src="/certification-3.svg" width={254} height={138} alt="" />
          <p>HIPAA</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
