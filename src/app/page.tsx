"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Board from "@/components/board";
import StatusDisplay from "@/components/status-card";
import Scoreboard from "@/components/scoreboard";
import { getWinner, initialBoard, Player, Winner } from "@/lib/tic-tac-toe";
import { RefreshCcw, Swords } from "lucide-react";

export default function Home() {
  const [board, setBoard] = useState<string[]>(initialBoard);
  const [turn, setTurn] = useState<Player>("X");
  const [winner, setWinner] = useState<Winner>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [score, setScore] = useState<Record<Player, number>>({ X: 0, O: 0 });

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const result = getWinner(newBoard);
    if (result) {
      setWinner(result.player);
      setWinningLine(result.line);
      setScore((prev) => ({
        ...prev,
        [result.player]: prev[result.player] + 1,
      }));
    } else if (newBoard.every((cell) => cell)) {
      setWinner("Draw");
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setTurn("X");
    setWinner(null);
    setWinningLine(null);
  };

  const newGame = () => {
    resetBoard();
    setScore({ X: 0, O: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 px-4 py-8 lg:px-32 lg:py-24 bg-[#FAF9F6]">
      {/* Title Card */}
      <div className="w-full max-w-5xl bg-[#EFECE6] border-3 border-border shadow-shadow px-6 py-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold uppercase text-primary tracking-tight">
          Laurence's Tic-Tac-Toe Game
        </h1>
      </div>

      {/* Main Game Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl gap-10">
        {/* Game Area */}
        <div className="flex-1 flex flex-col gap-5 w-full max-w-xl items-center">
          <Board
            board={board}
            onClick={handleClick}
            winningLine={winningLine}
            isDraw={winner === "Draw"}
          />
        </div>

        {/* Side Panel */}
        <div className="flex-1 flex flex-col gap-5 w-full max-w-xl items-center">
          <StatusDisplay winner={winner} turn={turn} />
          <Scoreboard score={score} />
          <div className="w-full bg-[#EFECE6] border-3 border-border shadow-shadow p-8 flex flex-row gap-5 justify-center items-center">
            <Button
              onClick={resetBoard}
              className="flex-1 text-black px-4 py-2"
            >
              NEW ROUND
              <Swords className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={newGame} className="flex-1 text-black px-4 py-2">
              RESTART GAME
              <RefreshCcw className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center space-y-2">
        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
          <span className="px-3 py-1 shadow-shadow border-3 text-[#0C0D0E] bg-emerald-500 border-border">
            Next.js
          </span>
          <span className="px-3 py-1 shadow-shadow border-3 text-[#0C0D0E] bg-emerald-500 border-border">
            React
          </span>
          <span className="px-3 py-1 shadow-shadow border-3 text-[#0C0D0E] bg-emerald-500 border-border">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 shadow-shadow border-3 text-[#0C0D0E] bg-emerald-500 border-border">
            shadcn/ui
          </span>
        </div>
      </div>
    </div>
  );
}
