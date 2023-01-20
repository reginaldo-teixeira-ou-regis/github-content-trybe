import React from 'react';
import PropTypes from 'prop-types';

function PersonCard(props) {
  const { person: { name, picture } } = props;

  return (
    <figure>
      <figcaption>
        <h2>{ `${name.first} ${name.last}` }</h2>
      </figcaption>
      <img src={ picture.large } alt="thumbnail" />
    </figure>
  );
}

PersonCard.propTypes = {
  person: PropTypes.shape().isRequired,
};

export default PersonCard;
