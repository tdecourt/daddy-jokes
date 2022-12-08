import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { setDefaultLanguage, setDefaultTranslations } from 'react-multi-lang';
import en from './assets/translations/en.json'
import fr from './assets/translations/fr.json'

setDefaultTranslations({ en, fr })
setDefaultLanguage('fr')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);