import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AvatarImage, Card, CardMedia, Container, Typography, Box, Paper, MobileStepper } from '@mui/material';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'Image 1',
    imgPath:
      'images/hero.svg',
  },
  {
    label: 'Image 2',
    imgPath:
      'images/hero.svg',
  },
  {
    label: 'Image 3',
    imgPath:
      'images/hero.svg',
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
      {/* <h1>Connecting Farms to Homes</h1>
      <p>Your Livestock Marketplace</p>
      <Link to="/store">
        <button>Shop Now</button>
      </Link>

      <div className="icon-section">
        <div className="icon-card"> */}
      {/* Icon 1 (Safe Payment) */}
      {/* <i className="fas fa-credit-card"></i>
          <p>Safe Payment</p>
        </div>
        <div className="icon-card"> */}
      {/* Icon 2 (Free Delivery) */}
      {/* <i className="fas fa-truck"></i>
          <p>Free Delivery</p>
        </div>
        <div className="icon-card"> */}
      {/* Icon 3 (24/7 Support) */}
      {/* <i className="fas fa-headset"></i>
          <p>24/7 Support</p>
        </div>
      </div>

      <div className="shop-category-section">
        <h2>Shop Categories</h2>
        <div className="category-icons"> */}
      {/* Category 1 */}
      {/* <div className="category-icon">
            <img src="category1.jpg" alt="Category 1" />
            <p>Category 1</p>
          </div> */}
      {/* Category 2 */}
      {/* <div className="category-icon">
            <img src="category2.jpg" alt="Category 2" />
            <p>Category 2</p>
          </div> */}
      {/* Category 3 */}
      {/* <div className="category-icon">
            <img src="category3.jpg" alt="Category 3" />
            <p>Category 3</p>
          </div> */}
      {/* Category 4 */}
      {/* <div className="category-icon">
            <img src="category4.jpg" alt="Category 4" />
            <p>Category 4</p>
          </div>
        </div>
      </div>

      <div className="signup-section"> */}
      {/* Image with button to signup */}
      {/* <img src="signup-image.jpg" alt="Signup Image" />
        <Link to="/signup">
          <button>Register as a Farmer</button>
        </Link>
        <p>Your Path to Lucrative Farming</p>
      </div> */}

      <Box sx={{ width: '100%', flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
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

      <Typography variant='h4' align='center' gutterBottom>
        Connecting Farms to Homes
      </Typography>
      <Typography variant='h6' align='center' gutterBottom>
        Your Livestock Marketplace
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }} >
        <Button component={Link} to='/Store' variant='contained'>
          Shop Now
        </Button>
      </Box>
      <br />


    </Container >
  );
};

export default Home;
