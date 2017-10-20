import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import { exportedState } from './modules/app';
console.log('PRELOADED', JSON.stringify(window.__PRELOADED_STATE__));
console.log('EXPORTED', JSON.stringify(exportedState));
let mergedObj = {};
mergedObj.app = { ...exportedState.app, ...window.__PRELOADED_STATE__.app };
console.log(mergedObj);
const initialState = mergedObj;
console.log('INITIAL', initialState);

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