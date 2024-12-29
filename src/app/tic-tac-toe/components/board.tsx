"use client";

import { useState } from "react";

import Square from "./square";
import calculateWinner from "./calculate-winner";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // デフォルト値として 9 つのマス目に対応する 配列
  const [xIsNext, setXIsNext] = useState(true);

  /* クリックしたら X と O を表示するイベント */
  const handleClick = (i: number) => {
    // 一度クリックしたら X と O を変更しない
    // calculateWinner(squares) はプレーヤが勝利したかどうか判定
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // slice() 配列メソッドを使って squares 配列のコピー
    const nextSquares = squares.slice();

    // 条件分岐で X と O を表示できる。　最初は X
    if (xIsNext) {
      nextSquares[i] = "X"; // 最初のプレイヤー
    } else {
      nextSquares[i] = "O"; // 次のプレイヤー
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext); // ゲームの state が保存
  };

  /* 勝者を表示するイベント */
  const winner = calculateWinner(squares);

  let winnerStatus;
  let playerStatus;

  if (winner) {
    winnerStatus = "勝者 ";
  } else {
    playerStatus = `${xIsNext ? "X" : "O"} の番です`;
  }

  return (
    <>
      <div>
        <div className="font-bold text-4xl flex items-cente">
          {winnerStatus}
          <div
            className={`ml-4 animate-bounce font-bold text-6xl ${
              winner ? "text-yellow-400" : ""
            }`}
          >
            {winner}
          </div>
        </div>
        <p
          className={`font-bold text-4xl first-letter:text-6xl ${
            xIsNext ? "text-red-400 " : "text-green-400"
          }`}
        >
          {playerStatus}
        </p>
      </div>
      <div className="max-sm:w-4/5 sm:w-2/4 lg:w-1/3">
        <div className="grid grid-cols-3">
          <Square
            xIsNext={xIsNext}
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
          />
          <Square
            xIsNext={xIsNext}
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
          />
          <Square
            xIsNext={xIsNext}
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
          />
          <Square
            xIsNext={xIsNext}
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
          />
          <Square
            xIsNext={xIsNext}
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
          />
          <Square
            xIsNext={xIsNext}
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
          />
          <Square
            xIsNext={xIsNext}
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
          />
          <Square
            xIsNext={xIsNext}
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
          />
          <Square
            xIsNext={xIsNext}
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
          />
        </div>
      </div>
    </>
  );
}
