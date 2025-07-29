import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>ENGLISH</button>
      <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
      <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
    </div>
  );
};

export default LanguageSelector;