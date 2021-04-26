import React, { createContext, useContext, useState } from 'react';

type Props = {
  children: React.ReactChild,
}

const Context = createContext({
  newCardName: '',
  newCardUsername: '',
  newCardNumber: '',
  isCreatingCard: false,
  hideCardNumber: false,

  setCardName: (value: string) => {},
  setCardUsername: (value: string) => {},
  setCardNumber: (value: string) => {},
  checkIsCreatingCard: (value: boolean) => {},
  toogleHideCardNumber: () => {}
})

const AppContext: React.FC<Props> = (props) =>{

  const [newCardName, setNewCardName] = useState('');
  const [newCardUsername, setNewCardUsername] = useState('');
  const [newCardNumber, setNewCardNumber] = useState('');

  const [isCreatingCard, setIsCreatingCard] = useState(false);
  const [hideCardNumber, setHideCardNumber] = useState(false);

  function setCardName(value: string) {
    setNewCardName(value)
  }
  function setCardUsername(value: string) {
    setNewCardUsername(value)
  }
  function setCardNumber(value: string) {
    setNewCardNumber(value)
  }

  function checkIsCreatingCard(value: boolean) {
    setIsCreatingCard(value)
    console.log(isCreatingCard);
    
  }

  function toogleHideCardNumber() {
    setHideCardNumber(!hideCardNumber)
    console.log(hideCardNumber);
    
  }

  return(
    <Context.Provider 
      value={{
        hideCardNumber, toogleHideCardNumber,
        isCreatingCard, checkIsCreatingCard,
        newCardName, newCardUsername, newCardNumber, 
        setCardName, setCardUsername, setCardNumber 
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default AppContext;

export function useAppContext() {
  const context = useContext(Context)

  return context;
}