type Card = {
  cardId: number
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideCardNumber: boolean,
}

export const deleteCardAction = (id: number) => {
  return {
    type: 'DELETE_CARD',
    id: id
  }
}