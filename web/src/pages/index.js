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
  box2: {},
});

export const query = graphql`
  {
    allSanityLandingPage {
      edges {
        node {
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
            description
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
            title
            style
            price
            cta {
              url
              label
            }
          }
        }
      }
    }
  }
`;

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
  } = data.allSanityLandingPage.edges[0].node;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  // const site = (data || {}).site;

  // if (!site) {
  //   throw new Error('Missing "Site settings".');
  // }

  return (
    <Layout>
      <SEO
        title={title}
        description={seo ? seo.description : ''}
        keywords={seo ? seo.keywords : []}
      />
      {/* hero */}
      <Box mt={8}>
        <Container fixed>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              <Box display="flex" alignItems="center" height="100%">
                <Box>
                  <Typography variant="h1" gutterBottom>
                    {heroSection.feature.title}
                  </Typography>
                  <Typography variant="body1">
                    {heroSection.feature.description}
                  </Typography>
                  {heroSection.cta && (
                    <Button
                      component={Link}
                      to={heroSection.cta.url}
                      variant="contained"
                      color="secondary"
                      className={classes.btn}
                    >
                      {heroSection.cta.label}
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src={heroSection.feature.image.asset.fluid.src}
                alt={heroSection.feature.image.alt}
                style={{ width: '100%', display: 'inherit' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* features */}
      <Box py={10} bgcolor="#f6f7fb">
        <Container fixed>
          {featuresSection.features.map((feature, index) => (
            <Box key={feature.id} mt={index > 0 ? 10 : 0}>
              <Grid
                container
                spacing={10}
                justify="space-between"
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
              >
                <Grid item xs={12} lg={5}>
                  <Box display="flex" alignItems="center" height="100%">
                    <Box>
                      <Typography variant="h2" className={classes.h2}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" style={{ maxWidth: 400 }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <img
                    src={feature.image.asset.fluid.src}
                    alt={feature.image.alt}
                    style={{ width: '100%' }}
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
          {featuresSection.cta && (
            <Box textAlign="center" mt={5}>
              <Button
                component={Link}
                to={featuresSection.cta.url}
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
      <Box py={10}>
        <Container fixed>
          <Grid container spacing={10}>
            {solutions.map(solution => (
              <Grid key={solution.id} item xs={12} lg={4}>
                <Box textAlign="center" maxWidth={320}>
                  <img
                    src={solution.image.asset.fluid.src}
                    alt={solution.image.alt}
                    style={{ width: '90%', margin: '0 auto 20px' }}
                  />
                  <Typography variant="h3" gutterBottom>
                    {solution.title}
                  </Typography>
                  <Typography variant="body1">
                    {solution.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* screenshot */}
      {screenshot && (
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
      {/* statements */}
      <Container fixed>
        {statements.map(statement => (
          <Box key={statement.id}>
            {statement.style === 'box1' && (
              <Box
                p={5}
                bgcolor="#BCE3D1"
                borderRadius="0 50px 50px 50px"
                textAlign="center"
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  style={{ lineHeight: 1.5 }}
                >
                  {statement.title}
                </Typography>
                {statement.price && (
                  <Typography variant="h4" gutterBottom>
                    ${statement.price}
                  </Typography>
                )}
                {statement.cta && (
                  <Button
                    component={Link}
                    to={statement.cta.url}
                    variant="contained"
                    color="secondary"
                    className={`${classes.btn} ${classes.btnPurple}`}
                  >
                    {statement.cta.label}
                  </Button>
                )}
              </Box>
            )}
            {statement.style === 'simple' && (
              <Box py={10} textAlign="center" maxWidth={800} margin="0 auto">
                <Typography
                  variant="h2"
                  gutterBottom
                  style={{ lineHeight: 1.5 }}
                >
                  {statement.title}
                </Typography>
                {statement.price && (
                  <Typography variant="h4" gutterBottom>
                    ${statement.price}
                  </Typography>
                )}
                {statement.cta && (
                  <Button
                    component={Link}
                    to={statement.cta.url}
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                  >
                    {statement.cta.label}
                  </Button>
                )}
              </Box>
            )}
            {statement.style === 'box2' && (
              <Box
                p={5}
                bgcolor="#CCBEDF"
                borderRadius="0 50px 50px 50px"
                textAlign="center"
              >
                <Typography variant="h2" gutterBottom>
                  {statement.title}
                </Typography>
                {statement.price && (
                  <Typography variant="h4">${statement.price}</Typography>
                )}
                {statement.cta && (
                  <Button
                    component={Link}
                    to={statement.cta.url}
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                  >
                    {statement.cta.label}
                  </Button>
                )}
              </Box>
            )}
          </Box>
        ))}
      </Container>
    </Layout>
  );
};

export default IndexPage;
