"use client";

import AdminSection from "@/components/admin-section";
// components
import GameSection from "@/components/game-section";
import QuizSection from "@/components/quiz-section";
import TestingSection from "@/components/testing-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl my-8">練習用</h1>

      <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-3">
        {/* ゲーム */}
        <GameSection />

        {/* クイズ */}
        <QuizSection />

        {/* 機能テスト */}
        <TestingSection />

        {/* 管理者用 */}
        <AdminSection />
      </div>
    </div>
  );
}
