type Card = {
  cardId: number
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideNumber: boolean,
}

export const deleteCard = (card: Card) => {
  return {
    type: 'DELETE_CARD',
    cardName: card.cardName, 
    cardUsername: card.cardUsername, 
    cardNumber: card.cardNumber,
    hideNumber: false,
  }
}