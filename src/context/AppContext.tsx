import { createContext } from 'react';

interface IAppContext {
  appName: string;
}

export const AppContext = createContext<IAppContext | null>(null);

type AppContextProps = {
  children: JSX.Element | JSX.Element[];
};

export const AppContextProvider = ({ children }: AppContextProps) => {
  return (
    <AppContext.Provider value={{ appName: 'WORDLE' }}>
      {children}
    </AppContext.Provider>
  );
};
