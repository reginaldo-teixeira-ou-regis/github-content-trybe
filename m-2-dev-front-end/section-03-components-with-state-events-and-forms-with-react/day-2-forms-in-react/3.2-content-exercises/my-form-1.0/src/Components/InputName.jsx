import { Component } from "react";

class InputName extends Component {
  render() {
    const { state: {name}, handleChange } = this.props;
    const LIMIT_CARACTERES = 30;
    return (
      <label htmlFor="name">
        Nome: <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome:"
          value={name}
          onChange={handleChange}
        />
        { !name ? 'O nome precisa ser preenchido' : ''}
        { name.length > LIMIT_CARACTERES
          ? 'O nome não pode ter mais que 30 caracteres' : ''}
      </label>
    );
  }
}

export default InputName;
