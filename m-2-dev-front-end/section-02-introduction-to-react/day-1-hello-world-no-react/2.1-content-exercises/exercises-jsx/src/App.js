import React from 'react';
import Forms from './About';
/* import { name, description, listUl } from './About'; */

class App extends React.Component {
  render() {
    return (
      <>
        {Forms()}
        {/* <h1>{name}</h1>
        <p>{description}</p>
        <h2>Minhas Habilidades</h2>
      <ul>{listUl}</ul> */}
      </>
    );
  }
}
export default App;
