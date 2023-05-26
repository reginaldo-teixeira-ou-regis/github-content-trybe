let candidatePerson = "lista";

switch(candidatePerson) {
    case "aprovada":
        console.log("A pessoa candidata foi APROVADA");
        break;

    case "lista":
        console.log("A pessoa candidata esta na LISTA DE ESPERA");
        break;

    case "reprovada":
        console.log("A pessoa candidata foi REPROVADA");
        break;

    default:
        console.log("não se aplica");
        break;
}