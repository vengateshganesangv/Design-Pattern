class User {
  readonly id: number;
  readonly name: string;
  readonly phoneNumber?: string; // optional
  readonly age?: number; // optional

  private constructor(
    id: number,
    name: string,
    phoneNumber?: string,
    age?: number
  ) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.age = age;
  }

  static fromBuilder(builder: UserBuilder): User {
    return new User(builder.id, builder.name, builder.phoneNumber, builder.age);
  }
}

class UserBuilder {
  readonly id: number;
  readonly name: string;
  phoneNumber?: string;
  age?: number;

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
    return User.fromBuilder(this);
  }
}

// Usage example:
const user = new UserBuilder(1, "John Doe")
  .withPhoneNumber("+123456789")
  .withAge(30)
  .build();
