const toAgree2 = document.getElementById("to-agree-2");
const form = document.getElementById("form");

function disabledSubmit (event) {
  if (toAgree2.checked) {
    alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
  } else {
    alert("Dados inválidos ou você precisa concordar com os termos de uso!");
    event.preventDefault()
  }
}

form.addEventListener("submit", disabledSubmit);
 
/* function submitDoesNothing(event) {
  if (toAgree2 !== checked) {
    event.preventDefault();
    alert("Dados Inválidos");
    buttonSubmit = disabled;
  } else {
    buttonSubmit.addEventListener("click", submitDoesNothing);
    alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
  }
} */

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