import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import decode from 'jwt-decode'
import store from "./redux/store";
import {Provider} from "react-redux";
import {syncInfoAc} from "./redux/actions";

const tk =localStorage.getItem('@#@TOKEN');
console.log(tk)
if(tk) store.dispatch( syncInfoAc(decode(tk)));

ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </Provider>
,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
