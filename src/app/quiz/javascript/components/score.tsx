import { Quiz } from "@/data/quiz/javascript/data";
import React from "react";

interface ScoreProps {
  score: number;
  quizData: Quiz[];
}

const Score = ({ score, quizData }: ScoreProps) => {
  return (
    <div>
      <h2>クイズ終了！</h2>
      <p>
        あなたのスコアは {score}/{quizData.length} です。
      </p>
    </div>
  );
};

export default Score;
