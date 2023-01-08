const getDogButton = document.querySelector("#random-dog");
const getCatButton = document.querySelector("#random-cat");
const surpriseMeButton = document.querySelector("#surprise-me");
const petImage = document.querySelector("#random-pet-image");

getDogButton.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message;

      petImage.src = petURL;
    });
});

getCatButton.addEventListener("click", () => {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.file;

      petImage.src = petURL;
    });
});

surpriseMeButton.addEventListener("click", () => {
  Promise.any([
    fetch("https://aws.random.cat/meow"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.file || data.message;

      petImage.src = petURL;
    });
});
