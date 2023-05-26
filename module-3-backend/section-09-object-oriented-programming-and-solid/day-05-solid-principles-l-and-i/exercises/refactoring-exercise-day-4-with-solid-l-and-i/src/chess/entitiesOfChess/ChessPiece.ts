export default abstract class ChessPiece {
  private color: 'white' | 'black';
  private type: 'bishop' | 'tower';

  constructor(
    color: 'white' | 'black',
    type: 'bishop' | 'tower',
  ) {
    this.color = color;
    this.type = type;
  }

  public abstract move(): void;
  public abstract getValue(): number;

  public getColor() {
    return this.color;
  }

  public getType() {
    return this.type;
  }
}