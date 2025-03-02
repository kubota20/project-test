import { Board } from "./components/board";

const QuizReactPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center my-6">クイズ(React.js)</h2>
      <div className="border-2 mt-6">
        <div className="p-4">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default QuizReactPage;
