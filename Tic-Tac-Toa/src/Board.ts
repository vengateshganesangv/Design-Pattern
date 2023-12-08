export interface Board {
  placeMark(row: number, col: number, symbol: string): boolean;
  isFull(): boolean;
  checkForWin(symbol: string, row: number, col: number): boolean;
  display(): void;
}
