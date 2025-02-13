import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import './i18n';
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

const engine = new Styletron();

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
// create a darkTheme function to handle dark theme using createTheme


root.render(
  // <Suspense fallback={<LogoLoader />}>
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      
      <App />
    </BaseProvider>
  </StyletronProvider>
  // </Suspense>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
