"use client";

import { Button } from "@/components/ui/button";
import { OpenCloseWidget } from "./sidebar/open-close-widget";
import { UserAvatar } from "./ui/user-avatar";
import { Settings, CircleHelp } from "lucide-react";
import { InputSearch } from "./header/input-search";

const TopHeader = () => {
  return (
    <header className="w-full flex items-center justify-between p-1 h-12 border-b">
      {/* サイドバーの表示・非表示 */}
      <div className="">
        <OpenCloseWidget />
      </div>

      <div className="flex items-center">
        {/* 検索 */}
        <InputSearch />

        {/* ヘルプボタン */}
        <Button size="icon" variant="ghost">
          <CircleHelp />
        </Button>

        {/* 設定ボタン */}
        <Button size="icon" variant="ghost">
          <Settings />
        </Button>

        {/* ユーザーボタン */}
        <UserAvatar />
      </div>
    </header>
  );
};

export default TopHeader;
