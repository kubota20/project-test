import Board from "./components/board";

/*
 * Reactチュートリアル
 * https://ja.react.dev/learn/tutorial-tic-tac-toe
 */

const TicTacToePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="font-black text-4xl my-10">三目並べ</h1>
        <Board />
      </div>
    </div>
  );
};

export default TicTacToePage;
