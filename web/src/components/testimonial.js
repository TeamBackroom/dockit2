import React from 'react';
import { Grid, Box, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  h2: {
    position: 'relative',
    paddingBottom: 20,
    marginBottom: 20,
  },
});

function Testimonial({ testimonial }) {
  const classes = useStyles();

  return (
    <Box p={5} width="100%">
      <Grid container spacing={5}>
        <Grid item xs={12} lg={4}>
          <Box textAlign={{ xs: 'center', lg: 'auto' }}>
            <Typography variant="h3">{testimonial.title}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box display="flex" alignItems="center" justifyContent="center">
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
