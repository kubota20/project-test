import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@/styles/dashboard.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";
import TopHeader from "./components/top-header";

export const metadata: Metadata = {
  title: "ダッシュボード",
  description: "Next.jsを使ってダッシュボードを作成",
};

/**
 * ダッシュボードサイドバーUI
 * https://ui.shadcn.com/docs/components/sidebar
 */

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <TopHeader />
        {children}
      </div>
    </SidebarProvider>
  );
}
