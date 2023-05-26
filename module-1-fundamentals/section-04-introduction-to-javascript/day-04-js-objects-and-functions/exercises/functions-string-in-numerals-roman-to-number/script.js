const numbersRoman = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  
  function romanToDecimal(number) {
    number = number.toLowerCase();
    const numberLength = number.length;
    let sum = numbersRoman[number[numberLength - 1]];
    let current = numbersRoman[number[numberLength - 1]];
  
    for (let index = 2; index <= numberLength; index += 1) {
        
      const next = numbersRoman[number[numberLength - index]];
      
      if (current <= next) {
        sum += next;
      } else {
        sum -= next;
      }
      current = next;
    }
    return sum;
  }
  console.log(romanToDecimal('MMXVIII')); // 2018
  console.log(romanToDecimal('VI')); // 6
  console.log(romanToDecimal('IV')); // 4