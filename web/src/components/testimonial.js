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
              style={{ width: '100%', maxWidth: 150, marginBottom: 15 }}
            />
          )}
          <Typography variant="body1" style={{ marginBottom: 30 }}>
            {testimonial.text}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{testimonial.name}</strong>
          </Typography>
          {testimonial.title}
        </Box>
      </Box>
    </Grid>
  );
}

export default Testimonial;
