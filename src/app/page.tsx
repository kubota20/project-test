"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="font-bold text-3xl my-24">練習用</h1>

      <div className="w-5/6 border border-black shadow p-3">
        <div className="text-center">
          <h2 className="font-bold text-2xl my-6">ゲーム</h2>
          <Button
            className="mt-8 mb-6"
            onClick={() => router.push("/tic-tac-toe")}
          >
            三目並べ
          </Button>
          <h2 className="font-bold text-2xl my-6">クイズ</h2>
          <Button
            className="mt-8 mb-6"
            onClick={() => router.push("/quiz/javascript")}
          >
            JavaScript
          </Button>
        </div>
      </div>
    </div>
  );
}
