import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Dashboard from '../Dashboard/index';
import AppStore from '../../Redux/store';
import App from '../App';
import Setting from '../Setting/index';
import DetailPage from '../DetailPage/index';

const history = syncHistoryWithStore(hashHistory, AppStore);

const AppRouter = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="/detail" component={DetailPage}/>
      <Route path="/setting" component={Setting}/>
    </Route>
  </Router>
);

export default AppRouter;
