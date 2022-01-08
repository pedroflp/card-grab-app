type Card = {
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideCardNumber: boolean,
  style: {
    cardColor: {
      left: string,
      right: string,
    }
  }
}

export const createCard = (card: Card) => {
  return {
    type: 'CREATE_CARD',
    name: card.cardName, 
    username: card.cardUsername, 
    number: card.cardNumber,
    hideNumber: false,
    style: {
      cardColor: {
        left: card.style.cardColor.left,
        right: card.style.cardColor.right,
      }
    }
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