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
import clsx from 'clsx';
import Image from 'next/image';
import { Rowing } from '@material-ui/icons';
import { useTheme, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    root: {},
    box1: {
      background: 'red',
      height: '200px',
      width: '100%',
    },
    textbg: {
      background: 'yellow',
    },
    mt: {
      marginTop: '80px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'scale-down',
    },
  };
});

function mobilefirst() {
  const classes = useStyles();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.only('md'));

  return (
    <Box m={5}>
      <Grid container spacing={4} direction={largeScreen ? 'row' : 'column'}>
        <Grid item>
          <Box>
            <Typography variant={largeScreen ? 'h1' : 'h4'}>Hello</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="h4">Hello</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default mobilefirst;
