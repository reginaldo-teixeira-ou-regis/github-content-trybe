import React from 'react';
import PropTypes from 'prop-types';

function User({ customer, deleteCustomer, index }) {
  return (
    <div>
      <p data-testid="client-name">
        Nome:
        {customer.name}
      </p>
      <p data-testid="client-age">
        Idade:
        {customer.age}
      </p>
      <p data-testid="client-email">
        Email:
        {customer.email}
      </p>
      <button
        type="button"
        className="delete grow"
        data-testid={ `button-remove-${index + 1}` }
        onClick={ () => deleteCustomer(customer) }
      >
        Excluir
      </button>
    </div>
  );
}

User.propTypes = {
  deleteCustomer: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  customer: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;
