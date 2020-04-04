// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const clientConfig = require('./client-config');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-160358849-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-K59L8NQ',

        //// Include GTM in development.
        //// Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        //// datalayer to be set before GTM is loaded
        //// should be an object or a function that is executed in the browser
        //// Defaults to null
        // defaultDataLayer: { platform: 'gatsby' },

        //// Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',
      },
    },
  ],
};
