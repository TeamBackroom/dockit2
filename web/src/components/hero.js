import PropTypes from 'prop-types';
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
import ReactPlayer from 'react-player';

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
  const { title, description, image, video } = heroSection.feature;
  const { url, label } = heroSection.cta;

  return (
    <Box my={8}>
      <Container fixed>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={5}>
            <Box display="flex" alignItems="center" height="100%">
              <Box>
                <Typography variant="h1" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body1">{description}</Typography>
                {heroSection.cta && (
                  <Button
                    component={Link}
                    href={url}
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                  >
                    {label}
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            {video ? (
              <ReactPlayer url={video} playing={false} controls light />
            ) : (
              <>
                {image.caption && (
                  <Box textAlign="center" mb={2}>
                    <Typography variant="h3">{image.caption}</Typography>
                  </Box>
                )}
                <img
                  src={image.asset.fluid.src}
                  alt={image.alt}
                  style={{ width: '100%', display: 'inherit' }}
                />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

HeroSection.propTypes = {
  heroSection: PropTypes.object,
};

HeroSection.defaultProps = {
  heroSection: null,
};

export default HeroSection;
