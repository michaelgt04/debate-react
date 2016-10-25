import { combineReducers } from 'redux';
import { passwordReducer, usernameReducer, tokenReducer, roleReducer, errorReducer } from './AuthReducers';
import { studentInfoReducer, debateInfoReducer, courseInfoReducer, postInfoReducer } from './DashboardReducers'

let reducers = combineReducers({
  passwordState: passwordReducer,
  usernameState: usernameReducer,
  tokenState: tokenReducer,
  roleState: roleReducer,
  errorState: errorReducer,
  studentState: studentInfoReducer,
  debateState: debateInfoReducer,
  courseState: courseInfoReducer,
  postState: postInfoReducer,
});

export default reducers;
