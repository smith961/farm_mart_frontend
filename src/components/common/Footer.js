import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import { Typography, Container, Box, Grid, styled } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { AppBar, Toolbar } from '@mui/material';

const ContactDetailBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const Footer = () => {
  return (
    <AppBar position='static' sx={{ top: 'auto', bottom: 0, margin: 0 }} >
      <br />
      <Container fixed maxWidth='lg'>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant='h5'>
                FarmMart
              </Typography>
              <ContactDetailBox >
                <PlaceOutlinedIcon sx={{ mr: '4px', mb: '2px' }} />
                <Typography>
                  Lagos, Nigeria
                </Typography>
              </ContactDetailBox>
              <ContactDetailBox>
                <EmailOutlinedIcon sx={{ mr: '4px', mb: '2px' }} />
                <Typography>
                  <Link to='mailto:farmmart@moringa.com' style={{ textDecoration: 'none', color: 'inherit' }} >
                    farmmart@moringa.com
                  </Link>
                </Typography>
              </ContactDetailBox>
              <ContactDetailBox>
                <PhoneOutlinedIcon sx={{ mr: '4px', mb: '2px' }} />
                <Typography> 09011111111
                </Typography>
              </ContactDetailBox>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5'>
                Site Map
              </Typography>
              <Typography>
                <Link to='/store' style={{ textDecoration: 'none', color: 'inherit' }}>Store</Link>
              </Typography>
              <Typography>
                <Link to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>
              </Typography>
              <Typography >
                <Link to='/contactus' style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5'>
                Contact Us
              </Typography>
              <ContactForm />
            </Grid>
          </Grid>
        </Toolbar>
        <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '1rem' }} >
          <Typography variant='caption' >
            &copy; 2023 FarmMart. All rights reserved.
          </Typography>
        </Box>
      </Container>
      <br />
    </AppBar >
  );
}

export default Footer;
