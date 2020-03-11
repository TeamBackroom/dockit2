import React from 'react';
// import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import theme from '../components/theme';
import { Container } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

function LayoutContainer(props) {
  const { children } = props;
  const data = useStaticQuery(graphql`
    {
      settings: allSanitySiteSettings {
        nodes {
          description
          title
          keywords
          author {
            name
          }
          logo {
            asset {
              fluid {
                src
              }
            }
          }
          logoAlt {
            asset {
              fluid {
                src
              }
            }
          }
          footerText: footer
        }
      }
    }
  `);
  const site = data.settings.nodes[0];

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header siteTitle={site.title} logo={site.logo} />
        {children}
        <Container fixed>
          <Footer
            siteTitle={site.title}
            logo={site.logoAlt}
            footerText={footerText}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default LayoutContainer;
