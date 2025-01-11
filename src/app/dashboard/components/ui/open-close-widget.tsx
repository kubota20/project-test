"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export const OpenCloseWidget = () => {
  const { toggleSidebar, open } = useSidebar();
  return (
    <div className="flex items-center justify-center" onClick={toggleSidebar}>
      <SidebarTrigger />
      <p className={`text-sm cursor-pointer`}>{open ? "閉じる" : "開く"}</p>
    </div>
  );
};
