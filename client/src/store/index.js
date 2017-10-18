import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';

const initialState = window.__PRELOADED_STATE__ || {};
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