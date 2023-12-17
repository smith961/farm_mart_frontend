import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import { Typography, List, ListItem, Container } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { AppBar, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position='sticky' sx={{ top: 'auto', bottom: 0, margin: 0 }} >
      <Toolbar>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <List sx={{ flexGrow: 1 }}>
            <ListItem>
              <PlaceOutlinedIcon />
              <Typography variant='h6' sx={{ flexGrow: 1 }}>
                Lagos, Nigeria
              </Typography>
            </ListItem>
            <ListItem>
              <EmailOutlinedIcon />
              <Typography variant='h6' sx={{ flexGrow: 1 }}>
                <Link to='mailto:farmmart@moringa.com' style={{ textDecoration: 'none', color: 'inherit' }} >
                  farmmart@moringa.com
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <PhoneOutlinedIcon />
              <Typography variant='h6' sx={{ flexGrow: 1 }}> 09011111111
              </Typography>
            </ListItem>
          </List>
          <List sx={{ flexGrow: 1 }}>
            <ListItem>
              <Typography variant='h4' sx={{ flexGrow: 1 }}>
                Site Map
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='h6' sx={{ flexGrow: 1 }}>
                <Link to='/store' style={{ textDecoration: 'none', color: 'inherit' }}>Store</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='h6' sx={{ flexGrow: 1 }}>
                <Link to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='h6' sx={{ flexGrow: 1 }}>
                <Link to='/contactus' style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link>
              </Typography>
            </ListItem>
          </List>
          <List sx={{ flexGrow: 1 }}>
            <ListItem>
              <Typography variant='h4' sx={{ flexGrow: 1 }}>
                Contact Us
              </Typography>
            </ListItem>
            <ListItem>
              <ContactForm />
            </ListItem>
          </List>
        </Container>
      </Toolbar>
    </AppBar >
  );
};

export default Footer;
