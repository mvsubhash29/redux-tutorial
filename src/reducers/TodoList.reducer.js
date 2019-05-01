const TodoList = (state = null, action) => {
  let payload;
  switch(action.type) {
    case 'TODO_LIST_FETCH': 
      payload = action.payload;
      break;
    default:
      payload = state;
      break;
  }
  return payload;
}

export default TodoList;