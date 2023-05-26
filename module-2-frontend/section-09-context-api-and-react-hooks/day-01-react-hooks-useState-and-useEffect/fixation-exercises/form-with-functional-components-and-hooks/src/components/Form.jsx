import React, { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [module, setModule] = useState();

  return (
    <div>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="fullName">
          <span>Nome Completo: </span>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
          />
        </label>
        <br />
        <label htmlFor="age">
          <span>Idade: </span>
          <input
            type="number"
            id="age"
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <br />
        <label htmlFor="location">
          <span>Cidade/UF: </span>
          <input
            type="text"
            id="location"
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          />
        </label>
        <br />
      </fieldset>
      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={module === "Fundamentos"}
            onChange={({ target }) => setModule(target.value)}
          />
          Fundamentos
        </label>
        <br />
        <label htmlFor="frontend">
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={module === "Front-end"}
            onChange={({ target }) => setModule(target.value)}
          />
          Front-end
        </label>
        <br />
        <label htmlFor="backend">
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === "Back-end"}
            onChange={({ target }) => setModule(target.value)}
          />
          Back-end
        </label>
        <br />
        <label htmlFor="cs">
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={module === "Ciência da computação"}
            onChange={({ target }) => setModule(target.value)}
          />
          Ciência da Computação
        </label>
      </fieldset>
      <br />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log("Click!");
        }}
      >
        Enviar
      </button>
    </div>
  );
}

export default Form;
