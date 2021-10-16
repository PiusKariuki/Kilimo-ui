import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './App/Modules/Landing/views/Landing';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ConfigureStore from './App/Common/store/ConfigureStore';
import Kilimo from './App/Modules/Kilimo/views/Kilimo';


const store = ConfigureStore();
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Kilimo />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
