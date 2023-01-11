import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomerList from '../components/CustomerList';
import { deleteCustomer as deleteCustomerAction } from '../redux/actions';

class Customers extends React.Component {
  handleDeleteCustomer = (e) => {
    const { dispatch } = this.props;
    dispatch(deleteCustomerAction(e));
  }

  render() {
    const { customers, userLogin } = this.props;
    if (!userLogin.email) return <h1>Login não efetuado!</h1>;
    if (!customers.length) {
      return (
        <div>
          <h1 className="none-client">Nenhum cliente cadastrado</h1>
          <div className="link">
            <Link to="/register">Cadastre agora!</Link>
          </div>
          <div className="link">
            <Link to="/about">Perfil</Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="link">
          <Link to="/register">Cadastre outros!</Link>
        </div>
        <div>
          <CustomerList
            customers={ customers }
            deleteCustomer={ this.handleDeleteCustomer }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers,
  userLogin: state.login,
});

// const mapDispatchToProps = (dispatch) => ({
//   deleteCustomer: (e) => dispatch(deleteCustomerAction(e)),
// });

Customers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userLogin: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  customers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Customers);
