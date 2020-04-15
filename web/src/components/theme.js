import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const customMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2F3F4D',
    },
    secondary: {
      main: '#588CB3',
      dark: '#2F3F4C',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    h1: {
      fontFamily: ['Rubik', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 600,
      fontSize: '3.2rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
      color: '#2F3F4D',
    },
    h2: {
      fontFamily: ['Rubik', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 600,
      fontSize: '2.3rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
      color: '#2F3F4D',
    },
    h3: {
      fontFamily: ['Rubik', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
      color: '#2F3F4D',
    },
    h4: {
      fontFamily: ['Rubik', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 300,
      fontSize: '3.4rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
      color: '#2F3F4D',
    },
    h5: {
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
  },
});

const theme = responsiveFontSizes(customMuiTheme);

export default theme;
