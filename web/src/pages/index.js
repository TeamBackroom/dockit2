import React from 'react';
import { graphql } from 'gatsby';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from '../lib/helpers';
// import BlogPostPreviewList from '../components/blog-post-preview-list';
// import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';

// import { Link } from 'gatsby';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
// import Layout from '../components/layout';
// import Image from '../components/image';
import IMG1 from '../images/img1.jpg';
import IMG2 from '../images/img2.jpg';
import IMG3 from '../images/img3.jpg';
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
  },
  btnPurple: {
    backgroundColor: '#5F5697',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#4A4471',
    },
  },
});

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;
  const classes = useStyles();

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.',
    );
  }

  return (
    <Layout>
      <SEO title="Home" />
      {/* s1 */}
      <Box mt={8}>
        <Container fixed>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              <Box display="flex" alignItems="center" height="100%">
                <Box>
                  <Typography variant="h1" gutterBottom>
                    Spend your time on what matters most.
                  </Typography>
                  <Typography variant="body1">
                    Gain efficiency, velocity and insight within one intuitive
                    case management solution.
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                  >
                    LEARN MORE
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src={IMG1}
                alt=""
                style={{ width: '100%', display: 'inherit' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* s2 */}
      <Box py={10} bgcolor="#f6f7fb">
        <Container fixed>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={7}>
              <Box display="flex" alignItems="center" height="100%">
                <Box>
                  <Typography variant="h2">Advanced Case</Typography>
                  <Typography variant="h2" className={classes.h2}>
                    Automation and Workflow
                  </Typography>
                  <Typography variant="body1" style={{ maxWidth: 400 }}>
                    Gain complete control over tasks, calendaring,
                    communications and processes with the most comprehensive
                    workflow capabilities in the industry.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
              <img src={IMG2} alt="" style={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* s3 */}
      <Box py={10} bgcolor="#f6f7fb">
        <Container fixed>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={5}>
              <img src={IMG2} alt="" style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} lg={7}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Box>
                  <Typography variant="h2">Limitless Analytics</Typography>
                  <Typography variant="h2" className={classes.h2}>
                    &amp; Intelligence
                  </Typography>
                  <Typography variant="body1" style={{ maxWidth: 400 }}>
                    Access real-time insights to understand case profitability,
                    leverage drag and drop tiles to build custom dashboards, set
                    report subscriptions and have all you need and more.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* s4 */}
      <Box pt={10} pb={6} bgcolor="#f6f7fb">
        <Container fixed>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={7}>
              <Box display="flex" alignItems="center" height="100%">
                <Box>
                  <Typography variant="h2" className={classes.h2}>
                    Anytime, Anywhere Access
                  </Typography>
                  <Typography variant="body1" style={{ maxWidth: 400 }}>
                    Through an instictive, modern interface, access all of your
                    client information on any device whenever and wherever you
                    need it.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
              <img src={IMG2} alt="" style={{ width: '100%' }} />
            </Grid>
          </Grid>
          <Box textAlign="center" mt={5}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
            >
              GET DEMO TODAY
            </Button>
          </Box>
        </Container>
      </Box>
      {/* s5 */}
      <Box py={10}>
        <Container fixed>
          <Grid container spacing={10}>
            <Grid item xs={12} lg={4}>
              <Box textAlign="center" maxWidth={400}>
                <img
                  src={IMG3}
                  alt=""
                  style={{ width: '80%', margin: '0 auto 20px' }}
                />
                <Typography variant="h3" gutterBottom>
                  Get More Time Back Each Day
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum ipsum lorem ipsum.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box textAlign="center" maxWidth={400}>
                <img
                  src={IMG3}
                  alt=""
                  style={{ width: '80%', margin: '0 auto 20px' }}
                />
                <Typography variant="h3" gutterBottom>
                  Make Informed Decisions
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum ipsum lorem ipsum.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box textAlign="center" maxWidth={400}>
                <img
                  src={IMG3}
                  alt=""
                  style={{ width: '80%', margin: '0 auto 20px' }}
                />
                <Typography variant="h3" gutterBottom>
                  Collaborate, Communicate and Streamline Work
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum ipsum lorem ipsum.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* s6 */}
      <Container fixed>
        <Box
          p={5}
          bgcolor="#BCE3D1"
          borderRadius="0 50px 50px 50px"
          textAlign="center"
        >
          <Typography variant="h2" gutterBottom style={{ lineHeight: 1.5 }}>
            Statement Summerizing the big problem this product solves, for the
            absolutely insanely low price of...
          </Typography>
          <Typography variant="h4">$595</Typography>
        </Box>
      </Container>
      <Container fixed>
        <Box py={10} textAlign="center" maxWidth={800} margin="0 auto">
          <Typography variant="h2" gutterBottom style={{ lineHeight: 1.5 }}>
            Dockit, by Needles
            <br />
            delivered with decades of legal intelligence, supported by a history
            of 2,000 Needles firms, and reimagined with the most modern
            technology
          </Typography>
        </Box>
      </Container>
      <Container fixed>
        <Box
          p={5}
          bgcolor="#CCBEDF"
          borderRadius="0 50px 50px 50px"
          textAlign="center"
        >
          <Typography variant="h2">Want to get started statement?</Typography>
          <Button
            variant="contained"
            color="secondary"
            className={`${classes.btn} ${classes.btnPurple}`}
          >
            GET DEMO TODAY
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
