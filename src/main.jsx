import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import App from './App.jsx'
import "./assets/styles/styles.scss"
import { ThemeProvider } from "@mui/material";
import { theme } from './theme/index.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './services';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <ThemeProvider theme={theme}>
        <Suspense fallback="loading">
          <Toaster />
          <App />
        </Suspense>
      </ThemeProvider>
    </I18nextProvider >
  </Provider>
)
