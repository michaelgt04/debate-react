import { combineReducers } from 'redux';
import { passwordReducer, usernameReducer, tokenReducer, roleReducer, errorReducer } from './AuthReducers';
import { studentInfoReducer } from './DashboardReducers'

let reducers = combineReducers({
  passwordState: passwordReducer,
  usernameState: usernameReducer,
  tokenState: tokenReducer,
  roleState: roleReducer,
  errorState: errorReducer,
  studentState: studentInfoReducer
});

export default reducers;
