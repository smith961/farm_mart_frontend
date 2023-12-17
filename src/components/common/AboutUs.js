import React from 'react';
import { Container, Typography, } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant='h2' sx={{ textAlign: 'center' }}>
        About Us
      </Typography>
      <Typography variant='body1' sx={{ textAlign: 'center' }}>
        Welcome to our platform! We connect farmers to buyers, making it easier for you to access fresh and
        high-quality produce. Our mission is to support local farmers and provide consumers with a convenient
        way to purchase farm-fresh products.
      </Typography>
    </Container>
  );
};

export default AboutUs;
