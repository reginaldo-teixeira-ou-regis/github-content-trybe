import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addCustomer as addCustomerAction } from '../redux/actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };

    this.handleClickRegister = this.handleClickRegister.bind(this);
  }

  handleClickRegister(e) {
    e.preventDefault();
    const { name, age, email } = this.state;
    const { dispatch } = this.props;
    dispatch(addCustomerAction({ name, age, email }));
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <h3 className="text-center">Cadastro de Clientes</h3>
        <form onSubmit={ this.handleClickRegister }>
          <div>
            <input
              type="text"
              placeholder="Nome"
              data-testid="input-register-nome"
              value={ name }
              onChange={ (e) => this.setState({ name: e.target.value }) }
            />
            <input
              type="number"
              placeholder="Idade"
              data-testid="input-register-idade"
              value={ age }
              onChange={ (e) => this.setState({ age: e.target.value }) }
            />
            <input
              type="text"
              placeholder="Email"
              data-testid="input-register-email"
              value={ email }
              onChange={ (e) => this.setState({ email: e.target.value }) }
            />
          </div>
          <button
            className="register-button grow"
            type="submit"
          >
            Registrar Cliente

          </button>
        </form>
        <div className="link">
          <Link to="/customers">Ver usuários cadastrados</Link>
        </div>
        <div className="link">
          <Link to="/about">Perfil</Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userLogin: state.login,
});
// const mapDispatchToProps = (dispatch) => ({
//   addCustomer: (e) => dispatch(addCustomerAction(e)),
// });

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userLogin: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Register);
