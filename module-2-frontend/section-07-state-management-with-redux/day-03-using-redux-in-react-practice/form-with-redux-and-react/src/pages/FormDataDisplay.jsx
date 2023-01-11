import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const {
      name, email, CPF, address, city, uf, curriculum, job, description,
    } = this.props;
    return (
      <section className="box column is-half is-offset-one-quarter">
        <h1 className="title">Dados Enviados</h1>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { CPF }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </section>
    );
  }
}

FormDataDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  CPF: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired,
};

const mapStateToProps = (globalState) => ({
  ...globalState.personalReducer.personal,
  ...globalState.professionalReducer.professional });

export default connect(mapStateToProps)(FormDataDisplay);
