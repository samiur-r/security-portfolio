import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <h2 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-2xl mt-5">
            Maximum Compliance,  Minimum Efforts
          </h2>
          <div className="max-w-xl">
            <p>
              At SKELDUS, whether your focus is on meeting industry standards,
              adhering to specific regulations, or customizing compliance to
              your unique needs, SKELDUS offers the right tools to help you
              achieve your goals, no matter your region or industry. This way,
              you can  focus on what you do best. 
            </p>
          </div>
          <div className="tracking-widest">
            <Link href="#" className="pb-2 border-b">
              Discover our frameworks
            </Link>
          </div>
        </div>
        <div className="mt-16 lg:mt-0">
          <Image
            src="overview-hero.svg"
            alt=""
            width={521}
            height={519}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
