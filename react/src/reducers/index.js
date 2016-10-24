import { combineReducers } from 'redux';
import { passwordReducer, usernameReducer, tokenReducer, roleReducer, errorReducer } from './AuthReducers';

let reducers = combineReducers({
  passwordState: passwordReducer,
  usernameState: usernameReducer,
  tokenState: tokenReducer,
  roleState: roleReducer,
  errorState: errorReducer
});

export default reducers;
