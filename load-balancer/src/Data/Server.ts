export class Server {
  constructor(
    private _id: number,
    private _isHealthy: boolean,
    private _load: number = 0
  ) {}

  public get isHealthy(): boolean {
    return this._isHealthy;
  }

  public get id(): number {
    return this._id;
  }

  public get load(): number {
    return this._load;
  }

  public set load(value: number) {
    this._load = value;
  }
}
