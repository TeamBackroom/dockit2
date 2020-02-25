// import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Box } from '@material-ui/core';

const Footer = ({ siteTitle }) => (
  <footer>
    <Box
      fontFamily="Rubik"
      fontSize="3rem"
      fontWeight={500}
      textAlign="center"
      py={10}
    >
      {siteTitle}
    </Box>
    <Box mb={10}>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={3}>
          <Box textAlign="center">Footer Nav</Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box textAlign="center">Footer Nav</Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box textAlign="center">Footer Nav</Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box textAlign="center">Footer Nav</Box>
        </Grid>
      </Grid>
    </Box>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
