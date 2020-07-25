import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from "@material-ui/icons/Description";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import ComputerIcon from "@material-ui/icons/Computer";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

import ProfileImage from "../ProfileImage";

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      height: "50px",
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    marginBottom: "20px",
  },
}));

function Menu(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItemTop = [
    {
      text: "About Me",
      icon: <PersonIcon />,
    },
    {
      text: "Skills",
      icon: <ComputerIcon />,
    },
    {
      text: "Projects",
      icon: <AccountTreeIcon />,
    },
    {
      text: "Contact Me",
      icon: <MailIcon />,
    },
  ];

  const menuItemBottom = [
    {
      text: "Github",
      icon: <GitHubIcon />,
      onClick: () => {
      }

    },
    {
      text: "LinkedIn",
      icon: <LinkedInIcon />,
      onClick: () => {
        console.log('Click')
      }
    },
    {
      text: "Resume",
      icon: <DescriptionIcon />,
      onClick: () => {
        console.log('Click')
      }
    },
  ];

  const drawer = (
    <div>
      <ProfileImage />
      <Divider />
      <List>
        {menuItemTop.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemText primary={item.text} />
            <ListItemIcon>{item.icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menuItemBottom.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemText primary={item.text} onClick={item.onClick}/>
            <ListItemIcon>{item.icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h2" noWrap align="center" gutterBottom>
          {" "}
          Guido Asbun{" "}
        </Typography>
        <AboutMe />
        <Skills />
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

Menu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Menu;
