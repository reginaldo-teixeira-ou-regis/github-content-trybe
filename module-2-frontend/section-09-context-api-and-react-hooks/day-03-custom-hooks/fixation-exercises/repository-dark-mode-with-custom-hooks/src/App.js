import { Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';
import AppContext from './context/AppContext';

function App() {
  const { dark } = useContext(AppContext);

  return (
    <div className={ dark ? 'App__Dark' : 'App__Light' }>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Login { ...props } />) }
        />
        <Route
          path="/home"
          render={ (props) => (<Home { ...props } />) }
        />
        <Route path="*" component={ PageNotFound } exact />
      </Switch>
    </div>
  );
}

export default App;
