import React, { createContext, ReactNode, useContext, useState } from 'react';


export type IGlobalContextData = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

interface Props {
  children: React.ReactNode;
}

const GlobalContext = createContext<IGlobalContextData>({} as IGlobalContextData);

const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>{children}</GlobalContext.Provider>
  );
};

function useGlobal() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }

  return context;
}

export { GlobalProvider, useGlobal };
