import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Playfair Display",
  },
  props: {
    MuiButton: {
      variant: "contained",
    },
  },
});

export default responsiveFontSizes(theme);
