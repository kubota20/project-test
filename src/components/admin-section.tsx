"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { HelpIcon } from "./ui/help-icon";

const txetAction = {
  text: "三目並べ",
  packages: [
    "prisma:^6.2.1",
    "next-auth:^4.24.11",
    "@next-auth/prisma-adapter",
    "@prisma/client",
  ],
  description:
    "管理者用ページです。prisma でテーブル作成、ストレージサービスでは Neon Postgres を使用 next-auth のGitHub認証機能を使っています。(Neon Postgres の無利用枠の使用期間は14日の為、変更を考えています。)",
};

const AdminSection = () => {
  return (
    <section className="border border-black shadow p-4 col-span-full">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute top-0 right-0">
          <HelpIcon
            title={txetAction.text}
            packages={txetAction.packages}
            description={txetAction.description}
          />
        </div>
        <h2 className="font-bold text-2xl my-2">管理者用</h2>
        <p className="text-sm text-gray-500">管理者しか使用できません</p>
        <div className="space-x-4">
          <Button
            className="mt-8 text-xs font-bold p-2"
            onClick={() => signIn("github")}
          >
            ログイン
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
