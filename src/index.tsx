import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import global_de from './translations/de/global.json'

i18next
    .use(LanguageDetector)
    .init({
        interpolation: { escapeValue: false},
        detection: { },
        resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        },
        de: {
            global: global_de
        }
    }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
          <App />
      </I18nextProvider>
  </React.StrictMode>
);

