import { combineReducers } from 'redux';
import * as REDUCERS from './reducer';
import { routerReducer } from 'react-router-redux';
REDUCERS.routing = routerReducer;
export const searchAppReducer = combineReducers(REDUCERS);
