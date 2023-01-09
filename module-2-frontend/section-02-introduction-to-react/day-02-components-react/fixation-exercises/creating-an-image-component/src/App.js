import React from 'react';
import staringCat from './staringCat.jpg';
import Image from './Image';

class App extends React.Component {
  render() {
    return (
      <main>
        <Image source={ staringCat } alternativeText="Cute cat staring" />
      </main>
    );
  }
}

export default App;