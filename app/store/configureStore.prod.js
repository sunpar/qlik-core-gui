// @flow
import {
  createStore
  // , applyMiddleware
} from 'redux';
// import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
// import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { appState } from '../reducers/types';

const history = createHashHistory();
// const router = routerMiddleware(history);
// const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: appState) {
  return createStore(rootReducer, initialState);
}

export default { configureStore, history };
