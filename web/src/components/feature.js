import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  h2: {
    position: 'relative',
    paddingBottom: 20,
    marginBottom: 20,

    '&::after': {
      content: '""',
      display: 'block',
      width: 120,
      height: 5,
      backgroundColor: '#F25523',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  },
});

function Feature({ feature, index }) {
  const classes = useStyles();

  return (
    <Box key={feature.id} mt={index > 0 ? 5 : 0}>
      <Grid
        container
        spacing={10}
        justify="space-between"
        direction={index % 2 === 0 ? 'row' : 'row-reverse'}
      >
        <Grid item xs={12} lg={5}>
          <Box display="flex" alignItems="center" height="100%">
            <Box>
              <Typography variant="h2" className={classes.h2}>
                {feature.title}
              </Typography>
              <Typography variant="body1" style={{ maxWidth: 400 }}>
                {feature.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img
            src={feature.image.asset.fluid.src}
            alt={feature.image.alt}
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Feature;
