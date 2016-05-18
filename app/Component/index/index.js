import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../Dashboard/index';

import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {gitSearchApp} from '../../Redux/reducers/index';

require('../../Page/stylesheet/index.css');

// import {persistStore, autoRehydrate} from 'redux-persist';
//
// const middlewareWrapper = applyMiddleware(thunk);
// const store = middlewareWrapper(createStore);
//
// const rehydrator = autoRehydrate();
// const AppStore = rehydrator(store)(gitSearchApp);
// persistStore(AppStore);

const AppStore = createStore(
    gitSearchApp,
    applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={AppStore}>
    <Dashboard />
  </Provider>,
  document.getElementById('main_component')
)
