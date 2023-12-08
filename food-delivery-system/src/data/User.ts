import { Address } from "./Address"; // Assuming the Address class is in the same directory. Adjust the path if necessary.

export class User {
  private readonly id: number;
  private readonly name: string;
  private readonly address: Address;
  private readonly phoneNumber: string;
  private readonly emailId: string;

  constructor(
    id: number,
    name: string,
    address: Address,
    phoneNumber: string,
    emailId: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.emailId = emailId;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): Address {
    return this.address;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getEmailId(): string {
    return this.emailId;
  }
}
