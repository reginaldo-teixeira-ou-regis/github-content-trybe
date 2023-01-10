import React, { useState } from 'react';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  const [hideNav, setHideNav] = useState(false);
  return (
    <div className="App">
      {!hideNav && (
        <nav>
          <NavLink className="link" to="/" activeClassName="active" exact>
            Home
          </NavLink>
          <NavLink className="link" to="/about" activeClassName="active" exact>
            About
          </NavLink>
        </nav>
      )}
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => {
            setHideNav(false);
            return <Pokedex { ...props } pokemonList={ pokemonList } />;
          } }
        />
        <Route
          exact
          path="/about"
          render={ (propsRouter) => {
            setHideNav(false);
            return <About { ...propsRouter } />;
          } }
        />
        <Route
          path="/pokemon/:id"
          render={ (propsRouter) => {
            setHideNav(false);
            return (
              <PokemonDetails
                hideLink
                { ...propsRouter }
                pokemons={ pokemonList }
              />
            );
          } }
        />
        <Route
          render={ (propsRouter) => {
            setHideNav(true);
            return <PageNotFound { ...propsRouter } />;
          } }
        />
      </Switch>
    </div>
  );
}

export default App;
