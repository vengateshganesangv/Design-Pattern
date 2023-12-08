abstract class Topping extends Pizza {
  private readonly pizza: Pizza;

  constructor(name: string, cost: number, pizza: Pizza) {
    super(name, cost);
    this.pizza = pizza;
  }

  public getName(): string {
    return `${super.getName()} ${this.pizza.getName()}`;
  }

  public getCost(): number {
    return super.getCost() + this.pizza.getCost();
  }
}
