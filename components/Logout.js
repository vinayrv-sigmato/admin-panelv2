import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Button } from '@mui/material';

const Logout=()=> {
  const {  logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Button color="primary" onClick={handleLogout}>Logout</Button>
    
  );
};

export default Logout;