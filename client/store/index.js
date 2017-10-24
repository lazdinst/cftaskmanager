import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { exportedState } from './reducers/app';

let mergedObj = {};
mergedObj.app = { ...exportedState.app, ...window.__PRELOADED_STATE__.app };
const initialState = mergedObj;

const enhancers = [];
const middleware = [thunk];

const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose( applyMiddleware(...middleware), ...enhancers);

const store = createStore( reducers, initialState, composedEnhancers);

export default store;