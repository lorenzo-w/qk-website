import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const workSans = {
  fontFamily: 'WorkSans',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 400,
  src: `
    local('WorkSans'),
    local('WorkSans-Regular'),
    url(/WorkSans-Regular.otf) format('otf')
  `,
};

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "WorkSans", 
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: "#80c0df",
    },
    secondary: {
      main: "#e1a8c4",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#312783",
    },
    text: {
      primary: "#fff", 
      secondary: "#222"
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: "100%"
        },
        body: {
          minHeight: "100%"
        },
        "@font-face": [workSans],
      },
    },
  },
});

export default theme;
