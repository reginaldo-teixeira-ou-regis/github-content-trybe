import { Component } from "react";
import InputName from "./InputName";
import InputEmail from "./InputEmail";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      favoritePlace: "cidade",
      description: "",
      agreeWithTerms: false,
      formWithError: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    /* this.handleInputChange = this.handleInputChange.bind(this); */
  }

  handleError() {
    const { name, email, favoritePlace, description, agreeWithTerms } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !favoritePlace.length,
      !description.length,
      !agreeWithTerms,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formWithError: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  /* handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  } */

  render() {
    const { /* name, email, */ favoritePlace, description, agreeWithTerms, formWithError } = this.state;
    return (
      <div>
        <fieldset onChange={this.handleError}>
          <InputName handleChange={this.handleChange} state={this.state} />
          {/* <label htmlFor="name">
            Nome: <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome:"
              value={name}
              onChange={this.handleChange}
            />
          </label> */}
          <br />
          <InputEmail handleChange={this.handleChange} state={this.state} />
          {/* <label htmlFor="email">
            Email: <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email:"
              value={email}
              onChange={this.handleChange}
            />
          </label> */}
          <br />
          <label>
            Escolha seu lugar favorito:
            <select
              name="favoritePlace"
              value={favoritePlace}
              onChange={this.handleChange}
            >
              <option value="campo">Campo</option>
              <option value="cidade">Cidade</option>
              <option value="montanha">Montanha</option>
              <option value="praia">Praia</option>
            </select>
          </label>
          <label>
            <br />
            Descrição: <br />
            <textarea
              name="description"
              placeholder="Fale um pouco sobre você:"
              value={description}
              onChange={this.handleChange}
            />
            { !description ? 'A descrição precisa ser preenchida' : ''}
          </label>
          <label>
            <br />
            Concordo com os termos:
            <input
              name="agreeWithTerms"
              type="checkbox"
              checked={agreeWithTerms}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="file">
            <br />
            <input
              type="file"
              name="file" />
          </label>
        </fieldset>
        { formWithError
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;
