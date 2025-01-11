"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export const OpenCloseWidget = () => {
  const { toggleSidebar, open, openMobile, isMobile, setOpen } = useSidebar();

  const isOpen = isMobile ? openMobile : open; // デバイスに応じた状態を取得

  return (
    <>
      {/* 640px以上で表示 */}
      <div
        className="flex items-center justify-center max-sm:hidden"
        onClick={toggleSidebar}
      >
        <SidebarTrigger />
        <p className="text-sm cursor-pointer ">{isOpen ? "閉じる" : "開く"}</p>
      </div>

      {/* 640px以下で表示 */}
      <div className="sm:hidden" onClick={() => setOpen(open)}>
        <SidebarTrigger />
      </div>
    </>
  );
};
