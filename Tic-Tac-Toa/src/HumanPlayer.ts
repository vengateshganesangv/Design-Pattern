import { Player } from "./Player";
import { Board } from "./Board";
import { Move } from "./Move";
import { TicTacToeMove } from "./TicTacToaMove";
export class HumanPlayer implements Player {
  private symbol: string;
  private name: string;

  constructor(symbol: string, name: string) {
    this.symbol = symbol;
    this.name = name;
  }

  getSymbol(): string {
    return this.symbol;
  }

  getName(): string {
    return this.name;
  }

  makeMove(board: Board): Move {
    const readlineSync = require("readline-sync");
    let row: number, col: number;

    do {
      console.log(`${this.name}, enter your move (row and column):`);
      row = readlineSync.questionInt("Row: ") - 1;
      col = readlineSync.questionInt("Column: ") - 1;
    } while (!board.placeMark(row, col, this.symbol));

    return new TicTacToeMove(row, col); // Assuming you have a TicTacToeMove class or interface
  }
}
