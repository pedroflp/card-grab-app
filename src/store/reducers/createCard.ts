const INITIAL_STATE = {
  activeCard: 0,
  data: [
    { 
      cardId: 1,
      cardName: 'Cartao de credito',
      cardUsername: 'Pedro felipe',
      cardNumber: '1234 1234 1234 1234',
      hideNumber: false
    },
    {
      cardId: 2,
      cardName: 'Cartao de debito',
      cardUsername: 'Pedro felipe',
      cardNumber: '4321 4321 4321 4321',
      hideNumber: false
    },
  ]
}

export default function createCard(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case 'CREATE_CARD': 
      return { ...state, data: [...state.data, action]};
    default:
      return state;
  }
}