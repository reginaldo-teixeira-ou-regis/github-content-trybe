let data = new Date();
let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
console.log(dataFormatada);
// saída: 8/7/2020

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
let data1 = new Date("12/31/2019");
let data1Formatada = ((data1.getDate() + " " + meses[(data1.getMonth())] + " " + data1.getFullYear()));
console.log(data1Formatada);
//saída: 31 Dez 2019

function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
let dataAtual = new Date("2020-1-29"); //29/01/2020
let dataAtualFormatada = (adicionaZero(dataAtual.getDate().toString()) + "/" + (adicionaZero(dataAtual.getMonth()+1).toString()) + "/" + dataAtual.getFullYear());
console.log(dataAtualFormatada);
// saída: 29/01/2020
let dataAtual2 = new Date("2020-10-2"); //02/10/2020
let dataAtualFormatada2 = (adicionaZero(dataAtual2.getDate().toString()) + "/" + (adicionaZero(dataAtual2.getMonth()+1).toString()) + "/" + dataAtual2.getFullYear());
console.log(dataAtualFormatada2);
// saída: 02/10/2020


/* const birthday = () => {
  If (date = ) {
    return 'Feliz Aniversario Danilo Vago!';
  }
  If (currentDay === 3 && currentMonth === 10) , 'Feliz Aniversario! Reginaldo Teixeira';

  If (currentDay === 3 && currentMonth === 10) , 'Feliz Aniversario Ana Dantas!'
  return 'Feliz Aniversário Trybers';
};*/

console.log(dataAtual2);