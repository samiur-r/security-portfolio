import Hero from "@/sections/product/Hero";
import Platforms from "@/sections/product/Platforms";


export default function Home() {
  return (
    <section className="flex flex-col gap-20">
      <Hero />
      <Platforms />
    </section>
  );
}
