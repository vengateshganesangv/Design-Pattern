export class Address {
  constructor(
    private readonly addressLine1: string,
    private readonly addressLine2: string,
    private readonly addressLine3: string,
    private readonly city: string,
    private readonly state: string,
    private readonly zip: string,
    private readonly country: string
  ) {}

  getAddressLine1(): string {
    return this.addressLine1;
  }

  getAddressLine2(): string {
    return this.addressLine2;
  }

  getAddressLine3(): string {
    return this.addressLine3;
  }

  getCity(): string {
    return this.city;
  }

  getState(): string {
    return this.state;
  }

  getZip(): string {
    return this.zip;
  }

  getCountry(): string {
    return this.country;
  }
}
