function invertWord(word) {

    let invertedWord = "";

    for(let i = word.length - 1; i >= 0; i--) {
        invertedWord = invertedWord + word[i];
    }
    return invertedWord;
}
console.log(invertWord("trybe"));
console.log(invertWord("Reginaldo"));
console.log(invertWord("banana"));
console.log(invertWord("ksuejsj"));
console.log(invertWord(1,2,3,4,5,6,7,8));
console.log(" ");
//---------------------------------------
//Outro jeito de resolver:
let word1 = 'tryber';
let reverseWord = '';

reverseWord = word1.split('').reverse().join('');

console.log(reverseWord);