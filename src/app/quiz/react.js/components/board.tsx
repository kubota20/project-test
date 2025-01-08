"use client";

import { useState, useEffect } from "react";

// data
import { Quiz, reactQuizData } from "@/data/quiz/react/data";

// javascript/components
import QuizText from "./quiz-text";
import NextButton from "./next-button";
import Score from "./score";
import ExplanationText from "./explanation-text";

// hooks
import { useShuffle } from "@/hooks/useShuffle";

export const Board = () => {
  // 現在のクイズのインデックスを管理する状態
  const [shuffledQuizzes, setShuffledQuizzes] = useState<Quiz[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // 正解した数をカウントする状態
  const [score, setScore] = useState(0);
  // クイズが終了したかどうか
  const [isFinished, setIsFinished] = useState(false);
  // フィードバックメッセージを管理する状態
  const [feedback, setFeedback] = useState<string | null>(null);

  const shuffled = useShuffle(reactQuizData);

  useEffect(() => {
    if (shuffled.length !== shuffledQuizzes.length) {
      // shuffled と shuffledQuizzes が異なる場合のみ更新
      setShuffledQuizzes(shuffled);
    }
  }, [shuffled, shuffledQuizzes]); // shuffled と shuffledQuizzes が更新された場合に実行

  // 現在のクイズ
  const currentQuiz = shuffledQuizzes[currentIndex];

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
    if (currentIndex < reactQuizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 全ての問題が終了したら、クイズを終了
      setIsFinished(true);
    }
  };

  if (!currentQuiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <p className="text-right text-xs font-semibold text-gray-500">
        問題 {currentIndex + 1} / {reactQuizData.length}
      </p>
      {isFinished ? (
        <Score quizData={reactQuizData} score={score} />
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
