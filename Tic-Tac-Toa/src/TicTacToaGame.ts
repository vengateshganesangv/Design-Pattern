import { HumanPlayer } from "./HumanPlayer";
import { Move } from "./Move";
import { Player } from "./Player";
import { TicTacToeBoard } from "./TicTacToaBoard";

class TicTacToeGame {
  private boardSize: number;
  private board: TicTacToeBoard;
  private player1: Player;
  private player2: Player;
  private currentPlayer: Player;
  private gameWon: boolean;

  constructor(boardSize: number) {
    this.boardSize = boardSize;
    this.board = new TicTacToeBoard(boardSize);

    // Replace 'X' and 'O' with your desired symbols
    this.player1 = new HumanPlayer("X", "");
    this.player2 = new HumanPlayer("O", "");

    this.currentPlayer = this.player1;
    this.gameWon = false;
  }

  playGame(): void {
    this.board.display();

    while (!this.board.isFull() && !this.gameWon) {
      const move: Move = this.currentPlayer.makeMove(this.board);
      this.board.display();

      const row: number = move.getRow();
      const col: number = move.getCol();

      if (this.board.checkForWin(this.currentPlayer.getSymbol(), row, col)) {
        console.log(this.currentPlayer.getName() + " wins!");
        this.gameWon = true;
      }

      this.currentPlayer =
        this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    if (!this.gameWon) {
      console.log("It's a tie!");
    }
  }
}

// Example Usage
const game = new TicTacToeGame(4);
game.playGame();
