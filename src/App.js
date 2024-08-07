import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/userList';
import SearchUser from './components/searchUser';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>User Management Portal</h1>
      <AddUser addUser={addUser} />
      <SearchUser setSearchTerm={setSearchTerm} />
      <UserList users={filteredUsers} updateUser={updateUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
