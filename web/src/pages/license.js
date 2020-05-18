import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/portableText';
import LicenseStatic from './license_static';

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
      backgroundColor: '#F15623',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  },
  content: {
    '& h2': {
      fontFamily: ['Rubik', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 600,
      color: '#2F3F4D',
      fontSize: '2.5rem',
      marginBottom: 10,
    },
    '& h3': {
      fontFamily: ['Rubik', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 600,
      color: '#2F3F4D',
      fontSize: '2rem',
      marginBottom: 10,
    },
    '& h4': {
      fontFamily: ['Rubik', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 600,
      color: '#2F3F4D',
      fontSize: '1.5rem',
      marginBottom: 10,
    },
  },
});

const LicensePage = props => {
  const { data, errors } = props;
  const classes = useStyles();
  const { title, seo, _rawContent: content } = data.page.nodes[0];

  if (errors) {
    return (
      <Layout currentPage="index">
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout currentPage="idex">
      <SEO
        title={title}
        description={seo ? seo.description : ''}
        keywords={seo ? seo.keywords : []}
      />
      <Container fixed>
        <Box mt={10}>
          <Typography variant="h1">{title}</Typography>
        </Box>
        <Box mt={5} className={classes.content}>
          <PortableText blocks={content} />
        </Box>
        <Box mt={2} className={classes.content}>
          <LicenseStatic />
        </Box>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    page: allSanityLicensePage {
      nodes {
        title
        _rawContent
        seo {
          description
          author
          keywords
        }
      }
    }
  }
`;

LicensePage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.object),
};

LicensePage.defaultProps = {
  data: null,
  errors: null,
};

export default LicensePage;
