import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const UserList = ({ users, updateUser, deleteUser }) => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleChange = (e) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateUser(editingUser);
    setEditingUser(null);
  };

  return (
    <div className="container">
      <h2>User List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{editingUser && editingUser.id === user.id ? (
                  <TextField name="firstName" value={editingUser.firstName} onChange={handleChange} />
                ) : (
                  user.firstName
                )}</TableCell>
                <TableCell>{editingUser && editingUser.id === user.id ? (
                  <TextField name="lastName" value={editingUser.lastName} onChange={handleChange} />
                ) : (
                  user.lastName
                )}</TableCell>
                <TableCell>{editingUser && editingUser.id === user.id ? (
                  <TextField name="email" value={editingUser.email} onChange={handleChange} />
                ) : (
                  user.email
                )}</TableCell>
                
                <TableCell>
                  {editingUser && editingUser.id === user.id ? (
                    <Button onClick={handleUpdate} variant="contained" color="primary">Update</Button>
                  ) : (
                    <>
                      <IconButton onClick={() => handleEdit(user)}><EditIcon /></IconButton>
                      <IconButton onClick={() => deleteUser(user.id)}><DeleteIcon /></IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
