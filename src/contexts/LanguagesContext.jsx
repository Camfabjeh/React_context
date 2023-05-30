import { createContext, useState } from 'react';

export function LanguagesContextProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  return (
    <LanguagesContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguagesContext.Provider>
  );
}
const LanguagesContext = createContext();

export default LanguagesContext;
