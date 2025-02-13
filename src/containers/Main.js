import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import { useTranslation } from "react-i18next";
import Header from "../components/header/Header.js";
import { AppBar, Box } from "@mui/material";
import '../../src/App.css';

export default function Main(props) {
  const theme = props.theme;
  const [t] = useTranslation();

  return (
    <>
      <BrowserRouter basename="/">
        <AppBar sx={{ backgroundColor: '#EDF9FE', height: '13%' }} position="fixed">
          <Header theme={theme} />
        </AppBar>
        <Box sx={{ flexGrow: 1, p: 0, marginTop: '5%' }}>
          <Switch>
            
            <Route
              path="/"
              exact
              render={(props) =>
                settings.isSplash ? (
                  <Splash {...props} theme={theme} />
                ) : (
                  <Home {...props} theme={theme} />
                )
              }
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={theme} />}
            />

            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} trans={t} theme={theme} />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education {...props} trans={t} theme={theme} />
              )}
            />

            <Route
              path="/contact"
              render={(props) => <Contact trans={t} {...props} theme={theme} />}
            />

            {settings.isSplash && (
              <Route
                path="/splash"
                render={(props) => <Splash {...props} theme={theme} />}
              />
            )}

            <Route
              path="/projects"
              render={(props) => <Projects trans={t}   {...props}
              theme={theme} />}
            />

            <Route
              path="*"
              render={(props) => <Error404 {...props} trans={t} theme={theme} />}
            />

          </Switch>
        </Box>
      </BrowserRouter>
    </>
  );

}
