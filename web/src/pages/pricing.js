import React from 'react';
import { graphql } from 'gatsby';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import theme from '../components/theme';
import PortableText from '../components/portableText';
import Plan from '../components/plan';

const useStyles = makeStyles({
  title: {
    color: '#F15623',
  },
  heading: {
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
  btnPurple: {
    backgroundColor: '#5F5697',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#4A4471',
    },
  },
  simple: {},
  box1: {
    padding: 5,
    bgcolor: '#BCE3D1',
    borderRadius: '0 50px 50px 50px',
    textAlign: 'center',
  },
  planTitle: {
    lineHeight: 1.2,
    '& p': {
      marginTop: 0,
      marginBottom: 10,
    },
  },
  planPrice: {
    position: 'relative',
    paddingTop: 20,
    marginTop: 20,
    '&::before': {
      content: '""',
      display: 'block',
      width: 80,
      height: 5,
      backgroundColor: '#F25523',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-40px)',
    },
  },
  statement: {
    '& p': {
      margin: 0,
    },
  },
});

const PricingPage = props => {
  const { data, errors } = props;
  const classes = useStyles();
  const {
    title,
    seo,
    _rawHeroSimple: heroSimple,
    _rawPlansTitle: plansTitle,
    plans,
    statement,
    features,
  } = data.page.nodes[0];

  if (errors) {
    return (
      <Layout currentPage="pricing">
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout currentPage="pricing">
      <SEO
        title={title}
        description={seo ? seo.description : ''}
        keywords={seo ? seo.keywords : []}
      />
      <Container>
        <Box mt={10}>
          <Typography variant="h1" className={classes.title}>
            {title}
          </Typography>
          {/* hero */}
          {heroSimple && (
            <>
              <Typography variant="h2" gutterBottom>
                {heroSimple.title}
              </Typography>
              <Typography variant="h5">
                {heroSimple.description[0].children[0].text}
              </Typography>
            </>
          )}
        </Box>
        {plansTitle && (
          <Box mt={10}>
            <Typography variant="h5">
              {plansTitle[0].children[0].text}
            </Typography>
          </Box>
        )}
      </Container>
      {/* plans */}
      <Container fixed id="pricing">
        <Box pt={5} pb={10}>
          <Grid container spacing={10}>
            {plans.map(plan => (
              <Plan key={plan.id} plan={plan} />
            ))}
          </Grid>
        </Box>
      </Container>
      <Container>
        {/* statement */}
        <Typography variant="h2" gutterBottom>
          <PortableText blocks={statement._rawDescription} />
        </Typography>
        {/* features */}
        {features.map((feature, index) => (
          <Box key={feature.id} mt={10}>
            <Typography variant="h3" className={classes.heading}>
              {feature.title}
            </Typography>
            <Typography variant="h5">{feature.description}</Typography>
          </Box>
        ))}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    page: allSanityPricingPage {
      nodes {
        title
        seo {
          description
          author
          keywords
        }
        _rawHeroSimple
        _rawPlansTitle
        plans {
          id
          _rawTitle
          _rawSubtitle
          _rawDescription
          _rawAnnualPriceDescription
          _rawMonthlyPriceDescription
          annualPrice
          comingSoon
        }
        statement {
          _rawTitle
          _rawDescription
        }
        features {
          id
          title
          description
          image {
            caption
            alt
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default PricingPage;
