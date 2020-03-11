import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortableText from '../components/portableText';

const useStyles = makeStyles({
  solution: {
    '& ul': {
      margin: 0,
      padding: 0,
    },
  },
});

function Solutions({ solutions }) {
  const classes = useStyles();

  return (
    <Container fixed id="solutions">
      <Box py={5}>
        <Grid container spacing={10}>
          {solutions.map(solution => (
            <Grid key={solution.id} item xs={12} lg={4}>
              <Box textAlign="center" maxWidth={320} mx="auto">
                <img
                  src={solution.image.asset.fluid.src}
                  alt={solution.image.alt}
                  style={{ width: '90%', margin: '0 auto 20px' }}
                />
                <Typography variant="h3" gutterBottom>
                  {solution.title}
                </Typography>
              </Box>
              <Box maxWidth={280} mx="auto" className={classes.solution}>
                <PortableText blocks={solution._rawDescription} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Solutions;
