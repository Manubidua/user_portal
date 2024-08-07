// pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the User Management Portal</h1>
      <Link to="/users">Go to User Management</Link>
    </div>
  );
};

export default HomePage;
