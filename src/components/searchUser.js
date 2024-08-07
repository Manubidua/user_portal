import React from 'react';
import { TextField } from '@mui/material';

const SearchUser = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <h2>Search User</h2>
      <TextField label="Search" onChange={handleSearch} />
    </div>
  );
};

export default SearchUser;
