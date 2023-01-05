function chessPieceMove(piece) {
    let move = "";

    if(typeof piece === "number") {
        return move = "Error, essa peça é inválida.";
    } else if(piece.toLowerCase() == "peão") {
        return move = "Mover-se a uma casa a frente caso não estiver ocupada.";
    } else if(piece.toLowerCase() == "bispo") {
        return move = "Mover-se em uma linha reta diagonalmente por quantas casas não ocupadas quiser.";
    } else if(piece.toLowerCase() == "torre") {
        return move = "Mover-se em linha reta horizontalmente ou verticalmente pelo número de casas não ocupadas.";
    } else if(piece.toLowerCase() == "cavalo") {
        return move = "Mover-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto (o famoso movimento em L).";
    } else if(piece.toLowerCase() == "rainha") {
        return move = "Mover-se em linha reta - verticalmente, horizontalmente ou diagonalmente por quantas casas não ocupadas quiser.";
    } else if(piece.toLowerCase() == "rei") {
        return move = "Mover-se uma casa em qualquer direção(horizontalmente, verticalmente ou diagonalmente) que não estiverem ocupadas.";
    } else {
        return move = "Error, essa peça é inválida.";
    }
}
console.log(chessPieceMove("Peão"));
console.log(" ");
console.log(chessPieceMove("BISPO"));
console.log(" ");
console.log(chessPieceMove("torre"));
console.log(" ");
console.log(chessPieceMove("caValo"));
console.log(" ");
console.log(chessPieceMove("rainha"));
console.log(" ");
console.log(chessPieceMove("reI"));
console.log(" ");
console.log(chessPieceMove("Reiginaldo"));
console.log(" ");
console.log(chessPieceMove(100));
console.log(" ");
console.log(chessPieceMove("888"));