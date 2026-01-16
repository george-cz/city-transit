import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('citytransit-language');
    if (savedLanguage) {
      return savedLanguage;
    }

    // Fall back to browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('cs') || browserLang.startsWith('cz')) {
      return 'cs';
    }

    return 'en';
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('citytransit-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'cs' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
