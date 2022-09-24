import React, { createContext, useContext, useState } from 'react';

export type IHomeContextData = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
};
interface Props {
  children: React.ReactNode;
}

const HomeContext = createContext<IHomeContextData>({} as IHomeContextData);

const HomeProvider: React.FC<Props> = ({ children }) => {
  const [text, setText] = useState('Valor vindo do context compartilhado')
  return <HomeContext.Provider value={{
    text,
    setText
  }}>{children}</HomeContext.Provider>;
};

function useHome() {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHome must be used within a HomeProvider');
  }

  return context;
}

export { HomeProvider, useHome };
