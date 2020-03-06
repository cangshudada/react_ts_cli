import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store/index';
import App from "./app";
import './assets/css/common.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
