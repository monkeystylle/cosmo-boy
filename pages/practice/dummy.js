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

const useStyles = makeStyles(theme => {
  return {
    root: {
      background: '#0A0B5B',
      overflowX: 'hidden',
    },
    title: {
      flexGrow: 1,
    },
    contact: {
      background: '#e0e0fb',
      display: 'flex',
      flexDirection: 'column',
      paddingY: theme.spacing(2),
    },
    paperProject: {
      textAlign: 'center',
      padding: theme.spacing(2),
      display: 'flex',
    },
    minMaxContainer: {
      maxWidth: '1200px',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '90%',
    },
    marginTop: {
      marginTop: theme.spacing(4),
    },
    appBar: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    welcomeImage: {
      width: '200%',
      height: '100%',
      objectFit: 'scale-down',
    },
    bgimage: {
      background: 'url(/images/square_bg.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      padding: '40px 20px',
    },
    imageSomeProject: {
      width: '100%',
      height: 'auto',
    },
    projectText: {
      margin: 'auto 0px',
    },
    projectTextColor: {
      color: '#9994f7',
    },
    projectBox: {
      background: '#a3a4f4',
    },
    //Things i can do
    thingsIcanDoBox: {
      background: '#07083e',
      textAlign: 'center',
    },

    thingsIcanDoImage: {
      height: '80px',
      margin: '10px auto',
    },
    thingsIcanDo: {},
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
            Cosmo Funkie
          </Typography>
          <Button className={classes.appBar} color="inherit">
            <Typography variant="h6">Portfolio</Typography>
          </Button>
          <Button className={classes.appBar} color="inherit">
            <Typography variant="h6">Skills</Typography>
          </Button>
          <Button className={classes.appBar} color="inherit">
            <Typography variant="h6">Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>

      {/*WELCOME */}
      <Box mt={6} className={classes.minMaxContainer}>
        <Grid container>
          <Grid item xs={8}>
            <Typography
              color="textSecondary"
              variant="h5"
              className={classes.title}
              gutterBottom
            >
              Space Enthusiast
              <br />& JavaScript Developer
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, praesentium explicabo?
            </Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary">
                View my work
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <img
              src="/images/banner_image.png"
              alt="pic of planet"
              className={classes.welcomeImage}
            />
          </Grid>
        </Grid>
      </Box>

      {/* SOME OF MY PROJECTS */}
      <Box mt={8} className={classes.bgimage}>
        <Box className={classes.minMaxContainer}>
          <Box mb={3}>
            <Typography
              color="textSecondary"
              variant="h5"
              align="center"
              gutterBottom
            >
              Some of my Projects
            </Typography>
          </Box>

          <Grid container spacing={5} justify="center">
            {/* space race */}
            <Grid item container spacing={5}>
              <Grid item xs={6}>
                <img
                  className={classes.imageSomeProject}
                  src="/images/project_1.png"
                  alt="space race image"
                />
              </Grid>
              <Grid item xs={6} className={classes.projectText}>
                <Typography
                  className={classes.projectTextColor}
                  variant="h6"
                  color="textSecondary"
                >
                  Space Race Game
                </Typography>
              </Grid>
            </Grid>
            {/* planet boy */}
            <Grid item container spacing={5}>
              <Grid item xs={6}>
                <img
                  className={classes.imageSomeProject}
                  src="/images/project_2.png"
                  alt="planet boy image"
                />
              </Grid>
              <Grid item xs={6} className={classes.projectText}>
                <Typography
                  className={classes.projectTextColor}
                  variant="h6"
                  color="textSecondary"
                >
                  Planet Boy API
                </Typography>
              </Grid>
            </Grid>
            {/* captain cosmo */}
            <Grid item container spacing={5}>
              <Grid item item xs={6}>
                <img
                  className={classes.imageSomeProject}
                  src="/images/project_3.png"
                  alt="captain cosmo image"
                />
              </Grid>
              <Grid item item xs={6} className={classes.projectText}>
                <Typography
                  className={classes.projectTextColor}
                  variant="h6"
                  color="textSecondary"
                >
                  Captain Cosmo Blog
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* THINGS I CAN DO */}
      <Box className={classes.thingsIcanDoBox}>
        <Box className={classes.minMaxContainer}>
          <Box mt={0}>
            <Typography color="textSecondary" variant="h5">
              Things I Can DO
            </Typography>
          </Box>

          <Box my={3}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.thingsIcanDoPaper}>
                  <img src="/images/comet_1.svg" alt="" />
                  <Typography variant="h6" color="textSecondary">
                    Javascript
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.thingsIcanDoPaper}>
                  <img src="/images/comet_2.svg" alt="" />
                  <Typography variant="h6" color="textSecondary">
                    React
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.thingsIcanDoPaper}>
                  <img src="/images/comet_3.svg" alt="" />
                  <Typography variant="h6" color="textSecondary">
                    Firebase
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.thingsIcanDoPaper}>
                  <img src="/images/comet_4.svg" alt="" />
                  <Typography variant="h6" color="textSecondary">
                    Flutter
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* ewan */}
      <Box marginTop="40px" className={classes.minMaxContainer}>
        <Typography variant="body-2" color="textSecondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          sint?
        </Typography>
      </Box>

      {/* CONTACT */}
      <Box mt={6} py={4} className={classes.contact}>
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
      <Box className={classes.minMaxContainer}>
        <Typography color="textSecondary" variant="h6">
          Copyright 2020 Cosmo Junkie
        </Typography>
        <img src="/images/icon_fb.svg" alt="fb" />
        <img src="/images/icon_tw.svg" alt="tw" />
      </Box>
    </Box>
  );
}

export default mobilefirst;
