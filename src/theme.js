import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFC636',
    },
    secondary: {
      main: '#0A0B5B',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    neutral: {
      main: '#5c6ac4',
    },
    text: {
      secondary: '#DDDBFF',
    },
  },
});

export default theme;
