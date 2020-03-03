import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortableText from '../components/portableText';

const useStyles = makeStyles({
  planTitle: {
    lineHeight: 1.2,
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
});

function Pricing({ plans }) {
  const classes = useStyles();

  return (
    <Container fixed id="pricing">
      <Box mt={10} mb="150px">
        <Grid container spacing={10}>
          {plans.map(plan => (
            <Grid item xs={12} lg={6} key={plan.id}>
              <Box
                p={2}
                bgcolor="#E1F2EA"
                borderRadius="0 50px 50px 50px"
                textAlign="center"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.planTitle}
                  >
                    <PortableText blocks={plan._rawTitle} />
                  </Typography>
                  <PortableText blocks={plan._rawDescription} />
                </Box>
                <Box className={classes.planPrice}>
                  <Typography variant="h1" component="div">
                    ${plan.annualPrice}
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom>
                    /Annual
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    ${plan.monthlyPrice} month to month
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
