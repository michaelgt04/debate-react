import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import InfoContainer from './components/InfoContainer'
import store from './store';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

$(function() {
  ReactDOM.render(
    <Provider store={store}>
      <InfoContainer />
    </Provider>, document.getElementById('app')
  );
});
