function gradesFromAtoF(grades) {

    let finalGrades = 0;

    if(grades >= 0 && grades < 50) {
        return finalGrades = "F";
    } else if(grades >= 50 && grades < 60) {
        return finalGrades = "E";
    } else if(grades >= 60 && grades < 70) {
        return finalGrades = "D";
    } else if(grades >= 70 && grades < 80) {
        return finalGrades = "C";
    } else if(grades >= 80 && grades < 90) {
        return finalGrades = "B";
    } else if(grades >= 90 && grades <= 100) {
        return finalGrades = "A";
    } else {
        return finalGrades = "ERROR, digite sua nota corretamente.";
    }
}
console.log(gradesFromAtoF(95));
console.log(gradesFromAtoF(88));
console.log(gradesFromAtoF(71));
console.log(gradesFromAtoF(66));
console.log(gradesFromAtoF(57));
console.log(gradesFromAtoF(23));
console.log(gradesFromAtoF(-20));
console.log(gradesFromAtoF(120));