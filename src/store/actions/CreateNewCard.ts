type Card = {
  cardId: number
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideCardNumber: boolean,
}

export const createNewCard = (card: Card) => {
  return {
    type: 'CREATE_CARD',
    cardId: card.cardId,
    cardName: card.cardName, 
    cardUsername: card.cardUsername, 
    cardNumber: card.cardNumber,
    hideCardNumber: false,
  }
}