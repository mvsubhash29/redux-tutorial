import React from 'react';

import UserList from './UserList.component';
import UserDetail from './UserDetail.component';

function App() {
  return (
    <div>
      <h2>Username List</h2>
      <UserList />
      <h2>User Details</h2>
      <UserDetail />
    </div>
  );
}

export default App;