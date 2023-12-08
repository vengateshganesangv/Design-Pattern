export class BusinessHours {
  constructor(
    private readonly startTime: Date,
    private readonly endTime: Date
  ) {}

  getStartTime(): Date {
    return this.startTime;
  }

  getEndTime(): Date {
    return this.endTime;
  }
}
