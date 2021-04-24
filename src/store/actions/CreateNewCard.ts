type Card = {
  cardId: number
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideNumber: boolean,
}

export const createNewCard = (card: Card) => {
  return {
    type: 'CREATE_CARD',
    cardName: card.cardName, 
    cardUsername: card.cardUsername, 
    cardNumber: card.cardNumber,
    hideNumber: false,
  }
}