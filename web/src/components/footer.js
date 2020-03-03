import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    width: 400,
  },
});

const Footer = props => {
  const logo = props.logo;
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
      </Box>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: '',
  logo: PropTypes.object,
};

export default Footer;
