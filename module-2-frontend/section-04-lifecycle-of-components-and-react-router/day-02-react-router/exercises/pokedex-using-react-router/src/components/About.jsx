import { Component } from 'react';
import '../styles/about.css';

class About extends Component {
  render() {
    const URL = 'https://archives.bulbagarden.net/media/upload/8/86/Gen_I_Pok%C3%A9dex.png';
    return (
      <section>
        <h1>About Pokédex</h1>
        <main>
          <p className="textAbout">
            The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia)
            is an invaluable tool to Trainers in the Pokémon world.
            It gives information about all Pokémon in the world that are contained
            in its database, although it differs in how it acquires and presents
            information over the different media.
            However, they are also only given to a few Trainers at a time, generally
            to the ones that are felt to have exceptional potential and skill.
            <br />
            <br />
            One can filter Pokémon by type, and see more details for each one of them.
          </p>
          <img
            className="pokedex-image"
            src={ URL }
            alt="Pokedex"
          />
        </main>
      </section>
    );
  }
}

export default About;
