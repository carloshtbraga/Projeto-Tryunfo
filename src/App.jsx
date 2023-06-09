import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    getNewCard: [],
  };

  validationFields = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;

    const noventa = 90;

    const max = 210;

    const validationCardName = cardName.length > 0;

    const validationCardDescription = cardDescription.length > 0;

    const validationImage = cardImage.length > 0;

    const validationRarity = cardRare.length > 0;

    const validatetionAttributes = cardAttr1 >= 0 && cardAttr1 <= noventa
    && cardAttr2 >= 0 && cardAttr2 <= noventa && cardAttr3 >= 0 && cardAttr3 <= noventa
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= max;

    this.setState({
      isSaveButtonDisabled: !(validationCardDescription && validationImage
          && validationCardName && validationRarity && validatetionAttributes),
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    };

    this.setState(({ getNewCard }) => ({
      getNewCard: [...getNewCard, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
    }));

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  render() {
    const { getNewCard } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        { getNewCard.map((card) => (

          <li key={ card.cardName }>
            <Card { ...card } />
          </li>
        )) }
      </div>
    );
  }
}

export default App;
