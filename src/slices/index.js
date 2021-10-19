import { combineReducers } from 'redux';

import usersReducer from './users'
//  Add Reducers here...

const rootReducer = combineReducers({
    users: usersReducer,
});
  
export default rootReducer;