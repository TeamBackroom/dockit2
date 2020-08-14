import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({});

function Testimonial({ testimonial }) {
  // const classes = useStyles();

  return (
    <Box height="100%" display="flex" alignItems="center">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4}>
          <Box display="flex" justifyContent="center">
            {testimonial.image && testimonial.image.asset ? (
              <img
                src={testimonial.image.asset.fluid.src}
                alt={testimonial.image.alt}
                style={{ maxWidth: 160 }}
              />
            ) : (
              <Box py={2}>
                <Typography variant="h3">{testimonial.title}</Typography>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            p={2}
          >
            <Box textAlign={{ xs: 'center', lg: 'auto' }}>
              <Typography variant="body1" style={{ marginBottom: 20 }}>
                "{testimonial.text}"
              </Typography>
              <Typography variant="subtitle1">
                <Box
                  marginRight={{ xs: 0, lg: 2 }}
                  display={{ xs: 'block', lg: 'inline' }}
                >
                  <strong>{testimonial.name}</strong>
                </Box>
                {testimonial.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonial;
