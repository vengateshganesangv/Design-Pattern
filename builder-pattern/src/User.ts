// User.ts
export class User {
  private readonly id: number;
  private readonly name: string;
  private readonly phoneNumber?: string;
  private readonly age?: number;

  private constructor(builder: UserBuilder) {
    this.id = builder.id;
    this.name = builder.name;
    this.phoneNumber = builder.phoneNumber;
    this.age = builder.age;
  }

  static builder(id: number, name: string): UserBuilder {
    return new UserBuilder(id, name);
  }

  static createFromBuilder(builder: UserBuilder): User {
    return new User(builder);
  }

  // Getters
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPhoneNumber(): string | undefined {
    return this.phoneNumber;
  }

  getAge(): number | undefined {
    return this.age;
  }
}

// UserBuilder.ts
export class UserBuilder {
  public id: number;
  public name: string;
  public phoneNumber?: string;
  public age?: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  withPhoneNumber(phoneNumber: string): UserBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  withAge(age: number): UserBuilder {
    if (age < 0) {
      throw new Error("Age must not be negative");
    }
    this.age = age;
    return this;
  }

  build(): User {
    return User.createFromBuilder(this);
  }
}

const user = User.builder(1, "John Doe")
  .withPhoneNumber("+123456789")
  .withAge(30)
  .build();
