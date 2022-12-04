import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h5 data-testid="description-card">{cardDescription}</h5>
        <h5 data-testid="attr1-card">{ cardAttr1 }</h5>
        <h5 data-testid="attr2-card">{ cardAttr2 }</h5>
        <h5 data-testid="attr3-card">{ cardAttr3 }</h5>
        <h5 data-testid="rare-card">{ cardRare }</h5>
        { cardTrunfo ? <h5 data-testid="trunfo-card">Super Trunfo</h5> : '' }
      </>
    );
  }
}

export default Card;

Card.propTypes = {
  cardAttr2: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
