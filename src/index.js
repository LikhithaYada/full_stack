import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import {createRooy}
import App from './App';
// index.js or App.js
import GeneralContextProvider from './context/GeneralContextProvider';

const root=createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralContextProvider>
        <App />
      </GeneralContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  //document.getElementById('root')
);
