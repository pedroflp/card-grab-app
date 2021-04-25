import React, { createContext, useContext, useState } from 'react';

type Props = {
  children: React.ReactChild,
}

const Context = createContext({
  newCardName: '',
  newCardUsername: '',
  newCardNumber: '',

  setCardName: (value: any) => {},
  setCardUsername: (value: any) => {},
  setCardNumber: (value: any) => {}
})

const AppContext: React.FC<Props> = (props) =>{

  const [newCardName, setNewCardName] = useState('');
  const [newCardUsername, setNewCardUsername] = useState('');
  const [newCardNumber, setNewCardNumber] = useState('');

  function setCardName(value: any) {
    setNewCardName(value)
  }
  function setCardUsername(value: any) {
    setNewCardUsername(value)
  }
  function setCardNumber(value: any) {
    setNewCardNumber(value)
  }

  return(
    <Context.Provider 
      value={{
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