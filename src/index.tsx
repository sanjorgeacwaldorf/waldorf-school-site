import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Donation from './pages/donation'
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
      <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <I18nextProvider i18n={i18next}>
                  <App />
              </I18nextProvider>
            } />
            <Route path="donation" element={
              <I18nextProvider i18n={i18next}>
                  <Donation />
              </I18nextProvider>
              } />
              <Route
                  path="*"
                  element={
                      <main style={{ padding: "1rem" }}>
                          <p>There's nothing here!</p>
                      </main>
                  }
              />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

