interface StatusDisplayProps {
  winner: string | null;
  turn: "X" | "O";
}

export default function StatusDisplay({ winner, turn }: StatusDisplayProps) {
  const getColorClass = () => {
    if (winner === "X") return "text-[#22C55E]";
    if (winner === "O") return "text-[#EF4444]";
    if (winner === "Draw") return "text-gray-700";
    return "text-primary";
  };

  return (
    <div className="w-full border-3 border-border shadow-shadow px-6 py-5 bg-[#EFECE6] flex flex-col items-center text-center gap-2">
      <span className="text-sm text-[#0C0D0E] tracking-widest font-medium uppercase">
        {winner ? "Game Over" : "Current Turn"}
      </span>
      <span className={`text-3xl uppercase font-bold ${getColorClass()}`}>
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Player ${winner} Wins!`
          : `Player ${turn}`}
      </span>
    </div>
  );
}
