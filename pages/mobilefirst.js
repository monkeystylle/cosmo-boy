import React, { useRef } from 'react';
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
import NavDrawer from './Component/NavDrawer';

const useStyles = makeStyles(theme => {
  return {
    root: {
      background: '#0A0B5B',
      overflowX: 'hidden',
    },
    minMaxContainer: {
      maxWidth: '1200px',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '90%',
    },
    minMaxContainerAppBar: {
      maxWidth: '1200px',
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '0px',
      width: '90%',
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
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

    marginTop: {
      marginTop: theme.spacing(4),
    },
    //WELCOME
    welcomeBox: {
      [theme.breakpoints.up('md')]: {
        padding: '0px 48px',

        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    welcomeText: {
      [theme.breakpoints.up('md')]: {
        marginBottom: '24px',
      },
    },
    welcomeImage: {
      width: '200%',
      height: '100%',
      objectFit: 'scale-down',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
    },
    //SOME OF MY PROJECTS

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
      [theme.breakpoints.up('sm')]: {
        textAlign: 'center',
        marginTop: '-20px',
      },
      [theme.breakpoints.up('md')]: {},
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
      [theme.breakpoints.up('xs')]: {
        paddingTop: '64px',
        paddingBottom: '40px',
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: '64px',
        paddingBottom: '64px',
      },
    },
    thingsIcanDoPaper: {
      padding: '15px',
      background: 'rgba(0,0,0,0.2)',
      [theme.breakpoints.up('xs')]: {
        paddingTop: '8px',
        paddingBottom: '8px',
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: '32px',
        paddingBottom: '32px',
      },
      '& > img': {
        height: '80px',
        margin: '10px auto',
      },
    },
    thingsIcanDoImage: {
      height: '80px',
      margin: '10px auto',
    },
    //FOOTER
    footer: {
      textAlign: 'center',
      padding: '8px',
      [theme.breakpoints.up('sm')]: {
        padding: '24px',
      },
      '& > img': {
        margin: ' 8px 6px',
      },
    },
  };
});

function mobilefirst() {
  const classes = useStyles();
  const dateYear = new Date().getFullYear();
  //refs
  const projectsRef = useRef();
  const thingsIcanDoRef = useRef();
  const contactRef = useRef();
  //functions for section click
  function projectsClick() {
    projectsRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }
  function thingsIcanDoClick() {
    thingsIcanDoRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }
  function contactClick() {
    contactRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <Box className={classes.root}>
      {/*NAV */}
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.minMaxContainerAppBar}>
          <NavDrawer />
          <Typography variant="h6" className={classes.title}>
            Cosmo Funkie
          </Typography>
          <Button
            className={classes.appBar}
            color="inherit"
            onClick={projectsClick}
          >
            Projects
          </Button>
          <Button
            className={classes.appBar}
            color="inherit"
            onClick={thingsIcanDoClick}
          >
            Things i can do
          </Button>
          <Button
            className={classes.appBar}
            color="inherit"
            onClick={contactClick}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/*WELCOME */}
      <Box mt={6} className={classes.minMaxContainer}>
        <Grid container>
          <Grid item xs={8} sm={7}>
            <Box className={classes.welcomeBox}>
              <Box className={classes.welcomeText}>
                <Typography
                  color="textSecondary"
                  variant="h5"
                  className={classes.title}
                  gutterBottom
                >
                  Space Enthusiast
                  <br />& JavaScript Developer
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, praesentium explicabo?
                </Typography>
              </Box>
              <Box mt={2}>
                <Button variant="contained" color="primary">
                  View my work
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sm={5}>
            <img
              src="/images/banner_image.png"
              alt="pic of planet"
              className={classes.welcomeImage}
            />
          </Grid>
        </Grid>
      </Box>

      {/* SOME OF MY PROJECTS */}
      <Box mt={8} className={classes.bgimage} ref={projectsRef}>
        <Box className={classes.minMaxContainer}>
          <Box mb={3} py={{ sm: 4 }}>
            <Typography
              color="textSecondary"
              variant="h5"
              align="center"
              gutterBottom
            >
              Some of my Projects
            </Typography>
          </Box>

          <Grid
            container
            spacing={5}
            justify="center"
            className={classes.someOfMyProjectsGridBox}
          >
            {/* space race */}
            <Grid item container spacing={5} sm={6} md={4}>
              <Grid item xs={6} sm={11}>
                <img
                  className={classes.imageSomeProject}
                  src="/images/project_1.png"
                  alt="space race image"
                />
              </Grid>
              <Grid item xs={6} sm={11} className={classes.projectText}>
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
            <Grid item container spacing={5} sm={6} md={4}>
              <Grid item xs={6} sm={11}>
                <img
                  className={classes.imageSomeProject}
                  src="/images/project_2.png"
                  alt="planet boy image"
                />
              </Grid>
              <Grid item xs={6} sm={11} className={classes.projectText}>
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
            <Grid item container spacing={5} sm={6} md={4}>
              <Grid item item xs={6} sm={11}>
                <img
                  className={classes.imageSomeProject}
                  src="/images/project_3.png"
                  alt="captain cosmo image"
                />
              </Grid>
              <Grid item item xs={6} sm={11} className={classes.projectText}>
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
      <Box className={classes.thingsIcanDoBox} ref={thingsIcanDoRef}>
        <Box className={classes.minMaxContainer}>
          <Box mt={0}>
            <Typography color="textSecondary" variant="h5">
              Things I Can DO
            </Typography>
          </Box>

          <Box my={3} mt={{ xs: 4, sm: 6, md: 8 }}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={6} sm={5} md={3}>
                <Paper className={classes.thingsIcanDoPaper}>
                  <img src="/images/comet_1.svg" alt="" />
                  <Typography variant="h6" color="textSecondary">
                    Javascript
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={5} md={3}>
                <Paper className={classes.thingsIcanDoPaper}>
                  <img src="/images/comet_2.svg" alt="" />
                  <Typography variant="h6" color="textSecondary">
                    React
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={5} md={3}>
                <Paper className={classes.thingsIcanDoPaper}>
                  <img src="/images/comet_3.svg" alt="" />
                  <Typography variant="h6" color="textSecondary">
                    Firebase
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={5} md={3}>
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

      {/* CONTACT */}
      <Box py={{ xs: 4, md: 6 }} className={classes.contact} ref={contactRef}>
        <Container maxWidth="xs">
          <Box>
            <Typography variant="h5">Get in Touch</Typography>
            <Typography variant="h6">
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
              <Box mt={1}>
                <Button variant="contained" size="large" color="primary">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box className={clsx(classes.minMaxContainer, classes.footer)}>
        <Typography color="textSecondary" variant="h6">
          Copyright {dateYear} Cosmo Junkie
        </Typography>
        <img src="/images/icon_fb.svg" alt="fb" />
        <img src="/images/icon_tw.svg" alt="tw" />
      </Box>
    </Box>
  );
}

export default mobilefirst;
