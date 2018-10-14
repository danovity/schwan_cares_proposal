import React from "react";
import { render } from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const theme = createMuiTheme({
  palette: {
    primary: red
  },
  spacing: {
    unit: 10
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
