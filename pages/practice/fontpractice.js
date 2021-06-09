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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

theme.typography.subtitle1 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.125rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '6rem',
  },
};

function fontpractice() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" gutterBottom>
        Lorem ipsum dolor sit amet consectetur.
      </Typography>
      <Typography variant="subtitle2">
        Lorem ipsum dolor sit amet consectetur.
      </Typography>
    </ThemeProvider>
  );
}

export default fontpractice;
