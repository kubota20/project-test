import { Quiz } from "@/data/quiz/javascript/data";

interface ExplanationTextProps {
  feedback: string | null;
  currentQuiz: Quiz;
}

const ExplanationText = ({ feedback, currentQuiz }: ExplanationTextProps) => {
  return (
    <div className="space-y-2 ">
      <p className="text-center font-bold">{feedback}</p>

      <div className="mx-auto space-y-2 bg-yellow-50 border-2 p-2 sm:max-w-md h-60">
        <h3 className="text-2xl font-semibold text-center ">説明</h3>
        <p>{currentQuiz.explanation}</p>
      </div>
    </div>
  );
};

export default ExplanationText;
