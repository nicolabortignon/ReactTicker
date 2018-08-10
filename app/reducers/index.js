// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import stocks from './stocks';

const rootReducer = combineReducers({
  counter,
  stocks,
  router
});

export default rootReducer;
