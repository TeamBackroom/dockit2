import { graphql, StaticQuery } from 'gatsby';
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

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  const { children } = props;
  // const [showNav, setShowNav] = useState(false);
  // function handleShowNav() {
  //   setShowNav(true);
  // }
  // function handleHideNav() {
  //   setShowNav(false);
  // }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"',
          );
        }
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
              <Header siteTitle={data.site.title} />
              {children}
              <Container fixed>
                <Footer siteTitle={data.site.title} />
              </Container>
            </ThemeProvider>
          </>
        );
      }}
    />
  );
}

export default LayoutContainer;
