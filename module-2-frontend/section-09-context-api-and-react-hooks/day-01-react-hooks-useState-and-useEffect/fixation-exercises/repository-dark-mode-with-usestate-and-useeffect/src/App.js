import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';

function App() {
  const [dark, setDark] = useState(true);
  const [gitData, setGitData] = useState(null);

  return (
    <div className={ dark ? 'App__Dark' : 'App__Light' }>
      <Header state={ { dark, setDark } } />
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Login { ...props } git={ { gitData, setGitData } } />) }
        />
        <Route
          path="/home"
          render={ (props) => (<Home { ...props } git={ { gitData, setGitData } } />) }
        />
        <Route path="*" component={ PageNotFound } exact />
      </Switch>
    </div>
  );
}

export default App;
