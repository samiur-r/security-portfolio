import Tabs from "@/components/Tabs";

export default function AboutUs() {
  const tabs = [
    { id: 1, title: "OUR STORY", componentPath: `about-us/our-story` },
    { id: 2, title: "CAREERS", componentPath: `about-us/careers` },
    { id: 3, title: "INVESTORS", componentPath: `about-us/investors` },
    { id: 4, title: "PRESS", componentPath: `about-us/press` },
  ];

  return (
    <section className="mb-20 pt-24">
      <Tabs tabs={tabs} />
    </section>
  );
}
