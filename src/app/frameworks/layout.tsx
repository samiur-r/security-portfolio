import Tabs from "@/components/Tabs";

const tabs = [
  { id: 1, title: "Overflow", url: "/frameworks" },
  { id: 2, title: "Standards", url: "/frameworks/standards" },
  { id: 3, title: "Regulations", url: "/frameworks/regulations" },
  {
    id: 4,
    title: "Customized Frameworks",
    url: "/frameworks/customized-frameworks",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-24 mb-20">
      <Tabs tabs={tabs} />
      <div>{children}</div>
    </div>
  );
}
