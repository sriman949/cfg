import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = process.env.REACT_APP_API_CALL;
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ToastProvider  placement = "bottom-center">
    <App />
  </ToastProvider>
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
