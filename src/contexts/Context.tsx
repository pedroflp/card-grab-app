import React, { createContext, useContext, useState } from 'react';

const Context = createContext({
  toggleHide: false,
  toggleView: () => {},
  deleteCard: () => {},
});


export default function AppContext({ children }: any) {
  const [ toggleHide, setToggleHide ] = useState(false);
  
  function toggleView() {
    setToggleHide(!toggleHide);
  }

  function deleteCard() {
    setToggleHide(!toggleHide);
  }

  return (
    <Context.Provider value={{ toggleHide, toggleView, deleteCard }} >
    {children}
    </Context.Provider>
  );
}

export function useAppContext() {
  const AppContext = useContext(Context);

  return AppContext;
}