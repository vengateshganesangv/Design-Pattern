class Tester {
  public static main(): void {
    const pizza = new Mushroom(new Olive(new Onion(new WheatBase())));
    console.log(`${pizza.getName()} ${pizza.getCost()}`);
  }
}
Tester.main();
