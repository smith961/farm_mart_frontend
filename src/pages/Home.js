import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AvatarImage, Card, CardMedia, Container, Typography, Box, Paper, Grid, MobileStepper } from '@mui/material';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { LocalShipping, SupportAgent, Payment } from '@mui/icons-material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'Image 1',
    imgPath:
      'images/animal-hero.png',
  },
  {
    label: 'Image 2',
    imgPath:
      'images/animal-hero.png',
  },
  {
    label: 'Image 3',
    imgPath:
      'images/animal-hero.png',
  },
];
const Home = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Box sx={{ width: '100%', flexGrow: 1, mt: '2rem' }}>
        <AutoPlaySwipeableViews
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box sx={{ backgroundImage: 'url(images/animal-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end', height: '40vh', padding: '4rem' }}
                >
                  <Typography variant='h3' align='right' color={'white'} gutterBottom>
                    Connecting Farms to Homes
                  </Typography>
                  <Typography variant='h6' align='right' color={'white'} gutterBottom>
                    Your Livestock Marketplace
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Button component={Link} to='/Store' variant='contained'>
                      Shop Now
                    </Button>
                  </Box>

                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={3}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 2}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Box>
      <br />
      <Box sx={{ display: 'flex', justifyContent: 'center', pl: '3rem', pr: '3rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} >
          <Payment sx={{ fontSize: '5rem' }} />
          <Typography variant='h6' align='center' gutterBottom>
            Safe Payment
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} >
          <LocalShipping sx={{ fontSize: '5rem' }} />
          <Typography variant='h6' align='center' gutterBottom>
            Free Delivery
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} >
          <SupportAgent sx={{ fontSize: '5rem' }} />
          <Typography variant='h6' align='center' gutterBottom>
            24/7 Support
          </Typography>
        </Box>
      </Box>
      <br />
      <br />
      <Box sx={{ display: 'flex', justifyContent: 'center' }} >
        <Typography variant='h3' align='center' gutterBottom>
          Shop by Category
        </Typography>
      </Box>
      <br />

      <Grid container spacing={3} marginBottom={3}>
        <Grid item xs={6} md={3}>
          <img width={'100%'} src='images/chicken.png' alt='Chicken' />
        </Grid>
        <Grid item xs={6} md={3}>
          <img width={'100%'} src='images/cow.png' alt='Cow' />
        </Grid>
        <Grid item xs={6} md={3}>
          <img width={'100%'} src='images/pig.png' alt='Pig' />
        </Grid>
        <Grid item xs={6} md={3}>
          <img width={'100%'} src='images/snail.png' alt='Snail' />
        </Grid>
      </Grid>
      <Box sx={{ backgroundImage: 'url(images/farmer-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '40vh' }} >
        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
          <Button component={Link} to='/signup' variant='contained'>
            Register as a Farmer
          </Button>
        </Box>
        <Typography variant='h6' color={'white'} gutterBottom>
          Your Path to Lucrative Farming
        </Typography>
      </Box>
    </Container >
  );
};

export default Home;
