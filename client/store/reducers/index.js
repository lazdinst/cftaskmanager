import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import app from './app';

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  app,
});
