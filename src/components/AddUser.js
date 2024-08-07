import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddUser = ({ addUser }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    picture: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ firstName: '', lastName: '', email: '', picture: '' });
  };

  return (
    <div className="container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <TextField name="firstName" label="First Name" value={user.firstName} onChange={handleChange} />
        <TextField name="lastName" label="Last Name" value={user.lastName} onChange={handleChange} />
        <TextField name="email" label="Email" value={user.email} onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary">Add User</Button>
      </form>
    </div>
  );
};

export default AddUser;
