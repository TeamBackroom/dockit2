import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  h2: {
    position: 'relative',
    paddingBottom: 20,
    marginBottom: 20,
    color: '#FFF',
  },
});

function Testimonial({ testimonial }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={5}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="#FFF"
      >
        <Box>
          {testimonial.image && testimonial.image.asset && (
            <img
              src={testimonial.image.asset.fluid.src}
              alt={testimonial.image.alt}
              style={{ width: '100%' }}
            />
          )}
          <Typography variant="body1">{testimonial.text}</Typography>
          <Typography variant="h2" className={classes.h2}>
            {testimonial.name}
          </Typography>
          <Typography variant="h2" className={classes.h2}>
            {testimonial.title}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default Testimonial;
