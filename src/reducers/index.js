import { combineReducers } from 'redux';
import UserReducers from './User.reducer';
import UserActive from './UserActive.reducer';

const allReducers = combineReducers({
  users: UserReducers,
  activeUser: UserActive
});

export default allReducers;