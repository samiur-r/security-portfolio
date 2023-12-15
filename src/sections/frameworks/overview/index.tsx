import React from "react";
import Hero from "./Hero";
import Frameworks from "@/sections/home/Frameworks";
import Certifications from "./Certifications";

const Overview = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Frameworks showCTA={false} />
      <Certifications />
    </div>
  );
};

export default Overview;
