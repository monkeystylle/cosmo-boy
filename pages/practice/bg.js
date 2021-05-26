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
import mean from '/public/images/comet_1.svg';

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundImage: `url(${mean})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100vh',
    },
  };
});

function bg() {
  const classes = useStyles;
  return <Box className={classes.root}></Box>;
}

export default bg;
