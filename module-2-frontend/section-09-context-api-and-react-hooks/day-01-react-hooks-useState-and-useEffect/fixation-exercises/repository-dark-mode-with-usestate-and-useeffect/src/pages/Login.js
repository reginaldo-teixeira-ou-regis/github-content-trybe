import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../assets/trybe-negativo-preferencial.png';

function Login({ git, history }) {
  const [login, setLogin] = useState({ username: '', password: '', error: null });
  const [isLoading, setIsLoading] = useState(false);
  const { setGitData } = git;

  const isFilled = !!(login.username && login.password);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const data = await fetch(`https://api.github.com/users/${login.username}`);

      if (!data.ok) {
        const newError = await data.json();
        throw newError.message;
      }

      const json = await data.json();
      setGitData(json);

      history.push('/home');
    } catch (error) {
      setLogin({ username: '', password: '', error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
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

export default Login;
