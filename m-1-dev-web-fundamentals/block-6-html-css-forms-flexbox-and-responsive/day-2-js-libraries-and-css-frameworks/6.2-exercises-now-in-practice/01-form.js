const buttonSubmit = document.querySelector("#submit-btn");
const toAgree2 = document.getElementById("to-agree-2");
const fullName = document.getElementById("full-name");
const date = document.getElementById("date");

function submitDoesNothing(event) {
  if (toAgree2.checked && fullName === required && date === required) {
    alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
  } else {
    event.preventDefault();
    alert("Dados Inválidos");
    buttonSubmit = disabled;
  }
}
buttonSubmit.addEventListener("click", submitDoesNothing);

/* function textInputValidation() { //limitar caracteres pelo js
  const email = document.querySelector("#e-mail").value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector("#full-name").value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector("#type-answer").value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  } else {
    return true;
  }
} */