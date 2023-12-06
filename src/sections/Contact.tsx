import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 rounded-lg bg-[#E8530E]">
        <div className="flex flex-col gap-3 px-12 py-16">
          <h3 className="text-xl md:text-3xl font-glancyr">HAVE AN INQUIRY?</h3>
          <h2 className="text-3xl md:text-5xl font-bold font-glancyr">
            Let's talk about it!
          </h2>
          <div className="mt-8">
            <button className="text-start py-1 px-0 border-b border-[#E5E7E8] transition duration-300">
              Get in touch
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <Image
            src="/contact-bg.svg"
            width={487.8}
            height={478.01}
            objectFit="cover"
            alt="contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
