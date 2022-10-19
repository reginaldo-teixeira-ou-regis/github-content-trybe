import React from 'react';

/* export const name = "Reginaldo Teixeira";
export const description = "Um grande xeeeenioooo!";
export const skills = ['JS', 'HTML', 'JEST', 'DOM', 'JSX'];
export const listUl = skills.map((skill) => <li>{skill}</li>) */

const name = "Reginaldo Teixeira";
const description = "Um grande xeeeenioooo!";
const skills = ['JS', 'HTML', 'JEST', 'DOM', 'JSX'];
const listUl = skills.map((skill) => <li>{skill}</li>)

const Forms = () => {
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Minhas Habilidades</h2>
      <ul>{listUl}</ul>
    </>
  );
};
export default Forms