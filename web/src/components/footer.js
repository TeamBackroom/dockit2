import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import PortableText from './portableText';

const useStyles = makeStyles(theme => ({
  logo: {
    width: 400,
    maxWidth: '100%',
  },
  links: {
    position: 'relative',
    paddingTop: theme.spacing(5),
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      width: 100,
      backgroundColor: theme.palette.grey[400],
      height: 1,
      left: '50%',
      marginLeft: -50,
    },
  },
  link: {
    fontSize: '1.2rem',
    margin: '0 20px',
    textDecoration: 'none',
    color: '#598CB3',
  },
  bottomLine: {
    '& a': {
      textDecoration: 'none',
      color: '#598CB3',
    },
  },
  sep: {
    fontSize: 24,
    color: theme.palette.text.primary,
  },
}));

const Footer = props => {
  const { logo, footerText } = props;
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box textAlign="center" py={10}>
        {logo && logo.asset && (
          <img
            src={logo.asset.fluid.src}
            alt={logo.alt}
            className={classes.logo}
          />
        )}
        <Box
          mt={8}
          mb={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.links}
        >
          <Link className={classes.link} to="/terms">
            Terms &amp; Privacy
          </Link>
          <span className={classes.sep}>|</span>
          <Link className={classes.link} to="/license">
            License
          </Link>
        </Box>
        <Box className={classes.bottomLine}>
          <PortableText blocks={footerText} />
        </Box>
      </Box>
    </footer>
  );
};

Footer.propTypes = {
  logo: PropTypes.object,
  footerText: PropTypes.arrayOf(PropTypes.object),
};

Footer.defaultProps = {
  logo: '',
  footerText: '',
};

export default Footer;
