import { Component } from 'react';

class App extends Component {
  state = {
    person: [],
    loading: true,
  }

  fetchRandomPerson = async () => {
    const RandomPerson = await fetch('https://api.randomuser.me/');
    const objPerson = await RandomPerson.json();
    return this.setState({
      person: objPerson.results[0],
      loading: false,
    });
  };

  componentDidMount() {
    this.fetchRandomPerson();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return nextState.person.dob.age < 50;
  }

  render() {
    const { loading, person: { name, email, dob, picture } } = this.state;
    if (loading) return <div>Carregando...</div>;
    return (
      <>
        <h3>Dados Pessoais</h3>
        <div>
          <p>{name.first}</p>
          <p>{email}</p>
          <p>{dob.age}</p>
          <img src={ picture.medium } alt={ name.first } />
        </div>
      </>
    );
  }
}

export default App;
