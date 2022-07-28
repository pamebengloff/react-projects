import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // no lo usaremos

const root = ReactDOM.createRoot(document.getElementById('root')); 
//al dom de react le vamos a crear un elemento raiz basado en el root que esta en el index.html
//y al usar el metodo de render se va a renderizar todo el 

root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
