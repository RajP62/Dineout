import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { SigninContextProvider } from "./Context/SignInContext";
import { BrowserRouter } from 'react-router-dom';
import { ClickedContextProvider } from './Context/clickedItem';
import {Provider} from "react-redux"

import { CalenderContextProvider } from './Context/CalenderContext';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Store/store';

ReactDOM.render(
  <React.StrictMode>
    <ClickedContextProvider>
      <SigninContextProvider>
        <CalenderContextProvider>
          <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </Provider>
        </CalenderContextProvider>

      </SigninContextProvider>

    </ClickedContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
