// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function xxxx (event) {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', xxxx);
INPUT_CHECKBOX.addEventListener('click', xxxx);

INPUT_TEXT.addEventListener("keypress", (event2) => {
  const keyName = event2.key;
    if(keyName !== "a") {
        event2.preventDefault();
    }
});