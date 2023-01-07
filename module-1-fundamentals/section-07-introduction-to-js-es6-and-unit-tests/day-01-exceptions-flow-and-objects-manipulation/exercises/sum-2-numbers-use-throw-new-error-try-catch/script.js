const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const resultSun = document.getElementById("result");

const treatSumError = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error("Preencha os dois campos para realizar a soma");
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error("Digite apenas números para realizar a soma");
  }
}

const sum = () => {
  try {
    treatSumError(value1.value, value2.value);
    const result = parseInt(value1.value) + Number(value2.value);
    resultSun.innerHTML = `Resultado: ${result}`;
  } catch (error) {
    resultSun.innerHTML = `Erro: ${error.message}`;
  } finally {
    value1.value = ""; // Apagar os valores do elemento que possui o id value1
    value2.value = ""; // Apagar os valores do elemento que possui o id value2
  }
}

window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", sum);
};