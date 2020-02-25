// import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Box, Link } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      sanityNav {
        footerNav {
          _key
          title
          url
          newTab
        }
      }
    }
  `);
  const items = data.sanityNav.footerNav;
  return (
    <footer>
      <Box
        fontFamily="Rubik"
        fontSize="3rem"
        fontWeight={500}
        textAlign="center"
        py={10}
      >
        {props.siteTitle}
      </Box>
      <Box mb={10}>
        <Grid container spacing={5}>
          {items.map(item => (
            <Grid key={item._key} item xs={12} lg={3}>
              <Box textAlign="center">
                <Link to={item.url} target={item.newTab ? '_blank' : '_self'}>
                  {item.title}
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
