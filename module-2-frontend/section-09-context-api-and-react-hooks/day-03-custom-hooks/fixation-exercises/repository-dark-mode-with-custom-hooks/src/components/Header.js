import React, { useContext } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import AppContext from '../context/AppContext';

function Header() {
  const { dark, setDark } = useContext(AppContext);

  return (
    <header>
      <div
        className="theme"
        onClick={ () => setDark(!dark) }
        role="presentation"
      >
        {dark
          ? <BsSunFill style={ { color: 'yellow' } } />
          : <BsMoonFill /> }
      </div>
    </header>
  );
}

export default Header;
