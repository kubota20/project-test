"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

const TopHeader = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <div>
      <div className="flex items-center justify-center" onClick={toggleSidebar}>
        <SidebarTrigger />
        <span className={`text-sm cursor-pointer`}>
          {open ? "閉じる" : "開く"}
        </span>
      </div>
    </div>
  );
};

export default TopHeader;
