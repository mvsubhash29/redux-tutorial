import React from 'react';

import UserList from './UserList.component';
import UserDetail from './UserDetail.component';
import Todo from './Todo.component';

function App() {
  return (
    <div>
      <h2>Username List</h2>
      <UserList />
      <h2>User Details</h2>
      <UserDetail />
      <Todo />
    </div>
  );
}

export default App;