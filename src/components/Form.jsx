import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          <input
            value={ cardName }
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="textarea">
          <textarea
            value={ cardDescription }
            data-testid="description-input"
            name="textarea"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          <input
            value={ cardAttr1 }
            data-testid="attr1-input"
            type="number"
            name="attr1"
            id="attr1"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          <input
            value={ cardAttr2 }
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id="attr2"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          <input
            value={ cardAttr3 }
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id="attr3"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          <input
            value={ cardImage }
            data-testid="image-input"
            type="text"
            name="image"
            id="image"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="select">
          <select
            value={ cardRare }
            data-testid="rare-input"
            name="select"
            id="select"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            id="trunfo"
            onChange={ onInputChange }
          />
          <button
            disabled={ isSaveButtonDisabled }
            type="button"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cadAttr2: PropTypes.string,
  cadDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
