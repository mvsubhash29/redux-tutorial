import { combineReducers } from 'redux';
import UserReducers from './User.reducer';
import UserActive from './UserActive.reducer';
import TodoList from './TodoList.reducer';

const allReducers = combineReducers({
  users: UserReducers,
  activeUser: UserActive,
  todoList: TodoList
});

export default allReducers;