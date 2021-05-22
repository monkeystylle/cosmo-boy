import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => {
  return {
    root: {
      margin: 100,
      display: 'flex',
      gap: '40px',
      flexDirection: 'column',
    },
  };
});

function formpractice() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}

export default formpractice;
