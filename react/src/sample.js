import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Info from './info';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

$(function() {
  ReactDOM.render(
    <Provider store={store}>
      <Info />
    </Provider>, document.getElementById('info')
  );
});
