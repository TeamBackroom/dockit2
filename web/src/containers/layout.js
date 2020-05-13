import React from 'react';
// import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import { Container } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import theme from '../components/theme';

function LayoutContainer(props) {
  const { children, currentPage } = props;
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
          _rawFooter
        }
      }
    }
  `);
  const site = data.settings.nodes[0];
  const { _rawFooter: footerText } = site;

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Needles Neos" />
        <meta name="application-name" content="Needles Neos" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          siteTitle={site.title}
          logo={site.logo}
          currentPage={currentPage}
        />
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
