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
      background: '#0A0B5B',
      overflowX: 'hidden',
    },
    title: {
      flexGrow: 1,
    },
    form: {
      background: '#e0e0fb',
      display: 'flex',
      flexDirection: 'column',
      paddingY: theme.spacing(2),
    },
    /* small tablet styles */

    /* large & laptop styles */

    /* desktop styles   */
  };
});

function mobilefirst() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/*NAV */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Cosmo junkie
          </Typography>
          <Button color="inherit">
            <Typography variant="h6">Portfolio</Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="h6">Skills</Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="h6">Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>

      {/*WELCOME */}
      <Box>
        <Typography variant="h3" className={classes.title}>
          Space Enthusiast
          <br />& JavaScript Developer
        </Typography>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellat!
        </Typography>
        <Button variant="contained" color="primary">
          View my work
        </Button>
        <img src="/images/banner_image.png" alt="pic of planet" />
      </Box>

      {/* PORTFOLIO */}
      <Box>
        <Typography variant="h4">Some of my Projects</Typography>
        <Grid container spacing={5}>
          <Grid item>
            <Paper elevation={4}>
              <img src="/images/project_1.png" alt="space race image" />
              <Typography variant="h6">Space Race Game</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={4}>
              <img src="/images/project_2.png" alt="planet boy image" />
              <Typography variant="h6">Planet Boy API</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={4}>
              <img src="/images/project_3.png" alt="captain cosmo image" />
              <Typography variant="h6">Captain Cosmo Blog</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* SKILLS */}
      <Box>
        <Typography variant="h5">Things I Can DO</Typography>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Paper>
              <img src="/images/comet_1.svg" alt="" />
              <Typography variant="h6">Javascript</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <img src="/images/comet_2.svg" alt="" />
              <Typography variant="h6">React</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <img src="/images/comet_3.svg" alt="" />
              <Typography variant="h6">Firebase</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <img src="/images/comet_4.svg" alt="" />
              <Typography variant="h6">Flutter</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* ewan */}
      <Box marginTop="40px">
        <Typography variant="body-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          sint?
        </Typography>
      </Box>

      {/* CONTACT */}
      <Box marginTop="40px" paddingY={4} className={classes.form}>
        <Container maxWidth="xs">
          <Box>
            <Typography variant="h5">Get in Touch</Typography>
            <Typography variant="body-2">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Box>

          <Box>
            <form noValidate autoComplete="off">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Message"
                margin="normal"
                fullWidth
                multiline
                rows={5}
                defaultValue="This is a text area"
                variant="outlined"
              />
              <Button variant="contained" size="large" color="primary">
                Submit
              </Button>
            </form>
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box>
        <Typography variant="h6">Copyright 2020 Cosmo Junkie</Typography>
        <img src="/images/icon_fb.svg" alt="fb" />
        <img src="/images/icon_tw.svg" alt="tw" />
      </Box>
    </Box>
  );
}

export default mobilefirst;
