import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import { Lock } from '@mui/icons-material';
import api from '../../services/api';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to Flask API for user login
      const response = await api.post('/login', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', width: '30rem' }}>
        <Typography variant='h2' align='center' gutterBottom>
          Login
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: '5rem' }} >
          <Lock sx={{ fontSize: '5rem' }} />
        </Box>
        <TextField
          fullWidth
          label='Username'
          name='username'
          onChange={handleChange}
          value={formData.username}
          margin='normal'
        />
        <TextField
          fullWidth
          label='Password'
          name='password'
          onChange={handleChange}
          value={formData.password}
          margin='dense'
        />
        <Box sx={{ justifyContent: 'right', display: 'flex', marginTop: '1rem' }}>
          <Link color='primary' to='/signup'>Don't have an account? Register</Link>
        </Box>
        <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '1rem' }}>
          <Button type='submit' variant='contained'>
            Login
          </Button>
        </Box>
      </Box>
    </Box>

  );
};

export default Login;
