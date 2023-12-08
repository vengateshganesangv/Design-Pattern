abstract class Pizza {
  private readonly name: string;
  private readonly cost: number;

  protected constructor(name: string, cost: number) {
    this.name = name;
    this.cost = cost;
  }

  public getName(): string {
    return this.name;
  }

  public getCost(): number {
    return this.cost;
  }
}
