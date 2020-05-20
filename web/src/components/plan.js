import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortableText from './portableText';

const useStyles = makeStyles(theme => ({
  planBox: {
    backgroundColor: '#dcf0e7',
    // color: 'theme.palette.text.primary',
  },
  planTitle: {
    zoom: '85%',
    lineHeight: 1,
    // color: theme.palette.text.primary,
    '& p': {
      display: 'inline',
      marginTop: 0,
      marginBottom: 10,
    },
  },
  planSubtitle: {
    lineHeight: 1.2,
    // color: theme.palette.text.primary,
    '& p': {
      marginTop: 0,
      marginBottom: 10,
    },
  },
  description: {
    color: '#2F3F4D',
  },
  planPrice: {
    zoom: '110%',
    position: 'relative',
    paddingTop: 20,
    marginTop: 20,
    '&::before': {
      content: '""',
      display: 'block',
      width: 80,
      height: 5,
      backgroundColor: '#F15623',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-40px)',
    },
  },
  annualPrice: {
    zoom: '140%',
    marginRight: theme.spacing(2),
  },
  annualPriceDescription: {
    textAlign: 'left',
    color: '#2F3F4D',
    '& p': {
      margin: 0,
      fontSize: '1.3rem',
      fontWeight: 'bold',
    },
  },
  commingSoon: {
    // backgroundColor: '#F15623',
    // position: 'absolute',
    // padding: '15px 40px 15px 30px',
    // top: -20,
    // left: '50%',
    // transform: 'translateX(-50%)',
    // borderRadius: '0 50px 0 0',
    // whiteSpace: 'nowrap',
  },
  comingSoonText: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: '#F15623',
    textTransform: 'uppercase',
    fontSize: '2.5rem',
  },
}));

function Plan({ plan }) {
  const classes = useStyles();
  const {
    id,
    _rawTitle: title,
    _rawSubtitle: subtitle,
    _rawDescription: description,
    _rawAnnualPriceDescription: annualPriceDescription,
    _rawMonthlyPriceDescription: monthlyPriceDescription,
    annualPrice,
    comingSoon,
    comingSoonText,
  } = plan;

  return (
    <Grid item xs={12} lg={6} key={id}>
      <Box
        p={2}
        borderRadius="0 50px 50px 50px"
        textAlign="center"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        position="relative"
        className={classes.planBox}
      >
        <Box pt={4}>
          {title && (
            <Typography variant="h1" gutterBottom className={classes.planTitle}>
              <PortableText blocks={title} />
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant="h3"
              gutterBottom
              className={classes.planSubtitle}
            >
              <PortableText blocks={subtitle} />
            </Typography>
          )}
          {/* {description && (
            <Box px={2}>
              <Typography variant="h5" className={classes.description}>
                <PortableText blocks={description} />
              </Typography>
            </Box>
          )} */}
        </Box>
        {!comingSoon && annualPrice && (
          <>
            <Box
              className={classes.planPrice}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h1"
                component="div"
                className={classes.annualPrice}
              >
                ${annualPrice}
              </Typography>
              {annualPriceDescription && (
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  className={classes.annualPriceDescription}
                >
                  <PortableText blocks={annualPriceDescription} />
                </Typography>
              )}
            </Box>
            <Box>
              {monthlyPriceDescription && (
                <Typography variant="body1">
                  <PortableText blocks={monthlyPriceDescription} />
                </Typography>
              )}
            </Box>
          </>
        )}
        {comingSoon && comingSoonText && (
          <Box className={classes.commingSoon}>
            <Typography
              variant="h3"
              component="div"
              className={classes.comingSoonText}
            >
              {comingSoonText}
            </Typography>
          </Box>
        )}
      </Box>
    </Grid>
  );
}

Plan.propTypes = {
  plan: PropTypes.object,
};

Plan.defaultProps = {
  plan: {},
};

export default Plan;
