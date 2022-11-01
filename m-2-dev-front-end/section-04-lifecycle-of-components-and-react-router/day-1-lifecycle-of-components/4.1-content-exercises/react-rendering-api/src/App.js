import { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    person: [],
    loading: true,
  }

  fetchRandomPerson = async () => {
    const RandomPerson = await fetch('https://api.randomuser.me/');
    const objPerson = await RandomPerson.json();
    return this.setState({
      person: objPerson.results,
      loading: false,
    });
  };

  componentDidMount() {
    this.fetchRandomPerson();
  }

  render() {
    const { loading, person: { name, email, age, image } } = this.props;
    if (loading) return <div>Carregando...</div>;
    return (
      <>
        <h3>Dados Pessoais</h3>
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{age}</p>
          <img src={ image } alt={ name } />
        </div>
      </>
    );
  }
}

export default App;

App.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};
