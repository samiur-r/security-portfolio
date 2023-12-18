import Hero from "@/sections/frameworks/Hero";
import Frameworks from "@/sections/home/Frameworks";
import Certifications from "@/sections/frameworks/Certifications";

const Overview = () => {
  return (
    <div className="my-12 px-5 flex flex-col gap-20">
      <Hero />
      <Frameworks showCTA={false} />
      <Certifications />
    </div>
  );
};

export default Overview;