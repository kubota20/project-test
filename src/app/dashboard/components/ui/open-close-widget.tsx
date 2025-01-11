"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export const OpenCloseWidget = () => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className="flex items-center justify-center"
      onClick={() => setOpen(open)}
    >
      <SidebarTrigger />
      <p className={`text-sm cursor-pointer max-sm:hidden`}>
        {open ? "閉じる" : "開く"}
      </p>
    </div>
  );
};
