import React from "react";

interface ScoreboardProps {
  score: { X: number; O: number };
}

export default function Scoreboard({ score }: ScoreboardProps) {
  return (
    <div className="w-full bg-[#EFECE6] border-3 border-border shadow-shadow p-8 flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-[#0C0D0E] uppercase">
        Scoreboard
      </h2>
      <div className="flex w-full justify-around gap-5 text-center">
        {(["X", "O"] as const).map((player) => (
          <div
            key={player}
            className="flex flex-col bg-white gap-1 p-4 flex-1 border-2 shadow-shadow"
          >
            <div className="">
              <span className="text-lg px-1 bg-emerald-500 uppercase inline-block font-bold text-[#0C0D0E]">
                Player {player}
              </span>
            </div>
            <span className="text-4xl font-extrabold text-[#0C0D0E]">
              {score[player]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
