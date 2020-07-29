import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import skillsData from "../../data/skillsData";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginBottom: "20px",
    display: "flex",
    marginLeft: 12,
    marginRight: 12,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 220,
      marginRight: 12,
    },
  },
  title: {
    fontSize: 30,
    color: "secondary",
  },
  pos: {
    marginTop: 12,
  },
  divider: {
    marginBottom: "10px",
  },
  component: {
    marginLeft: "5px",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>Skills</Typography>
        <Divider className={classes.divider} />

        <Grid container>
          {skillsData.map((item, index) => (
            <Grid item key={item.title} xs={6} sm={6} md={4} lg={4} xl={2}>
              <Typography>
                <Icon className={item.icon} style={{ fontSize: 16 }} />
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Skills;
