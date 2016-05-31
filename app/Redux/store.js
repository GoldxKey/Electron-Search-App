import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { searchAppReducer } from './reducers/index';

import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';

const router = routerMiddleware(hashHistory);

const AppStore = createStore(searchAppReducer, applyMiddleware(thunk, router));

export default AppStore;
