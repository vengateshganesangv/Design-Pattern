import { Move } from "./Move";

export class TicTacToeMove implements Move {
  private row: number;
  private col: number;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  getRow(): number {
    return this.row;
  }

  getCol(): number {
    return this.col;
  }
}
