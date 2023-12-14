import Tabs from "@/components/Tabs";

export default function Frameworks() {
  const tabs = [
    { id: 1, title: "Tab 1", componentPath: `product/Trust` },
    { id: 2, title: "Tab 2", componentPath: `product/Security` },
  ];

  return (
    <section className="flex flex-col gap-20 mb-20 pt-24">
      <Tabs tabs={tabs} />
    </section>
  );
}
