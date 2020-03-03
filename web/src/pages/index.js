import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../components/theme';
import PortableText from '../components/portableText';
import HeroSection from '../components/hero';
import Feature from '../components/feature';
import Solutions from '../components/solutions';
import Pricing from '../components/pricing';

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
});

const IndexPage = props => {
  const { data, errors } = props;
  const classes = useStyles();
  const {
    title,
    seo,
    heroSection,
    featuresSection,
    solutions,
    screenshot,
    statements,
    plans,
  } = data.page.nodes[0];

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={seo ? seo.description : ''}
        keywords={seo ? seo.keywords : []}
      />
      {/* hero */}
      <HeroSection heroSection={heroSection} />
      {/* features */}
      <Box py={10} bgcolor="#f6f7fb" id="features">
        <Container fixed>
          <Box mb={10} textAlign="center">
            <Typography variant="h1" component="h2" gutterBottom>
              {featuresSection.title}
            </Typography>
          </Box>
          {featuresSection.features.map((feature, index) => (
            <Feature feature={feature} index={index} key={feature.id} />
          ))}
          {featuresSection.cta && (
            <Box textAlign="center" mt={5}>
              <Button
                component={Link}
                href={featuresSection.cta.url}
                variant="contained"
                color="secondary"
                className={classes.btn}
              >
                {featuresSection.cta.label}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
      {/* solutions */}
      <Solutions solutions={solutions} />
      {/* screenshot */}
      {screenshot && screenshot.asset && (
        <Container fixed>
          <Box mb={10}>
            <img
              src={screenshot.asset.fluid.src}
              alt={screenshot.alt}
              style={{ width: '100%' }}
            />
          </Box>
        </Container>
      )}
      {/* pricing */}
      <Pricing plans={plans} />
      {/* statements */}
      <Container fixed>
        {statements.map(statement => (
          <Box
            key={statement.id}
            my={10}
            textAlign={statement.image ? 'left' : 'center'}
            margin="0 auto"
            display={statement.image ? 'flex' : 'block'}
            alignItems="center"
          >
            {statement.image && (
              <Box mr={10}>
                <img
                  src={statement.image.asset.fluid.src}
                  alt={statement.image.alt}
                  style={{ height: '100%' }}
                />
              </Box>
            )}
            <Typography variant="h2" gutterBottom style={{ lineHeight: 1.5 }}>
              <PortableText blocks={statement._rawTitle} />
            </Typography>
            {statement.cta && (
              <Button
                component={Link}
                href={statement.cta.url}
                variant="contained"
                color="secondary"
                className={classes.btn}
              >
                {statement.cta.label}
              </Button>
            )}
          </Box>
        ))}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    page: allSanityLandingPage {
      nodes {
        title
        seo {
          description
          author
          keywords
        }
        heroSection {
          feature {
            description
            image {
              caption
              asset {
                fluid {
                  src
                }
              }
              alt
            }
            title
          }
          cta {
            label
            url
          }
        }
        featuresSection {
          title
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
          cta {
            label
            url
          }
        }
        solutions {
          id
          title
          _rawDescription
          image {
            asset {
              fluid {
                src
              }
            }
          }
        }
        screenshot {
          caption
          alt
          asset {
            fluid {
              src
            }
          }
        }
        statements {
          id
          _rawTitle
          image {
            asset {
              fluid {
                src
              }
            }
          }
          cta {
            url
            label
          }
        }
        plans {
          id
          _rawTitle
          _rawDescription
          annualPrice
          monthlyPrice
        }
      }
    }
  }
`;

export default IndexPage;
