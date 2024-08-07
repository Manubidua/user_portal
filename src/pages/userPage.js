// pages/UserPage.js
import React, { useState } from 'react';
import UserList from '../components/userList';
import AddUser from '../components/AddUser';
import UpdateUser from '../components/updateUser';
import SearchUser from '../components/searchUser';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  return (
    <div>
      <h1>User Management Portal</h1>
      <SearchUser setUsers={setUsers} />
      <UserList users={users} onEdit={handleEdit} />
      {userToEdit ? (
        <UpdateUser userToEdit={userToEdit} />
      ) : (
        <AddUser />
      )}
    </div>
  );
};

export default UserPage;
