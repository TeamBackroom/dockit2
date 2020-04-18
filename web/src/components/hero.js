import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
import anim from '../images/anim.gif';
import play from '../images/play.png';

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
  const [showVideo, setShowVideo] = useState(false);

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
            {showVideo ? (
              <ReactPlayer
                url="https://vimeo.com/408538083"
                // light
                playsinline
                playing
                controls={false}
                width="100%"
                // style={{ backgroundImage: `url(${playIcon}) !important` }}
                config={{}}
              />
            ) : (
              <Box
                position="relative"
                // with="100%"
                height={360}
                style={{
                  backgroundImage: `url(${anim})`,
                  backgroundSize: 'auto 360px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50%',
                }}
              >
                <img
                  src={play}
                  alt="play video icon"
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: 100,
                    height: 100,
                    zIndex: 100,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50px,-50px)',
                  }}
                  onClick={() => setShowVideo(true)}
                />
              </Box>
            )}
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
            <Box display="flex" alignItems="center" height="100%">
              <Box>
                <Typography variant="h2" gutterBottom className={classes.h2}>
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
