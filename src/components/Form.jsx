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
          Nome:
          <input
            value={ cardName }
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="textarea">
          Descrição:
          <textarea
            value={ cardDescription }
            data-testid="description-input"
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="attr1">
          Atributo 1:
          <input
            value={ cardAttr1 }
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="attr1"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="attr2">
          Atributo 2:
          <input
            value={ cardAttr2 }
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="attr2"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="attr3">
          Atributo 3:
          <input
            value={ cardAttr3 }
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="attr3"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="image">
          Foto:
          <input
            value={ cardImage }
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="image"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="select">
          Tipo:
          <select
            value={ cardRare }
            data-testid="rare-input"
            name="cardRare"
            id="select"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="trunfo">
          Super Trunfo?
          {hasTrunfo ? (
            <h3>Você já tem um Super Trunfo em seu baralho</h3>
          ) : (
            <input
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              id="trunfo"
              onChange={ onInputChange }
            />
          )}
          <br />
          <br />
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
