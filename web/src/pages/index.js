import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import {
  Container,
  Box,
  Typography,
  Button,
  Link,
  Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HubspotForm from 'react-hubspot-form';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/portableText';
import HeroSection from '../components/hero';
import Feature from '../components/feature';
import Solutions from '../components/solutions';

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
  statement: {
    '& p': {
      margin: 0,
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
    formSection,
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
      {/* hero */}
      <HeroSection heroSection={heroSection} />
      {/* features */}
      <Box py={5} bgcolor="#f6f7fb" id="features">
        <Container fixed>
          <Box mb={5} textAlign="center">
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              style={{ color: '#F15623' }}
            >
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
      {/* <Pricing plans={plans} /> */}
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
            className={classes.statement}
          >
            {statement.image && (
              <Hidden mdDown>
                <Box mr={10}>
                  <img
                    src={statement.image.asset.fluid.src}
                    alt={statement.image.alt}
                    style={{ height: '100%' }}
                  />
                </Box>
              </Hidden>
            )}
            <Box>
              <Typography variant="h2" gutterBottom style={{ lineHeight: 1.5 }}>
                <PortableText blocks={statement._rawTitle} />
              </Typography>
              {statement._rawDescription && (
                <Typography variant="body1" component="div">
                  <PortableText blocks={statement._rawDescription} />
                </Typography>
              )}
            </Box>
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
        {formSection.hubspotFormId && (
          <Box id="form" maxWidth={500} mt={5} mx="auto">
            <Box mb={2}>
              <Typography variant="h2" gutterBottom style={{ lineHeight: 1.5 }}>
                {formSection.title}
              </Typography>
            </Box>
            <HubspotForm
              portalId={process.env.GATSBY_HUBSPOT_PORTAL_ID}
              formId={formSection.hubspotFormId}
              loading={<div />}
            />
          </Box>
        )}
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
          title
          feature {
            description
            video {
              file {
                asset {
                  assetId
                  playbackId
                  status
                  _key
                  _type
                  filename
                  thumbTime
                }
              }
            }
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
          _rawDescription
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
        formSection {
          title
          hubspotFormId
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.object),
};

IndexPage.defaultProps = {
  data: null,
  errors: null,
};

export default IndexPage;
