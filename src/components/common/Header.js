import { AppBar, Button, Toolbar, Container, Box } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useState } from 'react';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const MenuItemLink = ({ to, children }) => (
    <MenuItem onClick={handleCloseNavMenu} component={Link} to={to}>
      <Typography textAlign="center">{children}</Typography>
    </MenuItem>
  );

  return (
    <AppBar position='static'>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          {/* Logo Button */}
          <Button component={Link} to='/' sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img src='images/logo.svg' alt='' height={50} />
          </Button>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Use MenuItemLink for navigation items in the mobile menu */}
              <MenuItemLink to='/store'>Store</MenuItemLink>
              <MenuItemLink to='/aboutus'>About Us</MenuItemLink>
              <MenuItemLink to='/contactus'>Contact Us</MenuItemLink>
            </Menu>
          </Box>
          <Button component={Link} to='/' sx={{
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1
          }}>
            <img src='images/logo.svg' alt='' height={50} />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Use Link for navigation items in the desktop Navbar */}
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              to='/store'
            >
              Store
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              to='/aboutus'
            >
              About Us
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              to='/contactus'
            >
              Contact Us
            </Button>
          </Box>

          {/* Auth and Cart Buttons */}
          <Box sx={{ flexGrow: 0 }}>
            <Button variant='contained' color='secondary' component={Link} to='/auth'>
              Login/Register
            </Button>
            <Button color='inherit' component={Link} to='/cart'>
              <ShoppingCartOutlinedIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
