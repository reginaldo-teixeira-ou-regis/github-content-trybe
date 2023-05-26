import ChessPiece from './entitiesOfChess/ChessPiece';
import ChessPieceBishop from './entitiesOfChess/ChessPieceBishop';
import ChessPieceTower from './entitiesOfChess/ChessPieceTower';

const whiteBishop = new ChessPieceBishop('white');
const blackTower = new ChessPieceTower('black');
console.log(whiteBishop, blackTower);

function movePiece(peca: ChessPiece) {
  peca.move();
  peca.getColor();
}

movePiece(whiteBishop);
movePiece(blackTower);