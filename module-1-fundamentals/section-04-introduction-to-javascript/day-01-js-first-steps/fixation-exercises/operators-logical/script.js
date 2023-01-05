const currentHour = 17;
let message = "";

if(currentHour >= 22 && currentHour <= 24) {
    message = "Não deveríamos comer nada, é hora de dormir.";
} else if(currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if(currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if(currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if(currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado.";
} else if(currentHour >= 1 && currentHour < 4) {
    message = "Ainda é muito cedo, vou voltar a dormir.";
} else {
    message = "ERROR, esse horario não existe.";
}
console.log(message);

let weekDay = "quarta-feira";
let weekDays = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"];
let weekend = ["sabado", "domingo"];

if(weekDay === weekDays[0] || weekDay === weekDays[1] || weekDay === weekDays[2] || weekDay === weekDays[3] || weekDay === weekDays[4]) {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if(weekDay === weekend[0] || weekDay === weekend[1]) {
    console.log("FINALMENTE, descanso merecido UwU");
} else {
    console.log("ERROR");
}