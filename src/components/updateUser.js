import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const UpdateUser = ({ user, onUpdate }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="firstName" label="First Name" value={updatedUser.firstName} onChange={handleChange} />
      <TextField name="lastName" label="Last Name" value={updatedUser.lastName} onChange={handleChange} />
      <TextField name="email" label="Email" value={updatedUser.email} onChange={handleChange} />
      <TextField name="picture" label="Picture URL" value={updatedUser.picture} onChange={handleChange} />
      <Button type="submit">Update User</Button>
    </form>
  );
};

export default UpdateUser;
