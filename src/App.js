import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/layout/Menu";
import Home from "./components/layout/Home";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme/theme";
import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/projects/Projects";
import Contact from "./components/layout/Contact";
import NotFound from "./components/layout/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
            <Menu/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={AboutMe}/>
              <Route path="/skills" component={Skills}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
