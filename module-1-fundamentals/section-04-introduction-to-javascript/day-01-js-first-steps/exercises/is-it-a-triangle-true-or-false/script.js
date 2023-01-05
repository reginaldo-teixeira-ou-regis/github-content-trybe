let sideOfTriangleA = 60;
let sideOfTriangleB = 20;
let sideOfTriangleC = 100;
let triangle = true;
let sAddition = sideOfTriangleA + sideOfTriangleB + sideOfTriangleC;

if(sAddition < 0) {
    triangle = "ERROR";
} else if(sAddition !== 180) {
    triangle = false;
} else if(sAddition === 180) {
    triangle = true;
}
console.log(triangle);