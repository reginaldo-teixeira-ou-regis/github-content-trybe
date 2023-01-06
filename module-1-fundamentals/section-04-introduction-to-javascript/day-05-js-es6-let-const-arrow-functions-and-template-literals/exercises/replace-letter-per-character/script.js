const replaceLetterPerCharacter = (name) => {
    const phrase = 'Tryber x aqui!';
    return phrase.replace('x', name);
}
console.log(replaceLetterPerCharacter('Reginaldo'));
console.log(' ');

const mySkills = (replaceLetterPerCharacter) => {
    let concat;
    const skills = ['JavaScript', 'HTML', 'CSS'];
    return concat = `${replaceLetterPerCharacter}
    
Minhas três principais habilidades são:
    
${skills[0]}
${skills[1]}
${skills[2]}`;
}
console.log(mySkills(replaceLetterPerCharacter('Reginaldo')));