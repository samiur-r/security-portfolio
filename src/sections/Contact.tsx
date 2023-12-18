import Image from "next/image";

const Contact = () => {
  return (
    <section className="mb-20 px-5">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 rounded-lg bg-bright-orange">
        <div className="flex flex-col gap-3 px-12 py-16">
          <h3 className="text-xl xl:text-3xl font-glancyr">HAVE AN INQUIRY?</h3>
          <h2 className="text-3xl xl:text-5xl font-bold font-glancyr">
            Let&apos;s talk about it!
          </h2>
          <div className="mt-8">
            <button className="text-start py-1 px-0 border-b border-light-gray transition duration-300">
              Get in touch
            </button>
          </div>
        </div>
        <div className="hidden xl:flex justify-end">
          <Image
            src="/contact-bg.svg"
            width={487.8}
            height={478.01}
            alt="contact"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
