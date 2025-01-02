"use client";

import { useState } from "react";
import QuizText from "./quiz-text";
import NextButton from "./next-button";
import { quizData } from "@/data/quiz/javascript/data";
import Score from "./score";
import ExplanationText from "./explanation-text";

export const Board = () => {
  // 現在のクイズのインデックスを管理する状態
  const [currentIndex, setCurrentIndex] = useState(0);
  // 正解した数をカウントする状態
  const [score, setScore] = useState(0);
  // クイズが終了したかどうか
  const [isFinished, setIsFinished] = useState(false);
  // フィードバックメッセージを管理する状態
  const [feedback, setFeedback] = useState<string | null>(null);

  // 現在のクイズ
  const currentQuiz = quizData[currentIndex];

  const handleAnswer = (index: number) => {
    // 正解の場合、スコアを加算
    if (index === currentQuiz.correctAnswerIndex) {
      setScore(score + 1);
      setFeedback(
        `正解です！正しい答えは「${currentQuiz.options[index]}」です。`
      );
    } else {
      setFeedback(
        `不正解です。正しい答えは「${
          currentQuiz.options[currentQuiz.correctAnswerIndex]
        }」です。`
      );
    }
  };

  const handleNextQuestion = () => {
    setFeedback(null); // フィードバックをリセット

    // 次の問題がある場合、インデックスを進める
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 全ての問題が終了したら、クイズを終了
      setIsFinished(true);
    }
  };

  return (
    <div className="">
      {isFinished ? (
        <Score quizData={quizData} score={score} />
      ) : (
        <div>
          {feedback ? (
            <>
              <ExplanationText feedback={feedback} currentQuiz={currentQuiz} />
              <NextButton nextClick={handleNextQuestion} />
            </>
          ) : (
            <QuizText handleAnswer={handleAnswer} currentQuiz={currentQuiz} />
          )}
        </div>
      )}
    </div>
  );
};

export default Board;
