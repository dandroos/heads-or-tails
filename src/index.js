import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./comps/theme";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
