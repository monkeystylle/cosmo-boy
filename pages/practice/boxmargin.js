import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => {
  return {
    root: {
      background: '#fb9300',
      height: '100vh',
      [theme.breakpoints.only('xl')]: {
        background: 'red',
      },
      [theme.breakpoints.only('lg')]: {
        background: '#0a81ab',
      },
      [theme.breakpoints.only('md')]: {
        background: 'green',
      },
      [theme.breakpoints.only('sm')]: {
        background: '#ac66cc',
      },
    },
    marge: {
      maxWidth: '1200px',
      margin: '0px auto',
      width: '90%',
    },
  };
});

function boxmargin() {
  const classes = useStyles();

  return (
    <Box className={classes.marge}>
      <Box className={classes.root}>1</Box>
    </Box>
  );
}

export default boxmargin;
