import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../Dashboard/index';

import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {gitSearchApp} from '../../Redux/reducers/index';

require('../../Page/stylesheet/index.css');

const store = createStore(
    gitSearchApp,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('main_component')
)
