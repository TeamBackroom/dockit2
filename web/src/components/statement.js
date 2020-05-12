import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography, Hidden, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortableText from './portableText';

const useStyles = makeStyles({
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

function Statement(props) {
  const classes = useStyles();
  const { statement } = props;
  const { _rawDescription: description, _rawTitle: title } = statement;

  return (
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
          <PortableText blocks={title} />
        </Typography>
        {description && (
          <Typography variant="body1" component="div">
            <PortableText blocks={description} />
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
  );
}

Statement.propTypes = {
  statement: PropTypes.object.isRequired,
};

export default Statement;
