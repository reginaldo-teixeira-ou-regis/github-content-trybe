const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Vazio!';

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name,
    });
  }

  return technologyList;
};
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
console.log(' ');
console.log(techList([], "Lucas"));

module.exports = techList;
