// import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Rubik',
    fontSize: '3rem',
    fontWeight: 500,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: '30px 30px 10px 0',
    borderRadius: '0 0 30px 0',
  },
  headerRight: {
    backgroundColor: '#BCE3D1',
    borderRadius: '0 0 0 30px',
    width: '100%',
    marginLeft: 10,
  },
  wrapper: {
    position: 'relative',
    '&::before': {
      content: '""',
      display: 'block',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: 0,
      left: 0,
      right: '50%',
      bottom: 0,
      zIndex: -1,
    },
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: '#BCE3D1',
      position: 'absolute',
      top: 0,
      right: 0,
      left: '50%',
      bottom: 0,
      zIndex: -1,
    },
  },
  inner: {
    backgroundColor: theme.palette.common.white,
  },
  logo: {
    maxWidth: '100%',
    minWidth: 326,
  },
}));

function Header({ logo }) {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Container>
        <Box display="flex" className={classes.inner}>
          <header className={classes.header}>
            {logo && logo.asset && (
              <img
                src={logo.asset.fluid.src}
                alt={logo.alt}
                className={classes.logo}
              />
            )}
          </header>
          <Box className={classes.headerRight}></Box>
        </Box>
      </Container>
    </Box>
  );
}

Header.propTypes = {
  logo: PropTypes.object,
};

Header.defaultProps = {
  logo: null,
};

export default Header;
