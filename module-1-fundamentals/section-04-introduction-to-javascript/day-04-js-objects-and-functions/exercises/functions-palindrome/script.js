function palindrome(string) {

    let invertedWord = string.split('').reverse().join('');

    if (invertedWord === string) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome("arara"));
console.log(palindrome("banana"));
console.log(palindrome("ana"));
console.log(palindrome("xrxrx"));
console.log(palindrome("kdjeheh"));
console.log(palindrome("010"));