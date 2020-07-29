import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import Contact from "./Contact";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: 12,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 1,
      marginRight: 1,
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
