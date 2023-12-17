import Tabs from "@/components/Tabs";

const tabs = [
  { id: 1, title: "BLOG", url: "/resources" },
  { id: 2, title: "GUIDES", url: "/resources/guides" },
  { id: 3, title: "CLIENT STORIES", url: "/resources/client-stories" },
  {
    id: 4,
    title: "PARTNERSHIPS",
    url: "/resources/partnerships",
  },
  { id: 5, title: "GLOSSARY", url: "/resources/glossary" },
  { id: 6, title: "EVENTS", url: "/resources/events" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-24 mb-20">
      <Tabs tabs={tabs} />
      <div>{children}</div>
    </div>
  );
}
