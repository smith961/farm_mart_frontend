import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button color='inherit' component={Link} to='/'>
          <img src='images/logo.svg' alt='' height={50} />
        </Button>
        <Box>
          <Button color='inherit' component={Link} to='/store'>
            Store
          </Button>
          <Button color='inherit' component={Link} to='/aboutus'>
            About Us
          </Button>
          <Button color='inherit' component={Link} to='/contactus'>
            Contact Us
          </Button></Box>
        <Box>
          <Button variant='contained' color='secondary' component={Link} to='/auth'>
            Login/Register
          </Button>
          <Button color='inherit' component={Link} to='/cart'>
            <ShoppingCartOutlinedIcon />
          </Button></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
