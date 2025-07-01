// lib/tictactoe.ts

export type Player = "X" | "O";
export type Winner = Player | "Draw" | null;

export const WINNING_COMBOS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const initialBoard = Array(9).fill("");

export const getWinner = (
  board: string[]
): { player: Player; line: number[] } | null => {
  for (const line of WINNING_COMBOS) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a] as Player, line };
    }
  }
  return null;
};
