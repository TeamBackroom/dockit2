import PropTypes from 'prop-types';
import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortableText from './portableText';

const useStyles = makeStyles(theme => ({
  planBox: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  planTitle: {
    zoom: '110%',
    lineHeight: 1,
    color: theme.palette.common.white,
    '& p': {
      marginTop: 0,
      marginBottom: 10,
    },
  },
  planSubtitle: {
    lineHeight: 1.2,
    color: theme.palette.common.white,
    '& p': {
      marginTop: 0,
      marginBottom: 10,
    },
  },
  planPrice: {
    zoom: '110%',
    position: 'relative',
    paddingTop: 20,
    marginTop: 20,
    '&::before': {
      content: '""',
      display: 'block',
      width: 80,
      height: 5,
      backgroundColor: '#F15623',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-40px)',
    },
  },
  annualPrice: {
    color: theme.palette.common.white,
  },
  comingSoon: {
    color: '#F15623',
    fontWeight: 'bold',
  },
}));

function Pricing({ plans }) {
  const classes = useStyles();

  return (
    <Container fixed id="pricing">
      <Box pt={5} pb={10}>
        <Grid container spacing={10}>
          {plans.map(plan => (
            <Grid item xs={12} lg={6} key={plan.id}>
              <Box
                p={2}
                borderRadius="0 50px 50px 50px"
                textAlign="center"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                className={classes.planBox}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.comingSoon}
                >
                  {plan.comingSoon ? (
                    <span>COMING SOON!</span>
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </Typography>
                <Box>
                  <Typography
                    variant="h1"
                    gutterBottom
                    className={classes.planTitle}
                  >
                    <PortableText blocks={plan._rawTitle} />
                  </Typography>
                  <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.planSubtitle}
                  >
                    <PortableText blocks={plan._rawSubtitle} />
                  </Typography>
                  <Box px={2}>
                    <Typography variant="h5">
                      <PortableText blocks={plan._rawDescription} />
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.planPrice}>
                  <Typography
                    variant="h1"
                    component="div"
                    className={classes.annualPrice}
                  >
                    ${plan.annualPrice}
                  </Typography>
                  <Typography variant="h5" component="div" gutterBottom>
                    per user / per month
                    <br />
                    billed annually
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    ${plan.monthlyPrice} per user / per month
                    <br />
                    billed monthly
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

Pricing.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.object),
};

Pricing.defaultProps = {
  plans: [],
};

export default Pricing;
