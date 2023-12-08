import { Board } from "./Board";

export class TicTacToeBoard implements Board {
  private board: string[][];
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.board = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => " ")
    );
    this.initializeBoard();
  }

  private initializeBoard(): void {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.board[i][j] = " ";
      }
    }
  }

  placeMark(row: number, col: number, symbol: string): boolean {
    if (
      row >= 0 &&
      row < this.size &&
      col >= 0 &&
      col < this.size &&
      this.board[row][col] === " "
    ) {
      this.board[row][col] = symbol;
      return true;
    }
    return false;
  }

  isFull(): boolean {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.board[i][j] === " ") {
          return false;
        }
      }
    }
    return true;
  }

  checkForWin(symbol: string, row: number, col: number): boolean {
    let rowWin = true;
    let colWin = true;
    let mainDiagonalWin = true;
    let otherDiagonalWin = true;

    for (let i = 0; i < this.size; i++) {
      if (this.board[row][i] !== symbol) {
        rowWin = false;
      }
      if (this.board[i][col] !== symbol) {
        colWin = false;
      }
      if (this.board[i][i] !== symbol) {
        mainDiagonalWin = false;
      }
      if (this.board[i][this.size - 1 - i] !== symbol) {
        otherDiagonalWin = false;
      }
    }

    return rowWin || colWin || mainDiagonalWin || otherDiagonalWin;
  }

  display(): void {
    console.log("-------------");
    for (let i = 0; i < this.size; i++) {
      process.stdout.write("|");
      for (let j = 0; j < this.size; j++) {
        process.stdout.write(this.board[i][j] + "|");
      }
      console.log("\n-------------");
    }
  }
}
