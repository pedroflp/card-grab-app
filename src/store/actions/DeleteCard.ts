type Card = {
  cardId: number
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideCardNumber: boolean,
}

export const deleteCardAction = ({type}: any) => {
  return {
    type,
  }
}