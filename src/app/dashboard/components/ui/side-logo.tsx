"use client";
import { SidebarGroupLabel, useSidebar } from "@/components/ui/sidebar";
import { Globe } from "lucide-react";

export const SideLogo = () => {
  const { open } = useSidebar();
  return (
    <div
      className={` ${
        open ? "bg-blue-400 aspect-video shadow-inner shadow-blue-600" : ""
      }`}
    >
      <SidebarGroupLabel>
        <div className="relative flex items-center justify-center w-full top-12">
          <p className="z-50 absolute">Corporate Dashboard</p>
          <div className="absolute">
            <Globe
              className="animate-spin-slow text-white"
              size={100}
              strokeWidth={1}
            />
          </div>
        </div>
      </SidebarGroupLabel>
    </div>
  );
};
