import type { Quiz } from "@/data/quiz/next/data";

interface QuizTextProps {
  handleAnswer: (index: number) => void;
  currentQuiz: Quiz;
}

const QuizText = ({ handleAnswer, currentQuiz }: QuizTextProps) => {
  return (
    <div className="flex flex-col items-center ">
      <h3 className="text-lg font-semibold">{currentQuiz.question}</h3>
      <ol className="list-decimal space-y-2 mt-4">
        {currentQuiz.options.map((option, index) => (
          <li
            className="cursor-pointer hover:bg-gray-300"
            key={index}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QuizText;
