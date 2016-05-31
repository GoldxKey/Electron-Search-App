import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Dashboard from '../Dashboard/index';
import AppStore from '../../Redux/store.js';
const history = syncHistoryWithStore(hashHistory, AppStore);

const AppRouter = (
  <Router history={history}>
    <Route path="/" component={Dashboard}>
    </Route>
  </Router>
);

export default AppRouter;
