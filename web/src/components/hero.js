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
// import SanityMuxPlayer from 'sanity-mux-player';
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
  const { title } = heroSection;
  const {
    title: featureTitle,
    description,
    // image,
    // video,
  } = heroSection.feature;
  const { url, label } = heroSection.cta;

  return (
    <Box my={8}>
      <Container fixed>
        {title && (
          <Box textAlign="center" mb={7}>
            <Typography variant="h1">{title}</Typography>
          </Box>
        )}
        <Grid container spacing={5} direction="row-reverse">
          <Grid item xs={12} lg={7}>
            <ReactPlayer
              url="https://vimeo.com/408538083"
              // light
              // playing
              controls
              width="100%"
            />
            {
              // video ? (
              // <SanityMuxPlayer
              //   assetDocument={video.file.asset}
              //   autoload
              //   autoplay={false}
              //   // className={string}
              //   height={400}
              //   loop={false}
              //   muted={false}
              //   showControls={false}
              //   style={{}}
              //   width="100%"
              // />
              // ):(
              // <img
              //   src={image.asset.fluid.src}
              //   alt={image.alt}
              //   style={{ width: '100%', display: 'inherit' }}
              // />
              // )
            }
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box display="flex" alignItems="flex-start" height="100%">
              <Box>
                <Typography variant="h2" gutterBottom>
                  {featureTitle}
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
