// components/UserForm.js
import React from 'react';
import { TextField, Button } from '@mui/material';

const UserForm = ({ user, setUser, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />
      <TextField
        label="ID"
        name="id"
        value={user.id}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <TextField
        label="Picture URL"
        name="picture"
        value={user.picture}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
