import { Component } from "react";

class InputEmail extends Component {
  render() {
    const {state: {email}, handleChange} = this.props;
    return (
      <label htmlFor="email">
        Email: <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email:"
          value={email}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default InputEmail;
