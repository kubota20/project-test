import { Board } from "./components/board";

const QuizNextPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center my-6">クイズ(Next.js)</h2>
      <div className="border-2 mt-6">
        <div className="p-4">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default QuizNextPage;
