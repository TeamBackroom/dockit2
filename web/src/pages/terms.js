import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/portableText';
import TermsStatic from './terms_static';

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
    '& p': {
      '& +h3': {
        marginTop: 40,
      }
    },
    '& ul': {
      display: 'table',
      listStyle: 'none',
      marginBottom: 40,
      '& ul': {
        padding: 0,
        marginBottom: 0,
        width: '100%',
      },
    },
    '& li': {
      display: 'table-row',
      paddingTop: 8,
    },
    '& code': {
      display: 'table-cell',
      paddingTop: 8,
      paddingRight: 8,
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontSize: '0.875rem',
    },
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
      fontSize: '1rem',
      marginBottom: 10,
      '&:first-child': {
        marginTop: 0,
      },
    },
    '& h4': {
      fontFamily: ['Rubik', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 600,
      color: '#2F3F4D',
      fontSize: '1rem',
      marginBottom: 10,
    },
  },
});

const TermsPage = props => {
  const { data, errors } = props;
  const classes = useStyles();
  const {
    title,
    seo,
    _rawContent: content,
    _rawTermsContent: termsContent,
    _rawPolicyContent: policyContent,
  } = data.page.nodes[0];

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
        <Box mt={5} className={classes.content} display="flex">
          <Box>
            <h3>1.</h3>
          </Box>
          <Box pl={4}>
            <PortableText blocks={termsContent} />
          </Box>
        </Box>
        <Box mt={5} className={classes.content}>
          <PortableText blocks={policyContent} />
        </Box>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    page: allSanityTermsPage {
      nodes {
        title
        _rawContent
        _rawTermsContent
        _rawPolicyContent
        seo {
          description
          author
          keywords
        }
      }
    }
  }
`;

TermsPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.object),
};

TermsPage.defaultProps = {
  data: null,
  errors: null,
};

export default TermsPage;
