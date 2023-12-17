import Tabs from "@/components/Tabs";

export default function Resources() {
  const tabs = [
    { id: 1, title: "Blog", componentPath: `resources/blog` },
    { id: 2, title: "Guides", componentPath: `resources/guides` },
    { id: 3, title: "Client Stories", componentPath: `resources/client-stories` },
    { id: 4, title: "Partnerships", componentPath: `resources/partnerships` },
    { id: 5, title: "Glossary", componentPath: `resources/glossary` },
    { id: 6, title: "Events", componentPath: `resources/events` },
  ];

  return (
    <section className="mb-20 pt-24">
      <Tabs tabs={tabs} />
    </section>
  );
}
