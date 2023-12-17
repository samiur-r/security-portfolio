import Tabs from "@/components/Tabs";

const tabs = [
  { id: 1, title: "OUR STORY", url: "/about-us" },
  { id: 2, title: "CAREERS", url: "/about-us/careers" },
  { id: 3, title: "INVESTORS", url: "/about-us/investors" },
  {
    id: 4,
    title: "PRESS",
    url: "/about-us/press",
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
