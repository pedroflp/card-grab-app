type Card = {
  cardId: number,
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideCardNumber: boolean,
}

const INITIAL_STATE = {
  activeCard: 0,
  data: [
    { 
      cardId: 1,
      cardName: 'Cartao de credito',
      cardUsername: 'Pedro felipe',
      cardNumber: '1234 1234 1234 1234',
      hideCardNumber: false,
    },
    {
      cardId: 2,
      cardName: 'Cartao de debito',
      cardUsername: 'Pedro felipe',
      cardNumber: '4321 4321 4321 4321',
      hideCardNumber: false,
    },
  ]
}

export default function getActiveCard(state = INITIAL_STATE, action: any) {
  console.log(state.activeCard)
  if (action.type === 'ACTIVE_CARD') {
   return { activeCard: action.id }
  } else {
    return state
  }
}
