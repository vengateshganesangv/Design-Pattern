import { Board } from "./Board";
import { Move } from "./Move";

export interface Player {
  getSymbol(): string;
  getName(): string;
  makeMove(board: Board): Move;
}
