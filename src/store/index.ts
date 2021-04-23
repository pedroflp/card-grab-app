import { createStore } from 'redux';

const INITIAL_STATE = {
  cards: [
    {
      cardId: 1,
      cardName: 'Cartao de credito',
      cardUsername: 'Pedro felipe',
      cardNumber: '1234 1234 1234 1234'
    },
    {
      cardId: 2,
      cardName: 'Cartao de debito',
      cardUsername: 'Pedro felipe',
      cardNumber: '4321 4321 4321 4321'
    },
  ]
}

function createCards(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case 'ADD_NEWCARD': 
      return { ...state, card: [...state.cards, action]};
    default:
      return state
  }
}

export const addCard = (card: any) => {
  return {
    type: 'ADD_NEWCARD'
  }
}

const store = createStore(createCards);

export default store;