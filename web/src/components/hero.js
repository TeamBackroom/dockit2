import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
    marginTop: 30,
    borderRadius: 20,
    fontSize: '1.2rem',
    letterSpacing: '2px',
    padding: '2px 30px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

function HeroSection({ heroSection }) {
  const classes = useStyles();

  return (
    <Box my={8}>
      <Container fixed>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={6}>
            <Box display="flex" alignItems="center" height="100%">
              <Box>
                <Typography variant="h1" gutterBottom>
                  {heroSection.feature.title}
                </Typography>
                <Typography variant="body1">
                  {heroSection.feature.description}
                </Typography>
                {heroSection.cta && (
                  <Button
                    component={Link}
                    href={heroSection.cta.url}
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                  >
                    {heroSection.cta.label}
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img
              src={heroSection.feature.image.asset.fluid.src}
              alt={heroSection.feature.image.alt}
              style={{ width: '100%', display: 'inherit' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
