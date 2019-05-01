const fetchTodoList = (todoList) => {
  return {
    type: 'TODO_LIST_FETCH',
    payload: todoList
  }
}

export default fetchTodoList;