import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {Router, Route, hashHistory, IndexRoute} from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';

// import {persistStore, autoRehydrate} from 'redux-persist';
//
// const middlewareWrapper = applyMiddleware(thunk);
// const store = middlewareWrapper(createStore);
//
// const rehydrator = autoRehydrate();
// const AppStore = rehydrator(store)(gitSearchApp);
// persistStore(AppStore);

import AppRouter from './Route/index.js';
import AppStore from '../Redux/store.js';
// const history = syncHistoryWithStore(hashHistory, AppStore);

import Dashboard from './Dashboard/index.js';
require('../Page/stylesheet/index.css');
ReactDOM.render(
  <Provider store={AppStore}>
    {AppRouter}
  </Provider>,
  document.getElementById('main_component')
);
