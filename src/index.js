import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './components/MainNav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MainNav />
  </React.StrictMode>,
  document.getElementById('navbar')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
