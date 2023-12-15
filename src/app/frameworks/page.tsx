import Tabs from "@/components/Tabs";

export default function Frameworks() {
  const tabs = [
    { id: 1, title: "Overview", componentPath: `frameworks/overview` },
    { id: 2, title: "Standards", componentPath: `frameworks/standards` },
    { id: 3, title: "Regulations", componentPath: `frameworks/regulations` },
    { id: 4, title: "Customized Frameworks", componentPath: `frameworks/customized-frameworks` },
  ];

  return (
    <section className="mb-20 pt-24">
      <Tabs tabs={tabs} />
    </section>
  );
}
