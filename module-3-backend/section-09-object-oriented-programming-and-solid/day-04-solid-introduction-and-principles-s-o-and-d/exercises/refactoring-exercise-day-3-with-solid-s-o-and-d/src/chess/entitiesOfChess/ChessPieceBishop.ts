/* eslint-disable class-methods-use-this */
import ChessPiece from './ChessPiece';

export default class ChessPieceBishop extends ChessPiece {
  constructor(color: 'white' | 'black') {
    super(color, 'bishop');
  }

  move(): void {
    console.log('diagonal');
  }

  getValue(): number {
    return 3;
  }
}