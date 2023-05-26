import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/pageNotFound.css';

class PageNotFound extends Component {
  goBackHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div className="not-found">
        <h2>
          Page requested not found
          <span role="img" aria-label="Crying emoji"> 😭 </span>
        </h2>
        <img
          className="not-found-image"
          src="https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"
          alt="Pikachu crying because the page requested was not found"
        />
        <button
          className="btnComeBack"
          type="button"
          onClick={ this.goBackHome }
        >
          <h3>BACK FOR HOME PAGE</h3>
        </button>
      </div>
    );
  }
}

PageNotFound.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default PageNotFound;
