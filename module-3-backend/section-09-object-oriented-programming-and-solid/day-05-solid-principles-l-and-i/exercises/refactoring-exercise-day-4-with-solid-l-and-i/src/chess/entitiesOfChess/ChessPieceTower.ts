/* eslint-disable class-methods-use-this */
import ChessPiece from './ChessPiece';

export default class ChessPieceTower extends ChessPiece {
  constructor(color: 'white' | 'black') {
    super(color, 'tower');
  }

  move(): void {
    console.log('linha reta');
  }

  getValue(): number {
    return 5;
  }
}