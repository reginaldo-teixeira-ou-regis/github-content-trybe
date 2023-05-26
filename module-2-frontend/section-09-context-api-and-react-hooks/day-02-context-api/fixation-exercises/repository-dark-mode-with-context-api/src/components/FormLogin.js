import React, { useState, useContext } from 'react';
import '../styles/Login.css';
import logo from '../assets/trybe-negativo-preferencial.png';
import { AuthContext } from '../context/AuthProvider';

export default function FormLogin() {
  const [login, setLogin] = useState({ username: '', password: '' });
  const { fetchData, isLoading } = useContext(AuthContext);

  const isFilled = !!(login.username && login.password);

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    await fetchData(login.username);
  };

  return (
    <div className="Login">
      <div className="Login__Container">
        <img src={ logo } alt="logo trybe" width="120" />
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={ login.username }
            onChange={ handleChange }
          />
          <small style={ { color: 'red' } } />
        </label>
        <label htmlFor="password" id="password">
          <input
            type="password"
            placeholder="password"
            value={ login.password }
            onChange={ handleChange }
            name="password"
          />
        </label>

        <button
          type="button"
          disabled={ !isFilled }
          onClick={ handleSubmit }
        >
          {isLoading ? 'carregando ...' : 'Entrar'}
        </button>
      </div>
    </div>
  );
}
