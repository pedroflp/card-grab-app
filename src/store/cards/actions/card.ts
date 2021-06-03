type Card = {
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideCardNumber: boolean,
}

export const createCard = (card: Card) => {
  return {
    type: 'CREATE_CARD',
    name: card.cardName, 
    username: card.cardUsername, 
    number: card.cardNumber,
    hideNumber: false,
  }
}

export const deleteCard = (card: Card) => {
  return {
    type: 'DELETE_CARD',
    card: card
  }
}

export const hideNumber = (card: Card) => {
  return {
    type: 'HIDENUM_CARD',
    card: card
  }
}

export const currActiveCard = (card: any) => {
  return {
    type: 'ACTIVE_CARD',
    card: card,
  }
}