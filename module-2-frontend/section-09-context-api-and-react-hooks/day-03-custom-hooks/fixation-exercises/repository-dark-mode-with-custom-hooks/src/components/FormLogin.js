import React, { useState, useContext, useEffect } from 'react';
import '../styles/Login.css';
import { useHistory } from 'react-router-dom';
import logo from '../assets/trybe-negativo-preferencial.png';
import { AuthContext } from '../context/AuthProvider';

export default function FormLogin() {
  const [login, setLogin] = useState({ username: '', password: '' });
  const { isLoading, performLogin, errors, gitData } = useContext(AuthContext);
  const history = useHistory();

  const isFilled = !!(login.username && login.password);

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    performLogin(login.username);
  };

  useEffect(() => {
    console.log('GIT-DATA', gitData);
    if (gitData) {
      history.push('/home');
    }
  }, [history, gitData]);

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
        <div className='Error__login'>
          { errors && `${errors.message}` }
        </div>
      </div>
    </div>
  );
}
