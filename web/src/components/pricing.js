import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortableText from '../components/portableText';

const useStyles = makeStyles(theme => ({
  planBox: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  planTitle: {
    lineHeight: 1.2,
    fontSize: '2.2rem',
    color: theme.palette.common.white,
    '& p': {
      marginTop: 0,
      marginBottom: 10,
    },
  },
  planSubtitle: {
    lineHeight: 1.2,
    fontSize: '1.5rem',
    color: theme.palette.common.white,
    '& p': {
      marginTop: 0,
      marginBottom: 10,
    },
  },
  planPrice: {
    position: 'relative',
    paddingTop: 20,
    marginTop: 20,
    '&::before': {
      content: '""',
      display: 'block',
      width: 80,
      height: 5,
      backgroundColor: '#F25523',
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
    fontSize: '1rem',
    color: '#F25523',
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
                  variant="h3"
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
                    variant="h3"
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
                  <PortableText blocks={plan._rawDescription} />
                </Box>
                <Box className={classes.planPrice}>
                  <Typography
                    variant="h1"
                    component="div"
                    className={classes.annualPrice}
                  >
                    ${plan.annualPrice}
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom>
                    annual payment
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    ${plan.monthlyPrice} monthly payment
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

export default Pricing;
