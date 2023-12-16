import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  return (
    // <header>
    //   <div className="logo">
    //     <Link to="/">farmmart</Link>
    //   </div>
    //   <nav>
    //     <ul>
    //       <li><Link to="/store">Store</Link></li>
    //       <li><Link to="/aboutus">About Us</Link></li>
    //       <li><Link to="/contactus">Contact Us</Link></li>
    //     </ul>
    //   </nav>
    //   <div className="auth-button">
    //     <Link to="/auth">
    //       <button>Login / Register</button>

    //     </Link>
    //   </div>
    //   <div id="cart">
    //     cart: $<span id="total">0</span>
    //   </div>
    // </header>
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            FarmMart
          </Typography>
          <Button color='inherit' component={Link} to='/store'>
            Store
          </Button>
          <Button color='inherit' component={Link} to='/aboutus'>
            About Us
          </Button>
          <Button color='inherit' component={Link} to='/contactus'>
            Contact Us
          </Button>
          <Button variant='contained' color='secondary' component={Link} to='/auth'>
            Login/Register
          </Button>
          <Button color='inherit' component={Link} to='/cart'>
            <ShoppingCartOutlinedIcon />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
