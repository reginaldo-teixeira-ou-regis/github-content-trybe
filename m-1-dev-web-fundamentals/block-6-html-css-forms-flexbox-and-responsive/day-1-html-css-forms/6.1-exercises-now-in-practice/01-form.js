const buttonSubmit = document.querySelector('#submit-btn');
const toAgree2 = document.getElementById('to-agree-2');

function submitDoesNothing (event) {
    if(toAgree2 !== toAgree2.checked) {
        event.preventDefault();
        alert('Dados Inválidos');
        return;
    } else {
        buttonSubmit.disabled = toAgree2.checked;
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
}
buttonSubmit.addEventListener('click', submitDoesNothing);

/* function enableSubmit() {
    const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
  }
 */
