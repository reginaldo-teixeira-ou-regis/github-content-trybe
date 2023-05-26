let percentageRateINSS = 0;
let percentageRateIR = 0;
let installmentsIR = 0;
let aliquotINSS = 0;
let baseSalary = 0;
let valueIR = 0;
let liquidSalary = 0;

function calculateLiquidSalary(grossSalary) {

    if(grossSalary >= 0 && grossSalary <= 1556.94) {
        percentageRateINSS = 8;
        aliquotINSS = (percentageRateINSS * grossSalary) / 100;
        baseSalary = grossSalary - aliquotINSS;
        valueIR = 0;
        liquidSalary = baseSalary - valueIR;
        return liquidSalary.toFixed(2);
    } else if(grossSalary > 1556.94 && grossSalary <= 2594.92) {
        percentageRateINSS = 9;
        aliquotINSS = (percentageRateINSS * grossSalary) / 100;
        baseSalary = grossSalary - aliquotINSS;
        if(baseSalary > 0 && baseSalary <= 1903.98) {
            valueIR = 0;
        } else if(baseSalary > 1903.98 && baseSalary <= 2826.65) {
            percentageRateIR = 7.5;
            installmentsIR = 142.80;
            valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
        }
        liquidSalary = baseSalary - valueIR;
        return liquidSalary.toFixed(2);
    } else if(grossSalary > 2594.92 && grossSalary <= 5189.82) {
        percentageRateINSS = 11;
        aliquotINSS = (percentageRateINSS * grossSalary) / 100;
        baseSalary = grossSalary - aliquotINSS;
        if(baseSalary > 1903.98 && baseSalary <= 2826.65) {
            percentageRateIR = 7.5;
            installmentsIR = 142.80;
            valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
        } else if(baseSalary > 2826.65 && baseSalary <= 3751.05) {
            percentageRateIR = 15;
            installmentsIR = 354.80;
            valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
        } else if(baseSalary > 3751.05 && baseSalary <= 4664.68) {
            percentageRateIR = 22.5;
            installmentsIR = 636.13;
            valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
        } else if(baseSalary > 4664.68) {
            percentageRateIR = 27.5;
            installmentsIR = 869.36;
            valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
        }
        liquidSalary = baseSalary - valueIR;
        return liquidSalary.toFixed(2);
    } else if(grossSalary > 5189.82) {
        let aliquotINSSmax = 570.88;
        baseSalary = grossSalary - aliquotINSSmax;
        percentageRateIR = 27.5;
        installmentsIR = 869.36;
        valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
        liquidSalary = baseSalary - valueIR;
        return liquidSalary.toFixed(2);
    } else {
        return "ERROR, digite seu salario bruto corretamente";
    }
}
console.log(calculateLiquidSalary(3000.00)); //R$ 2.612,55.
console.log(calculateLiquidSalary(0));
console.log(calculateLiquidSalary(-500.00));
console.log(calculateLiquidSalary(1512.76));
console.log(calculateLiquidSalary(1987.53));
console.log(calculateLiquidSalary(5070.08));
console.log(calculateLiquidSalary(10789.21));

/*let percentageRateINSS = 0;
let percentageRateIR = 0;
let installmentsIR = 0;
let aliquotINSS = (percentageRateINSS * grossSalary) / 100;
let baseSalary = grossSalary - aliquotINSS;
let valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
let liquidSalary = baseSalary - valueIR;
function taxIR(baseSalary) {
    if(baseSalary > 0 && baseSalary <= 1903.98) {
        return valueIR = 0;
    } else if(baseSalary > 1903.98 && baseSalary <= 2826.65) {
        percentageRateIR = 7.5;
        installmentsIR = 142.80;
        return valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
    } else if(baseSalary > 2826.65 && baseSalary <= 3751.05) {
        percentageRateIR = 15;
        installmentsIR = 354.80;
        return valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
    } else if(baseSalary > 3751.05 && baseSalary <= 4664.68) {
        percentageRateIR = 22.5;
        installmentsIR = 636.13;
        return valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
    } else if(baseSalary > 4664.68) {
        percentageRateIR = 27.5;
        installmentsIR = 869.36;
        return valueIR = ((percentageRateIR * baseSalary) / 100) - installmentsIR;
    } else {
        return "ERROR, digite seu salario bruto corretamente";
    }
}*/