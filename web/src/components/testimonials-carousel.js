import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import ArrowLeft from '../images/arrow-left.svg';
import ArrowRight from '../images/arrow-right.svg';
import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import Testimonial from './testimonial';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  btn: {
    padding: 0,
    minWidth: 0,
    '&:hover': {
      background: 'none',
    },
  },
}));

function TestimonialsCarousel({ testimonials }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonials.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      <Grid item xs={1} style={{ padding: 0 }}>
        <Box maxWidth={{ xs: 15, md: 30 }} mr="auto" ml={{ xs: 0, md: 'auto' }}>
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{ opacity: activeStep === 0 ? 0.2 : 1 }}
            className={classes.btn}
            fullWidth
          >
            <img src={ArrowLeft} alt="arrow left" style={{ width: '100%' }} />
          </Button>
        </Box>
      </Grid>
      <Grid item xs={10}>
        <Box boxShadow="0 0 30px #CCC" bgcolor="white">
          <SwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {testimonials.map((step, index) => (
              <>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Testimonial testimonial={step} key={step.id} />
                ) : null}
              </>
            ))}
          </SwipeableViews>
        </Box>
      </Grid>
      <Grid item xs={1} style={{ padding: 0 }}>
        <Box maxWidth={{ xs: 15, md: 30 }} ml="auto" mr={{ xs: 0, md: 'auto' }}>
          <Button
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{ opacity: activeStep === maxSteps - 1 ? 0.2 : 1 }}
            className={classes.btn}
            fullWidth
          >
            <img src={ArrowRight} alt="arrow right" style={{ width: '100%' }} />
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default TestimonialsCarousel;
