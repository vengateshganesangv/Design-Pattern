//Not Enum Because we fetch this from database
export class EntryPoint {
  readonly name: string;
  readonly isOpen: boolean;

  constructor(name: string, isOpen: boolean) {
    this.name = name;
    this.isOpen = isOpen;
  }

  getName(): string {
    return this.name;
  }

  // Using Get Keyword No Use To call the parenthesis
  get isOpenStatus(): boolean {
    return this.isOpen;
  }
}
