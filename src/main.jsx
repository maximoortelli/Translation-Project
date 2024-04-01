import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* Todo esto tambien*/
import {  I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from "./translations/esp/global.json";
import global_en from "./translations/eng/global.json";
import global_de from "./translations/deu/global.json";
import global_jp from "./translations/jpn/global.json";

i18next.init({
  interpolation: { escapeValue: false},
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    de: {
      global: global_de,
    },
    jp: {
      global: global_jp,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
       <App />
    </I18nextProvider>
  </React.StrictMode>,
)
