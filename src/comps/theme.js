import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Playfair Display",
  },
});

export default responsiveFontSizes(theme);
