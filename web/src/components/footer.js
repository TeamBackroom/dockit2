import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import PortableText from './portableText';

const useStyles = makeStyles({
  logo: {
    width: 400,
    maxWidth: '100%',
  },
  link: {
    fontSize: '1.2rem',
    margin: '0 15px',
    textDecoration: 'none',
    color: '#598CB3',
  },
  bottomLine: {
    '& a': {
      textDecoration: 'none',
      color: '#598CB3',
    },
  },
});

const Footer = props => {
  const { logo, footerText } = props;
  const classes = useStyles();

  return (
    <footer>
      <Box textAlign="center" py={10}>
        {logo && logo.asset && (
          <img
            src={logo.asset.fluid.src}
            alt={logo.alt}
            className={classes.logo}
          />
        )}
        <Box mt={8} mb={5}>
          <Link className={classes.link} to="/terms">
            Terms &amp; Privacy
          </Link>
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
