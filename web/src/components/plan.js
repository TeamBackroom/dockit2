import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortableText from './portableText';

const useStyles = makeStyles(theme => ({
  planBox: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  planTitle: {
    zoom: '110%',
    lineHeight: 1,
    color: theme.palette.common.white,
    '& p': {
      marginTop: 0,
      marginBottom: 10,
    },
  },
  planSubtitle: {
    lineHeight: 1.2,
    color: theme.palette.common.white,
    '& p': {
      marginTop: 0,
      marginBottom: 10,
    },
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
    color: theme.palette.common.white,
  },
  comingSoon: {
    color: '#F15623',
    fontWeight: 'bold',
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
        className={classes.planBox}
      >
        <Typography variant="h6" gutterBottom className={classes.comingSoon}>
          {comingSoon ? <span>COMING SOON!</span> : <span>&nbsp;</span>}
        </Typography>
        <Box>
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
          {description && (
            <Box px={2}>
              <Typography variant="h5">
                <PortableText blocks={description} />
              </Typography>
            </Box>
          )}
        </Box>
        {annualPrice && (
          <Box className={classes.planPrice}>
            <Typography
              variant="h1"
              component="div"
              className={classes.annualPrice}
            >
              ${annualPrice}
            </Typography>
            {annualPriceDescription && (
              <Typography variant="h5" component="div" gutterBottom>
                <PortableText blocks={annualPriceDescription} />
              </Typography>
            )}
            <br />
            {monthlyPriceDescription && (
              <Typography variant="body1">
                <PortableText blocks={monthlyPriceDescription} />
              </Typography>
            )}
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
