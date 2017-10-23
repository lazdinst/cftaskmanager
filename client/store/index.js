import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import { exportedState } from './modules/app';

let mergedObj = {};
mergedObj.app = { ...exportedState.app, ...window.__PRELOADED_STATE__.app };
const initialState = mergedObj;

const enhancers = [];
const middleware = [thunk];

// Connect Redux Dev Tools
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

//Store Creation
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;