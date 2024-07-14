import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/actions';

const Signup = ({ signup }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch signup action
    signup(formData);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pb: '5rem' }}>
      <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', width: '30rem' }}>
        <Typography variant='h2' align='center' gutterBottom>
          Sign Up
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: '5rem' }} >
          <Lock sx={{ fontSize: '5rem' }} />
        </Box>
        <TextField
          fullWidth
          label='First Name'
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
          margin='normal'
        />
        <TextField
          fullWidth
          label='Last Name'
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
          margin='normal'
        />
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
          label='Email'
          name='email'
          onChange={handleChange}
          value={formData.email}
          margin='normal'
        />
        <TextField
          fullWidth
          label='Phone Number'
          name='phoneNumber'
          onChange={handleChange}
          value={formData.phoneNumber}
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
          <Link color='primary' to='/login'>Already have an account? Log in</Link>
        </Box>
        <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '1rem' }}>
          <Button type='submit' variant='contained'>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// Connect component to Redux
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userData) => dispatch(signup(userData)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
