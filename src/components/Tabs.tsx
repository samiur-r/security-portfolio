"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TabItemType = { id: number; title: string; url: string };

type TabProps = { tabs: TabItemType[] };

const Tabs: React.FC<TabProps> = ({ tabs }) => {
  const pathname = usePathname();
  const activeTab = tabs.find((tab) => tab.url === pathname) || tabs[0];

  return (
    <div className="bg-light-gray">
      <div className="container mx-auto text-light-blue flex gap-5 overflow-auto w-full">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.url}
            className={`py-6 px-5 font-glancyr min-w-fit ${
              tab.id === activeTab.id
                ? "text-bright-orange border-b-4 border-bright-orange"
                : "text-dark-blue"
            }`}
          >
            {tab.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
