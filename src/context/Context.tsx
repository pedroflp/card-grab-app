import React, { createContext, useContext, useState } from 'react';

type Props = {
  children: React.ReactChild,
}

const Context = createContext({
  newCardName: '',
  newCardUsername: '',
  newCardNumber: '',
  needUpdate: false,

  setCardName: (value: string) => {},
  setCardUsername: (value: string) => {},
  setCardNumber: (value: string) => {},
  updateCards: (value: boolean) => {},
})

const AppContext: React.FC<Props> = (props) =>{

  const [newCardName, setNewCardName] = useState('');
  const [newCardUsername, setNewCardUsername] = useState('');
  const [newCardNumber, setNewCardNumber] = useState('');
  const [needUpdate, setNeedUpdate] = useState(false)

  function setCardName(value: string) {
    setNewCardName(value)
  }
  function setCardUsername(value: string) {
    setNewCardUsername(value)
  }
  function setCardNumber(value: string) {
    setNewCardNumber(value)
  }

  function updateCards(value: boolean) {
    setNeedUpdate(value)
  }

  return(
    <Context.Provider 
      value={{
        newCardName, newCardUsername, newCardNumber, 
        setCardName, setCardUsername, setCardNumber, 
        needUpdate, 
        updateCards,
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