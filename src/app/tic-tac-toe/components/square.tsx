"use client";

interface SquareProps {
  value: null | string;
  onSquareClick: () => void;
  xIsNext: boolean;
}

export default function Square({ value, onSquareClick, xIsNext }: SquareProps) {
  return (
    <>
      <button
        onClick={onSquareClick}
        className={`aspect-square shadow-inner shadow-black  hover:text-white font-bold text-3xl sm:text-6xl  ${
          xIsNext ? "hover:bg-red-400" : "hover:bg-green-400"
        }`}
      >
        {value}
      </button>
    </>
  );
}
