const urgent = document.querySelectorAll(".emergency-tasks");

for(let i = 0; i < urgent.length; i += 1) {
    urgent[i].style.backgroundColor = "rgb(247, 126, 126)";
}

const nonUrgent = document.querySelectorAll(".no-emergency-tasks");

for(let i = 0; i < nonUrgent.length; i += 1) {
    nonUrgent[i].style.backgroundColor = "rgb(255, 244, 94)";
}

document.querySelector("#header-container").style.backgroundColor = "rgb(33, 187, 72)";

const h3Format = document.querySelectorAll("h3");

for(let i = 0; i < h3Format.length; i += 1) {
    h3Format[0].style.backgroundColor = "purple";
    h3Format[1].style.backgroundColor = "purple";
    h3Format[2].style.backgroundColor = "black";
    h3Format[3].style.backgroundColor = "black";
}