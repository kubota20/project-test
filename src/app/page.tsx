"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl my-8">練習用</h1>

      <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-3">
        {/* ゲーム */}
        <section className="border border-black shadow p-4">
          <div className="text-center">
            <h2 className="font-bold text-2xl my-2">ゲーム</h2>
            <Button
              className="mt-8 text-xs font-bold p-2"
              onClick={() => router.push("/tic-tac-toe")}
            >
              三目並べ
            </Button>
          </div>
        </section>

        {/* クイズ */}
        <section className="border border-black shadow p-4">
          <div className="text-center">
            <h2 className="font-bold text-2xl my-2">クイズ</h2>
            <div className=" space-x-4">
              <Button
                className="mt-8 text-xs font-bold p-2"
                onClick={() => router.push("/quiz/javascript")}
              >
                JavaScript
              </Button>
              <Button
                className="mt-8 text-xs font-bold p-2"
                onClick={() => router.push("/quiz/react.js")}
              >
                React.js
              </Button>
              <Button
                className="mt-8 text-xs font-bold p-2"
                onClick={() => router.push("/quiz/next13.js")}
              >
                Next.js 13
              </Button>
              <Button
                className="mt-8 text-xs font-bold p-2"
                onClick={() => router.push("/quiz/next14.js")}
              >
                Next.js 14
              </Button>
            </div>
          </div>
        </section>

        {/* 機能テスト */}
        <section className="border border-black shadow p-4 col-span-full">
          <div className="text-center">
            <h2 className="font-bold text-2xl my-2">機能テスト</h2>
            <div className=" space-x-4">
              <Button
                className="mt-8 text-xs font-bold p-2"
                onClick={() => router.push("/dashboard")}
              >
                ダッシュボード
              </Button>
            </div>
          </div>
        </section>

        {/* 管理者用 */}
        <section className="border border-black shadow p-4 col-span-full">
          <div className="text-center">
            <h2 className="font-bold text-2xl my-2">管理者用</h2>
            <p className="text-sm text-gray-500">管理者しか使用できません</p>
            <div className=" space-x-4">
              <Button
                className="mt-8 text-xs font-bold p-2"
                onClick={() => router.push("/sign-in")}
              >
                ログイン
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
