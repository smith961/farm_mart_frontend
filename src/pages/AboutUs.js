import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant='h2' align='center' gutterBottom>
        About Us
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '5rem', pb: '5rem' }}>
        <Typography variant='body1' align='center' >
          Welcome to our platform! We connect farmers to buyers, making it easier for you to access fresh and
          high-quality produce. Our mission is to support local farmers and provide consumers with a convenient
          way to purchase farm-fresh products.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
