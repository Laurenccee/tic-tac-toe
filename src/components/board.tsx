import clsx from "clsx";

interface BoardProps {
  board: string[];
  onClick: (index: number) => void;
  winningLine: number[] | null;
  isDraw: boolean;
}

export default function Board({
  board,
  onClick,
  winningLine,
  isDraw,
}: BoardProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-3 gap-2 border-3 shadow-shadow p-4 bg-[#EFECE6] w-full transition-all duration-300",
        {
          "animate-shake": isDraw,
        }
      )}
    >
      {board.map((cell, idx) => {
        const isWinner = winningLine?.includes(idx);
        return (
          <button
            key={idx}
            onClick={() => onClick(idx)}
            className={clsx(
              "aspect-square flex items-center justify-center text-3xl font-bold border-2 bg-white border-[#6B7280] transition duration-200",
              {
                "bg-emerald-100 animate-pulse border-green-600": isWinner,
              }
            )}
          >
            {cell}
          </button>
        );
      })}
    </div>
  );
}
