import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Container,
  Box,
  Typography,
  Button,
  Link,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HubspotForm from 'react-hubspot-form';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import HeroSection from '../components/hero';
import Feature from '../components/feature';
import Solutions from '../components/solutions';
import Statement from '../components/statement';
import TestimonialsCarousel from '../components/testimonials-carousel';

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
});

const IndexPage = props => {
  const { data, errors } = props;
  const classes = useStyles();
  const {
    title,
    seo,
    heroSection,
    testimonialsSection,
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
      {/* testimonials */}
      {testimonialsSection && testimonialsSection.testimonials.length > 0 && (
        <Box py={5} id="testimonials" position="relative" zIndex={10}>
          <Container>
            <Box mb={6} textAlign="center">
              <Typography variant="h1" component="h2" gutterBottom>
                {testimonialsSection.title}
              </Typography>
            </Box>
            <TestimonialsCarousel
              testimonials={testimonialsSection.testimonials}
            />
          </Container>
        </Box>
      )}
      {/* features */}
      <Box pt={18} pb={5} mt={-11} bgcolor="#f6f7fb" id="features">
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
          <Statement key={statement.id} statement={statement} />
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
        testimonialsSection {
          title
          testimonials {
            id
            title
            name
            text
            image {
              caption
              asset {
                fluid {
                  src
                }
              }
              alt
            }
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
