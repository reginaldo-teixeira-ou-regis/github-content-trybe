import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <section>
        <h1 className="text-center">Bem vindo</h1>
        <h2>{userLogin.email}</h2>
        <Link to="/register">Cadastre outros</Link>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  userLogin: state.login,
});

About.propTypes = {
  userLogin: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(About);
